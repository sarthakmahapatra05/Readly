import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Clock, User, Star, Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export function Read() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [readBooks, setReadBooks] = useState(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
        fetchBooks();
        fetchReadBooks(session.user.id);
      }
    };
    checkUser();
  }, [navigate]);

  const fetchBooks = async () => {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching books:', error);
    } else {
      setBooks(data || []);
    }
  };

  const fetchReadBooks = async (userId) => {
    const { data, error } = await supabase
      .from('user_reading_progress')
      .select('book_id')
      .eq('user_id', userId);
    
    if (error) {
      console.error('Error fetching read books:', error);
    } else {
      const readBookIds = new Set(data.map(item => item.book_id));
      setReadBooks(readBookIds);
    }
  };

  const markAsRead = async (bookId) => {
    if (!user) return;
    
    const { error } = await supabase
      .from('user_reading_progress')
      .insert({
        user_id: user.id,
        book_id: bookId
      });
    
    if (error) {
      console.error('Error marking book as read:', error);
    } else {
      setReadBooks(prev => new Set([...prev, bookId]));
    }
  };

  const categories = ["All", ...new Set(books.map(book => book.category))];
  
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Book Summaries</h1>
          <p className="text-xl text-muted-foreground">
            Discover insights from the world's best books in just minutes
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search books or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-accent transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline">{book.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-gold-highlight fill-current" />
                    <span className="text-sm text-muted-foreground">4.5</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{book.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-4 w-4" />
                  {book.author}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {book.summary}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{book.reading_time} min read</span>
                  </div>
                  <Badge variant={readBooks.has(book.id) ? "default" : "secondary"}>
                    {readBooks.has(book.id) ? "Completed" : "New"}
                  </Badge>
                </div>
                
                <Button 
                  className="w-full" 
                  variant={readBooks.has(book.id) ? "outline" : "default"}
                  onClick={() => markAsRead(book.id)}
                  disabled={readBooks.has(book.id)}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  {readBooks.has(book.id) ? "Completed" : "Mark as Read"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No books found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
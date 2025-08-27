import { useState } from "react";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

export function Read() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Self-Help", "Finance", "Productivity", "Health", "Technology", "Fiction"];

  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      summary: "Discover the power of small changes that lead to remarkable results. Learn how to build good habits and break bad ones through practical strategies backed by science.",
      duration: "1 min",
      category: "Self-Help",
      likes: 234,
      comments: 45,
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      summary: "Understand how people think about money and make financial decisions. Timeless lessons on wealth, greed, and happiness that will change your perspective.",
      duration: "1 min",
      category: "Finance",
      likes: 187,
      comments: 32,
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      summary: "Learn to focus without distraction in a hyperconnected world. Master the ability to produce at an elite level in an increasingly competitive economy.",
      duration: "1 min",
      category: "Productivity",
      likes: 156,
      comments: 28,
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      summary: "A brief history of humankind from the Stone Age to the modern age. Discover how Homo sapiens came to dominate the world through cognitive revolution.",
      duration: "1 min",
      category: "History",
      likes: 203,
      comments: 67,
    },
    {
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen Covey",
      summary: "Transform your personal and professional life with principles that will help you be more productive, focused, and fulfilled in everything you do.",
      duration: "1 min",
      category: "Self-Help",
      likes: 145,
      comments: 23,
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      summary: "Explore the two systems that drive the way we think. Understand cognitive biases and learn how to make better decisions in life and business.",
      duration: "1 min",
      category: "Psychology",
      likes: 178,
      comments: 41,
    },
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBookAction = (action, title) => {
    alert(`Please sign in to ${action} "${title}"`);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Book Summaries</h1>
          <p className="text-xl text-muted-foreground">
            Discover insights from the world's best books in just 1 minute
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
            <BookCard
              key={book.title}
              {...book}
              onRead={() => handleBookAction("read", book.title)}
              onListen={() => handleBookAction("listen to", book.title)}
              onWishlist={() => handleBookAction("wishlist", book.title)}
              onComment={() => handleBookAction("comment on", book.title)}
              onLike={() => handleBookAction("like", book.title)}
            />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No books found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredBooks.length > 0 && (
          <div className="text-center">
            <Button variant="elegant">
              Load More Books
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
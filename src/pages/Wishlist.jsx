import { useState } from "react";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Trash2 } from "lucide-react";

export function Wishlist() {
  const [wishlistBooks, setWishlistBooks] = useState([
    {
      title: "The 4-Hour Workweek",
      author: "Tim Ferriss",
      summary: "Learn how to escape the 9-5 grind and live life on your own terms. Discover strategies for automation, elimination, and liberation in work and life.",
      duration: "1 min",
      category: "Productivity",
      likes: 189,
      comments: 34,
      isWishlisted: true,
      dateAdded: "2 days ago"
    },
    {
      title: "Meditations",
      author: "Marcus Aurelius",
      summary: "Timeless wisdom from one of history's greatest philosophers. Personal reflections on virtue, mortality, and the nature of existence.",
      duration: "1 min",
      category: "Philosophy",
      likes: 156,
      comments: 28,
      isWishlisted: true,
      dateAdded: "1 week ago"
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      summary: "Revolutionary approach to building successful businesses through validated learning, scientific experimentation, and iterative product releases.",
      duration: "1 min",
      category: "Business",
      likes: 203,
      comments: 45,
      isWishlisted: true,
      dateAdded: "2 weeks ago"
    }
  ]);

  const handleBookAction = (action, title) => {
    if (action === "remove from wishlist") {
      setWishlistBooks(prev => prev.filter(book => book.title !== title));
    } else {
      alert(`Please sign in to ${action} "${title}"`);
    }
  };

  const handleRemoveFromWishlist = (title) => {
    setWishlistBooks(prev => prev.filter(book => book.title !== title));
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-accent fill-current" />
            <h1 className="text-4xl font-bold text-foreground">My Wishlist</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Books you've saved to read later • {wishlistBooks.length} {wishlistBooks.length === 1 ? 'book' : 'books'}
          </p>
        </div>

        {wishlistBooks.length > 0 ? (
          <>
            {/* Wishlist Actions */}
            <div className="mb-6 flex flex-wrap gap-4">
              <Button variant="hero">
                <BookOpen className="h-4 w-4 mr-2" />
                Read All Summaries
              </Button>
              <Button variant="elegant">
                Export Wishlist
              </Button>
              <Button variant="outline" className="text-destructive hover:text-destructive">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Wishlist
              </Button>
            </div>

            {/* Books Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistBooks.map((book) => (
                <div key={book.title} className="relative">
                  <BookCard
                    {...book}
                    onRead={() => handleBookAction("read", book.title)}
                    onListen={() => handleBookAction("listen to", book.title)}
                    onWishlist={() => handleRemoveFromWishlist(book.title)}
                    onComment={() => handleBookAction("comment on", book.title)}
                    onLike={() => handleBookAction("like", book.title)}
                  />
                  <div className="absolute top-4 right-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveFromWishlist(book.title)}
                      className="bg-background/80 hover:bg-background text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground text-center">
                    Added {book.dateAdded}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <Card className="text-center py-16">
            <CardContent className="space-y-6">
              <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-12 w-12 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Your wishlist is empty</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Start exploring our book summaries and save the ones you want to read later by clicking the heart icon.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" asChild>
                  <a href="/read">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse Books
                  </a>
                </Button>
                <Button variant="elegant" asChild>
                  <a href="/write">
                    Share a Summary
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Wishlist Tips */}
        {wishlistBooks.length > 0 && (
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">💡 Wishlist Tips</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium mb-1">Organize your reading</p>
                  <p>Use your wishlist to keep track of summaries you want to read when you have time.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Share with friends</p>
                  <p>Export your wishlist and share your reading recommendations with others.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
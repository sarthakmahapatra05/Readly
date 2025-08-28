import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, PenTool, Users, Headphones, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-library.jpg";
import { BookCard } from "@/components/BookCard";

export function Home() {
  const featuredBooks = [
    {
      id: 1,
      title: "The Art of Reading",
      author: "Jane Smith",
      summary: "Discover the profound joy and transformative power of reading...",
      duration: "3 min read",
      likes: 124,
      comments: 18,
      category: "Self-Help"
    },
    {
      id: 2,
      title: "Digital Minimalism",
      author: "Cal Newport",
      summary: "A philosophy of technology use in which you focus your online time...",
      duration: "5 min read",
      likes: 89,
      comments: 25,
      category: "Technology"
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      summary: "An easy and proven way to build good habits and break bad ones...",
      duration: "4 min read",
      likes: 156,
      comments: 32,
      category: "Productivity"
    }
  ];

  const handleBookAction = (action, bookId) => {
    // Placeholder for book actions
    console.log(`${action} book ${bookId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-accent">Readly</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95">
            Discover amazing book summaries, share your insights, and connect with fellow readers 
            in our vibrant community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/read">Start Reading</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/write">Share Your Summary</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Why Choose Readly?
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Transform your reading experience with our curated summaries and vibrant community
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">1-Minute Summaries</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get the essence of any book in just one minute. Perfect for busy schedules and quick learning.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Community Driven</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join thousands of readers sharing insights, reviews, and recommendations from around the world.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Headphones className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Audio & Text</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Choose how you want to consume content - read the summary or listen to our audio versions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Book Summaries</h2>
              <p className="text-xl text-muted-foreground">
                Discover the most popular and trending book summaries in our community
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link to="/read">View All Books</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onRead={() => handleBookAction('read', book.id)}
                onListen={() => handleBookAction('listen', book.id)}
                onComment={() => handleBookAction('comment', book.id)}
                onLike={() => handleBookAction('like', book.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Transform Your Reading?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join our community today and discover a new way to learn, grow, and connect through books.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/auth">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-library.jpg";
import { BookCard } from "@/components/BookCard";

export function Home() {
  const featuredBooks = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      summary: "Discover the power of small changes that lead to remarkable results. Learn how to build good habits and break bad ones.",
      duration: "1 min",
      category: "Self-Help",
      likes: 234,
      comments: 45,
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      summary: "Understand how people think about money and make financial decisions. Timeless lessons on wealth, greed, and happiness.",
      duration: "1 min",
      category: "Finance",
      likes: 187,
      comments: 32,
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      summary: "Learn to focus without distraction in a hyperconnected world. Master the ability to produce at an elite level.",
      duration: "1 min",
      category: "Productivity",
      likes: 156,
      comments: 28,
    },
  ];

  const handleBookAction = (action, title) => {
    // In a real app, these would navigate or show auth modals
    alert(`Please sign in to ${action} "${title}"`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-gold-highlight">Readly</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Discover the world's best books in just 1 minute. Community-driven summaries
            that transform how you learn and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/read">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Reading
              </Button>
            </Link>
            <Link to="/write">
              <Button variant="elegant" size="lg" className="text-lg px-8 py-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                Share Your Summary
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-parchment">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Readly?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your reading experience with bite-sized wisdom from the world's best books
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/30 transition-colors">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">1-Minute Summaries</h3>
                <p className="text-muted-foreground">
                  Get the key insights from bestselling books in just 60 seconds
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/30 transition-colors">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Community Driven</h3>
                <p className="text-muted-foreground">
                  Summaries created by readers, for readers. Share your insights too
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/30 transition-colors">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Audio & Text</h3>
                <p className="text-muted-foreground">
                  Choose how you want to consume content - read or listen
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Book Summaries
            </h2>
            <p className="text-xl text-muted-foreground">
              Start your journey with these popular summaries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBooks.map((book) => (
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

          <div className="text-center mt-12">
            <Link to="/read">
              <Button variant="hero" size="lg">
                Explore All Books
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
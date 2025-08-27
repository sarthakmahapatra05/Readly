import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { PenTool, BookOpen, Upload, Eye, Heart, MessageCircle } from "lucide-react";

export function Write() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    summary: "",
    keyTakeaways: "",
  });

  const userBooks = [
    {
      title: "The Minimalist Entrepreneur",
      author: "Sahil Lavingia",
      category: "Business",
      likes: 23,
      comments: 8,
      views: 156,
      dateAdded: "2 days ago"
    },
    {
      title: "Digital Minimalism",
      author: "Cal Newport", 
      category: "Technology",
      likes: 45,
      comments: 12,
      views: 234,
      dateAdded: "1 week ago"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Please sign in to submit your book summary");
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Share Your Book Summary</h1>
          <p className="text-xl text-muted-foreground">
            Help others discover great books by sharing your 1-minute summary
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Submit Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PenTool className="h-5 w-5 text-accent" />
                Create New Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Book Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter the book title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    placeholder="Enter the author's name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="e.g., Self-Help, Business, Fiction"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="summary">1-Minute Summary</Label>
                  <Textarea
                    id="summary"
                    name="summary"
                    value={formData.summary}
                    onChange={handleInputChange}
                    placeholder="Write a compelling 1-minute summary that captures the book's main ideas..."
                    rows={6}
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Aim for 150-200 words for a perfect 1-minute read
                  </p>
                </div>

                <div>
                  <Label htmlFor="keyTakeaways">Key Takeaways (Optional)</Label>
                  <Textarea
                    id="keyTakeaways"
                    name="keyTakeaways"
                    value={formData.keyTakeaways}
                    onChange={handleInputChange}
                    placeholder="List 3-5 key takeaways or actionable insights..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit" variant="hero" className="flex-1">
                    <Upload className="h-4 w-4 mr-2" />
                    Submit Summary
                  </Button>
                  <Button type="button" variant="elegant">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* User's Books */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-accent" />
                  Your Contributions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userBooks.map((book, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-foreground">{book.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {book.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">by {book.author}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {book.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {book.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            {book.comments}
                          </div>
                        </div>
                        
                        <p className="text-xs text-muted-foreground">Added {book.dateAdded}</p>
                      </div>
                    </div>
                  ))}
                  
                  {userBooks.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">
                        You haven't shared any book summaries yet. Start by creating your first one!
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Guidelines */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Writing Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Keep summaries concise and engaging (150-200 words)</li>
                  <li>• Focus on the most important insights and takeaways</li>
                  <li>• Use clear, simple language that anyone can understand</li>
                  <li>• Include practical examples when possible</li>
                  <li>• Be respectful and avoid spoilers for fiction books</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
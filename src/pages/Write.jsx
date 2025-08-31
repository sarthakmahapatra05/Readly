import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { PenTool, BookOpen, Send, Eye, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export function Write() {
  const [formData, setFormData] = useState({
    bookTitle: "",
    summary: ""
  });
  const [user, setUser] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userSummaries, setUserSummaries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
        fetchUserSummaries(session.user.id);
      }
    };
    checkUser();
  }, [navigate]);

  const fetchUserSummaries = async (userId) => {
    const { data, error } = await supabase
      .from('user_summaries')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching user summaries:', error);
    } else {
      setUserSummaries(data || []);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    
    setIsSubmitting(true);
    const { error } = await supabase
      .from('user_summaries')
      .insert({
        user_id: user.id,
        book_title: formData.bookTitle,
        summary_content: formData.summary
      });
    
    if (error) {
      console.error('Error submitting summary:', error);
      alert("Error submitting summary. Please try again.");
    } else {
      alert("Thank you for your contribution!");
      setFormData({ bookTitle: "", summary: "" });
      fetchUserSummaries(user.id);
    }
    setIsSubmitting(false);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Share Your Book Summary</h1>
          <p className="text-xl text-muted-foreground">
            Help others discover great books by sharing your insights
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
                  <Label htmlFor="bookTitle">Book Title</Label>
                  <Input
                    id="bookTitle"
                    value={formData.bookTitle}
                    onChange={(e) => handleChange("bookTitle", e.target.value)}
                    placeholder="Enter the book title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="summary">Your Summary</Label>
                  <Textarea
                    id="summary"
                    value={formData.summary}
                    onChange={(e) => handleChange("summary", e.target.value)}
                    placeholder="Write your book summary here..."
                    rows={8}
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Share the key insights and takeaways from this book
                  </p>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Submitting..." : "Submit Summary"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* User's Summaries */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-accent" />
                  Your Contributions ({userSummaries.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userSummaries.map((summary) => (
                    <div key={summary.id} className="p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors">
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">{summary.book_title}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {summary.summary_content}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Added {new Date(summary.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {userSummaries.length === 0 && (
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
                  <li>• Focus on the most important insights and takeaways</li>
                  <li>• Use clear, simple language that anyone can understand</li>
                  <li>• Include practical examples when possible</li>
                  <li>• Be respectful and avoid spoilers for fiction books</li>
                  <li>• Share what made this book valuable to you</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
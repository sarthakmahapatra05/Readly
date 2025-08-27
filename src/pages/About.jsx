import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Heart, BookOpen, Users } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Readly</h1>
          <p className="text-xl text-muted-foreground">
            Connecting readers through the power of shared knowledge
          </p>
        </div>

        {/* Owner Section */}
        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Meet the Founder</h2>
                  <h3 className="text-xl text-accent font-semibold mb-4">Sarthak Mahapatra</h3>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-accent" />
                      <span>sarthakmahapatra303@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-accent" />
                      <span>+91 9438826474</span>
                    </div>
                  </div>
                </div>

                <Button variant="hero" className="w-fit">
                  <Mail className="h-4 w-4 mr-2" />
                  Get in Touch
                </Button>
              </div>
              
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Photo will be updated soon
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission Section */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Heart className="h-6 w-6 text-accent" />
              Our Mission
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="mb-4">
                Readly was born from a simple yet powerful belief: knowledge should be accessible, 
                digestible, and shareable. In our fast-paced world, finding time to read entire books 
                can be challenging, but the wisdom within them shouldn't be lost.
              </p>
              <p className="mb-4">
                Our platform bridges this gap by creating a community where readers distill the 
                essence of great books into 1-minute summaries. Whether you're a busy professional, 
                a student, or someone who loves learning, Readly helps you discover new ideas and 
                perspectives efficiently.
              </p>
              <p>
                We believe that when knowledge is shared, it multiplies. Every summary on our platform 
                represents hours of reading condensed into actionable insights, creating a ripple effect 
                of learning that benefits our entire community.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Knowledge Sharing</h3>
              <p className="text-sm text-muted-foreground">
                Transform complex ideas into accessible 1-minute summaries
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Community Driven</h3>
              <p className="text-sm text-muted-foreground">
                Built by readers, for readers, fostering a culture of learning
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Passion for Learning</h3>
              <p className="text-sm text-muted-foreground">
                Making knowledge accessible to everyone, everywhere
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-accent">Quality First</h3>
                <p className="text-muted-foreground">
                  Every summary is crafted with care to ensure accuracy and value for our readers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-accent">Community Focus</h3>
                <p className="text-muted-foreground">
                  We're building more than a platform; we're fostering a community of lifelong learners.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-accent">Accessibility</h3>
                <p className="text-muted-foreground">
                  Knowledge should be available to everyone, regardless of time constraints or resources.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-accent">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously evolve to provide the best reading and learning experience.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
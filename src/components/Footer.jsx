import { BookOpen, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold text-primary">Readly</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover the world's best books in just 1 minute. Community-driven summaries 
              that transform how you learn and grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/read" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link to="/write" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Write Summary
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Popular Categories</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Self-Help</li>
              <li className="text-muted-foreground text-sm">Business</li>
              <li className="text-muted-foreground text-sm">Psychology</li>
              <li className="text-muted-foreground text-sm">Productivity</li>
              <li className="text-muted-foreground text-sm">Finance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Details</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">sarthakmahapatra303@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">+91 9438826474</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Readly. Made with <Heart className="inline h-4 w-4 text-accent fill-current mx-1" /> by Sarthak Mahapatra
            </p>
            
            <div className="flex gap-6 text-sm">
              <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
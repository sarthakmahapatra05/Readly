import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Headphones, Heart, MessageCircle, ThumbsUp, Clock } from "lucide-react";

export function BookCard({
  title,
  author,
  summary,
  duration,
  category,
  likes,
  comments,
  isWishlisted = false,
  onRead,
  onListen,
  onWishlist,
  onComment,
  onLike,
}) {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-parchment">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Clock className="h-3 w-3" />
                {duration}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">by {author}</p>
          </div>

          {/* Summary */}
          <p className="text-sm text-foreground/80 line-clamp-3 leading-relaxed">
            {summary}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-3 w-3" />
              {likes}
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-3 w-3" />
              {comments}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 space-y-3">
        {/* Main actions */}
        <div className="flex gap-2 w-full">
          <Button
            variant="book"
            className="flex-1"
            onClick={onRead}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Read
          </Button>
          <Button
            variant="elegant"
            className="flex-1"
            onClick={onListen}
          >
            <Headphones className="h-4 w-4 mr-2" />
            Listen
          </Button>
        </div>

        {/* Secondary actions */}
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onLike}
              className="text-muted-foreground hover:text-accent"
            >
              <ThumbsUp className="h-4 w-4 mr-1" />
              Like
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onComment}
              className="text-muted-foreground hover:text-accent"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              Comment
            </Button>
          </div>
          
          <Button
            variant={isWishlisted ? "wishlist" : "ghost"}
            size="sm"
            onClick={onWishlist}
            className={isWishlisted ? "" : "text-muted-foreground hover:text-accent"}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
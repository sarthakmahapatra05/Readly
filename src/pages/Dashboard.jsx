import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, PenTool, Award, Target, Trophy, Star, Calendar, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalReads: 0,
    totalWrites: 0,
    currentStreak: 7,
    totalPoints: 0,
    rank: "Bronze Reader",
    nextRank: "Silver Reader",
    pointsToNext: 550
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
        fetchUserStats(session.user.id);
      }
    };
    checkUser();
  }, [navigate]);

  const fetchUserStats = async (userId) => {
    try {
      // Fetch reading progress
      const { data: readingData } = await supabase
        .from('user_reading_progress')
        .select('*')
        .eq('user_id', userId);

      // Fetch written summaries
      const { data: writingData } = await supabase
        .from('user_summaries')
        .select('*')
        .eq('user_id', userId);

      const totalReads = readingData?.length || 0;
      const totalWrites = writingData?.length || 0;
      const totalPoints = (totalReads * 10) + (totalWrites * 25);

      setStats(prev => ({
        ...prev,
        totalReads,
        totalWrites,
        totalPoints
      }));
    } catch (error) {
      console.error('Error fetching user stats:', error);
    }
  };

  // Badges data with dynamic progress
  const badges = [
    {
      id: 1,
      name: "First Steps Reader",
      description: "Read your first book summary",
      icon: BookOpen,
      earned: stats.totalReads >= 1,
      progress: Math.min(stats.totalReads * 100, 100),
      category: "Reading"
    },
    {
      id: 2,
      name: "Speed Reader",
      description: "Read 10 book summaries",
      icon: TrendingUp,
      earned: stats.totalReads >= 10,
      progress: Math.min((stats.totalReads / 10) * 100, 100),
      category: "Reading"
    },
    {
      id: 3,
      name: "Book Explorer",
      description: "Read summaries from 5 different categories",
      icon: Target,
      earned: false,
      progress: 60,
      category: "Reading"
    },
    {
      id: 4,
      name: "Community Writer",
      description: "Write your first book summary",
      icon: PenTool,
      earned: stats.totalWrites >= 1,
      progress: Math.min(stats.totalWrites * 100, 100),
      category: "Writing"
    },
    {
      id: 5,
      name: "Prolific Writer",
      description: "Write 5 book summaries",
      icon: Star,
      earned: stats.totalWrites >= 5,
      progress: Math.min((stats.totalWrites / 5) * 100, 100),
      category: "Writing"
    },
    {
      id: 6,
      name: "Monthly Reader",
      description: "Read every day for a month",
      icon: Calendar,
      earned: false,
      progress: 23,
      category: "Streaks"
    },
    {
      id: 7,
      name: "Reading Champion",
      description: "Read 50 book summaries",
      icon: Trophy,
      earned: stats.totalReads >= 50,
      progress: Math.min((stats.totalReads / 50) * 100, 100),
      category: "Reading"
    }
  ];


  const recentActivity = [
    { id: 1, type: "read", title: "Atomic Habits", time: "2 hours ago" },
    { id: 2, type: "write", title: "The Psychology of Money", time: "1 day ago" },
    { id: 3, type: "badge", title: "Speed Reader badge earned", time: "2 days ago" },
    { id: 4, type: "read", title: "Deep Work", time: "3 days ago" },
  ];

  const earnedBadges = badges.filter(badge => badge.earned);
  const inProgressBadges = badges.filter(badge => !badge.earned);

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          Welcome back, {user?.user_metadata?.first_name || "Reader"}!
        </h1>
        <p className="text-xl text-muted-foreground">
          Track your reading journey and celebrate your achievements
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl font-bold text-accent">{stats.totalReads}</CardTitle>
            <CardDescription>Books Read</CardDescription>
          </CardHeader>
          <CardContent>
            <BookOpen className="h-8 w-8 text-accent mx-auto" />
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl font-bold text-primary">{stats.totalWrites}</CardTitle>
            <CardDescription>Summaries Written</CardDescription>
          </CardHeader>
          <CardContent>
            <PenTool className="h-8 w-8 text-primary mx-auto" />
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl font-bold text-destructive">{stats.currentStreak}</CardTitle>
            <CardDescription>Day Streak</CardDescription>
          </CardHeader>
          <CardContent>
            <Target className="h-8 w-8 text-destructive mx-auto" />
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl font-bold text-gold-highlight">{stats.totalPoints}</CardTitle>
            <CardDescription>Total Points</CardDescription>
          </CardHeader>
          <CardContent>
            <Trophy className="h-8 w-8 text-gold-highlight mx-auto" />
          </CardContent>
        </Card>
      </div>

      {/* Progress to Next Rank */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-6 w-6 text-accent" />
            Current Rank: {stats.rank}
          </CardTitle>
          <CardDescription>
            {stats.pointsToNext - stats.totalPoints} points to reach {stats.nextRank}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={(stats.totalPoints / stats.pointsToNext) * 100} className="h-3" />
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="badges" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="badges" className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-gold-highlight" />
              Earned Badges ({earnedBadges.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {earnedBadges.map((badge) => (
                <Card key={badge.id} className="border border-accent/30 bg-accent/5">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <badge.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{badge.name}</CardTitle>
                    <CardDescription>{badge.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="default" className="bg-accent text-accent-foreground">
                      Earned
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-muted-foreground" />
              In Progress ({inProgressBadges.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inProgressBadges.map((badge) => (
                <Card key={badge.id} className="border border-muted">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                      <badge.icon className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{badge.name}</CardTitle>
                    <CardDescription>{badge.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Progress value={badge.progress} className="h-2" />
                    <p className="text-sm text-muted-foreground text-center">
                      {badge.progress}% complete
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Reading Progress</CardTitle>
                <CardDescription>Your reading journey this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Monthly Goal (20 books)</span>
                    <span>{stats.totalReads}/20</span>
                  </div>
                  <Progress value={(stats.totalReads / 20) * 100} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current Streak</span>
                    <span>{stats.currentStreak} days</span>
                  </div>
                  <Progress value={(stats.currentStreak / 30) * 100} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Writing Progress</CardTitle>
                <CardDescription>Your contribution to the community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Summaries Written</span>
                    <span>{stats.totalWrites}</span>
                  </div>
                  <Progress value={(stats.totalWrites / 5) * 100} />
                </div>
                <div className="text-center pt-4">
                  <Button variant="outline" className="w-full">
                    Write Your Next Summary
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions on Readly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                      {activity.type === "read" && <BookOpen className="h-5 w-5" />}
                      {activity.type === "write" && <PenTool className="h-5 w-5" />}
                      {activity.type === "badge" && <Award className="h-5 w-5" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
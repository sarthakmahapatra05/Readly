import { BookOpen, PenTool, Info, Mail, LogIn, UserPlus, Heart } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Read", path: "/read", icon: BookOpen },
    { name: "Write", path: "/write", icon: PenTool },
    { name: "Wishlist", path: "/wishlist", icon: Heart },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path) => currentPath === path;
  const isExpanded = navItems.some((item) => isActive(item.path));
  const getNavCls = ({ isActive }) =>
    isActive ? "bg-accent text-accent-foreground font-medium" : "hover:bg-accent/50";

  return (
    <Sidebar
      className={collapsed ? "w-14" : "w-64"}
      collapsible
    >
      <SidebarContent>
        {/* Header */}
        <div className="flex items-center justify-center p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-accent" />
            {!collapsed && <span className="text-xl font-bold text-primary">Readly</span>}
          </div>
        </div>

        <SidebarGroup open={isExpanded}>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.path} 
                      end 
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.name}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Auth buttons */}
        {!collapsed && (
          <div className="mt-auto p-4 border-t border-border space-y-2">
            <Button variant="default" className="w-full">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button variant="outline" className="w-full">
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
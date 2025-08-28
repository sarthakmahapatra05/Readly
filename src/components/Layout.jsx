import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { AppSidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { SidebarProvider } from "@/components/ui/sidebar";

export function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("readly-dark-mode");
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("readly-dark-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <SidebarProvider collapsedWidth={56}>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <Navbar
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
          />
          
          <main className="flex-1">
            {children}
          </main>
          
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
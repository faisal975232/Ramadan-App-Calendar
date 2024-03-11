import { ThemeProvider } from "@/components/theme-provider"; 
import { Outlet } from "react-router-dom";
import React from "react";
import { AppHeader } from "./Header";

export default function AppLayout() {
    return (
        <div className="min-h-screen bg-background font-sans antialiased">
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <AppHeader />
                <div className="flex flex-shrink-0">
                    <main className="w-full">
                        <aside className="w-full sticky top-0" style={{ zIndex: "998" }}>
                            {" "}
                        </aside>
                        <Outlet />
                    </main>
                </div>
            </ThemeProvider>
        </div>
    );
}

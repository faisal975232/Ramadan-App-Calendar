import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { SunMedium, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { setTheme, theme } = useTheme();


    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === 'light' ?
                <SunMedium />
                :
                <Moon />
            }


            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Outlet } from "react-router-dom";

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
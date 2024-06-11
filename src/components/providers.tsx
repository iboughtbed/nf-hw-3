"use client";

import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

import { TooltipProvider } from "~/components/ui/tooltip";
import { api } from "~/lib/api";
import type { User } from "~/types";

type Theme = "light" | "dark";

type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextProps | null>(null);

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used withing a <ThemeProvider />");
  }

  return context;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme") as Theme;
      return theme ?? "light";
    } else {
      return "light";
    }
  });

  React.useEffect(() => {
    const d = document.documentElement;

    if (currentTheme === "dark") {
      d.classList.add("dark");
      d.style.colorScheme = "dark";
    } else {
      d.classList.remove("dark");
      d.style.colorScheme = "light";
    }
  }, [currentTheme]);

  function setTheme(theme: Theme) {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
      <AuthProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </AuthProvider>
    </ThemeContext.Provider>
  );
}

/* Auth Context Provider */

type AuthContextProps = {
  user: User | null;
  token: string | null;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = React.createContext<AuthContextProps | null>(null);

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used withing a <AuthProvider />");
  }

  return context;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const savedToken = localStorage.getItem("token");
      const savedUser = localStorage.getItem("user");
      setToken(savedToken);

      if (savedUser) {
        setUser(JSON.parse(savedUser) as User);
      }
    }
  }, []);

  async function signIn(username: string, password: string) {
    const { data: user } = await api.post<User & { token: string }>(
      "/auth/login",
      {
        username,
        password,
      },
    );

    setUser(user);
    setToken(user.token);
    localStorage.setItem("token", user.token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  function signOut() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

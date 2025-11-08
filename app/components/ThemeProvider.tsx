"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
  attribute?: "class" | "data-theme" | "data-mode";
  defaultTheme?: string;
  enableSystem?: boolean;
  storageKey?: string;
  disableTransitionOnChange?: boolean;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}


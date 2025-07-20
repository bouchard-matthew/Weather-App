"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { CssBaseline } from "@mui/material";
import { AlertNotifications } from "Components/AlertNotifications";
import { Header } from "Components/Header";
import { useFetchWeather } from "Hooks/useFetchWeather";
import { useCurrentTime } from "Hooks/useCurrentTime";
import { useCurrentPath } from "Hooks/useCurrentPath";
import { useLatLon } from "Hooks/useLatLon";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useLatLon();
  useFetchWeather();
  useCurrentTime();

  return (
    <html lang="en">
      <body className={`${inter.className} reset-padding`}> 
        <CssBaseline />
        <Header />
        {useCurrentPath() != "/alerts" && <AlertNotifications />}
        {children}
      </body>
    </html>
  );
}

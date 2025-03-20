import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./(admin)/_components/Sidebar";
import { Toaster } from "sonner";
import { UserProvider } from "./_context/UserContext";
import { FoodProvider } from "./_context/FoodContext";
import { CategoryProvider } from "./_context/CategoryContext";
import { OrderProvider } from "./_context/OrderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <UserProvider>
          <CategoryProvider>
            <FoodProvider>
              <OrderProvider>
                {children}
                <Toaster />
              </OrderProvider>
            </FoodProvider>
          </CategoryProvider>
        </UserProvider>
      </body>
    </html>
  );
}

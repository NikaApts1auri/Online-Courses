// app/layout.tsx
import "./globals.css";
import Header from "../shared/components/layout/Header";
import Footer from "../shared/components/layout/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "../features/auth/context/authContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Online Courses",
  description: "E-learning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col justify-between bg-white text-gray-900`}
      >
        <AuthProvider>
          <Header />
          <main className="flex-`grow` flex justify-center items-center ">
            {children}
          </main>
          <Footer />
        </AuthProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Vortex } from "@/components/ui/vortex";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhinav N B",
  description: "Webdev, Tech Enthusiast, and a Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'bg-black'}>
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}

          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >{children}
        </Vortex>
      </body>
    </html>
  );
}

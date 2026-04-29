import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reach4Life — A Journey App for Youth",
  description: "Built for Biblica. For every young person still asking: Who am I?",
  openGraph: {
    title: "Reach4Life",
    description: "A digital discipleship journey for the next generation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

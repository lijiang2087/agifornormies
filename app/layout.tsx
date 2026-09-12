import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGI for Normies — a map from data to AGI",
  description:
    "A plain-English causal chain for understanding how we got from data to AGI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

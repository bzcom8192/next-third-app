import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "American Share by Supanat",
  description: "เว็บคำนวนเงินที่ต้องแชร์กัน",
  keywords: ["เว็บคำนวนเงินที่ต้องแชร์กัน", "แชร์เงิน", "แชร์เงินกัน", "คำนวนเงิน", "คำนวนเงินที่ต้องแชร์กัน"],
  authors: [{ name: "Supanat", url: "https://github.com/bzcom8192" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${prompt.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

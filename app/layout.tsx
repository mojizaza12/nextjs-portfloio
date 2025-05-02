import type { Metadata } from "next";
import { Kanit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Analytics } from '@vercel/analytics/next';

const KanitSans = Kanit({
  variable: "--font-kanit",
  weight: "100",
  subsets: ["thai"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bannawat Portfolio",
  description: "Created by Moji Dev",
  openGraph: {
    title: "Bannawat Portfolio",
    description: "Created by Moji Dev",
    url: "https://my-portfloio.bannawat.store/",
    type: "website",
    siteName: "Bannawat Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://my-portfloio.bannawat.store/bannerog.png",
        width: 1200,
        height: 630,
        alt: "Bannawat Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bannawat Portfolio",
    description: "Created by Moji Dev",
    images: ["https://my-portfloio.bannawat.store/bannerog.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${KanitSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

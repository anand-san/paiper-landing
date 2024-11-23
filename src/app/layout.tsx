import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import { CSPostHogProvider } from "./providers/posthog";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://paiper.app"),
  title: "Paiper App - Your Ultimate Document Intelligence Hub",
  description:
    "Transform your document archive into a strategic advantage. Discover patterns, identify contract risks, manage your documents effortlessly with AI categorization and bring your documents from your cloud.",
  keywords:
    "Paiper App, Document Intelligence, AI, Document Management, Predictive Analytics, Contract Risk Management, AI Categorization, Cloud Document Management",
  authors: [{ name: "Paiper Team", url: "https://paiper.app" }],
  robots: "index, follow",
  openGraph: {
    title: "Paiper App - Your Ultimate Document Intelligence Hub",
    description:
      "Transform your document archive into a strategic advantage. Discover patterns, identify contract risks effortlessly, manage your documents effortlessly with AI categorization and bring your documents from your cloud.",
    url: "https://paiperapp.com",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
        alt: "Paiper App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@paiperapp",
    title: "Paiper App - Your Ultimate Document Intelligence Hub",
    description:
      "Transform your document archive into a strategic advantage. Discover patterns, identify contract risks effortlessly, manage your documents effortlessly with AI categorization and bring your documents from your cloud.",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
        alt: "Paiper App",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CSPostHogProvider>{children}</CSPostHogProvider>
        <Toaster richColors expand position="top-center" />
      </body>
      {googleAnalyticsId && <GoogleAnalytics gaId={googleAnalyticsId} />}
    </html>
  );
}

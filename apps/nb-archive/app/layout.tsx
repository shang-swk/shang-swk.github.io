import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: "NB Archive | New Balance 9XX & 1000 Collaboration Archive",
    template: "%s | NB Archive"
  },
  description:
    "An independent archive for important New Balance 9XX and 1000 series collaborations.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "NB Archive",
    description: "New Balance 9XX & 1000 Collaboration Archive",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">跳至主要内容</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

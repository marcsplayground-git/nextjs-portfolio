import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Marc Jason Yu - Software Engineer",
  description: "Software Engineer — Power Platform + Azure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <iframe
          src="https://copilotstudio.microsoft.com/environments/72a87b98-5832-ead9-a67c-bd68f643c519/bots/copilots_header_contoso_agent1/webchat?_version_=2"
          width={100}
          height={100}
        ></iframe>
        <Footer />
      </body>
    </html>
  );
}

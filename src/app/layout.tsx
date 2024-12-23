import type { Metadata } from "next";
import "@/styles/globals.css";
import AppWrapper from "@/components/misc/AppWrapper";

export const metadata: Metadata = {
  title: "Diverse Temp Prototype",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}

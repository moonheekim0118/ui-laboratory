import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "UI laboratory",
  description: "build some interesting UI stuff here",
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
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Design Portfolio",
  description: "My graphic design portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

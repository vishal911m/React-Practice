import './globals.css'

export const metadata = {
  title: "User Dashboard",
  description: "Simple Next.js Dashboard"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next'
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: 'Next Tutorial | Kewa Code',
    template: '%s | Kewa Code'
  },
  description: "Next.js 14 Course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen">
        <header className="bg-blue-400 p-4 text-center text-white">Cabeçalho da aplicação</header>
        {children}
        <footer className="bg-purple-800 absolute bottom-0 w-full p-4 text-center text-white">Rodapé da aplicação</footer>
      </body>
    </html>
  );
}

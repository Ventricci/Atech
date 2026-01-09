import type { Metadata } from "next";
import { Poppins, Orbitron } from "next/font/google";
import { MUIProvider } from "./providers";
import "./styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "ATECH - Inovação em Tecnologia",
  description: "Movendo seu negócio em direção ao futuro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${orbitron.variable} antialiased`}
      >
        <MUIProvider>{children}</MUIProvider>
      </body>
    </html>
  );
}

import Menu from "@/Components/Menu/Menu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CP5 Front End",
  description: "Worlds in Collision",
};

export const viewport = {
  width:"device-width",
  initial_scale:1.0,
  colorScheme:"dark"
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}

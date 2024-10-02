import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "CP5 Front End",
  description: "Worlds in Collision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}

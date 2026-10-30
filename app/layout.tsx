import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AJANTA — The Walls That Remember | An Immersive Journey Through the Mahajanaka Jataka",
  description:
    "An interactive archaeological museum and cinematic 3D graphic novel experience depicting the Mahajanaka Jataka fresco of Ajanta Cave 1. Assignment CO2: Cave Paintings Storyboard.",
  keywords: [
    "Ajanta Caves",
    "Mahajanaka Jataka",
    "Cave 1 Murals",
    "Buddhist Art",
    "3D Digital Museum",
    "Ancient Indian Painting",
    "Graphic Novel",
    "Indian Art History",
  ],
  authors: [
    { name: "Ganta Sai Prakash Reddy (RA2411003010004)" },
    { name: "Nishant Ranjan (RA2411003010008)" },
    { name: "G Vishal (RA2411003010010)" },
    { name: "Nidhi Nayana (RA2411003010018)" },
    { name: "Nithin Chakravarthy (RA2411003010033)" },
    { name: "Cave Paintings Storyboard Team — CO2" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-parchment antialiased selection:bg-sienna selection:text-white">
        <div className="cave-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

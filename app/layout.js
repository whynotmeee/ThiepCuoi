import "./globals.css";
import { Cormorant_Garamond, Great_Vibes, Jost } from "next/font/google";
import config from "@/data/config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greatvibes",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  title: `Thiệp cưới ${config.groom.name} & ${config.bride.name}`,
  description: config.intro,
  openGraph: {
    title: `Thiệp cưới ${config.groom.name} & ${config.bride.name}`,
    description: config.intro,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#b76e79",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body
        className={`${cormorant.variable} ${greatVibes.variable} ${jost.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

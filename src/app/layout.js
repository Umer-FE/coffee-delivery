import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Providers from "./Providers";
import Header from "../components/Header/Header";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "Coffee Delivery",
  description: "The perfect coffee for any time of day",
  icons: {
    icon: "/images/fav-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}

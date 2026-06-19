import "./globals.css";
import MotionProvider from "@/components/motion/MotionProvider";
import { DashboardProvider } from "@/context/DashboardContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>
          <DashboardProvider>{children}</DashboardProvider>
        </MotionProvider>
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "HOLYCLUB",
  description: "거룩한 소비로 복음을 전하는 운동",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

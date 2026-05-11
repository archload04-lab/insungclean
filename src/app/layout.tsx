import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "인성클린 - 배관청소 전문업체 | 24시간 긴급출동",
  description: "15년 경력의 배관청소 전문업체 인성클린입니다. 주방·욕실·하수구 막힘, 하수관 청소, 옥상 방수 등 24시간 긴급출동 서비스를 제공합니다.",
  keywords: "배관청소, 하수구막힘, 변기막힘, 긴급출동, 배관전문, 인성클린",
  openGraph: {
    title: "인성클린 - 배관청소 전문업체",
    description: "24시간 긴급출동 배관청소 전문업체",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

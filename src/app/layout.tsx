import "./globals.css";

export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>
        <header className="bg-slate-700 text-white text-center">header!</header>
        {children}
      </body>
    </html>
  );
};

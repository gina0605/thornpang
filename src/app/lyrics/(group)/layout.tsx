import { Background } from "@/components/lyrics-detail/background";
import { Title } from "@/components/lyrics-detail/title";

export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <main className="w-screen h-full-body flex font-sunbatang justify-center relative overflow-hidden text-black">
    <Background />
    <div className="w-full flex flex-col items-center z-30">
      <Title />
      {children}
    </div>
  </main>
);

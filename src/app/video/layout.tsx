export default ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => (
  <main className="w-full min-h-full-body flex flex-col items-center">
    {children}
    {modal}
  </main>
);

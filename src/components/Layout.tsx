interface LayoutProps {
  children: React.ReactNode;
}
function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className="w-full flex justify-center h-full bg-white min-h-screen p-4">
      <div className="w-full md:w-1/2 text-black">{children}</div>
    </div>
  );
}

export default Layout;

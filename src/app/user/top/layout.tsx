// containers
import Top from "@_containers/user/top/header";

export default function TopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Top></Top>
      <div>{children}</div>
    </div>
  );
}

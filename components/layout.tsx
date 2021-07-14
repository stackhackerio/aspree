import { ReactNode } from "react";
import Meta from "./meta";
import Header from "./header";
import Footer from "./footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <Header />
      <main>
        <div className="container mx-auto items-center">{children}</div>
      </main>
      <Footer />
    </>
  );
}

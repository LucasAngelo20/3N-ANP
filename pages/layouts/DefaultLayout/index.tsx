import Footer from "@/pages/components/Footer";
import Navbar from "@/pages/components/Navbar";
import Head from "next/head";

export default function DefaultLayout({ children }: any) {
  return (
    <>
      <Head>
        <link href="" />
      </Head>
      <Navbar>
        <main className="main-container">{children}</main>
      </Navbar>
      <Footer />
    </>
  );
}

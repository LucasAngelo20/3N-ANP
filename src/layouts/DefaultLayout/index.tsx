import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
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
    </>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import DefaultLayout from "./layouts/DefaultLayout";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import theme from "@/lib/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Boilerplate</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=decide-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

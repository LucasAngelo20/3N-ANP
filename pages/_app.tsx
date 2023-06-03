import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import theme from "@/lib/theme";
import DefaultLayout from "@/src/layouts/DefaultLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
        <ThemeProvider theme={theme}>
      <Head>
        <title>Next.js Boilerplate</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=decide-width"
          />
      </Head>
          <DefaultLayout>
        <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
  );
}

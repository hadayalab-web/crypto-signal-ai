import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/btc-bias.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import {Toaster} from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThirdwebProvider desiredChainId={ChainId.Goerli}>
  <Component {...pageProps} />
  <Toaster />
  </ThirdwebProvider>
  )
}

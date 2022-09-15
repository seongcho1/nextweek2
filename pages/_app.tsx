import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE === 'true') return (<>정기 점검중입니다.</>);
  return <Component {...pageProps} />
}

export default MyApp

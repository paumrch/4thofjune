import { AppProps } from 'next/app'
import '../styles/index.css'
import { NextSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  
  return ( <>
    <NextSeo
        title="4thofJune"
        titleTemplate="4thofJune"
        defaultTitle="4thofJune"
        description="Escrito por Pau March."
        canonical="https://www.4thofjune.com/"
        openGraph={{
          url: "https://www.4thofjune.com/",
          title: "4thofJune",
          description: "Escrito por Pau March.",
          images: [
            {
              url: "../images/featured_4thofjune.png",
              width: 1200,
              height: 630,
              alt: "4thofJune",
            },
          ],
        }}
        twitter={{
          handle: "@paumrch",
          site: "@paumrch",
          cardType: "summary_large_image",
        }}
      />

    <Component {...pageProps} />
    </>)

    }

export default MyApp



  
import Head from 'next/head'
import {
  HOME_OG_IMAGE_URL,
  WEBSITE_NAME,
  WEBSITE_DESCRIPTION
} from '@/lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta
        name="viewport"
        content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={WEBSITE_DESCRIPTION} />
      <meta property="og:title" content={WEBSITE_NAME} />
      <meta property="og:description" content={WEBSITE_DESCRIPTION} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

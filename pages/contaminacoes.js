import Layout from '@/components/layout'
import Head from 'next/head'
import Header from '@/components/header'
import { getContaminations } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import PostModal from '@/components/post-modal'
import { WEBSITE_NAME } from '@/lib/constants'

export default function Contaminacoes({ page }) {
  return (
    <>
      <Layout>
        <Head>
          <title>
            {page.title} - {WEBSITE_NAME}
          </title>
        </Head>
        <Header />
        <PostModal item={page} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = await getContaminations()
  const content = await markdownToHtml(page.contamination.content || '')

  return {
    props: {
      page: {
        ...page,
        content
      }
    }
  }
}

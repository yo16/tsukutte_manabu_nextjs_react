import Head from 'next/head'
import { useRouter } from 'next/router'

// サイトに関する情報
import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle, pageDesc }){
    // タイトル
    const _title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle

    // ページの説明
    const desc = pageDesc ?? siteDesc

    // ページのURL
    const router = useRouter()
    const url = `${siteUrl}${router.asPath}`

    return (
        <Head>
            <title>{_title}</title>
            <meta property="og:title" content={_title} />

            <meta name="description" content={desc} />
            <meta property="og:description" content={desc } />

            <link rel="canonical" href={url} />
            <meta property="og:url" content={url} />
        </Head>
    )
}
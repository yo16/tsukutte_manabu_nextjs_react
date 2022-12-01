import Head from 'next/head'

// サイトに関する情報
import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle, pageDesc }){
    // タイトル
    const _title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle

    // ページの説明
    const desc = pageDesc ?? siteDesc

    return (
        <Head>
            <title>{_title}</title>
            <meta property="og:title" content={_title} />

            <meta name="description" content={desc} />
            <meta property="og:description" content={desc } />
        </Head>
    )
}
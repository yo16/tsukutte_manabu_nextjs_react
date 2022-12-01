import Head from 'next/head'

// サイトに関する情報
import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle }){
    const _title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
    return (
        <Head>
            <title>{_title}</title>
            <meta property="og:title" content={_title} />
        </Head>
    )
}
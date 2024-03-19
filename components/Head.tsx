import HeadRaw from 'next/head'
import theme from '../styles/theme'

function Head() {
    return (
        <HeadRaw>
            <title>Innovate Construtora</title>
            <meta name="language" content="pt-BR"/>
            <link rel="canonical" href={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta property="og:title" content="Innovate Construtora"/>
            <meta property="og:description" content="É hora de conhecer seu novo apê"/>
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta property="og:site_name" content="Innovate Construtora"/>
            <meta property="og:type" content="website"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta name="twitter:title" content="Innovate Construtora"/>
            <meta name="twitter:description" content="É hora de conhecer seu novo apê"/>
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta name="description" content="É hora de conhecer seu novo apê"/>
            <meta name="theme-color" content={theme.primary}/>
        </HeadRaw>
    )
}

export default Head
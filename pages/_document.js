import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';

export default class TheSoundDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8678599667192601" crossOrigin="anonymous"></script>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                    <link href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&family=Palanquin:wght@100;200;300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&family=Staatliches&display=swap" rel="stylesheet"></link>
                    
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script async strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}/>
                    <script
                        id="gtag-init"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                            });
                        `,
                        }}
                    />
                    {/* Auto-placement - Google Adsense */}
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8678599667192601" crossOrigin="anonymous"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
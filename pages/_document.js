import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';
import * as snippet from '@segment/snippet';

const { SEGMENT_WRITE_KEY, NODE_ENV } = process.env;
export default class TheSoundDocument extends Document {
    renderSegmentSnippet() {
        const options = {
            apiKey: SEGMENT_WRITE_KEY,
            page: true
        };

        if (NODE_ENV === 'development') {
            return snippet.max(options);
        }

        return snippet.min(options);
    }

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <script dangerouslySetInnerHTML={{ __html: this.renderSegmentSnippet() }} />
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8678599667192601" crossOrigin="anonymous"></script>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                    <link href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&family=Palanquin:wght@100;200;300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&family=Staatliches&display=swap" rel="stylesheet"></link>

                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script async strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
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
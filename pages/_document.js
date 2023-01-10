import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(){
    return (
        <Html className="m-0 overflow-x-hidden scroll-smooth p-0">
                <title>Daniel Xu</title>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                </Head>
                <body className="transition-300 relative m-0 min-h-screen overflow-hidden overflow-x-hidden bg-black p-0">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
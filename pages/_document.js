import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(){
    return (
        <Html className="m-0 overflow-x-hidden scroll-smooth p-0">
                <Head />
                <body className="transition-300 relative m-0 min-h-screen overflow-hidden overflow-x-hidden bg-black p-0">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
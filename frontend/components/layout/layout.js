import Head from "next/head"
import Header from "./header"
import Footer from "./footer"
import { Handlee } from "next/font/google";

const handlee = Handlee({ subsets: ['latin'], weight: '400' });

const Layout = ({
    title,
    children,
    showFooter = true
}) => {
    return (
        <div className={`${handlee.className} body`}>
            <Head><title>{title}</title></Head>
            <Header />
            <main>{children}</main>
            {showFooter && <Footer />}
        </div>
    )
}

export default Layout
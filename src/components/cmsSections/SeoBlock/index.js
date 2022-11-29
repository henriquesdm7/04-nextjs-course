import Head from "next/head";

export default function SeoBlock(props) {
    return (
        <Head>
            <title>{props.title}</title>
        </Head>
    )
}

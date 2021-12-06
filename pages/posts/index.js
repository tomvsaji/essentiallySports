// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Head from "next/head";
import Link from "next/link"
import Layout from "../../components/layout"

export default function FirstPage() {
   return(
     <Layout>
       <Head>
         <title>ES Careers Page</title>
       </Head>
       <h1>First Page</h1>
       <h2>
         <Link href="/">
           <a>Back to Home</a>
         </Link>
       </h2>
     </Layout>
   )
}

import Head from "next/head"
import Header from "./header"

export default function Layout({children, title='', desciption=''}) {
  return (
    <>
    <Head>
       <title>{`GymEq - ${title}`}</title>
    </Head>
    <Header/>
    
      {children}
    </>
  )
}

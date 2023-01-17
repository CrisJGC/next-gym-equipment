import Link from "next/link";
import Layout from "@/components/layout";

export default function about() {
  return (
    <>
      <Layout
        title={'about'}
        desciption={"about us"}
      >
        <div>about</div>
        <Link href="/">Home</Link>
      </Layout>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={"All the equipment you didn't know you needed"}
      >
        <h1>Helo Next </h1>
      </Layout>
    </>
  )
}

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 py-2">
      <Head>
        <title>Online Graphic Design Tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center text-slate-50">
        <p className="text text-2xl font-medium">
          🎨 Online Graphic Design Tool
        </p>
        <Link href={'/app'}>
          <button className="mt-5 rounded bg-emerald-400 px-4 py-2 text-lg font-medium tracking-wide text-white transition-all duration-300 hover:scale-105">
            Open Editor
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home

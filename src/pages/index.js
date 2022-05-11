import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Enfusion | Brad Vader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center">
        <h1 className="mx-auto text-4xl font-bold">
          Enfusion Home Page - Brad Vader Heading
        </h1>
      </main>

    </div>
  )
}

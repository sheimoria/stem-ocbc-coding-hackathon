import Head from 'next/head'
import Header from 'components/Header'

import type { NextPage } from 'next'

const data = [
  { title: 'General', text: '220 posts' },
  { title: 'Savings Plans', text: '110 posts' },
  { title: 'Education', text: '22 posts' },
  { title: 'Housing', text: '60 posts' },
  { title: 'Investment', text: '72 posts' },
  { title: 'FAQ', text: '87 posts' }
]

const Forum: NextPage = () => {
  return (
    <>
      <Head>
        <title>OCBC Bank</title>
      </Head>
      <Header />
      <main className="flex flex-col max-w-7xl gap-8 mx-auto w-full">
        <h2>Threads</h2>
        <div className="flex flex-col gap-8">
          {data.map((article) => (
            <div
              key={article.title}
              className="rounded flex flex-col p-8 flex-1 bg-white overflow-hidden"
            >
              <h3>{article.title}</h3>
              <span className="text-gray-400">{article.text}</span>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Forum

import Head from 'next/head'
import Header from 'components/Header'
import Image from 'next/image'
import type { NextPage } from 'next'

const data = [
  { title: 'asdf', text: 'asdf', image: '/loans.jpg' },
  { title: 'asdf', text: 'asdf', image: '/loans.jpg' },
  { title: 'asdf', text: 'asdf', image: '/loans.jpg' },
  { title: 'asdf', text: 'asdf', image: '/loans.jpg' },
  { title: 'asdf', text: 'asdf', image: '/loans.jpg' },
  { title: 'asdf', text: 'asdf', image: '/loans.jpg' }
]

const News: NextPage = () => {
  return (
    <>
      <Head>
        <title>OCBC Bank</title>
      </Head>
      <Header />
      <main className="flex flex-col max-w-7xl gap-8 mx-auto w-full">
        <h2>Top Financial News</h2>
        <div className="grid grid-cols-3 gap-8">
          {data.map((article) => (
            <div
              key={article.title}
              className="rounded flex flex-col flex-1 bg-white overflow-hidden"
            >
              <div className="relative w-full h-48 bg-gray-200 p-8 text-gray-400 justify-center items-center">
                <Image
                  src={article.image}
                  alt={article.image}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="p-8">
                <h3>{article.title}</h3>
                <p>{article.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default News

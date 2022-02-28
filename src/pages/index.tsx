import Head from 'next/head'
import Header from 'components/Header'
import Image from 'next/image'
import type { NextPage } from 'next'

const data = [
  {
    title: 'BP quits Russia in up to US$25 billion hit after Ukraine invasion',
    text: "LONDON: BP is abandoning its stake in Russian oil giant Rosneft in an abrupt and costly end to three decades of operating in the energy-rich country, marking the most significant move yet by a Western company in response to Moscow's invasion of Ukraine.",
    image: '/bp.jpg',
    url: 'https://www.channelnewsasia.com/business/bp-quits-russia-us25-billion-hit-after-ukraine-invasion-2524201'
  },
  {
    title: 'Russian SWIFT Ban Drives Early ‘Risk-Off’ Mode',
    text: 'Global investors are bracing Sunday for more wild swings in asset prices after Western nations announced a new stream of harsh sanctions designed to implement financial pain on Russia for its invasion of Ukraine. The punishing new sanctions include blocking some backs from the SWIFT international payments system.',
    image: '/swift.jpeg',
    url: 'https://sg.finance.yahoo.com/news/russian-swift-ban-drives-early-210427674.html'
  },
  {
    title:
      'Russia’s Invasion Of Ukraine Has Sent Energy Prices Soaring—Here’s How High Oil Could Rise',
    text: 'Oil prices have continued to skyrocket this week—with Brent crude briefly rising above $100 per barrel for the first time since 2014—as Russia launched its invasion of Ukraine, and although prices moderated somewhat Friday, experts warn that it could rise to more than $130 amid the fallout from the conflict.',
    image: '/russia.jpg',
    url: 'https://www.forbes.com/sites/sergeiklebnikov/2022/02/25/russias-invasion-of-ukraine-has-sent-energy-prices-soaring-heres-how-high-oil-could-rise/?sh=45a51be33f25'
  }
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
                  objectFit="cover"
                />
              </div>
              <div className="p-8 gap-2 flex flex-col">
                <h3 className="line-clamp-2">{article.title}</h3>
                <p className="line-clamp-3">{article.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default News

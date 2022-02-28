import { useTheme } from 'next-themes'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-red-600 flex items-center justify-between w-full px-8 py-6">
      <h1 className="text-white font-medium">OCBC</h1>
      {/* Desktop */}
      <nav className="gap-8 items-center flex">
        <a
          href="/"
          className="text-white font-medium transition-colors hover:text-gray-100 dark:text-gray-100 dark:hover:text-white"
        >
          News
        </a>
        <a
          href="/comparisons"
          className="text-white font-medium transition-colors hover:text-gray-100 dark:text-gray-100 dark:hover:text-white"
        >
          Comparisons
        </a>
        <a
          href="/investments"
          className="text-white font-medium transition-colors hover:text-gray-100 dark:text-gray-100 dark:hover:text-white"
        >
          Investments
        </a>
        <a
          href="#education"
          className="text-white font-medium transition-colors hover:text-gray-100 dark:text-gray-100 dark:hover:text-white"
        >
          Forum
        </a>
      </nav>
    </header>
  )
}

export default Header

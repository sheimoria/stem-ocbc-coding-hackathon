import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-red-600 flex items-center justify-between w-full px-8 py-6">
      <h1 className="text-white font-medium">OCBC</h1>
      {/* Desktop */}
      <nav className="gap-8 items-center flex">
        <Link href="/">
          <a className="text-white font-medium transition-colors hover:text-gray-100 dark:text-gray-100 dark:hover:text-white">
            News
          </a>
        </Link>
        <Link href="/comparisons">
          <a className="text-white font-medium transition-colors hover:text-gray-100 dark:text-gray-100 dark:hover:text-white">
            Comparisons
          </a>
        </Link>
        <Link href="/investments">
          <a className="text-white font-medium transition-colors hover:text-gray-100 dark:text-gray-100 dark:hover:text-white">
            Investments
          </a>
        </Link>
        <Link href="/forum">
          <a className="text-white font-medium transition-colors hover:text-gray-100 dark:text-gray-100 dark:hover:text-white">
            Forum
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header

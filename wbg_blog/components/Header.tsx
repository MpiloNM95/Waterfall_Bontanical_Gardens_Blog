import Link from 'next/link';

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <h1>Waterfall Botanical Garden Logo</h1>
        </div>

        <div>
            <Link href="/" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#4285f4] flex items-center rounded-full text-center"
            >
                Social Media Links
            </Link>
        </div>
    </header>
  )
}

export default Header
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-[rgba(0,0,0,0.8)] backdrop-blur-md text-white fixed w-full z-50">
        <div className="max-w-[1024px] mx-auto px-4">
          <ul className="flex items-center justify-between h-12 text-sm">
            <li>
              <a href="/" className="nav-link">
                <svg height="44" viewBox="0 0 14 44" width="14" className="h-12 w-4">
                  <path d="M13.0729 17.6825C12.1553 18.6634 10.8472 19.3725 9.47697 19.2737C9.28859 17.9915 9.85859 16.6247 10.6986 15.7487C11.5798 14.7677 12.9944 14.1105 14.2466 14C14.4112 15.3061 13.9908 16.6481 13.0729 17.6825ZM14.2232 19.4774C12.1985 19.3787 10.4235 20.6845 9.47697 20.6845C8.50729 20.6845 7.01542 19.5372 5.37307 19.5372C3.05151 19.5611 0.5361 21.2622 0.5361 24.7296C0.5361 26.3789 0.91547 28.0777 1.67463 29.7765C2.24463 31.0584 3.94775 34.0772 5.72275 34.0533C7.03072 34.0295 7.93588 33.1297 9.61275 33.1297C11.2662 33.1297 12.1025 34.0533 13.5007 34.0533C15.2991 34.0295 16.8123 31.3039 17.3589 29.9981C17.9992 28.4476 18.2344 26.9209 18.2579 26.8221C18.2344 26.7989 14.1294 25.2721 14.1294 21.0406C14.1294 17.3382 17.4761 15.6633 17.6173 15.5646C16.2495 13.5788 14.0585 13.4563 13.3697 13.4086C11.3919 13.2145 9.6361 14.7915 8.71463 14.7915C7.74494 14.7915 6.27932 13.4801 4.5361 13.4801L14.2232 19.4774Z" fill="currentColor"/>
                </svg>
              </a>
            </li>
            <li><a href="#" className="nav-link">Store</a></li>
            <li><a href="#" className="nav-link">Mac</a></li>
            <li><a href="#" className="nav-link">iPad</a></li>
            <li><a href="#" className="nav-link">iPhone</a></li>
            <li><a href="#" className="nav-link">Watch</a></li>
            <li><a href="#" className="nav-link">Vision</a></li>
            <li><a href="#" className="nav-link">AirPods</a></li>
            <li><a href="#" className="nav-link">TV & Home</a></li>
            <li><a href="#" className="nav-link">Entertainment</a></li>
            <li><a href="#" className="nav-link">Accessories</a></li>
            <li><a href="#" className="nav-link">Support</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section - iPhone 15 Pro */}
      <section className="hero-section pt-12" style={{
        backgroundImage: 'url(/iphone15pro.jpg)',
        backgroundColor: '#000'
      }}>
        <h1 className="text-5xl font-semibold mb-1 text-white">iPhone 15 Pro</h1>
        <h2 className="text-2xl mb-3 text-white">Titanium. So strong. So light. So Pro.</h2>
        <div className="space-x-8 text-xl">
          <a href="#" className="product-link">Learn more &gt;</a>
          <a href="#" className="product-link">Buy &gt;</a>
        </div>
      </section>

      {/* iPhone 15 Section */}
      <section className="hero-section" style={{
        backgroundImage: 'url(/iphone15.jpg)',
        backgroundColor: '#fbfbfd'
      }}>
        <h1 className="text-5xl font-semibold mb-1">iPhone 15</h1>
        <h2 className="text-2xl mb-3">New camera. New design. Newphoria.</h2>
        <div className="space-x-8 text-xl">
          <a href="#" className="product-link">Learn more &gt;</a>
          <a href="#" className="product-link">Buy &gt;</a>
        </div>
      </section>

      {/* Grid Section */}
      <div className="grid-section">
        {/* MacBook Pro */}
        <div className="promo-tile bg-black text-white" style={{
          backgroundImage: 'url(/macbook-pro.jpg)'
        }}>
          <h3 className="text-4xl font-semibold mb-1">MacBook Pro</h3>
          <p className="text-xl mb-3">Mind-blowing. Head-turning.</p>
          <div className="space-x-4 text-lg">
            <a href="#" className="product-link">Learn more &gt;</a>
            <a href="#" className="product-link">Buy &gt;</a>
          </div>
        </div>

        {/* Apple Watch */}
        <div className="promo-tile" style={{
          backgroundImage: 'url(/watch.jpg)',
          backgroundColor: '#fbfbfd'
        }}>
          <h3 className="text-4xl font-semibold mb-1">WATCH</h3>
          <h4 className="text-xl text-[#c31618]">SERIES 9</h4>
          <p className="text-xl mb-3">Smarter. Brighter. Mightier.</p>
          <div className="space-x-4 text-lg">
            <a href="#" className="product-link">Learn more &gt;</a>
            <a href="#" className="product-link">Buy &gt;</a>
          </div>
        </div>

        {/* iPad */}
        <div className="promo-tile" style={{
          backgroundImage: 'url(/ipad.jpg)',
          backgroundColor: '#fbfbfd'
        }}>
          <h3 className="text-4xl font-semibold mb-1">iPad</h3>
          <p className="text-xl mb-3">Lovable. Drawable. Magical.</p>
          <div className="space-x-4 text-lg">
            <a href="#" className="product-link">Learn more &gt;</a>
            <a href="#" className="product-link">Buy &gt;</a>
          </div>
        </div>

        {/* Apple Vision Pro */}
        <div className="promo-tile bg-black text-white" style={{
          backgroundImage: 'url(/vision-pro.jpg)'
        }}>
          <h3 className="text-4xl font-semibold mb-1">Vision Pro</h3>
          <p className="text-xl mb-3">Welcome to the era of spatial computing.</p>
          <div className="space-x-4 text-lg">
            <a href="#" className="product-link">Learn more &gt;</a>
            <a href="#" className="product-link">Order now &gt;</a>
          </div>
        </div>
      </div>
    </main>
  )
} 
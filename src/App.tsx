import { useState } from 'react'
import {
  ArrowRight,
  Cat,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  Sparkles,
  Star,
  User,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SlideTabs } from '@/components/ui/slide-tabs'
import StackSpread from '@/components/ui/stack-spread'
import { categoryCards } from '@/data/products'

const navItems = ['Dogs', 'Cats', 'Birds', 'Small Pets', 'Food', 'Toys', 'Grooming', 'Deals']

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#edf4ff] text-[#0f172a]">
      <header className="sticky top-0 z-50 border-b border-[#d7e9ff] bg-[#edf4ff]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1f6fe5] shadow-[0_12px_28px_rgba(31,111,229,0.25)]" aria-label="PawMart cat logo">
              <Cat size={24} strokeWidth={2.8} color="#ffffff" fill="none" />
            </div>
            <div className="text-xl font-black tracking-[-0.06em] text-[#ff8a3d]">PawMart</div>
          </div>

          <nav className="hidden lg:block">
            <SlideTabs items={navItems} />
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2 rounded-full border border-[#cfe0ff] bg-white px-3 py-2 text-sm text-[#234d7d] shadow-sm">
              <Search size={16} />
              <input
                type="text"
                className="w-32 border-0 bg-transparent text-sm outline-none placeholder:text-[#5c7aaa]"
                placeholder="Search"
                aria-label="Search pet essentials"
              />
            </div>
            <button type="button" className="rounded-full border border-[#cfe0ff] bg-white p-2.5 text-[#123d74] shadow-sm hover:bg-[#f5faff]" aria-label="Wishlist">
              <Heart size={17} />
            </button>
            <button type="button" className="relative rounded-full border border-[#cfe0ff] bg-white p-2.5 text-[#123d74] shadow-sm hover:bg-[#f5faff]" aria-label="View cart">
              <ShoppingCart size={17} />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ff8a3d] px-1 text-[10px] font-bold text-white">2</span>
            </button>
            <button type="button" className="rounded-full border border-[#cfe0ff] bg-white p-2.5 text-[#123d74] shadow-sm hover:bg-[#f5faff]" aria-label="Account">
              <User size={17} />
            </button>
          </div>

          <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-full border border-[#cfe0ff] bg-white p-2.5 text-[#123d74] shadow-sm lg:hidden" aria-label="Toggle navigation menu">
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#d7e9ff] bg-white/90 px-4 py-3 lg:hidden">
            <div className="space-y-2 text-sm font-medium text-[#234d7d]">
              {navItems.map((item) => (
                <button key={item} type="button" className="block w-full rounded-xl px-3 py-2 text-left hover:bg-[#edf4ff]">
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-3 sm:px-6 lg:px-8">
        <section className="rounded-[32px] pb-2">
          <StackSpread bgColor="#edf4ff" textColor="#0f172a" showScrollHint />
        </section>

        <section className="mt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f6fe5]">Shop by pet</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.06em] sm:text-4xl">Categories to shop from</h2>
            </div>
            <Button type="button" variant="outline" className="hidden sm:inline-flex">
              Browse all
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categoryCards.map((card) => (
              <article key={card.name} className="group relative overflow-hidden rounded-[28px] bg-white shadow-[0_20px_50px_rgba(19,63,121,0.08)]">
                <img src={card.image} alt={card.name} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#0f172a]/25" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.05em]">{card.name}</h3>
                      <p className="mt-1 max-w-[16rem] text-sm text-white/80">{card.description}</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition group-hover:bg-[#ff8a3d]/70">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-[#cfe0ff] bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f6fe5]">Why pet parents love us</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:text-4xl">Breezy shopping, happy tails.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                'Fast delivery across India',
                'Gently selected essentials',
                'Premium grooming & wellness',
                'Easy returns and trusted support',
              ].map((item) => (
                <div key={item} className="rounded-[20px] border border-[#dfeeff] bg-[#f7fbff] p-4 text-sm font-medium text-[#234d7d]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#ffd9bc] bg-[#fef8f3] p-6 sm:p-8">
            <div className="flex items-center gap-2 text-[#1f6fe5]">
              <Sparkles size={18} />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">New arrivals</span>
            </div>
            <h3 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#0f172a]">Fresh finds for curious companions</h3>
            <p className="mt-3 text-sm leading-7 text-[#334155]">
              Thoughtful toys, premium treats, and cozy comfort upgrades for every playful routine.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="button" className="gap-2">Shop essentials <ArrowRight size={17} /></Button>
              <Button type="button" variant="outline">See deals</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d7e9ff] bg-[#f5faff]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1f6fe5]" aria-label="PawMart cat logo">
                <Cat size={24} strokeWidth={2.8} color="#ffffff" fill="none" />
              </div>
              <div className="text-2xl font-black tracking-[-0.06em] text-[#ff8a3d]">PawMart</div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#44658b]">
              Premium care, playful essentials, and thoughtful shopping for the pets you love most.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#234d7d]">Shop</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#44658b]">
              {['Dogs', 'Cats', 'Birds', 'Small Pets', 'New Arrivals', 'Deals'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#234d7d]">Help</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#44658b]">
              {['Contact Us', 'Shipping', 'Returns', 'FAQs', 'Track Order'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#234d7d]">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#44658b]">
              {['About PawMart', 'Careers', 'Privacy', 'Terms'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {[Star, Heart, ShoppingCart].map((Icon, index) => (
                <button key={index} type="button" aria-label="Social media" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7e9ff] bg-white text-[#123d74] hover:bg-[#edf4ff]">
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

type TabPosition = {
  left: number
  width: number
  opacity: number
}

type SlideTabsProps = {
  items: string[]
  onSelect?: (item: string, index: number) => void
}

export function SlideTabs({ items, onSelect }: SlideTabsProps) {
  const [position, setPosition] = useState<TabPosition>({ left: 0, width: 0, opacity: 0 })
  const [selected, setSelected] = useState(0)
  const tabsRef = useRef<Array<HTMLLIElement | null>>([])

  const moveCursor = (tab: HTMLLIElement | null) => {
    if (!tab) return

    setPosition({
      left: tab.offsetLeft,
      width: tab.getBoundingClientRect().width,
      opacity: 1,
    })
  }

  useEffect(() => {
    moveCursor(tabsRef.current[selected])
  }, [selected])

  useEffect(() => {
    const updateCursor = () => moveCursor(tabsRef.current[selected])
    window.addEventListener('resize', updateCursor)
    return () => window.removeEventListener('resize', updateCursor)
  }, [selected])

  return (
    <ul
      onMouseLeave={() => moveCursor(tabsRef.current[selected])}
      className="relative flex w-fit max-w-full overflow-x-auto rounded-full border-2 border-[#0f172a] bg-white p-1 shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
      aria-label="Shop categories"
    >
      {items.map((item, index) => (
        <li
          key={item}
          ref={(tab) => {
            tabsRef.current[index] = tab
          }}
          onClick={() => {
            setSelected(index)
            onSelect?.(item, index)
          }}
          onMouseEnter={() => moveCursor(tabsRef.current[index])}
          className="relative z-10 block shrink-0 cursor-pointer px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#1f6fe5] md:px-4 md:py-2.5"
          role="tab"
          aria-selected={selected === index}
        >
          {item}
        </li>
      ))}

      <motion.li
        aria-hidden="true"
        animate={position}
        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
        className="pointer-events-none absolute top-1 z-0 h-[calc(100%-8px)] rounded-full bg-[#ff8a3d]"
      />
    </ul>
  )
}

import Image from 'next/image'
import { Hero, Reviews } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Reviews />
    </main>
  )
}

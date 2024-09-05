import { content } from '@/features/why-us-page/data/hardcoded-content'
import { Hero, Section } from '@/features/why-us-page/ui'
import type { Metadata } from 'next'
import Link from 'next/link'
 
export const metadata: Metadata = {
  title: 'Why Us',
  description: 'Why Us Page',
}
const WhyUsPage = () => {
  return (
    <div className='w-[1420px] mx-auto'>
      <Hero />

      <Section 
        content={content[0]} 
        listMark='decimal' 
        titleSize='h2' imagePosition='left'
        bg='blue'
      />
      <Section 
        content={content[1]} 
        listMark='disc' 
        titleSize='h3' imagePosition='right'
      />
      <Section 
        content={content[2]} 
        listMark='disc' 
        titleSize='h4' imagePosition='left'
      />

      <Link href={'!#'} title='English for Tech B1-B2'>
        <img src="/images/no-image.jpg" alt="English for Tech B1-B2" />
      </Link>
    </div>
  )
}

export default WhyUsPage
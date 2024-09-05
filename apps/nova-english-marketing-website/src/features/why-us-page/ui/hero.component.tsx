import { Title } from "@/components"
import { heroText } from "../data/hardcoded-content"

export const Hero = () => {
  return (
    <section className="py-20">
      <Title 
        size="h1" 
        text={heroText.title}
        className="mx-auto mb-16 text-5xl font-bold tracking-wide text-center" 
      />

      <div className="flex">
        <div className="flex flex-col justify-between">
          <p className="text-5xl pb-6"> 
            {heroText.text1} 
          </p>

          <p className="text-right max-w-[1400px] text-4xl px-32">      
            {heroText.text2}
          </p>
        </div>
        <img 
          src="images/man-and-woman-in-gadgets.svg" 
          alt="language school" 
          className="w-1/4 h-full"
        />
      </div>

     
    </section>
  )
}

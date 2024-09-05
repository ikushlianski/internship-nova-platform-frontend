import { Title } from "@/components"
import type { WhyUsPageContent } from "../types/whyUsPageContent.type"
import { cn } from "@/lib/utils"

interface Props {
  content: WhyUsPageContent,
  listMark: "decimal" | "disc"
  titleSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  imagePosition: "left" | "right"
  bg?: "white" | "blue"
}

export const Section = ({content, listMark, titleSize, imagePosition, bg="white"}: Props) => {
  return (
    <section className={cn(" py-20 rounded-2xl", bg === "blue" ? "bg-[#EDF8FF]": 'bg-[#FFFFFF]')}>
      <div className="max-w-7xl px-2 mx-auto">
        <Title 
          size={titleSize} 
          text={content.title} 
          className="text-center mb-10"/>

        {content.shortDescription && (
          <p className="text-3xl font-semibold mb-10">
            {content.shortDescription}
          </p>
        )}

        <div className={cn("flex gap-20", imagePosition === "left" && "flex-row-reverse")}>
          <ul 
            role='list' 
            className={cn("flex flex-col gap-2 text-2xl font-semibold", 
            listMark === "decimal" ? "list-decimal marker:font-medium marker:text-[#00B5D8] marker:text-3xl" : "list-image-[url(/images/list-mark-disk.svg)]")}>

            {content.descriptionItems.map((item, index)=>(
              <li 
              key={index}
              className="pl-2"
              >
                {item}
              </li>
            ))}             
          </ul>

          <img 
            src={content.image} 
            alt={content.title} 
            className='w-1/4 h-full'/>
        </div>
      </div>
    </section>
  )
}
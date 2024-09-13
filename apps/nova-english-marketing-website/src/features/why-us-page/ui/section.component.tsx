import type { WhyUsPageContent } from "../types/whyUsPageContent.type";
import { cn } from "@/lib/utils";

interface Props {
  content: WhyUsPageContent;
  listMark: "decimal" | "disc";
  imagePosition: "left" | "right";
  bg?: "white" | "blue";
  children: React.ReactNode;
}

const Section = ({
  content,
  listMark,
  imagePosition,
  bg = "white",
  children,
}: Props) => {
  return (
    <section
      className={cn(
        "py-10 md:py-20 rounded-2xl",
        bg === "blue" ? "bg-blue-50" : "",
      )}
    >
      <div className="max-w-7xl px-2 mx-auto flex flex-col">
        {children}

        <div
          className={cn(
            content.shortDescription.length > 0 && "mb-5 md:mb-10",
            imagePosition === "right" &&
              content.shortDescription.length === 0 &&
              "flex flex-row-reverse",
          )}
        >
          <img
            src={content.image}
            alt={content.title}
            className={cn(
              "w-1/2 md:w-1/4 md:hidden h-full m-auto",
              imagePosition === "left" &&
                content.shortDescription.length > 0 &&
                "float-left mr-4",
            )}
          />

          {content.shortDescription.length > 0 && (
            <p
              className={cn(
                "text-xl md:text-2xl font-semibold leading-tight",
                imagePosition === "left" && "text-right md:text-center",
              )}
            >
              {content.shortDescription}
            </p>
          )}
        </div>

        <div
          className={cn(
            "flex gap-4",
            imagePosition === "left" && "flex-row-reverse",
          )}
        >
          <ul
            role="list"
            className={cn(
              "flex flex-col gap-4 text-lg font-semibold leading-tight",
              listMark === "decimal"
                ? "list-decimal marker:font-medium marker:text-[#00B5D8] marker:text-2xl"
                : "list-image-[url(/assets/images/list-mark-disk.svg)]",
            )}
          >
            {content.descriptionItems.map((item, index) => (
              <li
                key={index}
                className={cn("pl-2 ml-8", imagePosition === "right" && "ml-5")}
              >
                {item}
              </li>
            ))}
          </ul>

          <img
            src={content.image}
            alt={content.title}
            className="w-1/4 h-full hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;

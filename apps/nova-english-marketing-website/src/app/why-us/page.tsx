import { content } from "@/features/why-us-page/data/hardcoded-content";
import { Hero, Section, WhyUsFooter } from "@/features/why-us-page/ui";
import { ROUTES } from "@/shared/constants/routes";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Us",
  description: "Why Us Page",
};

const WhyUsPage = () => {
  return (
    <div className="max-w-[1420px] mx-auto px-2 md:px-5">
      <Hero />

      <Section
        content={content[0]}
        listMark="decimal"
        imagePosition="left"
        bg="blue"
      >
        <h2 className="text-center text-4xl font-bold mb-8 md:mb-16 md:text-[64px] leading-10 md:leading-none px-4">
          {content[0].title}
        </h2>
      </Section>

      <Section content={content[1]} listMark="disc" imagePosition="right">
        <div className="max-w-max h-max relative m-auto">
          <h3 className="text-center text-4xl font-bold mb-8 md:mb-16 md:text-[64px] leading-10 md:leading-none">
            {content[1].title}
          </h3>
          <img
            src="assets/images/title-underlining.svg"
            alt=""
            className="absolute bottom-8 xl:bottom-14 -z-10 hidden sm:block xl:block md:hidden"
          />
        </div>
      </Section>

      <Section content={content[2]} listMark="disc" imagePosition="left">
        <div className="max-w-max h-max relative m-auto">
          <h4 className="text-center text-4xl font-bold mb-8 md:mb-16 md:text-[64px] leading-10 md:leading-none px-4">
            {content[2].title}
          </h4>
          <img
            src="assets/images/title-underlining.svg"
            alt=""
            className="absolute bottom-8 xl:bottom-14 -z-10 hidden sm:block xl:block md:hidden"
          />
        </div>
      </Section>

      <WhyUsFooter />

      <Link
        href={ROUTES.HOME}
        title="English for Tech B1-B2"
        className="block max-w-max mb-2 mt-4 m-auto"
      >
        <img
          src="assets/images/sample_image_link.png"
          alt=""
          className="w-32 h-16"
        />
      </Link>
    </div>
  );
};

export default WhyUsPage;

import { content } from "../data/hardcoded-content";

const WhyUsFooter = () => {
  return (
    <section
      className={
        "py-14 md:py-20 px-4 mt-10 md:px-12 rounded-2xl bg-[#EDF8FF] relative"
      }
    >
      <h5 className="text-center text-3xl md:text-4xl font-bold mb-8 md:mb-16 md:text-[64px] leading-10 md:leading-none">
        {content[content.length - 1].title}
      </h5>
      <p className="indent-3 text-lg md:text-2xl text-justify font-semibold leading-tight">
        {content[content.length - 1].descriptionItems[0]}
      </p>
      <img
        src="assets/images/panda.svg"
        alt=""
        className="absolute right-0 -top-20 w-48 scale-x-[-1]"
      />
    </section>
  );
};

export default WhyUsFooter;

import { heroText } from "../data/hardcoded-content";
// import imgUnderlining from "assets/images/title-underlining.svg";

const Hero = () => {
  return (
    <section className="py-10 lg:pb-20 xl:pb-30">
      <div className="max-w-max h-max relative m-auto">
        <h1 className="mx-auto mb-8 md:mb-16 text-5xl md:text-[64px] font-bold tracking-wide text-center max-w-max px-4">
          {heroText.title}
        </h1>
        <img
          src="assets/images/title-underlining.svg"
          alt=""
          className="absolute bottom-1 -z-10 hidden sm:block"
        />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="md:flex md:flex-row-reverse lg:flex-col justify-between">
          <img
            src="assets/images/man-and-woman-in-gadgets.svg"
            alt="language school"
            className="w-1/3 md:w-1/4 h-full lg:hidden float-right"
          />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-6 lg:leading-tight">
            {heroText.text1}
          </p>

          <p className="text-right md:max-w-[1400px] text-2xl xl:text-3xl lg:px-32 md:px-16 hidden lg:block">
            {heroText.text2}
          </p>
        </div>

        <img
          src="assets/images/man-and-woman-in-gadgets.svg"
          alt="language school"
          className="w-1/4 h-full hidden lg:block"
        />
        <p className="font-semibold indent-3 leading-6 text-justify text-lg md:text-2xl md:p-10  lg:leading-tight lg:hidden">
          {heroText.text2}
        </p>
      </div>
    </section>
  );
};

export default Hero;

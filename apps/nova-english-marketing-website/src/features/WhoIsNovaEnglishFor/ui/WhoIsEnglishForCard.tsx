import Image from 'next/image';

interface WhoIsNovaEnglishForCard {
  image: string;
  titleTranslation: string;
  desrTranslation: string;
}

const WhoIsNovaEnglishForCard = ({
  image,
  titleTranslation,
  desrTranslation,
}: WhoIsNovaEnglishForCard) => {
  return (
    <div className="flex flex-col w-full sm:w-[340px]  sm:items-start">
      <div className="mb-6">
        <Image src={image} alt="person" width={340} height={220} className="object-cover" />
      </div>
      <div>
        <h2 className="mb-3 sm:mb-5 text-[#0092FC] font-semibold text-xl sm:text-[40px] leading-tight">
          {titleTranslation}
        </h2>
        <p className="font-medium text-sm sm:text-[24px] leading-snug">{desrTranslation}</p>
      </div>
    </div>
  );
};

export default WhoIsNovaEnglishForCard;

import React from 'react';
import HeroImage from '@/components/Image/Image';
import {Button} from '@/components/Button/Button';

const HeroSection: React.FC = () => {

  return (
    <section className='items-center w-auto m-auto'>
      <div className='grid grid-cols-[auto_1fr] gap-10 justify-items-center w-[1440px] min-h-[848px] mx-[250px] my-0 p-20 bg-custom-radial-gradient'>
        <div className='flex flex-col flex-nowrap'>
        <p className='text-xl font-normal leading-8 uppercase text-[hsla(0,0%,72%,1)]'>Intermediate&#32;&mdash;&#32;Upper&ndash;Intermediate</p>
        <h1 className='text-[4rem] leading-[4rem] font-bold text-[hsla(205,100%,49%,1)]'>Английский&nbsp;для&nbsp;IT</h1>
        <h2 className='text-[4rem] leading-[4rem] font-bold text-[hsla(0,1%,25%,1)] mb-10'>Онлайн&nbsp;курсы</h2>
        <p className='text-[2.5rem] leading-[3rem] font-semibold text-[hsla(0,1%,25%,1)] mb-20'>Твоё&nbsp;время&nbsp;будет&nbsp;стоить&nbsp;<br/>дороже&#x21;</p>
        <Button variant='default' className=' w-80 h-[60px] text-[hsla(0,0%,100%,1)] uppercase text-2xl leading-8 bg-[hsla(205,100%,49%,1)] rounded-[32px] hover:bg-[hsla(205,100%,62%,1)]'>Узнать&nbsp;больше</Button>
        </div>
        <div className="mt-6 md:mt-0">
          <HeroImage
            className="rounded-lg"
            src='/assets/man-and-woman-in-gadgets.svg'
            alt="Английский для IT"
            width={688}
            height={600}
          />
        </div>  
      </div>
    </section>
  );
};

export default HeroSection;
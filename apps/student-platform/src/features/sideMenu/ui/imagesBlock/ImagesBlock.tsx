import Image from 'next/image';

export default function ImagesBlock() {
  return (
    <div className={'w-52 mt-7 mb-10'}>
      <Image
        src={'/#'}
        alt={''}
        width={206}
        height={280}
        className={'w-52 h-72 rounded-lg bg-sky-100 mb-3.5'}
      />

      <div className={'flex justify-between'}>
        <Image
          src={'/#'}
          alt={''}
          width={32}
          height={32}
          className={'w-8 h-8 rounded-full bg-sky-100'}
        ></Image>
        <Image
          src={'/#'}
          alt={''}
          width={32}
          height={32}
          className={'w-8 h-8 rounded-full bg-sky-100'}
        ></Image>
        <Image
          src={'/#'}
          alt={''}
          width={32}
          height={32}
          className={'w-8 h-8 rounded-full bg-sky-100'}
        ></Image>
        <Image
          src={'/#'}
          alt={''}
          width={32}
          height={32}
          className={'w-8 h-8 rounded-full bg-sky-100'}
        ></Image>
        <Image
          src={'/#'}
          alt={''}
          width={32}
          height={32}
          className={'w-8 h-8 rounded-full bg-sky-100'}
        ></Image>
      </div>
    </div>
  );
}

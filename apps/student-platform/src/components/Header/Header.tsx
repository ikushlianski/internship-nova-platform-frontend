import Image from 'next/image';

export const Header = () => {
  return (
    <header className="flex px-7 py-5 justify-between items-center">
      <div className="w-16 h-16 overflow-hidden">
        <Image
          src="https://cdn-icons-png.flaticon.com/256/5309/5309804.png"
          className="w-full h-full object-cover"
          alt="english book"
          width={256} // specify the width
          height={256} // specify the height
        ></Image>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-8 h-8 bg-gray-300"></div>
        <div className="w-8 h-8 bg-gray-300"></div>
        <div className="flex gap-3 items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png"
              className="w-full h-full object-cover"
              alt="person"
              height={256} // specify the height
              width={256} // specify the width
            ></Image>
          </div>
          <p>Someone</p>
        </div>
      </div>
    </header>
  );
};

import LogoSVG from '@/assets/icons/AppLogo.svg';

interface LogoProps {
  className?: string;
}
export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`${className} flex items-center w-full space-x-3`}>
      <LogoSVG />
      <span className="text-[#0092fc] text-3xl">NOVA ENGLISH</span>
    </div>
  );
};

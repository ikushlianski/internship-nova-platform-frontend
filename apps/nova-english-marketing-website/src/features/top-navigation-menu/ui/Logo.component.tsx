import LogoSVG from '@/assets/icons/AppLogo.svg';

interface LogoProps {
  className?: string;
}
export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`${className} flex items-center w-full space-x-2`}>
      <LogoSVG className="h-icon" />
      <h4 className="text-accent hidden lg:inline text-2xl xl:text-32">NOVA ENGLISH</h4>
    </div>
  );
};

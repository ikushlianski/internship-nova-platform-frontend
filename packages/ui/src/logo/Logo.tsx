import { LogoSVG } from './LogoSVG';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`${className} flex items-center w-full space-x-3`}>
      <LogoSVG />
      <span className="text-primary-blue text-3xl">NOVA ENGLISH</span>
    </div>
  );
};

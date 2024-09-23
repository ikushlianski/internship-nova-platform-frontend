import { ReactNode } from 'react';

interface ImportanceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ImportanceCard({ title, description, icon }: ImportanceCardProps) {
  return (
    <div className="flex flex-col gap-2 md:gap-7  p-2 2xl:p-8 2xl:w-[460px] bg-[radial-gradient(circle,_rgba(183,225,255,1)_0%,_rgba(230,245,255,1)_100%)] rounded-[20px]">
      <h3 className="w-full text-xl md:text-2xl xl:text-[28px] flex items-center justify-center md:justify-start gap-3 text-[#0092FC] font-medium">
        {icon}
        {title}
      </h3>
      <p className="text-lg md:text-xl xl:text-2xl text-center md:text-start">{description}</p>
    </div>
  );
}

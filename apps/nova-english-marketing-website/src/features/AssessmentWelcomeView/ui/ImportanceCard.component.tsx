import { ReactNode } from 'react';

interface ImportanceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ImportanceCard({ title, description, icon }: ImportanceCardProps) {
  return (
    <div className="flex flex-col gap-7 items-center p-10 width-[460px]">
      <h3 className="w-full text-[28px] flex gap-3 text-[#0092FC] font-medium">
        {icon}
        {title}
      </h3>
      <p className="text-2xl">{description}</p>
    </div>
  );
}

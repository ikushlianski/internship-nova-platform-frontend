import { ReactNode } from 'react';

interface DashboardCellProps {
  children?: ReactNode;
  icon?: ReactNode;
  title: string;
  desc?: string;
  locked?: boolean;
  moreLink?: string;
  moreLabel?: string;
  isSingleInRow?: boolean;
  classes?: string;
  classNameTitle?: string;
}

export const DashboardCell = ({
  children,
  icon,
  title,
  desc,
  locked,
  moreLink,
  moreLabel,
  classes,
  classNameTitle,
  isSingleInRow,
}: DashboardCellProps) => {
  return (
    <div
      className={`${classes} flex flex-col w-full rounded-[20px] p-5 
    ${isSingleInRow ? 'col-span-full' : ''}`}
    >
      <div className="flex justify-between items-center gap-2">
        <div className="flex gap-2 grow">
          {icon}
          <h3 className={`${classNameTitle} text-2xl font-bold`}>{title}</h3>
        </div>
        {moreLink && <a href={moreLink}>{moreLabel}</a>}
      </div>
      {desc && <p className="text-lg">{desc}</p>}
      {children}
      {locked && <div className="w-10 h-10 bg-gray-200 ml-auto mt-auto">lock</div>}
    </div>
  );
};

import { ReactNode } from "react";
import { DashboardTitle } from "./DashboardTitle"

interface DashboardCellProps {
    color: string
    title: string
    isSingleInRow?: boolean
    children?: ReactNode
    seeDetailsLink?: boolean
    seeDetailsLabel?: string
}

export const DashboardCell = ({
    children,
    color,
    title,
    isSingleInRow,
    seeDetailsLink,
    seeDetailsLabel }: DashboardCellProps) => {
    return (<div className={`bg-${color} w-full rounded-[20px] p-5 ${isSingleInRow ? 'col-span-2' : ''}`}>
        <div className="flex justify-between items-center">
            <DashboardTitle title={title} />
            {seeDetailsLink && <button>{seeDetailsLabel}</button>}
        </div>
        {children}
    </div>)
}
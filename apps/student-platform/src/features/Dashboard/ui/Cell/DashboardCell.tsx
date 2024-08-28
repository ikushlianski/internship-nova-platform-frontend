import { ReactNode } from "react";
import { DashboardTitle } from "../DashboardTitle/DashboardTitle"

interface CellProps {
    color: string
    title: string
    isSingleInRow?: boolean
    children?: ReactNode
    isBtnNeeded?: boolean
}

export const DashboardCell = ({ children, color, title, isSingleInRow, isBtnNeeded }: CellProps) => {
    return (<div className={`bg-${color} w-full rounded-[20px] p-5 ${isSingleInRow ? 'col-span-2' : ''}`}>
        <div className="flex justify-between items-center">
            <DashboardTitle title={title} />
            {isBtnNeeded && <button>More</button>}
        </div>
        {children}
    </div>)
}
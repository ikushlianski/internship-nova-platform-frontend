interface DashboardTitleProps {
    title: string;
}

export const DashboardTitle = ({ title }: DashboardTitleProps) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            <h3 className="text-2xl font-bold">{title}</h3>
        </div>
    )
}
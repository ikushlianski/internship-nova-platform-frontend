import { DashboardCell } from "@packages/ui/src/dashboardCell"

export default function Dashboard() {
    return (<div className="grow flex min-h-full">
        {/* <h1>Home</h1>
      <p>
        This is the home page of the app. You can navigate to the login page by
        clicking <Link href={"/login"}>here</Link>.
      </p> 
        <Navigation />*/}
        <div className="grow grid bg-gray-200 grid-cols-3 p-10 gap-5">
            <div className="col-span-2 grid grid-cols-2 gap-5">
                <DashboardCell
                    classes="bg-white"
                    classNameTitle="text-3xl order-first"
                    title="Hello devs!"
                    icon={<div className="w-8 h-8 rounded-full bg-gray-200"></div>}
                    isSingleInRow />
                <DashboardCell isSingleInRow title="Title"
                    classes="bg-white"
                    moreLink='#' moreLabel="More"
                    icon={<div className="w-8 h-8 rounded-full bg-gray-200"></div>}>
                    <p>More context inside</p>
                </DashboardCell>
                <DashboardCell
                    classes="bg-white"
                    desc="Description" isSingleInRow title="Title" moreLink='#' moreLabel="More"
                    icon={<div className="w-8 h-8 rounded-full bg-gray-200"></div>} />
                <DashboardCell classes="bg-gray-300" isSingleInRow title="Title"
                    icon={<div className="w-8 h-8 rounded-full bg-gray-200"></div>} />
                <DashboardCell classes="bg-white" desc="Description" title="Title" locked
                    icon={<div className="w-8 h-8 rounded-full bg-gray-200"></div>} />
                <DashboardCell classes="bg-white" desc="Description" title="Title" locked
                    icon={<div className="w-8 h-8 rounded-full bg-gray-200"></div>} />
                <DashboardCell classes="bg-white" desc="Description" title="Title"
                    icon={<div className="w-8 h-8 rounded-full bg-gray-200"></div>} />
                <DashboardCell classes="bg-white" classNameTitle="w-full text-center"
                    title="Title" />
            </div>
            <div className="grid grid-cols-1 gap-5">
                <DashboardCell classes="bg-white" desc="Description" title="Title" locked
                    icon={<div className="w-8 h-8 rounded-full bg-gray-200"></div>} />
                <DashboardCell classes="bg-white" desc="Description" title="Title"
                    moreLink='#' moreLabel="More" locked
                    icon={<div className="w-8 h-8 rounded-full bg-gray-200"></div>} />
                <DashboardCell classes="bg-gray-300" title="Title" classNameTitle="w-full text-center" />
                <DashboardCell classes="bg-white" desc="Description" title="Title"
                    icon={<div className="w-8 h-8 rounded-full bg-gray-200"></div>} />
            </div>
        </div>
    </div >)
}
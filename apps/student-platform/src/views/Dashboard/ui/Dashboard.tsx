import { DashboardCell } from "./DashboardCell";

export default function Dashboard() {
    return (<div className="grow flex min-h-full">
        {/* <h1>Home</h1>
      <p>
        This is the home page of the app. You can navigate to the login page by
        clicking <Link href={"/login"}>here</Link>.
      </p> 
        <Navigation />*/}
        <div className="grow bg-gray-200 grid grid-cols-3 p-10 gap-5">
            <div className="col-span-2 grid grid-cols-2 gap-5">
                <div className="bg-white w-full rounded-[20px] p-5 col-span-2">
                    <div className="flex gap-5">
                        <h2 className="text-3xl font-bold">Hello devs!</h2>
                        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    </div>
                    <p className="text-xl">Have a nice coding time!</p>
                </div>
                <DashboardCell color="white" isSingleInRow title="Title" seeDetailsLink seeDetailsLabel="More" />
                <DashboardCell color="white" isSingleInRow title="Title" seeDetailsLink seeDetailsLabel="More" />
                <DashboardCell color="gray-300" isSingleInRow title="Title" />
                <DashboardCell color="white" title="Title" />
                <DashboardCell color="white" title="Title" />
                <DashboardCell color="white" title="Title" />
                <DashboardCell color="white" title="Title" />
            </div>
            <div className="grid grid-cols-1 gap-5">
                <DashboardCell color="white" title="Title" />
                <DashboardCell color="white" title="Title" seeDetailsLink seeDetailsLabel="More" />
                <DashboardCell color="gray-300" title="Title" />
                <DashboardCell color="white" title="Title" />
            </div>
        </div>
    </div >)
}
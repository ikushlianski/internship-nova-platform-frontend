import NavMenu from "@featuressideMenu/ui/NavMenu";
import ImagesBlock from "@featuressideMenu/ui/ImagesBlock";
import Settings from "@featuressideMenu/ui/Settings";

export default function SideMenu() {
  return (
    <aside className={"box-border w-64 bg-sky-50 rounded-r-lg p-7"}>
      <NavMenu />
      <ImagesBlock />
      <Settings />
    </aside>
  );
}

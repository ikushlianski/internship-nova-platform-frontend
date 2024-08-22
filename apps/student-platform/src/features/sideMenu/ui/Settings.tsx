import MenuItem from "@featuressideMenu/ui/MenuItem";

export default function Settings() {
  return (
    <>
      <p>Settings</p>
      <nav>
        <ul>
          <MenuItem img={"/#"} title={"Settings"} link={"/settings"} />
          <MenuItem
            img={"/#"}
            title={"Privacy policy"}
            link={"/privacy-policy"}
          />
          <MenuItem img={"/#"} title={"Log out"} link={"/logout"} />
        </ul>
      </nav>
    </>
  );
}

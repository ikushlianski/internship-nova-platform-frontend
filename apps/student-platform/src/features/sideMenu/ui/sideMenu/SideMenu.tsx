import NavMenu from '../navMenu/NavMenu';
import ImagesBlock from '../imagesBlock/ImagesBlock';
import Settings from '../settings/Settings';

export default function SideMenu() {
  return (
    <aside className={'box-border w-64 bg-sky-50 rounded-r-lg p-7'}>
      <NavMenu />
      <ImagesBlock />
      <Settings />
    </aside>
  );
}

import { FunctionComponent } from "react";
import Styles from './index.module.scss'
import { routerList } from "@/router";
import NavLink from "@/components/NavLink";
import NavSearch from "./Search";
import RouterArrow from "./RouterArrow";

interface LayoutNavProps {

}

const LayoutNav: FunctionComponent<LayoutNavProps> = () => {
  return (
    <div className={Styles.nav}>
      {
        routerList.map(({ navInfo }) => navInfo?.name ? <NavLink to={navInfo.path} key={navInfo.path}>{navInfo.name}</NavLink> : null)
      }
      <RouterArrow />
      <NavSearch />
    </div>
  );
}

export default LayoutNav;
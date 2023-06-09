import RowZebraDivider from "@/components/RowZebraDivider";
import SilverBorderButton from "@/components/SilverBorderButton";
import { FunctionComponent } from "react";
import Styles from './index.module.scss';
import NavSearch from "@/components/SearchInput";

interface RightListMiddleControlProps {

}

const RightListMiddleControl: FunctionComponent<RightListMiddleControlProps> = () => {
  return (
    <div className={Styles.middle_control}>
      <SilverBorderButton className={Styles.button}>
        <i className={Styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -5 28 35">
            <line x1="3" y1="5" x2="3" y2="19" strokeLinecap="round" strokeWidth="4" stroke="#c6c9ce" fill="none"></line>
            <line x1="10.3" y1="2" x2="10.3" y2="16" strokeLinecap="round" strokeWidth="4" stroke="#c6c9ce" fill="none"></line>
            <line x1="17.6" y1="9" x2="17.6" y2="23" strokeLinecap="round" strokeWidth="4" stroke="#c6c9ce" fill="none"></line>
            <line x1="25" y1="5" x2="25" y2="19" strokeLinecap="round" strokeWidth="4" stroke="#c6c9ce" fill="none"></line>
          </svg>
        </i>
        <span className={Styles.text}>PLAY</span>
      </SilverBorderButton>
      <div className={Styles.divider}>
        <RowZebraDivider />
      </div>
      <NavSearch placeholder="搜索歌单歌曲..." className={Styles.search} />
    </div>
  );
}

export default RightListMiddleControl;
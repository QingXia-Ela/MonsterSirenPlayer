import { cssBackgroundOptions } from "@/store/Background";
import { FunctionComponent, memo } from "react";
import Styles from './index.module.scss'

const id = "__CSS_BG_STYLE__"

const BackgroundCssComponent: FunctionComponent<cssBackgroundOptions> = memo(
  function BackgroundCssComponent({ cssContent }) {
    const head = document.querySelector('head')
    const StyleElement = document.getElementById("id") ?? document.createElement('style')
    if (!document.getElementById(id)) {
      StyleElement.setAttribute("id", id)
      head?.appendChild(StyleElement)
    }
    StyleElement.innerHTML = `.${Styles.css_bg} {${cssContent ? cssContent : ""}}`
    return (
      <div className={Styles.css_bg}></div>
    );
  }
)

export default BackgroundCssComponent;

import { useEffect } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import BackgroundStoreInstance, { cssBackgroundOptions, imageBackgroundOptions, videoBackgroundOptions } from "@/store/Background";
import BackgroundCssComponent from "./BackgroundComponents/css";
import BackgroundImageComponent from "./BackgroundComponents/image"
import BackgroundVideoComponent from "./BackgroundComponents/video"
import BackgroundMask from "./BackgroundComponents/mask"
import Styles from './index.module.scss'
import { observer } from "mobx-react";
// <Partial<BackgroundProps>>
// @ts-expect-error: test
window._BACKGROUND_STORE_ = BackgroundStoreInstance

const GetBackgroundTypeComponent = (store: typeof BackgroundStoreInstance): JSX.Element => {
  switch (store.type) {
    case "css": {
      const { cssContent } = store.options as cssBackgroundOptions
      return <BackgroundCssComponent cssContent={cssContent} />
    }
    case "image": {
      const { src, moveWithMouse = false } = store.options as imageBackgroundOptions
      return <BackgroundImageComponent src={src} moveWithMouse={moveWithMouse} />
    }
    case "video": {
      const { src } = store.options as videoBackgroundOptions
      return <BackgroundVideoComponent src={src} />
    }
  }
}

export default observer(({ store = BackgroundStoreInstance }) => {
  return (
    <div className={Styles.background}>
      <BackgroundMask store={store} />
      <TransitionGroup className={`${Styles.transition_container} w100 h100`} style={{ filter: `blur(${store.filterVal}px)` }}>
        <CSSTransition
          key={+new Date()}
          timeout={300}
          unmountOnExit
          classNames={{
            enter: Styles.transition_enter,
            enterActive: Styles.transition_enter_active,
            exit: Styles.transition_exit,
          }}
        >
          {GetBackgroundTypeComponent(store)}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
});

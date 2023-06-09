import NormalListItem, { getNormalListItemStyle } from "@/components/NormalListItem";
import AudioInfoTag from "@/components/Tag/AudioInfoTag";
import { FunctionComponent } from "react";
import Styles from './index.module.scss'

export interface TagProps {
  content: string
  color?: string
}

interface SingleItemProps {
  name: string
  author?: string
  album?: string
  time?: string
  tags?: TagProps[]
  operation?: any
}

const { className } = getNormalListItemStyle({ className: Styles.single_item })

const SingleItem: FunctionComponent<SingleItemProps> = ({ name, author, album, time, tags, operation }) => {
  return (
    <div className={Styles.single_item}>
      <div className="w30 text_nowrap" title={name}>{name}</div>
      <div className="w18 text_nowrap">{author}</div>
      <div className="w18 text_nowrap">{album}</div>
      <div className={Styles.tags}>{tags?.map((v, i) => <AudioInfoTag key={i} style={{ color: v.color, borderColor: v.color }}>{v.content}</AudioInfoTag>)}</div>
      <div className="w5 text_nowrap">{time}</div>
      <div className="w15 text_nowrap"></div>
    </div>
  );
}

export default SingleItem;
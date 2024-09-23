import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {

  return (
    <div className={css.friendListItem}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={clsx(css.isOnline, css[isOnline])}
      >{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
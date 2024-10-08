import css from "./Profile.module.css";


export default function Profile({name, tag, location, image, stats}) {
    
    return (
        <div className={css.profile}>
            <div>
                <img className={css.img}
                src={image}
                alt="User avatar"
                />
                <p className={css.userName}>{name}</p>
                <p className={css.userTag}>@{tag}</p>
                <p className={css.userLocation}>{location}</p>
            </div>

            <ul className={css.ulStatus}>
                <li className={css.liStatus}>
                <span className={css.liStatusCategory}>Followers</span>
                <span className={css.liStatusQuantity}>{stats.followers}</span>
                </li>
                <li className={css.liStatus}>
                <span className={css.liStatusCategory}>Views</span>
                <span className={css.liStatusQuantity}>{stats.views}</span>
                </li>
                <li className={css.liStatus}>
                <span className={css.liStatusCategory}>Likes</span>
                <span className={css.liStatusQuantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

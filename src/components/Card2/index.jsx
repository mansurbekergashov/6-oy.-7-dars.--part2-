import style from "./Card2.module.css";
import img from "/src/assets/card-2-img.svg"


export default function Card2() {
  return (
    <div className={style.main}>

      {/* PROFILE */}
      <div className={style.profileWrapper}>
        <img
          className={style.cardImg}
          src={img}
          alt="Img"
        />
        <div className={style.profile}>
          <p className={style.profileName}>Jonathan Walters</p>
          <p className={style.profileStatus}>Verified Graduate</p>
        </div>
      </div>

      {/* TITLE */}
      <h2 className={style.cardTitle}>
        The team was very supportive and kept me motivated
      </h2>

      {/* TEXT */}
      <p className={style.cardText}>
        “ I started as a total newbie with virtually no coding skills. I now
        work as a mobile engineer for a big company. This was one of the best
        investments I’ve made in myself. “
      </p>
    </div>
  );
}

import style from "./Card3.module.css";
import img from "/src/assets/card-3-img.svg"


export default function Card3() {
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
          <p className={style.profileName}>Jeanette Harmon</p>
          <p className={style.profileStatus}>Verified Graduate</p>
        </div>
      </div>

      {/* TITLE */}
      <h2 className={style.cardTitle}>
        An overall wonderful and rewarding experience
      </h2>

      {/* TEXT */}
      <p className={style.cardText}>
        “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
      </p>
    </div>
  );
}

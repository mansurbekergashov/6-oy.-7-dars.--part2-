import style from "./Card4.module.css";

export default function Card4() {
  return (
    <div className={style.main}>
      {/* PROFILE */}
      <div className={style.profileWrapper}>
        <img
          className={style.cardImg}
          src="./public/images/card-4-img.svg"
          alt="Img"
        />
        <div className={style.profile}>
          <p className={style.profileName}>Patrick Abrams</p>
          <p className={style.profileStatus}>Verified Graduate</p>
        </div>
      </div>

      {/* TITLE */}
      <h2 className={style.cardTitle}>
        Awesome teaching support from TAs who did the bootcamp themselves.
        Getting guidance from them and learning from their experiences was easy.
      </h2>

      {/* TEXT */}
      <p className={style.cardText}>
        “ The staff seem genuinely concerned about my progress which I find
        really refreshing. The program gave me the confidence necessary to be
        able to go out in the world and present myself as a capable junior
        developer. The standard is above the rest. You will get the personal
        attention you need from an incredible community of smart and amazing
        people. ”
      </p>
    </div>
  );
}

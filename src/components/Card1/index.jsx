import style from "./Card1.module.css";
import img from "/src/assets/card-1-img.svg"

export default function Card1() {
  return (
    <div className={style.main}>

      {/* <img className={style.CardbgImg} src="./public/images/card-1-bg-img.png" alt="Img" /> */}
      
      {/* PROFILE */}
      <div className={style.profileWrapper}>
        <img className={style.cardImg} src={img} alt="Img" />
        <div className={style.profile}>
          <p className={style.profileName}>Daniel Clifford</p>
          <p className={style.profileStatus}>Verified Graduate</p>
        </div>
      </div>

      {/* TITLE */}
      <h2 className={style.cardTitle}>
        I received a job offer mid-course, and the subjects I learned were
        current, if not more so, in the company I joined. I honestly feel I got
        every penny’s worth.
      </h2>

      {/* TEXT */}
      <p className={style.cardText}>
        “ I was an EMT for many years before I joined the bootcamp. I’ve been
        looking to make a transition and have heard some people who had an
        amazing experience here. I signed up for the free intro course and found
        it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
        the best - and most grueling - time of my life. Since completing the
        course, I’ve successfully switched careers, working as a Software
        Engineer at a VR startup. ”
      </p>
    
    </div>
  );
}

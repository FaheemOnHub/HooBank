import { layout } from "../style";
import { bill, apple, google } from "../assets";
import styles from "../style";

const billing = () => {
  return (
    <section className={`${layout.section} justify-between items-center`}>
      <div className={`${layout.sectionInfo}`}>
        <div className={`${layout.sectionImg}`}>
          <img src={bill} alt="" className="w-[100%] h-[100%] relative z-[3]" />
        </div>
      </div>
      <div>
        <h2 className={`${styles.heading2}`}>
          Easily control your
          <br className="sm:block hidden" />
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row mt-10">
          <img src={apple} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
    </section>
  );
};

export default billing;

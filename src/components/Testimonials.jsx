import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={`${styles.heading2}`}>
          What people are
          <br />
          saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container realtive z-[1]">
        {feedback.map((item) => {
          return <FeedbackCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;

import bgImg from "@/assets/panel.png";
import styles1 from "../index.module.less";
import styles from "./index.module.less";
import ScaleContainer from "../common/index";

const Box2 = () => {
  return (
    <div className={styles1.box}>
      <img className={styles1.bg} src={bgImg} />
      <ScaleContainer width={600} height={400} disabled={false}>
        <div className={styles.boxContainer}>
          <div className={styles.boxItem} />
          <div className={styles.boxItem} />
          <div className={styles.boxItem} />
          <div className={styles.boxItem} />
        </div>
      </ScaleContainer>
    </div>
  );
};

export default Box2;

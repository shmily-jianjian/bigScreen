import bgImg from "@/assets/panel.png";
import React, { useRef, useState } from "react";
import ScaleContainer from "../common/index";
import styles from "../index.module.less";

type ItemProps = {
  number: number | string;
  className: string;
};

const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumItem: React.FC<ItemProps> = ({ number }) => {
  const newNumber = Number(number);
  const findIndex = numberArr.findIndex((item) => item === newNumber);

  return (
    <div className={styles.numItem}>
      {numberArr.map((item, index) => (
        <div
          style={{
            bottom: index * 40,
            left: 0,
            transform: `translateY(${findIndex * 40}px)`,
          }}
          className={styles.item}
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

const Box1 = () => {
  const [data, setData] = useState<string>(
    (
      new Date().getMilliseconds() + Math.floor(Math.random() * 99999)
    ).toString()
  );
  const newData = data.toString().split("");

  const changeData = () => {
    setData(
      (
        new Date().getMilliseconds() + Math.floor(Math.random() * 99999)
      ).toString()
    );
  };

  return (
    <div className={styles.box}>
      <img className={styles.bg} src={bgImg} />
      <ScaleContainer width={948} height={432} disabled={false}>
        <>
          <section className={styles.section}>
            {newData.map((item, index) => (
              <NumItem key={index} number={item} className="numItem" />
            ))}
          </section>
          <button onClick={changeData}>修改</button>
          <div className={styles.number}>588292</div>
          <div className={styles.content}>
            <span>发如雪，牡丹花下死，做鬼也风流</span>
            <span>hahahahahahahahhaa</span>
          </div>
        </>
      </ScaleContainer>
    </div>
  );
};

export default Box1;

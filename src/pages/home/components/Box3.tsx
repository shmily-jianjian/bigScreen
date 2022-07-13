import bgImg from '@/assets/panel.png'
import styles from '../index.module.less'

 const Box3 = () => {
  return (
    <div className={styles.box}>
       <img className={styles.bg} src={bgImg} />
    </div>
  )
}

export default Box3
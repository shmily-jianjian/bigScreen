import styles from '../index.module.less'

const Loading = (props: any) => {
   return <div className={styles.loading}>{props.children}</div>
}

export default Loading
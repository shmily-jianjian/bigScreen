import { useEffect, useState } from 'react'
import styles from  './index.module.less'
import bgImg from '@/assets/bg01.png'
import headerBgImg from '@/assets/header.png'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import Box4 from './components/Box4'
import Loading from './components/Loading'

const Home = () => {
   const [loading, setLoading] = useState<boolean>(true)

   /** 
    * @description 监听大屏图片加载完成
    */
   useEffect(() => {
      const imgs = document.querySelectorAll('img')
      if(!imgs) {
         setLoading(false)
         return
      }
      let imgLength = imgs.length
      imgs.forEach((img: HTMLImageElement) => {
         img.addEventListener('load', () => {
            imgLength = imgLength - 1
            if(imgLength === 0) {
               setLoading(false)
            }
         })
      })
   }, [])

  return (
    <div className={styles.home}>
       {loading && <Loading>加载中...</Loading>}
       <img className={styles.bg} src={bgImg} /> 
       <header>
         <span>林州治超管理系统</span>
         <img className={styles.headerBg} src={headerBgImg} />
       </header>
       <main>
         <Box1/>
         <Box2/>
         <Box3/>
         <Box4/>
       </main>
    </div>
  )
}

export default Home
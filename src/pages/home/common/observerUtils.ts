import ResizeObserver from 'resize-observer-polyfill';
export type ResizeListener = (element: HTMLDivElement) => void;

// 定义一个数据结构 用来装载缓存我们监听的函数 key为元素 value为对该元素的监听函数
const elementListeners = new Map<HTMLDivElement, Set<ResizeListener>>()

const ro = new ResizeObserver((entries, observer) => {
   // entries 是一个数组,通过 ro.observe(element)注入
   // observer
   for (const entry of entries) {
      // entry 表示监听的dom
      const listeners = elementListeners.get(entry.target as HTMLDivElement)
      if(listeners && listeners.size) {
         // 其实我们还可以把entry中的 contentRect返回给回调函数
         listeners.forEach(listen => listen(entry.target as HTMLDivElement))
      }
   }
 });

export const observer = (element: HTMLDivElement | null, callback: ResizeListener) => {
   if(!element) {
      return false
   }
   // elementListeners 中没有记录则添加key
   if(!elementListeners.has(element)) {
      elementListeners.set(element, new Set())
      ro.observe(element)
   }
   // 对呀key中添加函数
   elementListeners.get(element)?.add(callback)
}


export const unobserver = (element: HTMLDivElement | null, callback: ResizeListener) => {
   if(!element) {
      return false
   }
   if(elementListeners.has(element)) {
      // 删除存储的 回调函数
      elementListeners.get(element)?.delete(callback)
      // 如果存储的 回调函数不存在了 移除监听 并且移除缓存
      if(!elementListeners.get(element)?.size) {
         ro.unobserve(element)
         elementListeners.delete(element)
      }
   }
}
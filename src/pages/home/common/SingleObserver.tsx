import styles from "../components/index.module.less";
import { useCallback, useEffect, useRef, useState } from "react";
import { observer, unobserver } from "./observerUtils";

interface SizeInfo {}

export type OnResize = (sizeInfo: SizeInfo) => void;

export interface ScaleContainerProps {
  width: number;
  height: number;
  children: React.ReactElement;
  disabled?: boolean;
  maxScale?: number;
  minScale?: number;
  onResize?: OnResize;
}

export default function ScaleContainer(props: ScaleContainerProps) {
  const { children, disabled } = props;
  const wrapDomRef = useRef<HTMLDivElement>(null);
  // 计算缩放比 触发更新
  const [scale, setScale] = useState<number>(1);
  // 因为缩放
  const [translateArr, setTranslateArr] = useState([0, 0]);

  // 监听容器变化的回调 处理缩放
  const onInternalResize = useCallback((target: HTMLDivElement) => {
    const { width, height } = target.getBoundingClientRect();
    const fixedWidth = Math.floor(width);
    const fixedHeight = Math.floor(height);

    const w = fixedWidth / props.width;
    const h = fixedHeight / props.height;
    const s = Math.min(w, h);
    console.log(w, 'w...');
    console.log(h, 'h...');
    

    const leftNum = (fixedWidth - props.width * h) / 2;
    const topNum = (fixedHeight - props.height * w) / 2;
    setTranslateArr([leftNum <= 0 ? 0 : leftNum, topNum <= 0 ? 0 : topNum]);

    setScale(s);
  }, []);

  useEffect(() => {
    const dom = wrapDomRef.current;
    // 监听容器的缩放
    if (!disabled && dom) {
      // 开始监听
      observer(dom, onInternalResize);
    }
    return () => {
      // 取消监听
      unobserver(dom, onInternalResize);
    };
  }, [disabled, wrapDomRef.current]);

  return (
    <div className={styles.scaleContainer} ref={wrapDomRef}>
      <div
        style={{
          width: (props.width) + 'px',
          height: props.height + 'px',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          left: translateArr[0],
          top: translateArr[1],
          position: 'absolute'
        }}
      >
        {children}
      </div>
    </div>
  );
}

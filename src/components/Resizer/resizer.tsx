import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import classnames from 'classnames';
import { ResizerProp } from './types';
import styles from './resize.module.scss';

export const Resizer: FC<PropsWithChildren<ResizerProp>> = ({
  children,
  resize,
  maxHeight = Infinity,
  maxWidth = Infinity,
  position = 'center',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const refResizer = useRef<HTMLDivElement | null>(null);

  const initialData = useRef<{
    coordinate: [number, number];
    sizes: { width: number; height: number };
  } | null>(null);
  const [sizes, setSizes] = useState<null | { width: number; height: number }>(
    null,
  );
  const [minimumSizes, setMinimumSizes] = useState({
    width: 0,
    height: 0,
  });

  const handleMouseUp = () => {
    initialData.current = null;
  };

  const calculateNewSize = (
    currentSize: number,
    delta: number,
    minSize: number,
    maxSize: number,
  ) => {
    const newSize = currentSize + delta;
    return Math.min(Math.max(newSize, minSize), maxSize);
  };

  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    if (!initialData.current || !minimumSizes) return;

    const {
      coordinate: [initialX, initialY],
      sizes: { width, height },
    } = initialData.current;

    const dx = resize !== 'vertical' ? initialX - e.clientX : 0;
    const dy = resize !== 'horizontal' ? initialY - e.clientY : 0;

    const newWidth = calculateNewSize(width, dx, minimumSizes.width, maxWidth);
    const newHeight = calculateNewSize(
      height,
      dy,
      minimumSizes.height,
      maxHeight,
    );

    setSizes({
      width: newWidth,
      height: newHeight,
    });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      initialData.current = {
        coordinate: [event.clientX, event.clientY],
        sizes: { width, height },
      };
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setMinimumSizes({ width, height });
    }

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerRef.current]);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{
        ...(sizes ? sizes : {}),
      }}
    >
      <div
        ref={refResizer}
        className={classnames(styles.resizer, styles[`icon-${position}`])}
        onMouseDown={handleMouseDown}
      ></div>
      {children}
    </div>
  );
};

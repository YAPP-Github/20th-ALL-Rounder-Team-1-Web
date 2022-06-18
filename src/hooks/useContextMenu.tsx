import { useEffect, useCallback, useState } from 'react';

export const useContextMenu = () => {
  const [pointX, setPointX] = useState(0);
  const [pointY, setPointY] = useState(0);
  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      if (window.innerWidth > 1120) {
        const extraPadding = (window.innerWidth - 1120) / 2;
        setPointX(event.pageX - extraPadding);
      } else {
        setPointX(event.pageX);
      }
      setPointY(event.pageY);
      setShow(true);
    },
    [setShow, setPointX, setPointY]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  });

  return { pointX, pointY, show };
};

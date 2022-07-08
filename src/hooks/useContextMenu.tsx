import { useCallback, useEffect, useState } from 'react';

export const useContextMenu = () => {
  const [pointX, setPointX] = useState(0);
  const [pointY, setPointY] = useState(0);
  const [show, setShow] = useState(false);
  const [isCategoryClicked, setIsCategoryClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleContextMenu = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setPointY(event.pageY);
    setShow(true);
    if (window.innerWidth > 1120) {
      const extraPadding = (window.innerWidth - 1120) / 2;
      return setPointX(event.pageX - extraPadding);
    }
    setPointX(event.pageX);
  }, []);

  const handleClick = useCallback(() => {
    setIsCategoryClicked(false);
    setClickedIndex(-1);
    show && setShow(false);
  }, [show]);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  });

  return {
    pointX,
    pointY,
    show,
    isCategoryClicked,
    setIsCategoryClicked,
    clickedIndex,
    setClickedIndex,
  };
};

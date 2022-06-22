export const handleBackgroundColor = () => {
  const whitePages = ['/login', '/find-password', '/register', '/select-interest'];

  if (whitePages.includes(location.pathname)) {
    return (document.body.style.backgroundColor = '#fff');
  }

  document.body.style.backgroundColor = '#F5F7F8';
};

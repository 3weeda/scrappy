const smoothScroll = (item) => {
  if (typeof window !== 'undefined') {
    const diff = (item.offsetTop - window.scrollY) / 8;
    if (Math.abs(diff) > 64) {
      window.scrollTo(0, window.scrollY + diff);
      window.requestAnimationFrame(() => {
        smoothScroll(item);
      });
    } else {
      window.scrollTo(0, item.offsetTop - 65);
    }
  }
};

export default smoothScroll;

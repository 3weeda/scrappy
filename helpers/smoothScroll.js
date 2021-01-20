const smoothScroll = (item) => {
  if (typeof window !== 'undefined') {
    const diff = (item.offsetTop - window.scrollY) / 8;
    if (Math.abs(diff) > 99) {
      window.scrollTo(0, window.scrollY + diff);
      window.requestAnimationFrame(() => {
        smoothScroll(item);
      });
    } else {
      window.scrollTo(0, item.offsetTop - 100);
    }
  }
};

export default smoothScroll;

const smoothScroll = (item) => {
  if (typeof window !== 'undefined') {
    item?.scrollIntoView({ behavior: 'smooth' });
  }
};

export default smoothScroll;

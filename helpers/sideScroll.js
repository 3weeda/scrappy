/* eslint-disable no-param-reassign */
const sideScroll = (
  element,
  direction,
  //   speed = 25,
  distance = 250,
  step = distance / 60
) => {
  if (!window || !element || !distance) return;
  //   let scrollAmount = 0;
  if (distance <= 0) return;

  //   if (scrollAmount < distance) {
  window.requestAnimationFrame(() => {
    if (direction === 'left') {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    // scrollAmount += step;
  });
  //   console.log('Frame');
  sideScroll(element, direction, distance - step, step);
  //   }
  //   const slideTimer = window.setInterval(() => {
  //     if (direction === 'left') {
  //       element.scrollLeft -= step;
  //     } else {
  //       element.scrollLeft += step;
  //     }
  //     scrollAmount += step;
  //     if (scrollAmount >= distance) {
  //       window.clearInterval(slideTimer);
  //     }
  //   }, speed);
};

export default sideScroll;

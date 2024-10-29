export function movePortrait($event, $el) {
  const dX = (($event.clientX - $el.offsetLeft) / $el.clientWidth) * 15;
  const dY = (($event.clientY - $el.offsetTop) / $el.clientHeight) * 15;
  $el.style.transform = `translate(${dX}px, ${dY}px)`;
}

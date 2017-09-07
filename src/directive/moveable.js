import throttle from 'utils/function'

export default function(el, binding){
  el.addEventListener('mousedown', e => {
    let originX = e.pageX;
    let originY = e.pageY;
    let selector = binding.value;
    let moveElem = document.querySelector(selector);
    let moveElemOriginTop = moveElem.offsetTop;
    let moveElemOriginLeft = moveElem.offsetLeft;
    let event = {
      mousemove: function(e) {
        moveElem.style.top = (moveElemOriginTop + e.pageY/2 - originY/2) + 'px';
        moveElem.style.left = (moveElemOriginLeft + e.pageX/2 - originX/2) + 'px';
      }
    }
    let mousemove = throttle(event.mousemove, 100)
    // TODO: use throtte
    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', e => {
      document.removeEventListener('mousemove', mousemove)
    })
  }, false);
}

import throttle from 'utils/function'

export default function(el, binding){
  console.log(el)
  el.addEventListener('mousedown', e => {
    let originX = e.pageX;
    let originY = e.pageY;
    let selector = binding.value;
    let moveElem = document.querySelector(selector);
    let moveElemOriginTop = moveElem.offsetTop;
    let moveElemOriginLeft = moveElem.offsetLeft;
    console.log(moveElemOriginTop, moveElemOriginTop)
    let event = {
      mousemove: function(e) {
        console.log(moveElemOriginTop, e.pageY ,originY)
        moveElem.style.top = (moveElemOriginTop + e.pageY/2 - originY/2) + 'px';
        moveElem.style.left = (moveElemOriginLeft + e.pageX/2 - originX/2) + 'px';
      }
    }
    let mousemove = throttle(event.mousemove, 100)
    console.log('mousedown')
    // TODO: use throtte
    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', e => {
      document.removeEventListener('mousemove', mousemove)
    })
  }, false);
}

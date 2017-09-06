let event = {
  mousemove: function(e) {
    console.log(moveElemOriginTop, e.pageY ,originY)
    moveElem.style.top = moveElemOriginTop + e.pageY - originY;
    moveElem.style.left = moveElemOriginLeft + e.pageX - originX;
  }
}



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
        moveElem.style.top = (moveElemOriginTop + e.pageY - originY) + 'px';
        moveElem.style.left = (moveElemOriginLeft + e.pageX - originX) + 'px';
      }
    }
    console.log('mousedown')
    // TODO: use throtte
    document.addEventListener('mousemove', event.mousemove)
    document.addEventListener('mouseup', e => {
      document.removeEventListener('mousemove', event.mousemove)
    })
  }, false);
}

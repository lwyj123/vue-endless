import store from '$store/index.js';

const coolTimeEvent = function(currentCoolTime){

  let hero = store.state.hero.hero;

  currentCoolTime = Math.max(1000, (1 - hero.$r.$coolTimePer / 100) * (currentCoolTime || this.defaultTime));

  this.coolTimeTimer && clearInterval(this.coolTimeTimer);

  this.coolTime = currentCoolTime;

  this.currentCoolTime = currentCoolTime;

  this.coolTimeTimer = setInterval( () => {
    this.coolTime -= 30;
    if(this.coolTime < 0){
      this.coolTime = 0;
      clearInterval(this.coolTimeTimer);
    }
  }, 30);
  
}

export default coolTimeEvent;

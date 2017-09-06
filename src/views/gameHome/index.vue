<template>
  <div class="game-home">
    <div class="left">
      <game-home-info></game-home-info>
      <game-home-menu></game-home-menu>
    </div>
    <div class="right">
      <game-house></game-house>
      <game-package></game-package>
    </div>
    <game-chat></game-chat>
  </div>
</template>

<script>
import Menu from 'components/Menu/game-home-menu.vue'
import Info from 'components/Info/game-home-info.vue'
import GameAudio from 'utils/audio'
import GameChat from 'components/Chat/gameChat.vue'
export default {
  components :{
    'game-home-menu' : Menu,
    'game-home-info' : Info,
    'game-chat': GameChat,
  },
  created(){
    console.log(this.$store.state)
    if(!this.$store.state.hero.hero){
      this.$router.push('/login');
    }
    // new GameAudio({
    //   key : 'backgroundMusic',
    //   loop : true,
    // });
  }
}

</script>

<style scoped lang="less">
  .game-home{
    word-spacing:-4px;
    display: table;
    background: #252830;
    .left{
      display: inline-block;
      width: 276px;
      overflow: hidden;
      vertical-align: top;
    }
    .right{
      user-select :none;
      display: inline-block;
      vertical-align: top;
      width: 524px;
      // border-left: 4px solid green;
    }
  }
</style>

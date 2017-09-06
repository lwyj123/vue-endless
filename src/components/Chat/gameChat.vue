<template>
  <div class="game-chat">
    <header></header>
    <div class="chat-window"></div>
    <div class="chat-input">
      <input>
      <button></button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: [
    
  ],
  data(){
    return {
      keke: 'eke'
    }
  },
  methods : {
  }
}
</script>

<style scoped lang="scss">
.game-chat {
  width: 300px;
  height: 300px;
  position: fixed;
  right: 0;
  bottom: 0;
  background: red;
  header {
    height: 40px;
    background: rgba(0, 0, 0, 1.0);
  }
  .chat-window {

  }
  .chat-input {
    input {

    }

  }
}
</style>
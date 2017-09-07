<template>
  <div class="game-chat">
    <header class="moveable" v-moveable="'.game-chat'">
      <h1>Game Chat</h1>
    </header>
    <div class="chat-window"></div>
    <div class="chat-input">
      <input>
      <button>Send</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moveable from 'directive/moveable'
export default {
  props: [
    
  ],
  directives :{
    'moveable' : moveable,
  },
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
  display: flex;
  flex-direction: column;
  width: 300px;
  position: fixed;
  right: 0;
  bottom: 0;
  background: transparent;
  header {
    flex: 0 0 40px;
    background: rgba(50, 50, 50, 1.0);
    h1 {
      margin: 0;
      font-size: 12px;
      color: white;
    }
  }
  .chat-window {
    flex: 0 0 100px;
    background: #252830;
  }
  .chat-input {
    display: flex;
    align-items: center;
    flex: 0 0 30px;
    background: rgba(50, 50, 50, 1.0);
    input {
      width: calc(100% - 50px)
    }
    button {
      width: 50px;
    }
  }
}

.moveable {
  cursor: move;
}
</style>
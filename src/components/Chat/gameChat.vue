<template>
  <div class="game-chat">
    <header class="moveable" v-moveable="'.game-chat'">
      <h1>Game Chat</h1>
    </header>
    <div class="chat-window">
      <p v-for="(item, index) in chatlog">{{ item.content }}</p>
    </div>
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
  data() {
    return {
      chatlog: [],
    }
  },
  computed:{
    ...mapGetters([
      'user',
    ]),
  },
  methods : {
  },
  sockets:{
    connect: function(){
      var self = this;
      console.log('socket connected');
      this.$socket.emit('login', this.user)
    },
    logined: function(user){
      console.log(`user logined`);
      this.chatlog.push({
        type: 'welcome',
        content: `welcome ${user.name} join the chat`
      });
    },
    message: function(message) {
      if(message.type === 'message' && message.user.id === user.id) {
        return;
      }
      this.chatlog.push(message);
    },
  },
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
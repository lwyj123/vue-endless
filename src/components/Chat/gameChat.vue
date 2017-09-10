<template>
  <div class="game-chat"
       @keydown.enter="sendChatMessage">
    <header class="moveable" v-moveable="'.game-chat'">
      <h1>Game Chat(Test)</h1>
    </header>
    <div class="chat-window">
      <ul ref="messages" class="messages">
        <li v-for="(item, index) in chatlog">
          <div v-if="item.type === 'message'" 
               class="chat-line"
               :class="{me: item.content.from.id === user.id}">
            <div class="name">{{ item.content.from.name }}</div>
            <span>{{ item.content.message }}</span>
          </div>
          <div v-else-if="item.type === 'welcome'"
               class="notice-line">
            <span>{{ item.content }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="chat-input">
      <input v-model="messageInput">
      <button @click="sendChatMessage">Send</button>
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
      messageInput: '',
    }
  },
  created() {
    var self = this;
  },
  computed:{
    ...mapGetters([
      'user',
    ]),
  },
  methods : {
    sendChatMessage: function() {
      var self = this;
      if(this.messageInput === '') {
        return;
      }
      this.$socket.emit('message', {
        type: 'message',
        content: { 
          from: this.user,
          message: self.messageInput,
        }
      })
      this.chatlog.push({
        type: 'message',
        content: { 
          from: this.user,
          message: self.messageInput,
        }
      }) 
      this.messageInput = '';
    }
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
      if(message.type === 'message' && message.content.from.id === this.user.id) {
        return;
      }
      this.chatlog.push(message);
    },
  },
  watch:{
    // OPTIMIZATION: auto scroll only in bottom
    // auto scroll the chatlog
    chatlog: function(){
     this.$nextTick(() => {
       var lastLi = this.$el.querySelector("li:last-child");
       lastLi.scrollIntoView();
     })
    }
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
    overflow: scroll;
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

ul.messages {
  li {
    margin-bottom: 10px;
    .chat-line {
      .name {
        margin-bottom: 5px;

        color: white;
        font-size: 12px;
        font-weight: bold;
      }
      span {
        border-radius: 5px;
        background: #E0EDFF;
        padding: 5px 12px;
        font-size: 15px;
      }
    }
    .chat-line.me {
      text-align: right;
    }

    .notice-line {
      margin: 10px 0;
      text-align: center;
      span {
        background: #aaaaaa;
        border-radius: 4px;
        padding: 5px 20px;
      }
    }
  }
}

.moveable {
  cursor: move;
}
</style>
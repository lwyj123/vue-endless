const user = {
  state: false || {
    name: 'lwio' + Math.floor(Math.random()*100),
    id: Math.floor(Math.random()*100),
    token: 'keke',
  },

  mutations: {
    SET_USER: (state, user) => {
      state = user;
    },
  },

  actions: {
    // 邮箱登录
    // TODO: login_params descripe

    /*Login({ commit }, login_params) {
      return new Promise((resolve, reject) => {
        login(login_params.email, login_params.password).then(response => {
          const data = response;
          storeWithExpiration.set('user.userInfo', response, 86400000);
          storeWithExpiration.set('user.token', response['Access-Token'], 86400000);
          commit('SET_USERINFO', response);  
          commit('SET_TOKEN', response['Access-Token']);  
          resolve();      
        }).catch(error => {
          reject(error);
        });
   
      });
    },
    // for later one-use token, Logout should in actions
    Logout({ commit }) {
      commit('LOGOUT_USER'); 
      storeWithExpiration.set('user.userInfo', {});
      storeWithExpiration.set('user.token', '');
    },
    //注册
    Signup({ commit },register_params){
      return new Promise((resolve, reject) => {
        signup(register_params).then(response => {
          console.dir(response)
          const data = response;
          storeWithExpiration.set('user.userInfo', response, 86400000);
          storeWithExpiration.set('user.token', response['Access-Token'], 86400000);
          commit('SET_USERINFO', response);  
          commit('SET_TOKEN', response['Access-Token']);  
          resolve();      
        }).catch(error => {
          reject(error);
        });
   
      });
    },*/
  }
};

export default user;

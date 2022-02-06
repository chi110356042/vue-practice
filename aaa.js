Vue.component('login', {
    template: `
  <form>
       <input type="text" name="account" placeholder="請輸入帳號"><br>
       <input type="password" name="psd" placeholder="請輸入密碼"><br>
       <input type="submit" value="登入" name="login" class="login" >
       </form>
      
    `,
  });
  var app = new Vue({
    el: '#all',
    data: {
      acc:aaa,
      pass:111
     
    }
  });
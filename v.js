Vue.component('trello-footer', {
  template: `
  <div class="Footer">

      <img class="atlassian-logo-small blue"
        src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg"
        width="150" style="display:block; margin:auto;">
      <p class="down">範本&nbsp&nbsp價格&nbsp&nbspApps&nbsp&nbsp工作機會
        &nbsp&nbsp部落格&nbsp&nbsp開發者&nbsp&nbsp關於&nbsp&nbsp求助&nbsp&nbspcookie設定</p>

    </div>
  `,
});
Vue.component('trello-main', {
  template: `
  <div class="Main">

  <p style="font-size:13pt;
  font-weight: bolder;
  font-family:Microsoft JhengHei;">登入 Trello</p>
     <div class="check">
       <form><br>
         <input type="text" name="mail" class="mail" placeholder="輸入電子郵件" id="mymail" >
         <img src="bad.png" class="bad" onclick="myFunction2()">
       </form><br>
       <form>
         <input type="password" name="password" class="password" placeholder="輸入密碼" id="myInput" >
         <img src="eye.png" class="eye" onclick="myFunction()">
       </form>
       <br>
       <form>
         <input type="submit" value="登入" name="login" class="login" >
         <p style="font-size:10pt">or</p>
         <button type="submit" class="google"><img src="google.png" width="15" height="15">&nbsp用Google登入</button>
         <br><br>
       </form>
     </div>
     <div class="line1"></div>
     <p>
       <a href="cantpass.html" target="_blank" onclick="location.href='cantpass.html'"
         style="text-decoration:none;color:rgb(0,82,204);font-size:10pt; font-family:-apple-system">無法登入？</a>・
       <a href="register.html" target="_blank" onclick="location.href='register.html'"
         style="text-decoration:none;color:rgb(0,82,204);font-size:10pt; font-family:-apple-system">註冊帳號</a></p>
   
   <div class="center">
     <a href="cantpass.html" target="_blank"
       style="text-decoration:none;color:rgb(0,82,204);font-size:9pt; font-family:-apple-system">隱私政策</a>・
     <a href="register.html" target="_blank"
       style="text-decoration:none;color:rgb(0,82,204);font-size:9pt; font-family:-apple-system">服務條款</a>
     <br><br>
     </div>
   <div class="language">
     <form>
       <select name="YourLocation">
         <option value="choose-one" id="choose" disabled="true">請選取語言...</option>
         　<option value="Taipei">Cestina</option>
         　<option value="Taoyuan">Deutsch</option>
         　<option value="Hsinchu">English</option>
       </select>
     </form>
   </div>
   <div class="line2"></div>
   
   </div>
  `,
});
Vue.component('language', {
  template: `
  <div class="language">
      <form>
        <select name="YourLocation">
          <option value="choose-one" id="choose" disabled="true">請選取語言...</option>
          　<option value="Taipei">Cestina</option>
          　<option value="Taoyuan">Deutsch</option>
          　<option value="Hsinchu">English</option>
        </select>
      </form>
    </div>
  `,
});
Vue.component('logo', {
  template: `
  <div class="logo">
  <img alt="Trello" 
      src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg"
      width="140" height="70" style="display:block; margin:auto;"></div>
  `,
});
Vue.component('left', {
  template: `
  
  <img class="left" src="left.png" width="340" height="327">
  
  `,
});
Vue.component('right', {
  template: `
  <div>
  <img class="right" src="right.png" width="340" height="290">
  </div>
  `,
});


new Vue({
  el: '#all',
  delimiters: ['${', '}'],
  data: {
    mail: "",
    pasd: "",
    nomail: false,
    nopasd: false,
    seen: '',
    unseenImg: "eye.jpg",
    seenImg: "eye.jpg",
    eyetxt: "",
    pwdType: false, 

  },
  methods: {
    clickme: function (mail, pasd) {

      if (this.mail == "" && this.pasd != "") {
        this.nomail = true
        event.preventDefault();
        alert("缺少電子郵件")

      }
      else if (this.mail == "" && this.pasd == "") {
        alert("缺少電子郵件")
        event.preventDefault();
        this.nomail = true

      }
      else if (this.mail != "" && this.pasd == "") {
        alert("這個使用者名稱沒有任何帳號")
        event.preventDefault();
        this.nopasd = true

      }
      else
        alert("登入成功！")

    },
 
    changeType: function () {
      this.seen = !this.seen;
      this.pwdType = !this.pwdType;
    }


  }
})

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function myFunction2() {
  var x = document.getElementById("mymail");
  if (x.value != "")
    x.value = "";

}


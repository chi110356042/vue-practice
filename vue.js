


export default {
  data() {
    return {
      seen: "",
      unseenImg: require("eye.png"),   //看不见密码时小眼睛的显示图片地址
      seenImg: require("eye.png"),   //看得见密码时小眼睛的显示图片地址
      eyeTxt: "",
      pwdType: false   //此时文本框隐藏，显示密码框 
    };
  },
  methods: {
  	changeType: function() {
     	this.seen = !this.seen;   //小眼睛的变化
     	this.pwdType = !this.pwdType;   //跟着小眼睛变化，密码框隐藏，显示文本框 内容就显示了
    },
    hoverEye: function(event) {
    	this.seen = !this.seen;
    },
    outEye: function(event) {
    	this.seen = !this.seen;
    }
  }
};

 
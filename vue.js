


export default {
  data() {
    return {
      seen: "",
      unseenImg: require("eye.png"),   
      seenImg: require("eye.png"),   
      eyeTxt: "",
      pwdType: false  
    };
  },
  methods: {
  	changeType: function() {
     	this.seen = !this.seen;  
     	this.pwdType = !this.pwdType;   
    },
    hoverEye: function(event) {
    	this.seen = !this.seen;
    },
    outEye: function(event) {
    	this.seen = !this.seen;
    }
  }
};

 

 
    <template>
        <div class="mylogin">
          <div class="head">
              <img src="../../assets/back.png" @click="back()"/>
              <span>會員登錄</span>
          </div>
          <div class="main">
              <input type="text" placeholder="手机号"/>
              <input :type="pwdType" class="psd" placeholder="密码" maxlength="20"/>
              <img :src="openeye" class="eye" alt="" @click="changeType()">
          </div>
        </div>
      </template>
      
      <script>
        export default {
          data() {
            return {
              pwdType: 'password', // 密码类型
              openeye: require('@/assets/beye.png'), //图片地址
            }
          },
          methods: {
            changeType() {
              this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
              this.openeye = this.openeye == require("@/assets/beye.png") ? require("@/assets/eye.png") : require("@/assets/beye.png");
            },
          }
        }
      </script>
      <style scoped lang="less">
        .mylogin{
            .head{
                width: 100%;
                height: 1.365853rem;
                line-height: 1.365853rem;
                background: #fff;
                text-align: center;
                position:fixed;
                z-index: 999;
                top:0;
                border-bottom: 0.02439rem solid rgb(239,239,239);
                span{
                    font-size: 0.439024rem;
                }
                img{
                    position: relative;
                    left: -3.560975rem;
                    top: -0.091951rem;
                }
            }
            .main{
                margin-top: 1.365853rem;
                box-sizing: border-box;
                padding: 0.512195rem 0.341463rem;
                position: relative;
                input{
                    width: 9.365853rem;
                    height: 1.07317rem;
                    border: 0.02439rem solid rgb(239,239,239);
                    border-radius: 0.121951rem;
                    box-sizing: border-box;
                    padding-left: 0.268292rem;
                    font-size: 0.441463rem;
                    margin-bottom: 0.390243rem;
                }
                .eye{
                    position: absolute;
                    left: 7.978048rem;
                    top: 2.199024rem;
                }
            }
        }
        
        </style>
        
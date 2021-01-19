<template>
  <div class="login">
    <div class="login-left">
      <div>
        <span>厚德</span>
        <em></em>
        <span>自强</span>
      </div>
      <div class="bg-name">
        xx实验中学
      </div>
    </div>
    <div class="login-right">
      <div class="right-top">
        <div>{{systemName}}</div>
        <div>账户登录</div>
      </div>
      <el-form
        ref="ruleForm"
        :model="formInfo"
        :rules="loginFormRules"
        class="right-form"
      >
        <el-form-item label="" prop="userName">
          <el-input v-model.trim="formInfo.userName" placeholder="演示账号: test"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input type="password" v-model.trim="formInfo.password" placeholder="演示密码: test"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {systemLogin} from '../../assets/js/json.path'
  import {setDocumentTitle} from '../../assets/js/util'
export default {
  data() {
    return {
      formInfo: {
        userName: "",
        password: "",
      },
      systemName:'测试学校',
      //验证规则
      loginFormRules: {
        userName: [
          { required: true, message: "请输入账户", trigger: "change" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) return;
        this.$router.push({ name: "pandect" });
      });
    },
  },
  created(){
    this.$axios.get(systemLogin).then(res=>{
      if(res.status===200){
        const data = res.data
        let systemName = data.systemName
        localStorage.systemName=systemName
        this.systemName = systemName
        setDocumentTitle(systemName)

      }
    })
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  align-items: center;
  background-color: #fff;
}
.login-left {
  width: 65%;
  height: 100%;
  background: url("../../assets/img/login/bg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .bg-name{
    background: url("../../assets/img/login/bg_name.png") no-repeat center center;
    position: absolute;
    font-size: 59px;
    color: #3191F3;
    bottom: 116px;
    width: 100%;
    height: 200px;
  }

  > div {
    font-size: 100px;
    color: rgba(216, 216, 216, 1);
    display: flex;
    align-items: center;
    margin-top: 12%;
    justify-content: center;

    // margin: auto;
    
    // justify-content: center;
    // left: 15%;
    // top: 18%;
    em {
      margin: 0 82px;
      width: 28px;
      height: 28px;
      background: linear-gradient(
        180deg,
        rgba(70, 231, 253, 1) 0%,
        rgba(35, 121, 236, 1) 100%
      );
      border-radius: 50%;
    }
  }
}
.login-right {
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .right-top {
    > div {
      text-align: center;
      &:first-child {
        font-size: 48px;
        line-height: 58px;
        color: rgba(51, 51, 51, 1);
      }
      &:last-child {
        font-size: 36px;
        line-height: 52px;
        color: rgba(51, 51, 51, 1);
        margin-top: 84px;
        margin-bottom: 63px;
      }
    }
  }
  .right-form {
    margin: 0 auto;
    /deep/.el-form-item {
      width: 403px;
      height: 48px;
      // margin-left: 104px;
      margin-bottom: 39px;
      input {
        height: 48px;
        border: 1px solid rgba(153, 153, 153, 1);
        font-size: 16px;
        line-height: 24px;
        color: rgba(51, 51, 51, 1);
      }
      button {
        width: 403px;
        height: 60px;
        background: rgba(38, 129, 237, 1);
        border-radius: 0;
        font-size: 24px;
        line-height: 35px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>

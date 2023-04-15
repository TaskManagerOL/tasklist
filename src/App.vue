<template>
  <div>
    <div id="setting">
      <div @mouseover="Over" :style="Overstyle" id="settingico">
        <img src="./assets/settings.png">
      </div>
      <div @mouseover="Over" @mouseleave="Leave" id="settingsidebar" :style="sidebarstyle">
        <div @click="Top" id="settingtop">
          <span :style="topstyle" class="iconfont">&#xe9ba;</span>
        </div>
        <div @click="Clock" id="settingclock">
          <span :style="clockstyle" class="iconfont">&#xe630;</span>
        </div>
        <div id="settingshow">
          <span></span>
          <span></span>
        </div>
        <ul>
          <li><img src="./assets/Profile.jpg" alt="头像" id="Profile"><a href="#">{{ UserID }}</a><span>已签到{{ signuptime }}天</span></li>
          <li>暗杀清单</li>
          <li>一日三餐</li>
          <li>天天开心</li>
          <li>垃圾成堆</li>
          <li>放着我来</li>
          <li>了解更多</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

//该变量用于记录用户ID 存入数据库 且很重要
const UserID = ref("登录/注册")

//该变量用于记录签到时间 存入数据库
const Signintime = new Date("04 09 2023").getTime();
const NowTime = new Date().getTime();
const Time = (NowTime, Signintime) => {
  return Math.floor((NowTime - Signintime)/(24 * 3600 * 1000))
}
const signuptime = ref(Time(NowTime, Signintime))


//以下用于记录按钮变化 可以不存入loctstroge和数据库
const sidebarstyle = ref("") 
const topstyle = ref({ color: "#969ba7" })
const clockstyle = ref({ color: "#969ba7" })
let isPofTop = 0;
let isPofClock = 0;

const Top = () => {
  topstyle.value.color = ++isPofTop % 2 ? "#1296db" : "#969ba7";
  sidebarstyle.value = isPofTop % 2 ? { width: "250px", opacity: 1, visibility: "visible" } : "";
}
const Clock = () => {
  clockstyle.value.color = ++isPofClock % 2 ? "#1296db" : "#969ba7";
}

//以下用于绑定齿轮和sidebar
const Overstyle = ref("")
const Over = () => {
  Overstyle.value = {
    transform: "rotate(240deg)",
    transition: "all 0.5s ease-in-out"
  }
}
const Leave = () => {
  if (isPofTop % 2 == 0) {
    Overstyle.value = {
      transform: "rotate(0deg)",
      transition: "all 1.5s ease-in-out"
    }
  }
}
</script>

<style>
  @font-face {
  font-family: 'iconfont';  /* Project id 4008251 */
  src: url('//at.alicdn.com/t/c/font_4008251_zz386mrflqh.woff2?t=1681209268157') format('woff2'),
       url('//at.alicdn.com/t/c/font_4008251_zz386mrflqh.woff?t=1681209268157') format('woff'),
       url('//at.alicdn.com/t/c/font_4008251_zz386mrflqh.ttf?t=1681209268157') format('truetype');
 }

  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

  body {
    background-color: #000000;
    margin: 0;
    padding: 0;
    
  }

  #settingico{
    position: absolute;
    width: 50px;
    height: 50px;
    right: 20px;
    top: 30px;
    transition: all 1.5s ease-in-out;
    z-index: 9;
  }

  #settingsidebar {
    position: absolute;
    right: 0;
    width: 80px;
    height: 100%;
    background-color: #181818;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  #settingico img {
    width: 50px;
    height: 50px;
    user-select: none;
    -webkit-user-drag: none;
    caret-color: rgba(0,0,0,0);
  }

  #settingico:hover~#settingsidebar {
    width: 250px;
    opacity: 1;
    visibility: visible;
    transition: all 0.5s ease-in-out;
  }

  #settingsidebar:hover {
    width: 250px;
    opacity: 1;
    visibility: visible;
    transition: all 0.5s ease-in-out;
  }

  #settingtop {
    position: absolute;
    width: 36px;
    height: 36px;
    left: 30px;
    top: 40px;
    z-index: 9;
  }

  #settingclock {
    position: absolute;
    width: 36px;
    height: 36px;
    left: 69px;
    top: 39px;
    z-index: 9;
  }

  #settingtop:hover~#settingshow :nth-child(1) {
    width: 36px;
    height: 36px;
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  #settingclock:hover~#settingshow :nth-child(2) {
    width: 36px;
    height: 36px;
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  #settingshow {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 36px;
    left: 30px;
    top: 40px;
    border-radius: 50%;
  }

  #settingshow span{
    width: 24px;
    height: 24px;
    background-color: #686b74;
    border-radius: 50%;
    margin-right: 15px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    caret-color: rgba(0,0,0,0);
  }

  #settingtop .iconfont{
    font-size: 24px;
    padding-left: 6px;
    line-height: 36px;
    color: #969ba7;
    user-select: none;
    cursor: pointer;
    caret-color: rgba(0,0,0,0);
  }

  #settingclock .iconfont{
    font-size: 24px;
    padding-left: 6px;
    line-height: 36px;
    color: #969ba7;
    user-select: none;
    cursor: pointer;
    caret-color: rgba(0,0,0,0);
  }

  #setting ul {
    width: 60%;
    height: 80%;
    position: absolute;
    top: 10%;
    right: 20%;
  }

  #setting ul li {
    list-style:none;
    font-size: 26px;
    color: #969ba7;
    font-weight: 900;
    white-space: nowrap;
    user-select: none;
    margin-bottom: 20px;
    text-align: center;
  }

  #Profile {
    width: 50px;
    height: 50px;
    padding-right: 10px;
    border-radius: 50%;
  }

  #setting ul :nth-child(1) a {
    font-size: 20px;
    background-image: linear-gradient(to top left,#3CA55C,#B5AC49);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
    position: absolute;
  }

  #setting ul :nth-child(1) a:active {
    background-image: linear-gradient(to top left,#24FE41,#FDFC47);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #setting ul :nth-child(1) span {
    font-size: 18px;
  }
  </style>

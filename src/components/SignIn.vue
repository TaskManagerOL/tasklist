<template>
    <div class="main">
        <div class="signDiv"></div>
    </div>
</template>

<script setup>
//注册页面，暂时先写了时钟先
</script>

<style scoped>
    body {
        padding: 0;
        margin: 0;
    }

    .main {
        position: relative;
        height: 100vh;
        width: 100vw;
        background-color: #000;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .signDiv {
        width: 48vw;
        height: 50vh;
        min-width: 400px;
        min-height: 400px;
        background-color: #fff;
        border-radius: 50px;
        background: rgba(255, 255, 255, 0.2);    
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        border-radius: 25px;
        box-shadow:inset 0 0 6px rgba(255, 255, 255, 0.2);
    }
</style>
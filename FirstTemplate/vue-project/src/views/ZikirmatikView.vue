<template>
    
    <div class="zikirmatik">
        <p class="title">Zikirmatik</p>
        <button @click="increaseCounter()">{{ counterData.count }}</button>
    </div>
</template>

<script setup>

import {reactive} from 'vue'

const counterData = reactive({
    count:0
})
function increaseCounter(){

counterData.count++
}
</script>

<style>
    body{
        background-color: #1f2937;

    }
    .title{
        display: block;
        text-align: center;
        font-size: 50px;
        color: black;
    }
    .zikirmatik{
        width: 300px;
        height: 200px;
        margin: auto;
        border: 3px solid #21ad75;
        position: relative;
    }
    .zikirmatik button{
        display: block;
        margin: auto;
        margin-top: 15px;
        width: 70px;
        font-size: 24px;
        text-align: center;
        cursor: pointer;
        outline: none;
        color: #fff;
        background-color: #04AA6D;
        border: none;
        border-radius: 7px;
        box-shadow: 0 5px #999;
    }
    .zikirmatik button:active {
    background-color: #3e8e41;
    box-shadow: 0 2px #666;
    transform: translateY(4px);
}
</style>
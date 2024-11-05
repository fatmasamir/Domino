<template>
    <div class="content-agents">
        <div class="title-sec">
            <h6>الوكلاء</h6>
            <a href="moreShow">رؤية المزيد</a>
        </div>

        <ul v-for="list in lists" :key="list">
            <li>
                <img :src="list.icon">
                {{ list.name }}
            </li>
            <li class="icon_coins">
                <img src="@/assets/images/coins.svg" /> {{ list.price }}
            </li>
            <li class="group">
                <img src="@/assets/images/man.svg" />
                <img src="@/assets/images/man.svg" />
                <img src="@/assets/images/+50.svg" />

            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';
let lists = ref([{
    name: "Dena",
    icon: new URL('@/assets/images/man.svg', import.meta.url).href,
    price: "15.00000000",
    image_madilia: new URL('@/assets/images/military.svg', import.meta.url).href
},{
    name: "Dena",
    icon: new URL('@/assets/images/man.svg', import.meta.url).href,
    price: "15.00000000",
    image_madilia: new URL('@/assets/images/military.svg', import.meta.url).href
},{
    name: "Dena",
    icon: new URL('@/assets/images/man.svg', import.meta.url).href,
    price: "15.00000000",
    image_madilia: new URL('@/assets/images/military.svg', import.meta.url).href
}]);
</script>
<style lang="scss" scoped>
.content-agents {
    overflow: auto;
    padding: 30px 10px;

    .title-sec {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            color: #989898;
            text-decoration: none;

        }

    }

    ul {
        margin-top: 20px;
        padding: 0px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .number {
            color: #FDC800
        }

        .number_phone {
            width: 90px;
        }

        li {
            text-align: center;
            min-width: 143px;
        }
    }
     .icon_coins img{
        width: 20px;
        height: 20px;    display: inline-block;
        vertical-align: sub;
     }
    .group {
        img{
            position: relative;
            width: 40px;
            margin-right: -21px;
        }
    }
}
</style>
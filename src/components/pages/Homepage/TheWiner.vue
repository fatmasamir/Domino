<template>
    <div class="content-winer">
        <div class="title-sec">
            <h6>الـ 10 الأوائل </h6>
            <a href="moreShow">رؤية المزيد</a>
        </div>
        <ul class="tab">
            <li :class="Tabcontent == list.value ? 'active' : ''" @click="Tabcontent = list.value"
                v-for="list in listTab" :key="list">
                {{ list.name }}
            </li>
        </ul>
        <div class="content-tab">
            <div v-if="Tabcontent == 'Ranking'"><TheTop10/></div>
            <div v-if="Tabcontent == 'shipping'">fff</div>
            <div v-if="Tabcontent == 'playDaily'">sss</div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import TheTop10 from "./TheTop10.vue"
let Tabcontent = ref('Ranking');
let listTab = ref([{ name: 'الترتيب', value: 'Ranking' }, { name: 'الشحن', value: 'shipping' }, { name: 'اللعب اليومي', value: 'playDaily' }])
</script>
<style lang="scss" scoped>
.content-winer {
    overflow-x:auto ;
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

    .tab {
        display: flex;
        margin-top: 10px;
        gap: 30px;
        min-width: fit-content;
        padding: 5px;
        font-size: 15px;
        cursor: pointer;
        color: #858585;

        .active {
            color: #DAA553;
            border-bottom: 1px solid #DAA553;

        }
    }
}
</style>
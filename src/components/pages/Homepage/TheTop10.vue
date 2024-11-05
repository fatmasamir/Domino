<template>
    <ul v-for="list in lists" :key="list">
        <li class="number">
            <span v-if="list.number == 10">
                <img src="@/assets/images/gold.svg" /></span>

            <span v-else-if="list.number == 9">
                <img src="@/assets/images/selver.svg" /></span>

            <span v-else-if="list.number == 8">
                <img src="@/assets/images/pronse.svg" /></span>
            <span v-else>
                {{ list.number }}</span>
        </li>
        <li>
            <img :src="list.icon" />
        </li>
        <li class="number_phone">
            {{ list.number_phone }}
        </li>
        <li>
            <img :src="list.image_madilia" />
        </li>
    </ul>
</template>
<script setup>
import { ref } from 'vue';

let lists = ref([{
    number: 10,
    icon: new URL('@/assets/images/image-icon.svg', import.meta.url).href,
    number_phone: "025454878",
    image_madilia: new URL('@/assets/images/military.svg', import.meta.url).href
}, {
    number: 9,
    icon: new URL('@/assets/images/image-icon.svg', import.meta.url).href,
    number_phone: "025454878",
    image_madilia: new URL('@/assets/images/military.svg', import.meta.url).href
}, {
    number: 8,
    icon: new URL('@/assets/images/image-icon.svg', import.meta.url).href,
    number_phone: "025454878",
    image_madilia: new URL('@/assets/images/military.svg', import.meta.url).href
}, {
    number: 7,
    icon: new URL('@/assets/images/image-icon.svg', import.meta.url).href,
    number_phone: "025454878",
    image_madilia: new URL('@/assets/images/military.svg', import.meta.url).href
}, {
    number: 6,
    icon: new URL('@/assets/images/image-icon.svg', import.meta.url).href,
    number_phone: "025454878",
    image_madilia: new URL('@/assets/images/military.svg', import.meta.url).href
}, {
    number: 5,
    icon: new URL('@/assets/images/image-icon.svg', import.meta.url).href,
    number_phone: "-",
    image_madilia: new URL('@/assets/images/military.svg', import.meta.url).href
}]);

</script>
<style lang="scss" scoped>
ul {
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .number {
        color: #FDC800
    }
    .number_phone{
        width: 90px;
    }

    li {
        text-align: center;
        min-width: max-content;
        padding: 10px;

  
        @media screen and (max-width: 1500px) {
    
            min-width: max-content;
        padding: 10px;
}
@media screen and (max-width: 993px) {
        min-width: max-content;
        padding: 10px;
}

    }
}
</style>
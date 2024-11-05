<template>
    <div class="content">
        <div class="cards-info">
            <div class="card " v-for="card in cardesTop " :key="card">
                <h6>{{ card.name }}</h6>
                <div class="content mb-3">
                    <span class="image-number"><img :src="card.icon">{{ card.number }} K</span>
                </div>
                <h6>92.3K</h6>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <shoppingShaps />
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-9">
                <shippingShaps />
            </div>
            <div class="col-md-3">
                <div class="card text-center  py-4 px-3">
                    <h6>ارسال كوينزات الى اللاعبين</h6>
                    <img src="@/assets/images/coins.svg" class="coins my-5">
                    <button @click="showSendCoins = true">إرسال</button>
                </div>
            </div>
        </div>
        <popupSendCoins @closepopup="showSendCoins = false" v-show="showSendCoins"/>
    </div>
</template>
<script setup>
import popupSendCoins from "@/components/pages/shopping/popup-send-coins.vue"
import shoppingShaps from '@/components/pages/shopping/shopping-shaps.vue';
import shippingShaps from '@/components/pages/shopping/shipping-store.vue';
import { ref } from "vue";
const showSendCoins = ref(false)
let cardesTop = ref([
    {
        name: "الكوينزات",
        icon: new URL('@/assets/images/icon.svg', import.meta.url).href,
        number: "92.3"
    },
    {
        name: "الماس",
        icon: new URL('@/assets/images/icon.svg', import.meta.url).href,
        number: "92.3"
    },
    {
        name: "ايطار الصورة",
        icon: new URL('@/assets/images/icon.svg', import.meta.url).href,
        number: "92.3"
    },
    {
        name: "ايطار الدردشة",
        icon: new URL('@/assets/images/icon.svg', import.meta.url).href,
        number: "92.3"
    },
    {
        name: "قطع الدومينو",
        icon: new URL('@/assets/images/icon.svg', import.meta.url).href,
        number: "92.3"
    },
])
</script>
<style scoped lang="scss">
.content {
    .cards-info {
        padding: 0px 13px;
        gap: 20px;

        display: flex;

        .card {
            position: relative;
            top: 0px;
            width: calc(100%/5);
            cursor: pointer;
            transition: .5s all ease-in-out;
            padding: 10px;

            .content {
                width: 100%;
                margin: 0px;
                display: flex;
                justify-content: space-between;
                padding: 0px;
                align-items: end;

                .image-number {
                    display: flex;
                    gap: 10px;
                }
            }

            &:hover {
                top: -10px
            }
        }
    }
}

select {
    width: max-content;
    background: #F4F4F4;
    border: 0px;
    padding: 0px 10px;
    border-radius: 8px;
}

.sec-content {

    background: #007B55;
    background-size: cover;
    position: relative;
    width: 100%;
    height: auto;
    padding: 5px 35px;
    box-shadow: 0px 0px 6px rgba(36, 115, 179, 0.4901960784);
    margin: 0px;
    border-radius: 10px;

    .icon_person {
        position: absolute;
        left: -10px;
        top: 15px;
    }

    .statistic {
        align-items: center;
        gap: 20px;
        display: flex;

        h3,
        h5 {
            color: white
        }
    }
}

.content2 {
    background: #006C9C;

}

.coins {
    width: 117px;
    margin: 20px auto;
    display: block;
}

button {
    background: #3BBA73;

}

@media screen and (max-width: 993px) {
    .content {
        padding: 0px;
        margin: auto;
    }

    .row>div {
        padding: 5px !important;
    }


    .content .cards-info .card {
        margin-bottom: 30px;
    }

    .content  .cards-info {
        flex-direction: column;

        .card {margin: 8px;width: 100%;}
    }

}
</style>
<template>
    <div class="content">
        <div class="cards-info">
            <div class="row">
                <div class="col-md-4 ">
                    <div class="card ">
                        <h6>المستخدمين الناشطين</h6>
                        <div class="content mb-3">
                            <span class="image-number"><img src="@/assets/images/icon.svg">15.9%</span>
                            <span><img src="@/assets/images/chart-3.svg"></span>
                        </div>
                        <h6>92.3K</h6>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card ">
                        <h6>المستخدمين الناشطين</h6>
                        <div class="content mb-3">
                            <span class="image-number"><img src="@/assets/images/icon.svg">15.9%</span>
                            <span><img src="@/assets/images/chart-2.svg"></span>
                        </div>
                        <h6>92.3K</h6>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="card ">
                        <h6>المستخدمين الناشطين</h6>
                        <div class="content mb-3">
                            <span class="image-number"><img src="@/assets/images/icon.svg">15.9%</span>
                            <span><img src="@/assets/images/chart-1.svg"></span>
                        </div>
                        <h6>92.3K</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-lg-8 col-md-12  ">
                <div class="card p-4">
                    <h6>المعاملات الجديدة</h6>
                    <select>
                        <option>2024</option>
                        <option>2023</option>
                    </select>
                    <chartLine />
                </div>
            </div>

            <div class="col-lg-4 col-md-12 ">
                <div class="card pb-5">
                    <h6 class="mb-4 p-4">الألعاب</h6>
                    <Donuts />
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-lg-8  ">
                <div class="card p-3">
                    <Agents />
                </div>
                <div class="row mt-4 p-0 m-0">
                    <div class="col-md-8 p-0" style="padding-left: 10px !important
                    ;"> 
                        <div class="sec-content mb-4">
                            <img class="icon_person" src="@/assets/images/icon_person.svg">
                            <div class="statistic">
                                <div class="">
                                    <h3>31.5994</h3>
                                    <h5>الوكالات</h5>
                                </div>
                                <div>
                                    <Basic />
                                </div>
                            </div>
                        </div>
                        <div class="sec-content content2">
                            <img class="icon_person" src="@/assets/images/icon-email.png">
                            <div class="statistic">
                                <div class="">
                                    <h3>31.5994</h3>
                                    <h5>الوكالات</h5>
                                </div>
                                <div class="Agencies">
                                    <Basic />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 m-0 p-0 " style="padding-right: 10px !important
                    ;">
                        <div class="card text-center px-3 py-4 ">
                            <h6>ارسال كوينزات الى اللاعبين</h6>
                            <img src="@/assets/images/coins.svg" class="coins">
                            <button @click="showSendCoins = true">إرسال</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4   ">
                <div class="card">
                    <TheWiner />
                </div>
            </div>

        </div>
        <popupSendCoins @closepopup="showSendCoins = false" v-show="showSendCoins"/>
    </div>
</template>
<script setup>
import popupSendCoins from "@/components/pages/shopping/popup-send-coins.vue"
import chartLine from '@/components/pages/Homepage/chartLine.vue';
import Donuts from '@/components/pages/Homepage/Donuts.vue';
import Agents from "@/components/pages/Homepage/Agents.vue"
import TheWiner from '@/components/pages/Homepage/TheWiner.vue';
import Basic from '@/components/pages/Homepage/Basic.vue'
import { ref } from "vue";
const showSendCoins = ref(false)
</script>
<style scoped lang="scss">
.content {
    .cards-info {
        .card {
            position: relative;
            top: 0px;
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
button{
    background: #3BBA73;

}

@media screen and (max-width: 993px) {
    .content {
        padding: 0px;
        margin: auto;
    }

    .row>div {
        padding: 10px !important;
    }


    .content .cards-info .card {
        margin-bottom: 30px;
    }

}
</style>
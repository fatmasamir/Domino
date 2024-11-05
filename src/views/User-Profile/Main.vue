<template>
    <div class="UsersProfile">
        <div class="alert">حقق اللاعب المرتبة الأولى في لعبة الملك اوليمبوس</div>
    </div>
    <div class="row ">
        <div class="col-md-6">
            <div class="card ">
                <userInfo />
            </div>
        </div>
        <div class="col-md-3 min-card" style="padding-right: 10px !important
                    ;">
            <div class="card card-level text-center px-3 py-4 ">
                <h6>  تغير مستوي VIP </h6>
                <button @click="showlevelVip = true">تغيير</button>
                <h6 class="mt-4 pt-2">جعل المستخدم وكيل</h6>
                <img src="@/assets/images/coins-in-hand.svg" class="coins">
                <button>تغيير</button>
            </div>
        </div>
        <div class="col-md-3 min-card" style="padding-right: 10px !important
                    ;">
            <div class="card text-center px-3 py-4 ">
                <h6>ارسال كوينزات الى اللاعبين</h6>
                <img src="@/assets/images/coins.svg" class="coins">
                <button @click="showSendCoins = true">إرسال</button>
            </div>
        </div>
    </div>
    <div class="row numbers_card mt-4">
        <div class="col-md-4">
            <div class="card"><img src="@/assets/images/profile-card1.svg"> <span>19651.5B</span></div>
        </div>
        <div class="col-md-4">
            <div class="card"><img src="@/assets/images/profile-card2.svg"> <span>19651.5B</span></div>
        </div>
        <div class="col-md-4">
            <div class="card"><img src="@/assets/images/profile-card3.svg"> <span>19651.5B</span></div>
        </div>

    </div>
    <RecordPlay/>
    <ShippingHistory/>
    <Bag/>
    <popupSendCoins @closepopup="showSendCoins = false" v-show="showSendCoins"/>
    <popuplevelVip @closepopup="showlevelVip = false" v-show="showlevelVip"/>
</template>
<script setup>
import userInfo from '@/components/pages/User-profile/card-info.vue';
import RecordPlay from "@/components/pages/User-profile/record-play.vue";
import ShippingHistory from "@/components/pages/User-profile/shipping-history.vue";
import popupSendCoins from "@/components/pages/shopping/popup-send-coins.vue"
import popuplevelVip from "@/components/pages/User-profile/popup-level-vip.vue"
import Bag from "@/components/pages/User-profile/bag.vue";
import { ref } from 'vue';
const showSendCoins = ref(false);
const showlevelVip = ref(false);
</script>
<style lang="scss" scoped>
.alert {
    background: #D8F6E3;
    padding: 20px;
    color: #03A84E;
}

.row {
    .card {
        padding: 20px;
    }

    .coins {
        width: 134px;
        height: 134px;
        margin: 50px auto;
        display: block;
    }
    .card-level{
        .coins{
    width: 100px;
    height: 100px;
    margin: 20px auto;
        }
    }
    .min-card{
        button{
            height: 34px !important;
    padding: 6px 0px;
    width: 56%;
    margin: auto;
    font-size: 14px;
        }
    }
}

.numbers_card {
    .card {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    img {
        width: 35.05px;
        height:30.05px;
    }
    span{
        font-size: 24px;
        font-weight: 700;
    }
}
</style>
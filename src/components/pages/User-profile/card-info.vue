<template>
    <section>
        <div class="edit-info" @click="openEditPopup = true">
            تعديل البيانات <img src="@/assets/images/Edit.svg">
        </div>
        <div class="content-flex-bettween">
            <div class="content-flex">
                <img src="@/assets/images/image-icon.svg" class="man-image">
                <div>
                    <div class="content-flex">
                        <img src="@/assets/images/man-type.svg">
                        <h4>Ahamed</h4>
                    </div>
                    <h6>025454878<span> : ID</span> </h6>
                </div>
            </div>
            <div class="content-flex"><img src="@/assets/images/military2.svg" class="military"> <img class="military2"
                    src="@/assets/images/military.svg">
            </div>
        </div>
        <ul class="list-info">
            <li><img src="@/assets/images/email-icon.svg"> name@email.com</li>
            <li><img src="@/assets/images/phone-icon.svg"> +20 12 345 789</li>
            <li>
                <div class="content-flex-bettween">
                    <div class="content-flex"><img src="@/assets/images/date.svg"> 20\10\2024</div>
                    <span>20 يوم</span>
                </div>
            </li>
        </ul>
        <div class="content-flex-bettween">
            <p>الحالة</p><img src="@/assets/images/star.svg">
        </div>
        <div class="alert">للبيع و الشراء التواصل على 01139526567</div>
        <editpopup v-if="openEditPopup" @closepopup="openEditPopup=false"/>
    </section>
</template>
<script setup>
 import { ref } from 'vue';
import editpopup from './edit-popup.vue';
 const openEditPopup=ref(false)
</script>
<style scoped lang="scss">
section {
    .edit-info {
        font-size: 11px;
        color: #3BBA73;
        text-align: end;
        cursor: pointer;
    }

    .content-flex {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .content-flex-bettween {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    h4 {
        margin: 0px;
        font-size: 24px;
        font-weight: 700;
    }

    h6 {
        margin: 0px;
        font-size: 20px;
        font-weight: 500;
        color: #888888;
        direction: ltr;
    }

    .man-image {
        width: 83px;
        height: 83px;
        border-radius: 100%;
    }

    .list-info {
        padding: 0px;
        margin-top: 30px;

        li {
            display: flex;
            gap: 25px;
            width: 40%;
            color: #888888;

            @media screen and (max-width: 993px) {
                display: block;
                width: 100%;
                img{
                    width: 20px;
                    margin: auto;
                }
            }

            span {
                color: #11C075
            }
        }

    }

    .alert {
        background: #D8F6E3;
        padding: 8px 25px;
        color: #03A84E;
    }

    .military {
        width: 50px;
    }

    .military2 {
        width: 70px;
    }
}
</style>
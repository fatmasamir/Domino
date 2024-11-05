<template>
    <popup class="popup-level-vip">
        <template #body>
            <h5 class="text-left py-2 title">المستوي الحالي: مستوي 21
            </h5>
            <h5>مستوي VIP:</h5>
            <ul class="list">
                <li>يمنح اللاعب في هذا المستو 4 اطارات مميزة </li>
                <li>يحصل اللاعب علي 10000 الف دهبة عنده وصوله الي هذا المستوي</li>
            </ul>
            <button>تغيير المستوي</button>
        </template>
    </popup>
</template>
<script setup>
import popup from '@/components/global/popup.vue';
const emits = defineEmits(['closepopup'])

</script>
<style lang="scss" scoped>
.feedback {
    font-size: 13px;
    color: #dc3545;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
}
</style>
<style lang="scss" scoped>
.popup-send-cions.content-popup .card {
    h3 {
        font-size: 25px;
    }
}
.list{
    padding: 15px ;
    color: #8B8B8B;
    width: 90%;
    li{
        list-style: disc;
    }
}
h5{
    font-weight: 700 !important;
}
button{
    width: 100%;
    margin-top: 20px;
}
</style>
<style>
.popup-level-vip.content-popup .card{
    width: 40%;
}
</style>
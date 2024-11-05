<template>
    <div class="card-fillter mb-2">
        <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false" @click="showDropdown = !showDropdown">
                ترتيب حسب
            </a>

            <ul class="dropdown-menu text-end" :class="showDropdown ? 'show' : ''">
                <li><a class="dropdown-item" href="#" @click="MakeSortingLast">التاريخ (الاقدم)</a></li>
                <li><a class="dropdown-item" href="#" @click="MakeSortingNew">التاريخ (الاحدث)</a></li>
            </ul>
        </div>
    </div>
    <Table :headers="headers" :data="items" @morebutton="morebutton"></Table>
    <popupUpdate @closepopup="showpopupUpdate = false" v-show="showpopupUpdate" :UpdateId="UpdateId"/>
</template>
<script setup>
import popupUpdate from '@/components/pages/level/popup-update.vue';
import Table from '@/components/global/table.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const date = ref(new Date());
const showpopupUpdate =ref(false);
const showDropdown =ref(false);
let router = useRouter();
let headers = ref([
    { name: "المستوى", key: "level" },
    { name: "المرتبة", key: "Rank" ,type:"image"},
    { name: "الايطار ", key: "framework" ,type:"image"},
    { name: "المكافأة", key: "pones" ,type:"ListsImages"},
    { name: "", key: "actionButton", button_name: "تعديل", type: "update" },
]);
let items = ref([
    {
        id: 1,
        level: '1-10',
        framework: new URL('@/assets/images/military3.svg', import.meta.url).href,
        Rank: new URL('@/assets/images/military3.svg', import.meta.url).href,
        pones: []

    },
    {
        id: 1,
        level: '1-10',
        framework: new URL('@/assets/images/military3.svg', import.meta.url).href,
        Rank: new URL('@/assets/images/military3.svg', import.meta.url).href,
        pones: [
            new URL('@/assets/images/bagimage.svg', import.meta.url).href,]

    },
    {
        id: 1,
        level: '1-10',
        framework: new URL('@/assets/images/military3.svg', import.meta.url).href,
        Rank: new URL('@/assets/images/military3.svg', import.meta.url).href,
        pones: [
            new URL('@/assets/images/bagimage.svg', import.meta.url).href,

            new URL('@/assets/images/bagimage.svg', import.meta.url).href,

            new URL('@/assets/images/bagimage.svg', import.meta.url).href,

            new URL('@/assets/images/bagimage.svg', import.meta.url).href
        ]

    },
]);
const UpdateId = ref(null);
let morebutton = (id) => {
    UpdateId.value = id;
    showpopupUpdate.value=true;
}


</script>
<style>
.card-fillter {
    display: flex;
    justify-content: end;
    margin: 0px;
    padding: 6px;
    gap: 20px;
    margin-left: 0px;


    .dropdown {
        width: auto;

        .btn {
            height: 42px;
            padding: 10px;
            background: #F4F4F4 !important;
            color: #8B8B8B;
        }
    }

    .search-svgrepo {
        width: 250px;
        position: relative;

        img {
            position: absolute;
            top: 10px;
            right: 5px;
            width: 15px;
        }

        input {
            width: 100%;
            height: 40px;
            padding-right: 25px;
            padding-top: 0px;
            background: #cdcdcd54;
            border: 0px;
        }
    }

    .content-flex {
        display: flex;
        align-items: center;
        gap: 10px;
    }
}

.p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {
    background: #f0f0f0;
    border: 0px;
    width: 127px;

}
</style>
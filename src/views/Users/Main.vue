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
        <div class="content-flex">
            <label>تصفية حسب التاريخ</label>
            <DatePicker v-model="date" showIcon fluid iconDisplay="input" />

        </div>
    </div>
    <Table :headers="headers" :data="items" @morebutton="morebutton"></Table>
</template>
<script setup>
import Table from '@/components/global/table.vue';
import DatePicker from "primevue/datepicker";
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const date = ref(new Date());
let router = useRouter();
let headers = ref([
    { name: "المركز", key: "place" },
    { name: "الاسم", key: "name",type:'namewithimage' },
    { name: "المرتبة", key: "placenumber" },
    { name: "ID", key: "ID" },
    { name: "البريد الالكتروني", key: "email" },
    { name: "الهاتف", key: "phone" },
    { name: "", key: "actionButton", button_name: "المزيد" },
]);
let items = ref([
    {
        id:1,
        place: 10,
        name: "Ahamed",
        placenumber: 10,
        ID: "025454878",
        email: "Name@email.com",
        phone: "025454878"

    },
    {
        id:2,
        place: 9,
        name: "Ahamed",
        placenumber: 1,
        ID: "025454878",
        email: "Name@email.com",
        phone: "025454878"

    },
    {
        id:3,
        place: 8,
        name: "Ahamed",
        placenumber: 1,
        ID: "025454878",
        email: "Name@email.com",
        phone: "025454878"

    },
    {
        id:4,
        place: 7,
        name: "Ahamed",
        placenumber: 1,
        ID: "025454878",
        email: "Name@email.com",
        phone: "025454878"

    },
    {
        id:5,
        place: 6,
        name: "Ahamed",
        placenumber: 1,
        ID: "025454878",
        email: "Name@email.com",
        phone: "025454878"

    },
    {
        id:6,
        place: 5,
        name: "Ahamed",
        placenumber: 1,
        ID: "025454878",
        email: "Name@email.com",
        phone: "025454878"

    },
    {
        id:7,
        place: 4,
        name: "Ahamed",
        placenumber: 1,
        ID: "025454878",
        email: "Name@email.com",
        phone: "025454878"

    },
    {
        id:8,
        place: 3,
        name: "Ahamed",
        placenumber: 1,
        ID: "025454878",
        email: "Name@email.com",
        phone: "025454878"

    },
    {
        id:9,
        place: 2,
        name: "Ahamed",
        placenumber: 1,
        ID: "025454878",
        email: "Name@email.com",
        phone: "025454878"

    },
    {
        id:10,
        place: 1,
        name: "Ahamed",
        placenumber: 1,
        ID: "025454878",
        email: "Name@email.com",
        phone: "025454878"

    }
]);
let morebutton = (id) => {
 router.push({name:'UserProfile',params:{id:id}})
}


</script>
<style>
.card-fillter {
    display: flex;
    justify-content: start;
    margin: 0px;
    padding: 6px;
    gap:20px;
    margin-left: 8%;

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
    .content-flex{
        display: flex;
        align-items: center;
        gap:10px;
    }
}
.p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input{
    background: #f0f0f0;
    border: 0px;
    width: 127px;

}
</style>
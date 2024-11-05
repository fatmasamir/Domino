<template>
    <div class="card record-play">
        <div class="content-flex-bettween">
            <h6>متجر الشحن </h6>
            <button class="add-button" @click="ShippingStore = true"> + إضافه</button>

        </div>
        <div class="content-flex-bettween my-3">
            <div class="card-fillter ">
                <div class="fillter-search_account">
                    <div class="content-flex">
                        <label>تصفية حسب </label>
                        <select>
                            <option>الجميع</option>
                        </select>
                    </div>
                </div>
            </div>

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
        <Table :headers="headers" :data="items" @morebutton="UpdateFun"></Table>
        <popupShippingStore v-show="ShippingStore" @closepopup="ShippingStore = false"/>
    </div>
</template>
<script setup>
import popupShippingStore from '@/components/pages/shopping/popup-shipping-store.vue';
import Table from '@/components/global/table.vue';
import DatePicker from "primevue/datepicker";
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const date = ref(new Date());
let router = useRouter();
const ShippingStore =ref(false);
let headers = ref([
    { name: "الصورة", key: "image", type: "image" },
    { name: "الفئة", key: "category" },
    { name: "المقدار", key: "duration" },
    { name: "السعر", key: "price", icon: 'icon' },
    { name: "", key: "actionButton", button_name: "تعديل", type: "update" }
]);
let items = ref([
    {
        id: 1,
        category: "الماس",
        image: new URL('@/assets/images/bagimage.svg', import.meta.url).href,
        duration: "مدى الحياة",
        price: "220",

    },

]);
const UpdateFun = () => {
    ShippingStore.value=true;
}


</script>
<style lang="scss" scoped>
.row .card {
    padding: 20px 0px !important;

    h6 {
        padding: 0px 20px;
        font-weight: 700;
        font-size: 15px;
    }
}

.content-flex-bettween {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
}

.dropdown {
    width: auto;

    .btn {
        height: 42px;
        padding: 10px;
        background: #F4F4F4 !important;
        color: #8B8B8B;
    }
}

.card-fillter {
    display: flex;
    justify-content: start;
    margin: 0px;
    padding: 6px 0px;
    gap: 20px;
    margin-left: 8%;



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

    .fillter-search_account select {
        width: 145px;
        border: 0px;
        background: #f0f0f0;
        height: 36px;
        border-radius: 9px;
        padding: 5px;
    }
}

.p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {
    background: #f0f0f0;
    border: 0px;
    width: 127px;

}

.reloading {
    padding: 4px 14px;
    height: 36px !important;
    font-size: 13px;
    text-align: end;
    display: block;
    margin: 12px 0px;
    margin-right: auto;
}


</style>
<style lang="scss">
.record-play {
    .p-datatable-table-container {
        box-shadow: 0px 0px 0px 0px;
        border-radius: 0px;
    }

    .table-style thead tr th:last-child,
    .table-style thead tr th:first-child {
        border-radius: 0px;
    }
}
</style>
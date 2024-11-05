<template>
    <popup class="popup-update">
        <template #body>
            <h3 class="text-center py-2 title">تعديل المستوى </h3>

            <form @submit.prevent="onSubmit">
                <div class="row  ">
                    <div class="col-md-6 mt-2">
                        <label for="exampleFormControlTextarea1" class="form-label">من </label>
                        <input type="text" class="form-control" id="form" name="form" v-bind="form"
                            :class="{ 'is-invalid': errors.form }"
                            oninput="this.value= this.value&&this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/\+/g,'').replace(/\./g,'');" />
                        <div class="invalid-feedback">{{ errors.form }}</div>
                    </div>
                    <div class="col-md-6 mt-2">
                        <label for="exampleFormControlTextarea1" class="form-label">إلى </label>
                        <input type="text" class="form-control" id="to" name="to" v-bind="to"
                            :class="{ 'is-invalid': errors.to }"
                            oninput="this.value= this.value&&this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/\+/g,'').replace(/\./g,'');" />
                        <div class="invalid-feedback">{{ errors.to }}</div>
                    </div>

                    <div class="col-md-6 mt-2">
                        <label for="exampleFormControlTextarea1" class="form-label">المرتبة </label>
                        <div class="content-input">
                            <Select :options="RankList" name="image" v-model="Rank_id"
                                class="w-full h-full flex items-center md:w-56 bg-transparent *:!text-[#333] no-border">
                                <template #value="slotProps">
                                    <div v-if="slotProps.value" class="flex items-center">
                                        <img :alt="slotProps.value.icon" :src="slotProps.value.icon"
                                            style="width: 32px" />
                                    </div>
                                    <span v-else>
                                        {{ slotProps.placeholder }}
                                    </span>
                                </template>
                                <template #option="slotProps">
                                    <img :alt="slotProps.option.icon" :src="slotProps.option.icon"
                                        style="width: 32px" />
                                </template>
                            </Select>
                            <div class="invalid-feedback">{{ errors.image }}</div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-2">
                        <label for="exampleFormControlTextarea1" class="form-label">الايطال </label>
                        <div class="content-input">
                            <Select :options="framworkList" name="framwork" v-model="framwork"
                                :class="{ 'is-invalid': errors.framwork }"
                                class="w-full h-full flex items-center md:w-56 bg-transparent *:!text-[#333] no-border">
                                <template #value="slotProps">
                                    <div v-if="slotProps.value" class="flex items-center">
                                        <img :alt="slotProps.value.icon" :src="slotProps.value.icon"
                                            style="width: 32px" />
                                    </div>
                                    <span v-else>
                                        {{ slotProps.placeholder }}
                                    </span>
                                </template>
                                <template #option="slotProps">
                                    <img :alt="slotProps.option.icon" :src="slotProps.option.icon"
                                        style="width: 32px" />
                                </template>
                            </Select>
                            <div class="invalid-feedback">{{ errors.image }}</div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-2 mb-2">
                        <label for="exampleFormControlTextarea1" class="form-label">نوع المكافأة </label>
                        <div class="content-input">
                            <Select :options="ponies" name="type_pons" v-model="type_pons"
                                :class="{ 'is-invalid': errors.type_pons }"
                                class="w-full h-full flex items-center md:w-56 bg-transparent *:!text-[#333] no-border">
                                <template #value="slotProps">
                                    <div v-if="slotProps.value" class="flex items-center">
                                        <img :alt="slotProps.value.icon" :src="slotProps.value.icon"
                                            style="width: 32px" /> {{ slotProps.value.name }}
                                    </div>
                                    <span v-else>
                                        {{ slotProps.placeholder }}
                                    </span>
                                </template>
                                <template #option="slotProps">
                                    <div v-if="slotProps.option.id != 1" class="flex items-center">
                                        <img :alt="slotProps.option.icon" :src="slotProps.option.icon"
                                            style="width: 32px" /> {{ slotProps.option.name }}
                                    </div>
                                    <div v-else>
                                        {{ slotProps.option.name }}
                                    </div>

                                </template>
                            </Select>
                        </div>
                    </div>
                    <div class="col-md-6 mt-2 " v-if="type_pons && type_pons.id !== 1">
                        <label for="exampleFormControlTextarea1" class="form-label">المقدار</label>
                        <input type="text" class="form-control" id="amount" name="amount" v-bind="amount"
                            :class="{ 'is-invalid': errors.amount }"
                            oninput="this.value= this.value&&this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/\+/g,'').replace(/\./g,'');" />
                        <div class="invalid-feedback">{{ errors.amount }}</div>
                    </div>
                </div>
                <button type="button" @click="newPoiesAddFun" class="newponies ">+ اضافة مكافأة أخرى </button>
                <div class="row" v-for="(pon, i) in newPoiesAdd" :key="pon">
                    <div class="col-md-6 mt-1">
                        <label for="exampleFormControlTextarea1" class="form-label">نوع المكافأة </label>
                        <div class="content-input">
                            <Select :options="ponies" name="type_pons" v-model="pon.type_pons"
                                :class="{ 'is-invalid': errors.type_pons }"
                                class="w-full h-full flex items-center md:w-56 bg-transparent *:!text-[#333] no-border">
                                <template #value="slotProps">
                                    <div v-if="slotProps.value" class="flex items-center">
                                        <img :alt="slotProps.value.icon" :src="slotProps.value.icon"
                                            style="width: 32px" /> {{ slotProps.value.name }}
                                    </div>
                                    <span v-else>
                                        {{ slotProps.placeholder }}
                                    </span>
                                </template>
                                <template #option="slotProps">
                                    <div v-if="slotProps.option.id != 1" class="flex items-center">
                                        <img :alt="slotProps.option.icon" :src="slotProps.option.icon"
                                            style="width: 32px" /> {{ slotProps.option.name }}
                                    </div>
                                    <div v-else>
                                        {{ slotProps.option.name }}
                                    </div>

                                </template>
                            </Select>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1" v-if="pon.type_pons && pon.type_pons.id !== 1">
                        <label for="exampleFormControlTextarea1" class="form-label">المقدار</label>
                        <input type="text" class="form-control" id="amount" name="amount" v-bind="pon.amount"
                            oninput="this.value= this.value&&this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/\+/g,'').replace(/\./g,'');" />
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-12 ">
                        <div class="text-center gap-2 d-flex buttons my-3">
                            <button class="send" v-if="!authStore.Update_use_profile">حفظ</button>
                            <button class="send" type="button" v-else>إنتظر .....</button><button class="cancel"
                                @click="closepopupFun" type="button">إلغاء</button>
                        </div>
                    </div>
                </div>
            </form>
        </template>
    </popup>
</template>
<script setup>
import Select from "primevue/select";
import popup from '@/components/global/popup.vue';
import { useForm } from "vee-validate";
import { onMounted, ref, watch } from "vue";
import { useAuthStore } from "@/stores/auth/index";
// auth store
const props = defineProps(['UpdateId']);
const authStore = useAuthStore();
import * as Yup from "yup";
const category_id = ref("");
const framwork = ref("");
const Rank_id = ref("");
const type_pons = ref("");
const newPoiesAdd = ref([]);

const ponies = ref([{
    name: "لا يوجد",
    id: 1
},
{
    name: "الماس",
    icon: new URL('@/assets/images/image-icon.svg', import.meta.url).href,
    id: 2
},
{
    name: "فضه",
    icon: new URL('@/assets/images/military.svg', import.meta.url).href,
    id: 3
}
])
const types = ref([
    {
        name: "الماس",
        icon: new URL('@/assets/images/image-icon.svg', import.meta.url).href,
        id: 1
    },
    {
        name: "فضه",
        icon: new URL('@/assets/images/military.svg', import.meta.url).href,
        id: 1
    }
])
const current_types = ref([
    {
        name: "الماس",
        icon: new URL('@/assets/images/image-icon.svg', import.meta.url).href,
        id: 1
    },
    {
        name: "فضه",
        icon: new URL('@/assets/images/military.svg', import.meta.url).href,
        id: 1
    }
])
const framworkList = ref([
    {
        name: "image1",
        icon: new URL('@/assets/images/image-icon.svg', import.meta.url).href,
        id: 1
    },
    {
        name: "image1",
        icon: new URL('@/assets/images/military.svg', import.meta.url).href,
        id: 1
    }
])

const RankList = ref([
    {
        name: "image1",
        icon: new URL('@/assets/images/image-icon.svg', import.meta.url).href,
        id: 1
    },
    {
        name: "image1",
        icon: new URL('@/assets/images/military.svg', import.meta.url).href,
        id: 1
    }
])
const emits = defineEmits(['closepopup'])
// meta
const { errors, handleSubmit, defineInputBinds, resetForm } = useForm({
    validationSchema: Yup.object({
        from: Yup.string().required("هذا الحقل مطلوب"),
        to: Yup.string().required("هذا الحقل مطلوب"),
        duration_daily: Yup.string().required("هذا الحقل مطلوب"),
        amount: Yup.string().required("هذا الحقل مطلوب"),
    }),
});

//from
const from = defineInputBinds("from");
const to = defineInputBinds("to");
const amount = defineInputBinds("amount");
const duration_daily = defineInputBinds("duration_daily");
let onSubmit = handleSubmit(async (values) => {
    if (values) {
        try {
            console.log("values", values);
            console.log("category_id", category_id.value);
            console.log("image_id", image_id.value.id);
            console.log("image_id", Rank_id.value.id);
            console.log("image_id", Rank_id.value.id);
            console.log("image_id", Rank_id.value.id);
            // let formdata = new FormData();
            // formdata.append('name', values.name);
            // formdata.append('email', values.email);
            // formdata.append('image', filesUpload.value);
            emits('closepopup');
        } catch (err) {
            console.log(err);
        }
    }
});
let newPoiesAddFun = () => {
    newPoiesAdd.value.push({ type_pons: null, amount: null })
}
let closepopupFun = ()=>{
        newPoiesAdd.value=[];
        emits('closepopup');
}
onMounted(()=>{
})
</script>
<style lang="scss" scoped>
.newponies {
    background: #03A84E26;
    color: #11C075;
    text-align: center;
    width: auto;
    margin: auto;
    padding: 10px;
    display: block;
}
</style>
<style lang="scss">
.popup-update.content-popup .card {
    margin-top: 10px !important;
    overflow-y: auto;
    max-height: 90%;

    h3 {
        font-size: 25px;
    }
}
</style>
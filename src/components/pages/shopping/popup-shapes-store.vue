<template>
    <popup class="popup-shapes-store">
        <template #body>
            <h3 class="text-center py-2 title">متجر الاشكال</h3>

            <form @submit.prevent="onSubmit">
                <div class="row  ">
                    <div class="col-md-12 ">
                        <label for="exampleFormControlTextarea1" class="form-label">الفئة </label>
                        <div class="content-input">
                            <Select v-model="category_id" :options="categories" optionLabel="name"
                                optionValue="id"></Select>
                            <div class="invalid-feedback">{{ errors.category }}</div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-2">
                        <label for="exampleFormControlTextarea1" class="form-label">الصورة </label>
                        <div class="content-input">
                            <Select :options="imagesList" name="image" v-model="image_id"
                                :class="{ 'is-invalid': errors.image }"
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
                        <label for="exampleFormControlTextarea1" class="form-label">الإسم </label>
                        <input type="text" class="form-control" id="name" name="name" v-bind="name"
                            :class="{ 'is-invalid': errors.name }" />
                        <div class="invalid-feedback">{{ errors.name }}</div>
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
                        <label for="exampleFormControlTextarea1" class="form-label">النوع  </label>
                        <div class="content-input">
                            <Select :options="types" name="image" v-model="type"
                                :class="{ 'is-invalid': errors.image }"
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
                        </div>
                    </div>

                    <div class="col-md-12 mt-2">
                        <label for="exampleFormControlTextarea1" class="form-label">المدة(يوم) </label>
                        <input type="text" class="form-control" id="duration_daily" name="duration_daily"
                            v-bind="duration_daily" :class="{ 'is-invalid': errors.duration_daily }"
                            oninput="this.value= this.value&&this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/\+/g,'').replace(/\./g,'');" />
                        <div class="invalid-feedback">{{ errors.duration_daily }}</div>
                    </div>

                    <div class="col-md-6 mt-2">
                        <label for="exampleFormControlTextarea1" class="form-label">نوع العملة </label>
                        <div class="content-input">
                            <Select :options="current_types" name="image" v-model="current_type"
                                :class="{ 'is-invalid': errors.image }"
                                class="w-full h-full flex items-center md:w-56 bg-transparent *:!text-[#333] no-border">
                                <template #value="slotProps">
                                    <div v-if="slotProps.value" class="flex items-center">
                                        <img :alt="slotProps.value.icon" :src="slotProps.value.icon"
                                            style="width: 32px" /> 
                                            {{ slotProps.value.name }}
                                    </div>
                                    <span v-else>
                                        {{ slotProps.placeholder }}
                                    </span>
                                </template>
                                <template #option="slotProps">
                                    <img :alt="slotProps.option.icon" :src="slotProps.option.icon"
                                        style="width: 32px" /> {{ slotProps.option.name }}
                                </template>
                            </Select>
                        </div>
                    </div>
                    <div class="col-md-6 mt-2">
                        <label for="exampleFormControlTextarea1" class="form-label">المقدار</label>
                        <input type="text" class="form-control" id="amount" name="amount" v-bind="amount"
                            :class="{ 'is-invalid': errors.amount }"
                            oninput="this.value= this.value&&this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/\+/g,'').replace(/\./g,'');" />
                        <div class="invalid-feedback">{{ errors.amount }}</div>
                    </div>
                    <div class="col-md-12 ">

                        <div class="text-center gap-2 d-flex buttons my-3">
                            <button class="send" v-if="!authStore.Update_use_profile">حفظ</button>
                            <button class="send" type="button"  v-else>إنتظر .....</button><button class="cancel"
                                @click="$emit('closepopup')"  type="button" >إلغاء</button>
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
const authStore = useAuthStore();
import * as Yup from "yup";
const category_id = ref("");
const image_id = ref("");
const Rank_id = ref("");
const type = ref("");
const current_type = ref("");
const categories = ref([
    { name: "إيصال الصوره", id: 1 }
]);

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
const imagesList = ref([
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
        name: Yup.string().required("هذا الحقل مطلوب"),
        duration_daily: Yup.string().required("هذا الحقل مطلوب"),
        amount: Yup.string().required("هذا الحقل مطلوب"),
    }),
});

//first_name ,last_name
const name = defineInputBinds("name");
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
</script>
<style lang="scss">
.popup-shapes-store.content-popup .card {
    margin-top: 10px !important;
    overflow-y: auto;
    height:90%;
    padding:10px;
    h3{
        font-size: 25px;
    }
}
</style>
<template>
    <popup class="popup-send-cions">
        <template #body>
            <h3 class="text-center py-2 title">ارسال كوينزات  
            </h3>

            <form @submit.prevent="onSubmit">
                <div class="row  ">
                    <div class="col-md-12 ">
                        <label for="exampleFormControlTextarea1" class="form-label">إختر إسم الاعب </label>
                        <div class="content-input">
                            <Select v-model="user_id" filter :options="Users" optionLabel="name"
                                optionValue="id"></Select>
                            <div v-if="errorMessages" class="feedback">هذا الحقل مطلوب</div>
                        </div>
                    </div>

                    <div class="col-md-12 mt-3">
                        <label for="exampleFormControlTextarea1" class="form-label">عدد الكوينزات </label>
                        <input type="text" class="form-control" id="number_coins" name="number_coins"
                            v-bind="number_coins" :class="{ 'is-invalid': errors.number_coins }" 
                            oninput="this.value= this.value&&this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/\+/g,'').replace(/\./g,'');" 
                            />
                        <div class="invalid-feedback">{{ errors.number_coins }}</div>
                    </div>
                    <div class="col-md-12 ">

                        <div class="text-center gap-2 d-flex buttons my-3">
                            <button class="send" v-if="!authStore.Update_use_profile">حفظ</button>
                            <button class="send" type="button" v-else>إنتظر .....</button><button class="cancel"
                                @click="$emit('closepopup')" type="button">إلغاء</button>
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
const user_id = ref("");
const Users = ref([
    { name: "أحمد سمير", id: 1 }
]);
const emits = defineEmits(['closepopup'])
// meta
const { errors, handleSubmit, defineInputBinds, resetForm } = useForm({
    validationSchema: Yup.object({
        number_coins: Yup.string().required("هذا الحقل مطلوب"),
    }),
});

//first_name ,last_name
const errorMessages = ref(false);
const number_coins = defineInputBinds("number_coins");
let onSubmit = handleSubmit(async (values) => {
    errorMessages.value = false;
    if (!user_id.value) {
        errorMessages.value = true;
        return
    }
    if (values) {
        try {
            console.log("values", values);
            console.log("user_id", user_id.value);
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
<style lang="scss" scoped>
.feedback {
    font-size: 13px;
    color: #dc3545;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
}
</style>
<style lang="scss">
.popup-send-cions.content-popup .card {
    h3 {
        font-size: 25px;
    }
}
</style>
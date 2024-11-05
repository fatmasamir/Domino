<template>
    <popup class="sendpopup">
        <template #header> ارسال اشعار </template>
        <template #body>
            <form @submit.prevent="onSubmit">
                <div class="cheackes mt-4 ">
                    <p @click="changeShow('all')">
                        <img src="@/assets/images/accept.svg" v-if="changeShpeval == 'all'">
                        <img src="@/assets/images/notread.svg" v-else>
                        الجميع
                    </p>
                    <p @click="changeShow('user')">
                        <img src="@/assets/images/accept.svg" v-if="changeShpeval == 'user'">
                        <img src="@/assets/images/notread.svg" v-else> طالب محدد 
                    </p>
                </div>
                <div class="mb-3 content-filed d-flex gap-2">
                    <label for="exampleFormControlInput1" class="form-label"> العنوان </label>
                    <div class="content-form">
                        <div class="content-input"> <input type="text" class="form-control" id="title" name="password"
                                v-bind="title" :class="{ 'is-invalid': errors.title }" />
                            <div class="invalid-feedback">{{ errors.title }}</div>
                        </div>
                    </div>
                </div>
                <div class="mb-3  content-filed  d-flex gap-2">
                    <label for="exampleFormControlTextarea1" class="form-label"> محتوى الاشعار
                    </label>
                    <div class="content-form">
                        <div class="d-flex gap-2">
                            <div class="content-input">
                                <textarea class="form-control" id="msg" rows="5" name="msg" v-bind="msg"
                                    :class="{ 'is-invalid': errors.msg }"></textarea>
                                <div class="invalid-feedback">{{ errors.msg }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center gap-2 d-flex buttons my-3">
                    <button class="send" v-if="!Notifactions.loadingsend">إرسال</button>
                    <button class="cancel" v-else>إنتظر ....</button>
                    <button class="cancel" @click="$emit('closepopup')">إلغاء</button>
                </div>
            </form>
        </template>
    </popup>
</template>
<script setup>
import popup from "@/components/global/popup.vue";
import { useForm } from "vee-validate";
import { ref } from "vue";
import * as Yup from "yup";
import { useNotification } from "@/stores/Notification/index";
const Notifactions = useNotification();
const emits = defineEmits(['closepopup'])
const { errors, handleSubmit, defineInputBinds } = useForm({
    validationSchema: Yup.object({
        title: Yup.string().required("this filed is required"),
        msg: Yup.string().required("this filed is required"),
    }),
});
//changeShow
const changeShpeval = ref('all');
const changeShow = (val) => {
    changeShpeval.value = val;
}
//first_name ,last_name
const title = defineInputBinds("title");
const msg = defineInputBinds("msg");
let onSubmit = handleSubmit(async (values) => {
    if (values) {
        try {
            let data = ref({
                type: changeShpeval.value,
                user_id: 1,
                title: values.title,
                msg: values.msg
            })
            await Notifactions.sendnotification(data.value);
             emits('closepopup');
        } catch (err) {
            console.log(err);
        }
    }
});
</script>
<style lang="scss" scoped>
.row.d-flex {
    // align-items: center;
}

.imageProfile {
    width: max-content;
    margin: auto;
    position: relative;
    cursor: pointer;

    .input-file {
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: pointer;
        right: 0px;
        opacity: 0;
        z-index: 000000;
        top: 0px;
    }

    .div-icon {
        position: absolute;
        top: 24%;
        left: 0px;
        margin: auto;
        width: 100%;
        text-align: center;
        font-size: 19px;

        i {
            background: #46277c;
            color: white;
            opacity: 0;
            padding: 17px;
            border-radius: 100%;
        }
    }

    .imagePostion {
        width: 150px;
        height: 150px;
        border-radius: 100%;
    }

    &:hover i {
        opacity: 0.8;
    }
}

.filed-icon {
    text-align: center;

    img {
        width: 30px;
        height: 30px;
    }
}

// .form-label {
//     padding-right: 10%
// }

.content-filed {
    width: 100% !important;

    input,
    textarea {
        width: 95% !important;
    }

    .content-form,
    .content-input {
        width: 100% !important;

    }

    label {
        width: 107px;
    }
}

.cheackes {
    display: flex;
    padding: 10px;
    justify-content: start;
    align-items: center;
    gap: 20px;

    p {
        cursor: pointer;
        text-align: right;
        width: 30%;
    }
}
</style>
<style lang="scss">
.sendpopup.content-popup .card {
    width: 36%
}

@media screen and (max-width: 993px) {
    .EditAdmin.content-popup .card {
        width: 95%
    }

    .content-filed {
        padding: 0px;
    }
}
</style>
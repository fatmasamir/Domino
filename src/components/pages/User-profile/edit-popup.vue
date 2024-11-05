<template>
    <popup class="EditAdmin">
        <template #header>تعديل بيانات اللاعب </template>
        <template #body>
            <form @submit.prevent="onSubmit">
                <div class="row mt-4 d-flex ">
                    <div class="col-md-12">
                        <div class="content-flex mb-3">
                            <img :src="ChangeIMage" class="ChangeIMage">
                            <ul class="list_image">
                                <li :class="list.image == ChangeIMage ? 'active' : ''" v-for="list in listsImage"
                                    :key="list" @click="ChangeIMage = list.image"><img :src="list.image"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-12 ">
                        <div class="mb-3 content-filed">
                            <label for="exampleFormControlInput1" class="form-label"> الإسم</label>
                            <div class="content-input"> <input type="text" class="form-control" id="name" name="name"
                                    v-bind="name" :class="{ 'is-invalid': errors.name }" />
                                <div class="invalid-feedback">{{ errors.name }}</div>
                            </div>
                        </div>
                        <div class="mb-3  content-filed">
                            <label for="exampleFormControlTextarea1" class="form-label">البريد الالكتروني </label>
                            <div class="content-form">
                                <input type="text" class="form-control" id="email" name="email" v-bind="email"
                                    :class="{ 'is-invalid': errors.email }" />
                                <div class="invalid-feedback">{{ errors.email }}</div>
                            </div>
                        </div>
                        <div class="mb-3  content-filed">
                            <label for="exampleFormControlTextarea1" class="form-label">رقم الهاتف </label>
                            <div class="content-form">
                                <input type="text" class="form-control" id="phone" name="phone" v-bind="phone"
                                    :class="{ 'is-invalid': errors.phone }" />
                                <div class="invalid-feedback">{{ errors.phone }}</div>
                            </div>
                        </div>
                        <div class="text-center gap-2 d-flex buttons my-3">
                            <button class="send">حفظ</button><button class="cancel"
                                @click="$emit('closepopup')">إلغاء</button>
                        </div>
                    </div>
                </div>
            </form>
        </template>
    </popup>
</template>
<script setup>
import popup from "@/components/global/popup.vue";
import { useForm } from "vee-validate";
import { onMounted, ref, watch } from "vue";
import * as Yup from "yup";
const adminInfo = ref({})
const emits = defineEmits(['closepopup'])
// meta
const { errors, handleSubmit, defineInputBinds, resetForm } = useForm({
    validationSchema: Yup.object({
        name: Yup.string().required("this filed is required"),
        email: Yup.string()
            .email("يجب كتابه ايميل بشكل صحيح").required("this filed is required"),
        phone: Yup.string().required("this filed is required"),
    }),
});
let fileupload = ref("");
let listsImage = ref([
    {
        image: new URL('@/assets/images/man.svg', import.meta.url).href,
    },
    {
        image: new URL('@/assets/images/theman.svg', import.meta.url).href,
    },
    {
        image: new URL('@/assets/images/theman.svg', import.meta.url).href,
    },
    {
        image: new URL('@/assets/images/theman.svg', import.meta.url).href,
    },
    {
        image: new URL('@/assets/images/theman.svg', import.meta.url).href,
    }
]);
let ChangeIMage = ref();
let changeFile = (e) => {
    const files = event.target.files;
    fileupload.value = event.target.files.item(0);
    let filename = files[0].name;
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
        ChangeIMage.value = fileReader.result;
    });
    fileReader.readAsDataURL(files[0]);
    ChangeIMage.value = files[0];
};
//first_name ,last_name
const name = defineInputBinds("name");
const email = defineInputBinds("email");
const phone = defineInputBinds("phone");
let onSubmit = handleSubmit(async (values) => {
    if (values) {
        try {
            let data = new FormData();
            data.append('name', values.name);
            data.append('email', values.email);
            data.append('image', fileupload.value);
            console.log(data)
            emits('closepopup');
        } catch (err) {
            console.log(err);
        }
    }
});
onMounted(() => {
    console.log(listsImage.value[0].image)
    ChangeIMage.value = listsImage.value[0].image;
    adminInfo.value = JSON.parse(localStorage.getItem("user"));
    resetForm({
        values: {
            name: JSON.parse(localStorage.getItem("user")).name,
            email: JSON.parse(localStorage.getItem("user")).email,
            phone: JSON.parse(localStorage.getItem("user")).phoneNumber,
        },
    });
})
watch(
    () => localStorage.getItem("user"),
    (newVal) => {
        resetForm({
            values: {
                name: JSON.parse(localStorage.getItem("user")).name,
                email: JSON.parse(localStorage.getItem("user")).email,
            },
        });
    }
);
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



.content-filed {
    padding: 0px 20px;

    .content-input {
        width: 100%;
    }
}

.content-flex {
    display: flex;
    gap: 20px;

    .ChangeIMage {
        width: 100px;
        height: 100px;
        border-radius: 100%;
    }

    ul {
        box-shadow: 0px 0px 5.01px 0px #00000040;
        width: 80%;
        border-radius: 11px;
        padding: 10px !important;

        li {
            margin: 0px 10px;
            cursor: pointer;
            display: inline-block;
            border-radius: 100%;

            img {
                width: 45px;
            }
        }

        .active {
            box-shadow: 0px 0px 4px 0px #11C075;

        }
    }
}
</style>
<style lang="scss">
.EditAdmin.content-popup .card {
    width: 50%;
    margin-top: 2%;
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
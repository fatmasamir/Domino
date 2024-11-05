<template>
  <form @submit.prevent="onSubmit">
    <div class="content-field">
      <div class="form-group">
        <label>البريد الالكترونى</label>
        <input
          class="form-control"
          type="text"
          id="email"
          name="الإيميل"
          v-bind="email"
          :class="{ 'is-invalid': errors.email }"
        />
        <div class="invalid-feedback">{{ errors.email }}</div>
      </div>
    </div>
    <div class="content-field">
      <div class="form-group">
        <label>كلمه السر</label>
        <img
          src="@/assets/images/eye-svgrepo.svg"
          @click="filedPass = 'text'"
          class="pass_icon"
          v-if="filedPass == 'password'"
        /><img
          src="@/assets/images/eye-slash.svg"
          @click="filedPass = 'password'"
          class="pass_icon"
          v-else
        />
        <input
          :type="filedPass"
          class="form-control"
          id="password"
          name="password"
          placeholder="الرقم السرى"
          v-bind="password"
          :class="{ 'is-invalid': errors.password }"
        />
        <div class="invalid-feedback">{{ errors.password }}</div>
      </div>
    </div>
    <div class="content-field text-start remember">
      <input type="checkbox" v-model="rememberme"/> <label>تذكرنى</label>
    </div>
    <div class="content-field">
      <button type="submit" v-if="!authStore.is_loading">تسحيل الدخول</button>
      <button class="wating" v-else>إنتظر.....</button>
    </div>
  </form>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useForm } from "vee-validate";
import * as Yup from "yup"; // meta
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth/index";
const { meta } = useForm();
const filedPass = ref("password");
const router = useRouter();
const rememberme = ref(false);
// auth store
const authStore = useAuthStore();
// formRegister
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    email: Yup.string()
      .email("يجب ادخال إيميل فقط")
      .required("هذا الحقل مطلوب"),
    password: Yup.string().min(6,"يجب ادخال أكثر من 6 أرقام").required("هذا الحقل مطلوب"),
  }),
});

//first_name ,last_name
const email = defineInputBinds("email");
const password = defineInputBinds("password");
let onSubmit = handleSubmit(async (values) => {
  if (values) {
    try {
      let data = ref(
        {
          password:values.password,
          email:values.email,
          //fcm_token:'fdktiaijigjisniigjiserq'
        }
      )
      // await authStore.login(data.value,rememberme.value);
     router.push("/");

    } catch (err) {
      console.log(err);
    }
  }
});
// onMounted(() => {
//   if (localStorage.getItem("access_token") ) {
//     router.push("/");
//   }else if(sessionStorage.getItem("access_token")) {
//     router.push("/");
//   }
// });
</script>
<style scoped lang="scss">
.content-field {
  align-items: center;
  .filed-icon {
    width: 10%;
    text-align: center;
    img {
      width: 30px;
      height: 30px;
      margin-top: 20px;
    }
  }

  .form-group {
    margin-bottom: 10px;
    position: relative;
    width: 100%;
    label {
      font-size: 16px;
      color: #000;
      margin-bottom: 5px;
    }
    input {
      height: 55px;
      &:focus {
        box-shadow: none;
        outline: none;
      }
    }
    .pass_icon {
      position: absolute;
      left: 10px;
      top: 45px;
      cursor: pointer;
      width: 20px;
      height: 20px;
      z-index: 99999;
    }
  }
  .form-control{
    background-color:white !important;
  }
}
.remember {
 display: flex;
  input {
    accent-color: black;
    width: 18px;
    height: 18px;
    margin-left: 10px;
  }
  label {
    color: #000;
  }
}
button {
  background: #3BBA73;
  width: 100% !important;
  color: white;
  margin: 20px auto 50px;
  padding: 10px;
  border: 0px;
  border-radius: 10px;
}
.wating {
  background: #b4b4b4 !important;
  color: black;
}
@media screen and (max-width: 993px) {
  .content-field {
    width: 95%;
  }
  .content-field .filed-icon img {
    width: 90% !important;
    margin-left: 0px;
  }
  .content-field .form-group,button,.content-field{
    width: 100% !important; 
  }
}
</style>

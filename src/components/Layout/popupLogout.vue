<template>
    <popup> 
        <template #body>
            <h3 class="text-center py-5 mb-4 mt-2">
                هل أنت متأكد بتسجيل الخروج؟
            </h3>
            <div class="text-center gap-2 d-flex buttons m-auto">
                <button class="send" @click="LogoutFun">
                    نعم ، أرغب</button>
                <button class="cancel" @click="$emit('closepopup')">
                    لا ,أرغب
                </button>
            </div>
        </template>
    </popup>
</template>
<script setup>
import popup from '../global/popup.vue';
import { useAuthStore } from "@/stores/auth/index";
import { useRouter } from "vue-router";
// auth store
const router = useRouter();

let  authStore= useAuthStore();
let LogoutFun = async () => {
  try {
    await authStore.logOut();
    router.push("/signin");
  } catch (err) {
    console.log(err);
  }
};
</script>
<template>
  <div class="logo-img "><img src="@/assets/images/logo.svg"></div>
  <div class="card mt-4">
    <div class="content">
      <h1 class="text-right my-3">تسجيل الدخول</h1>
      <h5 class="mb-3">مرحبا أهلا بعودتك <img src="@/assets/images/hand.svg"></h5>
      <FormLogin />
    </div>
  </div>
</template>
<script setup>
import FormLogin from "@/components/pages/auth/login/index.vue";
</script>
<style lang="scss" scoped>
.logo-img {
  text-align: left;
}

.card {
  width: 60%;
  margin: auto;

  .content {
    width:80%;
    margin: 20px auto;
  }
}

@media screen and (max-width: 993px) {.card {width: 97%;}}
</style>
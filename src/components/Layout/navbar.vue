<template>
  <div class="navbar-list">
    <div class="left_nav">
      <span class="fieldIcon"> {{ user }}
        <img src="@/assets/images/search-alt-svgrepo-com.svg" />
        <input v-model="inputSerach" type="text" placeholder="بحث ....." @keyup="changeSelect" />
        <ul v-if="showSearchMenu" class="listofUsers">
          <li v-for="user in Users.ListSearchUsers" :key="user" @click="
            $router.push({ name: 'UserPorfile', params: { id: user.id } })
            ">
            {{ user.first_name }} {{ user.second_name }} {{ user.third_name }}
            {{ user.fourth_name }}
          </li>
        </ul>
      </span>
    </div>
    <div class="right_nav">

      <div class="image-profile">
         <span @click="DrpdownInformation = !DrpdownInformation" v-if="authStore.user">
          <img src="@/assets/images/man.svg" v-if="!authStore.user.image" />
          <img :src="authStore.user.image" v-else class="image_profile">
          {{ authStore.user.name }}
          <img src="@/assets/images/arrow-down.svg" />
        </span>
        <ul class="dropdown" v-if="DrpdownInformation">
          <li @click="DetailesEdit = true">تعديل بيانات المسؤول</li>
          <li @click="Detailespass = true">تغير كلمه السر</li>
          <li @click="showPopUpLogout = true">تسجيل الخروج</li>
        </ul>
      </div>
      <div class="notification"><img src="@/assets/images/notification.svg"></div>
      <div class="logout"><img src="@/assets/images/logout.svg"></div>

      <div class="top_mobile">
        <span class="menu" @click="$emit('showingslider')"><img src="@/assets/images/menu-svgrepo-com.svg"
            v-if="!props.showMobile" /><img src="@/assets/images/close-svgrepo-com.svg" v-else /></span>
      </div>
    </div>
    <popupLogout v-if="showPopUpLogout" @closepopup="showPopUpLogout = false"></popupLogout>
    <popupEdit v-if="DetailesEdit" @closepopup="DetailesEdit = false" />
    <poupChangePassword v-if="Detailespass" @closepopup="Detailespass = false" />
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import popupLogout from './popupLogout.vue';
import popupEdit from "./Edites/popupEdit.vue"
import poupChangePassword from "./Edites/poupChangePassword.vue"
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth/index";

const authStore = useAuthStore();
let showPopUpLogout = ref(false);
let route = useRoute();
let props = defineProps(["showMobile"]);
let inputSerach = ref("");
let showSearchMenu = ref(false);
let DetailesEdit = ref(false);
let openNotification = ref(false);
let Detailespass = ref(false);
let listofUsers = ref([]);
const router = useRouter();
const DrpdownInformation = ref(false);
const openSendForm = ref(false);
const changeSelect = async () => {
  listofUsers.value = [];
  showSearchMenu.value = true;
};
//changeShow
const changeShpeval = ref('all');
const loading_wait = ref(false);
const haveMessageNotReady = ref(false)
const updateNotification = ref([]);
const changeShow = (val) => {
  changeShpeval.value = val;
  loading_wait.value = true;
  updateNotification.value = [];
  if (val == 'user') {
    Notifactions.notification.find((e) => {
      if (!e.is_read) {
        haveMessageNotReady.value = true;
        updateNotification.value.push(e)
      }
    });
    setTimeout(() => {
      loading_wait.value = false;
    }, 200);

  } else {
    setTimeout(() => {
      loading_wait.value = false;
      updateNotification.value = Notifactions.notification;
    }, 200);
  }
}
const clickOutsideDate = (event) => {
  const dropdownContainer = document.querySelector(".listofUsers");
  const dropdown = document.querySelector(".dropdown");
  if (dropdownContainer && !dropdownContainer.contains(event.target)) {
    showSearchMenu.value = false;
  }
  if (dropdown && !dropdown.contains(event.target)) {
    openNotification.value = false;
    DrpdownInformation.value = false;
  }
};
// onMounted(async () => {
//   document.addEventListener("mousedown", clickOutsideDate);

//   if (!localStorage.getItem("access_token") && !sessionStorage.getItem('access_token')) {
//     router.push("/signin");
//   }
//   if (!authStore.user) {

//     authStore.user = JSON.parse(localStorage.getItem("user") ? localStorage.getItem("user") : sessionStorage.getItem("user"));
//   }
// });


</script>

<style scoped lang="scss">
.navbar-list {
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 98%;
  margin: auto;
  gap: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20% 20px 20px;

  .left_nav {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: #2473b3;
      margin: 0px;
    }

    .menu {
      display: none;

      img {
        width: 25px;
        height: 25px;
      }
    }

    .fieldIcon {
      position: relative;
      width: 100%;

      img {
        position: absolute;
        top: 13px;
        right: 8px;
        width: 15px;
        height: 15px;
      }

      input {
        width: 100%;
        border: 0px;
        height: 45px;
        padding: 0px 30px;
        border-radius: 10px;
        box-shadow: 0px 0px 4px 0px #00000040;

        &:focus {
          box-shadow: 0px 0px 4px 0px #00000040 !important;
          outline: none;
        }
      }
    }
  }

  .right_nav {
    // width: 10%;
    display: flex;
    align-items: center;
    gap: 30px;

    >div {
      cursor: pointer;
    }
  }
}

.top_mobile {
  display: none;
}
.image_profile{
  width:50px;
  height: 50px;
  border-radius: 100%;
}
@media screen and (max-width: 1500px) {
  .navbar-list {
    width: 100%;
    max-width: 100%;
    margin: 0px;
    padding: 10px 26% 20px 20px
  }
}

@media screen and (max-width: 993px) {
  .navbar-list .left_nav h1 {
    font-size: 20px;
  }

  .top_mobile {
    display: block;
  }

  .navbar-list {
    padding: 10px 0px;
    width: 95%;
  }

  .navbar-list .left_nav,
  .navbar-list {
    flex-direction: column-reverse;
    gap: 10px;
  }

  .navbar-list .right_nav {
    width: 100%;
    gap: 20px;
    justify-content: left;
  }

  .navbar-list .left_nav,
  .navbar-list .left_nav .fieldIcon {
    width: 100%;
  }

  .menu {
    display: block !important;
    cursor: pointer;

    img {
      width: 15px;
    }
  }
}

.list_notific {
  overflow-y: auto;
  padding: 0px;
  height: 280px;

  li {
    justify-content: space-between;
    align-items: self-start;
    display: flex;

    .notific_img {
      position: relative;

      img {
        width: 40px;
        height: 40px;
      }

      .shara {
        position: absolute;
        width: 20px;
        height: 20px;
        bottom: -5px;
        left: 0px;
      }
    }

    .content {
      width: 78%;
      text-align: right;
    }

    .date {
      color: #ddd
    }
  }
}

.dropdown {
  position: absolute;
  z-index: 99;
  box-shadow: 4px 1px 10px #00000026;
  background: white;
  padding: 10px;
  width: max-content;
  border-radius: 10px;
  text-align: right;
  left: 30px;

  li {
    padding: 10px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: #2473b3
    }
  }
}

.listofUsers {
  position: absolute;
  z-index: 9999;
  width: 100%;
  box-shadow: 0px 0px 4px #00000087;
  border-radius: 3px;
  padding: 10px;
  background: white;

  li {
    cursor: pointer;
  }
}

.imageProfiel {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}
</style>

<template>
  <div class="slidbar" :class="props.showMobile ? 'slidbardisplay' : ''">
    <!-- <span class="close" @click="$emit('showingslider')"><img src="@/assets/images/logo.svg" /></span>
    <div class="logo"><img src="@/assets/images/logo_uni.svg" /></div> -->
    <div class="content-profile-info">
      <span><img src="@/assets/images/man.svg"></span>
      <span>
        <h6>Ahamed mohamed</h6>
        <p>المشرف</p>
      </span>
    </div>
    <nav class="navbar">
      <div class="" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="slide in SliderNav" :key="slide">
            <router-link :to="slide.link" class="nav-link active"><img :src="slide.icon" />
              {{ slide.title }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/auth/index";
import { ref } from "vue";
import { useRouter } from "vue-router";
// auth store
const router = useRouter();
let SliderNav = ref([
  {
    icon: new URL('@/assets/images/icon-dashboard.svg', import.meta.url).href,
    title: "لوحه التحكم",
    link: "/"
  },
  {
    icon: new URL('@/assets/images/icon-users.svg', import.meta.url).href,
    title: "المستخدمين",
    link: "/Users"
  },
  // {
  //   icon: new URL('@/assets/images/icon-coiens.svg', import.meta.url).href,
  //   title: "الكوينزات",
  //   link: "/coins"
  // },
  {
    icon: new URL('@/assets/images/icon-shoping.svg', import.meta.url).href,
    title: "المتجر",
    link: "/shopping"
  },
  {
    icon: new URL('@/assets/images/icon-star.svg', import.meta.url).href,
    title: "المستوى",
    link: "/levels"
  },
  {
    icon: new URL('@/assets/images/icon-games.svg', import.meta.url).href,
    title: "الألعاب",
    link: "/games"
  },
  {
    icon: new URL('@/assets/images/icon-vip.svg', import.meta.url).href,
    title: "VIP",
    link: "/VIP"
  }
])
// auth store
const authStore = useAuthStore();
let props = defineProps(["showMobile"]);
let showListGrouptrips = ref(false);
let LogoutFun = async () => {
  try {
    await authStore.logOut();
    router.push("/signin");
  } catch (err) {
    console.log(err);
  }
};
</script>
<style scoped lang="scss">
.slidbar {
  padding: 15px;
  position: fixed;
  background: white;
  height: 100vh;
  transition: width 1s;
  width: 300px;

  .close {
    display: none;
  }

  .content-profile-info {
    display: flex;
    align-items: center;
    background: #F7F8F9;
    padding: 15px;
    border-radius: 10px;
    margin: auto;
    margin-top: 20px;
    gap: 20px;
    width: 90%;

    h6 {
      margin-bottom: 5px;
    }

    p {
      color: #838383;
      font-size: 13px;
      margin-bottom: 0px;
    }

    img {
      width: 56px;
      height: 56px;
    }
  }

  nav {
    height: 86%;
    display: block;
    width: 100%;

    ul {
      padding: 23px;

      li {
        display: block !important;
        width: 100%;
        height: auto;
        margin-bottom: 5px;

        a {
          padding: 10px;
          padding: 15px;
          padding-right: 50px;
          height: 100%;
          font-size: 16px;

          img {
            width: 25px;
            height: 25px;
            margin-left: 10px;
            
            filter: grayscale(1);
          }
        }

        .list-group li .travels {
          background: transparent;
          color: black;
          font-size: 16px;
          padding: 5px 60px;
          height: auto;
          margin: 0px;

          img {
            width: 15px;
            height: 15px;
          }
        }

        .list-group li .router-link-exact-active {
          color: #3BBA73 !important;

        }

        .router-link-active,
        a:hover {
          background: #D8F6E3;
          color: #3BBA73;
          border-radius: 10px;

          img {
            filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(49%);
          }

        }

        .travels.router-link-active {
          background: #D8F6E3;
          color: #3BBA73;
        }

        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}

#navbarNav {
  position: relative;
  height: 100%;
}

.logout-icon {
  position: absolute;
  bottom: 5px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}

.slidbardisplay {
  display: block !important;
}

@media screen and (max-width: 993px) {
  .slidbar {
    box-shadow: 1px 7px 9px 2px #a5a5a5;
    position: absolute;
    width: 70%;
    display: none;
    right: 0px;
    padding: 5px;
    z-index: 99;

    nav ul {
      width: 100%;
      padding: 0px;

      li a {
        padding: 10px !important;
      }
    }

    .content-profile-info {
      flex-direction: column;
      text-align: center;
    }

    .close {
      width: 90%;
      margin: auto;
      top: 5px;
      left: 15px;
      text-align: left;
      cursor: pointer;
      position: absolute;
      display: block;

      img {
        width: 15px;
        height: 15px;
      }
    }

    nav ul li a {
      font-size: 15px;
    }
  }
}
</style>

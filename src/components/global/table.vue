b
<template>
  <DataTable :value="data" :loading="props.loading" class="table-style" :paginator="pagination" :rows="10">
    <template #empty>
      <div class="text-center" v-if="!props.loading">لايوجد بيانات...</div>
      <div class="text-center" v-else>تحميل ...</div>
    </template>
    <Column v-for="column in headers" :key="column.key" :field="column.key" v-click-outside="closeDropdown">
      <template #header> {{ column.name }} </template>

      <template #body="{ data }">
        <div v-if="column.key == 'place'" class="place">
          <span v-if="data.place == 10">
            <img src="@/assets/images/gold.svg" /></span>

          <span v-else-if="data.place == 9">
            <img src="@/assets/images/selver.svg" /></span>

          <span v-else-if="data.place == 8">
            <img src="@/assets/images/pronse.svg" /></span>
          <span v-else>
            {{ data.place }}</span>
        </div>
        <div v-else-if="column.icon == 'icons'">
          <img :src="data.type" class="icons" v-if="data.type">
          <img src="@/assets/images/coins.svg" v-else class="icons">
          {{ getNestedValue(data, column.key) }}
        </div>
        <div v-else-if="column.key == 'statusUser'">
          <span v-if="data.statusUser" class="active">
            فوز
          </span>
          <span v-else class="notActive">
            خساره
          </span>
        </div>
        <div v-else-if="column.type == 'namewithimage'">
          <div class="content-flex"><img src="@/assets/images/man.svg"> {{ data.name }}</div>
        </div>
        <div v-else-if="column.key == 'placenumber'">
          <div class="content-flex"><img src="@/assets/images/military2.svg"> <img src="@/assets/images/military.svg">
          </div>
        </div>
        <div v-else-if="column.type == 'image' || column.type == 'icons'" class="ImagesDiv">
          <img :src="getNestedValue(data, column.key)" :class="column.type == 'image' ? 'image' : 'icons'">
        </div>
        <div v-else-if="column.type == 'ListsImages'">
          <span v-for="list in getNestedValue(data, column.key)" v-if="getNestedValue(data, column.key).length > 0">
            <img :src="list" />
          </span>
          <span v-else>لايوجد</span>
        </div>
        <div v-else-if="column.key == 'actionButton'">
          <button @click="$emit('morebutton', data.id)" v-if="column.type == 'update'">
            <img src="@/assets/images/edit2.svg"/> {{
            column.button_name
          }}</button>
          <button @click="$emit('morebutton', data.id)" v-else>{{
            column.button_name
          }}</button>
        </div>
        <div v-else>
          {{ getNestedValue(data, column.key) }}
          {{ column.sub ? column.sub : "" }}
        </div>
      </template>
    </Column>
  </DataTable>
</template>
<script setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { ref } from "vue";
const props = defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
  actions: {
    type: Array,
    default: () => [],
  },
  pagination: {
    type: Boolean,
    default: () => true,
  },
  loading: {
    type: Boolean,
    default: () => false,
  },
});
const optionsstatus = ref([
  { name: "قيد الوصول", value: "coming" },
  { name: "وصل", value: "arrived" },
  { name: "الرحله انتهت", value: "completed" },
]);
const getNestedValue = (obj, path) => {
  return path.split(".").reduce((o, p) => o && o[p], obj);
};
</script>
<style scoped lang="scss">
.card {
  width: 95%;
  margin: 20px auto;
}

.v-btn.v-btn--density-default {
  box-shadow: none;
}

.imagePro {
  width: 50px;
  height: 50px;
  border-radius: 100%;
}

.v-list-item-title {
  padding: 10px;
  cursor: pointer;
  width: 150px;

  &:hover {
    background: #673ab7;
    color: white;
    border-radius: 4px;
  }
}

.is-ar {
  .v-list-item-title {
    direction: rtl;
  }
}

.Dropdown {
  display: inline-block;
  position: relative;

  button {
    background: transparent;

    img {
      width: 17px;
      height: 17px;
    }
  }

  ul {
    display: none;
    position: absolute;
    background: white;
    padding: 10px 0px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.356);
    z-index: 9999999;
    top: 20px;

    li {
      padding: 5px 10px;
      width: 150px;
      margin-bottom: 2px;
      cursor: pointer;
    }
  }

  &:hover {
    ul {
      display: block;

      li:hover {
        background: #2a82c9;
        color: white;
      }
    }
  }
}

.dots {
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 100%;
  margin: 0px 2px;
}

.activeSpan {
  color: #11C075;
  font-size: 13px;
}

.active {
  color: #11C075;
}

.notSubSpan {
  color: #aaa;
  font-size: 13px;
}

.notSub {
  background: #aaa;
}

.notActiveSpan {
  color: #ff8a00;
  font-size: 13px;
}

.notActive {
  color: red;
}

.d-flex {
  align-items: baseline;
  justify-content: center;
}

.btnactive {
  color: #11C075;
}

.delete-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

button {
  width: 73px;
  border-radius: 0px !important;
  padding: 0px;
  height: 40px !important;
  font-size: 13px;
}

.place {
  span {
    color: #ff8a00
  }
}

.d-flex {
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 10px;

  img {

    width: 35px;
  }

  .coins {
    width: 20px;

  }
}

.icons {
  width: 20px;
}

.image {
  width: 60px;
}

.content-flex {
  display: flex;
  align-items: center;
  gap: 5px
}
</style>

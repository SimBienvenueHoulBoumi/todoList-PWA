<template>
  <q-layout view="lHh Lpr lFf">
    <q-item tag="div" class="top-nav flex row justify-between items-center">
      <q-btn to="/" rounded color="grey" icon="arrow_back" />
      <h1 class="text-h6">{{ list.title }}</h1>
      <q-btn flat color="grey" icon="more_horiz" />
    </q-item>
    <q-item tag="div" style="margin-top: 40px" class="flex column">
      <p style="font-weight: bold">Tâches: {{ tasks.length }}</p>
      <TaskItem v-for="task in tasks" :key="task.title" :task="task"></TaskItem>
    </q-item>
    <q-footer>
      <div class="bottom-menu">
        <q-btn
          round
          class="menu-button q-mt-md"
          icon="add"
          :to="'/create-task?id=' + list._id"
        />
      </div>
    </q-footer>
  </q-layout>
</template>
<script setup>
// Syntax vue3 Composition API
import { ref, computed } from "vue";
import { getSingleList } from "../services/lists";
import { useRoute } from "vue-router";
import TaskItem from "../components/task/TaskItem.vue";

const list = ref({});
const tasks = ref([]);
const route = useRoute();

async function getListDetail() {
  const { data } = await getSingleList(route.query.id);
  list.value = data.list;
  tasks.value = data.tasks;
}

getListDetail();
</script>

<style lang="scss" scoped>
.top-nav {
  margin-top: 20px;
  height: 24px;
  width: 100%;
}
.top-nav-right {
  width: 100%;
  flex-direction: row;
}

.bottom-menu {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
</style>

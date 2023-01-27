<template>
  <q-layout view="lHh Lpr lFf">
    <q-item tag="div" class="top-nav flex row justify-between items-center">
      <q-btn @click="router.back()" rounded color="grey" icon="arrow_back" />
      <q-btn-dropdown flat color="grey" dropdown-icon="more_horiz">
        <q-list>
          <q-item clickable v-close-popup :to="'/tasks/update?id=' + task._id">
            <q-item-section>
              <q-item-label>Modifier</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onDeleteTask">
            <q-item-section>
              <q-item-label style="color: red">Supprimer</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-item>
    <q-item tag="div" class="flex column">
      <div style="margin-top: 40px">
        <p class="title">Title:</p>
        <p>{{ task.title }}</p>
      </div>
      <div style="margin-top: 40px">
        <p class="title">Description:</p>
        <p>{{ task.description }}</p>
      </div>
      <div style="margin-top: 40px">
        <p class="title">Terminé:</p>
        <p>{{ task.done ? "Oui" : "Non" }}</p>
      </div>
    </q-item>
  </q-layout>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import TaskItem from "../components/task/TaskItem.vue";
import { getSingleTask, deleteTask } from "../services/tasks";

const router = useRouter();
const route = useRoute();
const task = ref([]);

async function getTaskDetail() {
  const { data } = await getSingleTask(route.query.id);
  task.value = data;
}

async function onDeleteTask() {
  await deleteTask(route.query.id);
  router.back();
}

getTaskDetail();
</script>

<style lang="scss" scoped>
.title {
  font-weight: bold;
  font-size: 15px;
  color: gray;
}
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

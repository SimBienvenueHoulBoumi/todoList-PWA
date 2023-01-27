<template>
  <q-layout view="lHh Lpr lFf">
    <q-item tag="div" class="top-nav flex row justify-between items-center">
      <q-btn @click="router.back()" rounded color="grey" icon="arrow_back" />
      <q-btn flat color="black" label="Annuler" @click="router.back()" />
    </q-item>
    <q-item tag="div" class="flex column">
      <h1 class="text-h6">Créer une tâche</h1>
      <q-input filled v-model="title" label="Title" />
      <br />
      <q-input
        v-model="description"
        filled
        label="Description"
        type="textarea"
      />
    </q-item>
    <q-footer>
      <div class="bottom-menu">
        <q-btn
          square
          class="menu-button q-mt-md"
          label="Ajouter"
          @click="addTask"
        />
      </div>
    </q-footer>
  </q-layout>
</template>
<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { createTask } from "../services/tasks";

const router = useRouter();
const route = useRoute();

const title = ref("");
const description = ref("");

async function addTask() {
  const newTask = {
    title: title.value,
    description: description.value,
    list: route.query.id,
  };

  await createTask(newTask);

  router.back();
}
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

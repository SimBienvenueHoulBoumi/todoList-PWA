<template>
  <div>
    <q-card class="my-card card-container">
      <q-item tag="div" class="flex justify-between items-center card-header">
        <p class="card-title">{{ list.title }}</p>
        <q-btn flat round color="black" icon="more_horiz" />
      </q-item>
      <q-item tag="div" class="flex jusitfy-center items-center">
        <p v-if="tasks.length <= 0" class="no-task-message">
          Cette liste ne contient aucune tâches. Ajoutez en une depuis la liste
        </p>
        <div v-if="tasks.length > 0" style="width: 100%">
          <TaskItem v-for="task in tasks" :key="task.title" :task="task" />
        </div>
      </q-item>
      <q-card-actions align="right">
        <router-link :to="list.link">
          <q-btn clickable flat round color="purple" icon="visibility" />
        </router-link>
        <q-btn flat round color="red" icon="delete" @click="onRemoveList" />
        <q-btn flat round color="teal" icon="edit" @click="prompt = true" />
      </q-card-actions>
    </q-card>
    <!-- Modal start -->
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Nom de la liste</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="listTitle"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-black">
          <q-btn flat label="Annuler" v-close-popup />
          <q-btn color="purple" label="Modifier" @click="onUpdateList" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- Modal end -->
  </div>
</template>
<script setup>
import { getSingleList, updateList, deleteList } from "../../services/lists";
import { ref, computed } from "vue";
import TaskItem from "../task/TaskItem.vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  tasks: {
    default: [],
  },
  list: {
    default: {},
  },
});

const tasks = ref(props.tasks);
const prompt = ref(false);
const listTitle = ref("");
const router = useRouter();
const route = useRoute();

async function onUpdateList() {
  await updateList(props.list.id, { title: listTitle.value });
  window.location.reload();
}

async function onRemoveList() {
  await deleteList(props.list.id);
  window.location.reload();
}

(async () => {
  const { data } = await getSingleList(props.list.id);
  tasks.value = data.tasks;
  listTitle.value = props.list.title;
})();
</script>
<style lang="scss" scoped>
.card-container {
  margin-bottom: 20px;
}

.card-title {
  font-weight: bold;
  height: 0px;
  font-size: 16px;
}
.card-header {
  background: rgb(236, 236, 236);
  width: 100%;
}

.no-task-message {
  height: 0px;
}
</style>

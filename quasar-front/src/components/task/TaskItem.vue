<template>
  <q-item
    :to="'/tasks?id=' + task._id"
    tag="div"
    class="task-card"
    style="margin-bottom: 10px"
  >
    <q-checkbox
      dense
      color="teal"
      v-model="isCompleted"
      @click="completeTask"
    />
    <p style="height: 0px; margin-left: 20px">{{ task.title }}</p>
  </q-item>
</template>
<script setup>
import { ref, computed } from "vue";
import { updateTask } from "../../services/tasks";

const isCompleted = ref(props.task.done ?? false);
const props = defineProps({
  task: {
    default: {},
  },
});

async function completeTask() {
  const task = {
    title: props.task.title,
    description: props.task.description,
    done: isCompleted.value,
  };

  await updateTask(props.task._id, task);

  window.location.reload();
}
</script>
<style lang="scss" scoped>
.task-card {
  width: 100%;
  padding: 10px;
  background: #e0e0e0;
  height: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
}
</style>

<template>
  <q-page class="flex column">
    <q-item tag="div" class="flex column">
      <p v-if="lists.length <= 0">⚠️ Oops! Vous n'avez pas encore de liste</p>
      <ListItem v-for="list in lists" :key="list.title" :list="list" />
    </q-item>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { getAllLists } from "../services/lists";
import ListItem from "../components/list/ListItem.vue";
// import { useLists } from "@/stores/list-store";

const props = defineProps({
  lists: {
    type: Array,
    default: [],
  },
});

const lists = ref(props.lists);

(async () => {
  const { data } = await getAllLists();
  lists.value = data.map((list) => {
    return {
      title: list.title,
      link: `/lists?id=${list._id}`,
      id: list._id,
    };
  });
})();
</script>

<style lang="scss" scoped>
.welcome-message-container {
  margin-bottom: 20px;
}
</style>

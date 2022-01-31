<template>
  <ul role="list" class="divide-y divide-gray-200 h-72 overflow-auto">
    <li v-for="{ name, score } in players" :key="name" class="py-4 flex">
      <span
        class="
          h-10
          w-10
          rounded-full
          bg-slate-50
          flex
          justify-center
          items-center
          text-xl
          font-bold
        "
      >
        {{ score }}
      </span>
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">{{ name }}</p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useClient } from '../composables/client';

const players = ref(null);

const loadPlayers = async () => {
  const response = await useClient().getPlayers();
  players.value = response;
};

onMounted(async () => {
  await loadPlayers();
});
</script>

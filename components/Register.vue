<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useClient } from '../composables/client';
import { useLocalStorage } from '../composables/localStorage';
import Button from './Button.vue';

const emits = defineEmits(['registered']);
const name = ref(null);
const localStorageKey = '__player__';

const notify = (playerId: string) => {
  emits('registered', playerId);
};

const submit = async () => {
  const response = await useClient().registerPlayer(name.value);

  useLocalStorage().setItem(localStorageKey, {
    name: name.value,
    playerId: response.id,
  });

  notify(response.id);
};

onMounted(() => {
  const data = useLocalStorage().getItem(localStorageKey);
  if (data && 'playerId' in data && 'name' in data) {
    name.value = data.name;
    notify(data.playerId);
  }
});
</script>

<template>
  <form class="max-w-md w-full space-y-8" @submit.prevent="submit">
    <div>
      <label class="block text-left text-sm font-bold text-gray-700"
        >Name</label
      >
      <input
        v-model="name"
        class="
          mt-1
          focus:ring-indigo-500 focus:border-indigo-500
          block
          w-full
          shadow-sm
          border border-gray-300
          rounded-md
          px-4
          py-2
        "
      />
    </div>

    <Button> Register </Button>
  </form>
</template>

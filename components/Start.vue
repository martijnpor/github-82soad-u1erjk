<template>
  <form @submit.prevent="startGame">
    <Button :disabled="!playerId">Start new game</Button>
  </form>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { useClient } from '../composables/client';
import Button from './Button.vue';

const props = defineProps<{ playerId?: string }>();
const emits = defineEmits(['started']);

const { playerId } = toRefs(props);

const startGame = async () => {
  const response = await useClient().startGame(playerId.value);
  emits('started', response.id);
};
</script>

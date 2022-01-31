<template>
  {{ playerId }}<br />
  {{ gameId }}<br />

  <h3 class="font-semibold text-xl">Ronde {{ round }}</h3>

  <pre>{{ progress }}</pre>

  <div class="grid grid-cols-3 gap-8" v-if="!finish">
    <button
      v-for="{ icon, shape } of [
        { icon: '🧗', shape: 'rock' },
        { icon: '🧻', shape: 'paper' },
        { icon: '✂️', shape: 'scissors' },
      ]"
      type="button"
      class="
        p-4
        flex
        justify-center
        align-center
        rounded-md
        text-9xl
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
        disabled:opacity-50 disabled:cursor-not-allowed
      "
      @click="play(shape)"
      :disabled="!playable"
    >
      {{ icon }}
    </button>
  </div>
  <template v-else>
    <p>You won/lose</p>
    <Button type="button" @click="reset">Reset</Button>
  </template>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs } from 'vue';
import { useClient } from '../composables/client';
import Button from './Button.vue';

const props = defineProps<{ playerId?: string; gameId?: string }>();
const emits = defineEmits(['played', 'reset']);

const { playerId, gameId } = toRefs(props);

const round = ref(1);
const finish = ref(false);
const progress = ref(null);

const playable = computed(() => playerId.value != null && gameId.value != null);

const play = async (shape) => {
  const response = await useClient().playRound(
    gameId.value,
    playerId.value,
    shape
  );

  progress.value = response;

  if (response?.rounds?.length < 3) {
    round.value++;
  } else {
    finish.value = true;
  }
};

const reset = () => {
  round.value = 1;
  finish.value = false;
  progress.value = null;
  emits('reset');
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { useLocalStorage } from '../composables/localStorage';
import { useGameId } from '../composables/states';
import { useRouter } from 'vue-router';

const localStorageKey = '__player__';

const router = useRouter();
const gameId: string = useGameId();
const data = useLocalStorage().getItem(localStorageKey);
const playerId = data.playerId;

const onPlayed = () => {};

const onReset = () => {
  gameId.value = null;

  router.push({ path: '/start-game' });
};
</script>

<template>
  <div>
    <Heading> Step 3. Play Game </Heading>

    <Play
      :playerId="playerId"
      :gameId="gameId"
      @played="onPlayed"
      @reset="onReset"
    />
  </div>
</template>

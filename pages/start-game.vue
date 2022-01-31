<script setup lang="ts">
import { ref } from 'vue';
import { useLocalStorage } from '../composables/localStorage';
import { useRouter } from 'vue-router';
import { useGameId } from '../composables/states';

const localStorageKey = '__player__';

const router = useRouter();
const gameId: string = useGameId();
const data = useLocalStorage().getItem(localStorageKey);

const onStarted = (id: string) => {
  gameId.value = id;

  router.push({ path: '/play-game' });
};
</script>

<template>
  <div>
    <Heading> Step 2. Start Game </Heading>

    <Start :player-id="data.playerId" @started="onStarted" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const onRegistered = (id: string) => {
  if (!id) return;

  router.push({ path: '/start-game' });
};
</script>

<template>
  <div>
    <Heading> Step 1. Register </Heading>

    <Register @registered="onRegistered" />
  </div>
</template>

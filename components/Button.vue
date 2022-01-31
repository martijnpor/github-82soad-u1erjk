<template>
  <button
    :type="type"
    class="
      group
      relative
      w-full
      flex
      justify-center
      py-4
      px-8
      border border-transparent
      text-base
      font-medium
      rounded-md
      text-white
      bg-indigo-600
      hover:bg-indigo-700
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
      disabled:opacity-50 disabled:cursor-not-allowed
    "
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const { type } = withDefaults(defineProps<{ type?: string }>(), {
  type: 'submit',
});
</script>

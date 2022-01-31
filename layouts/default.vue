<template>
  <div
    class="
      min-h-full
      flex flex-col
      items-center
      justify-center
      py-12
      px-4
      space-y-8
    "
  >
    <slot />

    <Heading> Currently Playing </Heading>

    <Players />
  </div>
</template>

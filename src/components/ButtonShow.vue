<script setup lang="ts">
import BaseButton from './BaseButton.vue';

const emit = defineEmits<{
  'show-click': [void];
}>();
</script>
<template>
  <BaseButton color="green" @on-click="emit('show-click')">表示</BaseButton>
</template>

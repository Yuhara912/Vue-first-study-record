<script setup lang="ts">
import BaseButton from './BaseButton.vue';

const emit = defineEmits<{
  'edit-click': [void];
}>();
</script>
<template>
  <BaseButton color="green" @on-click="emit('edit-click')">編集</BaseButton>
</template>

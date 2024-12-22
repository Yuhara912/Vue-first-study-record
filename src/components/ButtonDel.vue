<script setup lang="ts">
import BaseButton from './BaseButton.vue';

const emit = defineEmits<{
  'del-click': [void];
}>();
</script>
<template>
  <BaseButton color="pink" @on-click="emit('del-click')">削除</BaseButton>
</template>

<script setup lang="ts">
import EmptyState from  '@/assets/images/svg/empty-state.svg'
const props = defineProps(['modelValue','content'])
const emit= defineEmits(['leave'])
</script>
<template>
  <v-dialog
  v-bind:model-value="modelValue"
  @after-leave="$emit('leave')"
  width="350">
<div class="w-[350px] h-[350px] rounded-lg bg-surface flex justify-center items-center flex-col">

  <img :src="EmptyState"
  
  alt="">
  <h2>{{  content}}  </h2>
</div>
  </v-dialog>

</template>
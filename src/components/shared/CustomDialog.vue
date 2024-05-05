<script setup lang="ts">
import EmptyState from  '@/assets/images/svg/empty-state.svg'
import DoneImg from  '@/assets/images/svg/done2.svg'
const props = defineProps(['modelValue','content','type'])
const emit= defineEmits(['leave'])
</script>
<template>
  <v-dialog
  v-bind:model-value="modelValue"
  @after-leave="$emit('leave')"
  width="350">
<div class="w-[350px] h-[350px] rounded-lg bg-surface flex justify-center items-center flex-col">

  <img :src="type=='success'?DoneImg:EmptyState"
  
  alt="">
  <h2 class="px-2 text-center">{{  content}}  </h2>
</div>
  </v-dialog>

</template>
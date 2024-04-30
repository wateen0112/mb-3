
<script  setup lang="ts">
import AllOrdersLayout from '@/components/orders/AllOrdersLayout.vue';
import  ChatHeaderCard from '@/components/messages/ChatHeaderCard.vue'
import { MessageStore } from '@/stores/Message';
const store = MessageStore();
onMounted(async()=>{
    await store.get_chats()
})
</script>
<template>
    <AllOrdersLayout
    
    title="المحادثات"
    >
       <div class="flex  mt-8 justify-start items-start flex-no-wrap gap-3 flex-row flex-wrap">
<ChatHeaderCard  v-for="item in 4" />
       </div>
    </AllOrdersLayout>
</template>
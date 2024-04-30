<script setup>
import { useI18n } from 'vue-i18n';
const  {t} = useI18n();

</script>
<template>
  <div  class=" p-3 lg:p-5">
<div class="w-full grid grid-cols-12 "  >
<div class="flex items-center justify-start  lg:col-span-2 ">

<VCheckbox/>
<p class="mt-5 lg:text-lg text-sm hidden lg:block">{{$t('notifications.selectAll')}}</p>
</div>
<div class="flex justify-end  lg:col-span-10"><VBtn icon="mdi-delete" color="error" variant=text></VBtn></div>
</div>
   <!-- card starts  . . . .-->
<div class="mt-5">
  <div class="flex justify-between w-full items-center">
  <div class="flex">
    <VCheckbox/> 
    <VCardTitle class="text-[#aaa]  text-lg "  > {{$t('notifications.title')}}</VCardTitle>
  
  </div>  <VCardTitle class="text-[#aaa]  text-lg "  > 5-5-2005 </VCardTitle>
  
  </div>
  <VDivider/>
  
  <div class=" px-5 lg:px-5 py-10">
  
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, soluta modi nemo sequi alias accusamus, ullam, nihil id quisquam tempore unde perferendis possimus dolores? Fugiat illum quis necessitatibus rem soluta nesciunt quaerat adipisci sit animi. Repudiandae quam praesentium obcaecati iusto sint ipsum dicta quos itaque pariatur vitae a provident aut omnis modi harum dolores possimus saepe, architecto commodi! Sint quaerat nulla illo veniam rerum? Expedita id praesentium dicta aperiam quasi eligendi. Culpa tenetur, repudiandae magnam consectetur ipsam possimus, cum inventore dolore quos ratione est facere quaerat soluta quia necessitatibus perferendis aliquam neque accusantium, in eveniet minima consequatur excepturi atque ex! Aut sit saepe cum ab mollitia ipsam dolorem laboriosam praesentium officia, amet, corrupti perspiciatis rerum ipsum eveniet. Dolore a, praesentium vero autem voluptatum consequatur atque laudantium illum aperiam, dignissimos dolorum similique harum! Repudiandae unde quos provident dolore. Esse labore adipisci dicta fugiat reiciendis ducimus sed expedita, dolor rem quos maxime similique. Pariatur temporibus enim et minus expedita. Facilis, sunt aspernatur qui architecto reiciendis exercitationem dignissimos, dolorum, totam eum maxime dolore sapiente earum! In dolorum, quae, debitis sunt qui reprehenderit explicabo assumenda impedit magni sit autem ipsam commodi natus excepturi iste?</p>
  </div>
  <div class="flex justify-end px-5">
    <p>{{$t('notifications.reciver')}}  </p>
  </div>
      </div>
      <VDevider/>
      <!-- card item-->

            <VDevider/>
  </div>
</template>

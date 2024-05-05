<script setup lang="ts">
import { useFile } from "@/composables";
import { useAuthorization } from "@/stores/Auth";
import Avatar1 from '@/assets/images/svg/user-ico.svg'
import { ProfileDataResponseDto } from "@/api/Auth/AuthDto";
import { useAppStore } from "@/stores/App";
const store  = useAuthorization()
const {profileResponseDto} = storeToRefs(store);

onMounted(async()=>{
    await store.getUserData()
})
const  logoutLoading = ref(false)
const showLogoutDialog = ref(false)
const {showToolTip} = storeToRefs(useAppStore())
const showImage = ref(true)
const {getFileUrl} =useFile()
</script>
<template>
<!-- tool tip wrapper-->
  <div  @click="showToolTip=false" v-if="showToolTip==true" class="w-full h-full absolute top-0 left-0  z-10"></div>
    <v-dialog v-model="showLogoutDialog" width="350" >  
<div class="bg-surface w-[350px]  rounded-lg p-3">

    <h2>هل تريد تسجيل الخروج ؟</h2>
    <div class="flex mt-8 pb-2  justify-center items-center gap-5">

        <VBtn
        :loading="logoutLoading"
        @click="async()=>{
            logoutLoading =true
            await store .logout();
            logoutLoading =false
showLogoutDialog= false
        }" color="error">نعم </VBtn>
        <VBtn   @click="showLogoutDialog= false" color="warning">لا</VBtn>
    </div>
</div>
    </v-dialog>
    <div class=" relative w-full shadow-sm rounded-lg h-[70px]  px-9  flex justify-end items-center bg-surface">
<div
@click="showToolTip=!showToolTip"
class="w-[50px] h-[50px]   cursor-pointer rounded-full overflow-hidden">
    <v-img
    class="rounded-full"
    height="50"
    max-width="50"
    :src="getFileUrl(profileResponseDto.data.profile_image_name)"
  >
    <template v-slot:error>
      <div class="rounded-full  w-[50px] h-[50px] flex justify-center items-center bg-[#eee]">  <v-img

class="rounded-full  w-[30px] h-[30px]" 
height="50"
max-width="50"
:src="Avatar1"
></v-img>
</div>
    </template>
    <template v-slot:placeholder>
      <div class="rounded-full  w-[50px] h-[50px] flex justify-center items-center bg-[#eee]">  <v-img

class="rounded-full  w-[30px] h-[30px]" 
height="50"
max-width="50"
:src="Avatar1"
></v-img>
</div>
    </template>
  </v-img>
</div>
<div  v-if="showToolTip" class=" z-50 absolute w-[250px]  p-5 bg-surface top-16 rounded-lg shadow-sm">

<div class="flex justify-start items-end mb-5 flex-row gap-5">
    <div class="w-[50px] h-[50px]  cursor-pointer  rounded-full overflow-hidden">
    <v-img
    class="rounded-full"
    height="50"
    max-width="50"
    :src="getFileUrl(profileResponseDto.data.profile_image_name)"
  >
    <template v-slot:error>
      <div class="rounded-full  w-[50px] h-[50px] flex justify-center items-center bg-[#eee]">  <v-img

class="rounded-full  w-[30px] h-[30px]" 
height="50"
max-width="50"
:src="Avatar1"
></v-img>
</div>
    </template>
    <template v-slot:placeholder>
      <div class="rounded-full  w-[50px] h-[50px] flex justify-center items-center bg-[#eee]">
      <v-img

      class="rounded-full  w-[30px] h-[30px] " 
        height="50"
        max-width="50"
        :src="Avatar1"
      ></v-img>
      </div>
    </template>
  </v-img>
</div>
<p>{{ profileResponseDto.data.name }}

</p>
</div>
<VDivider/>
<div class="mt-5"><router-link
    @click="showToolTip=false"
    to="profile" class="mt-5">
    عرض الملف الشخصي
</router-link>
</div>
<div  @click="()=>{
showLogoutDialog=true
 showToolTip=false
}" class="flex justify-start  cursor-pointer items-center mt-5 gap-2">
    <VIcon  size="20" class="mt-[-15px]">mdi-logout</VIcon>
<p>
    تسجيل الخروج
</p>

</div>
</div>
  </div>
</template>
<style>
.layout-wrapper.layout-nav-type-vertical .layout-navbar.navbar-blur::after{
    display: none !important;
}
</style>
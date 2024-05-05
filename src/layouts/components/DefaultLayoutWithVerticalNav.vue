<!-- eslint-disable import/order -->
<script lang="ts" setup>
import navItems from '@/navigation/vertical'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import NavBarNotifications from './NavBarNotifications.vue'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'

// @layouts plugin
import { VerticalNavLayout } from '@layouts'
import { useI18n } from 'vue-i18n'
const {t} = useI18n() 
const { appRouteTransition, isLessThanOverlayNavBreakpoint } = useThemeConfig()
const { width: windowWidth } = useWindowSize()
</script>

<template>
  <VerticalNavLayout
    :nav-items="navItems"
  >
    <!-- 👉 navbar -->
  
    <!-- 👉 Pages -->

  <RouterView v-slot="{ Component }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
      <div class=" mt-[-50px] min-h-[100vh]">
        <Component :is="Component" />
      </div>

      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <!-- <template #footer>
      <Footer />
    </template> -->

    <!-- 👉 Customizer -->
    <!-- <TheCustomizer /> -->
  </VerticalNavLayout>
</template>
<style>
.navbar-content-container {
  display:none  !important;
}
</style>
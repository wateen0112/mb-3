<script lang="ts" setup>
import Notifications from '@core/components/Notifications.vue';
import type { Notification } from '@layouts/types';
import { storeToRefs } from 'pinia';

// import { useNotificationStore } from '@/stores/Notification';

// Images
import avatar3 from '@images/avatars/avatar-3.png';
import avatar4 from '@images/avatars/avatar-4.png';
import avatar5 from '@images/avatars/avatar-5.png';
import paypal from '@images/svg/paypal.svg';

// const store = useNotificationStore();
// const { NotificationsUnRead } = storeToRefs(store);

const notifications: Notification[] = [
  {
    img: avatar4,
    title: 'Congratulation Flora! 🎉',
    subtitle: 'Won the monthly best seller badge',
    time: 'Today',
  },
  {
    text: 'Tom Holland',
    title: 'New user registered.',
    subtitle: '5 hours ago',
    time: 'Yesterday',
  },
  {
    img: avatar5,
    title: 'New message received 👋🏻',
    subtitle: 'You have 10 unread messages',
    time: '11 Aug',
  },
  {
    img: paypal,
    title: 'Paypal',
    subtitle: 'Received Payment',
    time: '25 May',
    color: 'error',
  },
  {
    img: avatar3,
    title: 'Received Order 📦',
    subtitle: 'New order received from john',
    time: '19 Mar',
  },
];
</script>

<template>
  <!-- <Notifications :notifications="NotificationsUnRead" /> -->
  <Notifications :notifications="notifications" />
</template>

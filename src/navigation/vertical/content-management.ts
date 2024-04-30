import type { VerticalNavItems } from '@/@layouts/types';
import ChatIcon from '@/assets/images/svg/chat_plus_duotone_line.svg'
import UserIcon from '@/assets/images/svg/user-ico.svg'
import SearchIcon from '@/assets/images/svg/search.svg'
import CartIcon from '@/assets/images/svg/cart.svg'
import SettingsIcon from '@/assets/images/svg/settings.svg'

export default [
  {
    title: 'الرئيسية',
    is_svg:false,
    to: { name: 'index' },
    icon: { icon: 'tabler-home' },
  },
  {
    title:'طلباتي',
    is_svg:false,
    to:{
      name:'content-management-orders'
    },
    icon:{icon:'mdi-bell'}
  },

  {
    title:'أعلن هنا',
    to:{
      name:'content-management-ads'
    },
    is_svg:true,
    icon:{
      
      icon:ChatIcon}
  },
  {
    title:'بحث',
    to:{
      name:'content-management-search'
    },
    is_svg:true,
    icon:{
      
      icon:SearchIcon}
  },

  {
    title:'السلة',
    to:{
      name:'content-management-cart'
    },
    is_svg:true,
    icon:{
      
      icon:CartIcon}
  },

  {
    title:'الإعدادات',
    to:{
      name:'content-management-settings'
    },
    is_svg:true,
    icon:{
      
      icon:SettingsIcon}
  },


  // {
  //   title: 'sidbar.employee',
  //   to: { name: 'content-management-employee' },
  //   icon: { icon: 'uil:user-circle' },
  // },
  // {
  //   title: 'sidbar.order',
  //   to: { name: 'content-management-order' },
  //   icon: { icon: 'tabler-baby-carriage' },
  // },
  // {
  //   title: 'sidbar.driver',
  //   to: { name: 'content-management-driver' },
  //   icon: { icon: 'tabler-car' },
  // },
  // {
  //   title: 'sidbar.invoice',
  //   to: { name: 'content-management-invoice' },
  //   icon: { icon: 'mdi-currency-usd' },
  // },
  // {
  //   title: 'sidbar.evaluation',
  //   to: { name: 'content-management-evaluation' },
  //   icon: { icon: 'tabler-star' },
  // },
  // {
  //   title: 'sidbar.product',
  //   to: { name: 'content-management-product' },
  //   icon: { icon: 'uil:box' },
  // },


  // {
  //   title: 'sidbar.rating',
  //   to: { name: 'content-management-coupon' },
  //   icon: { icon: 'uil:percentage' },
  // },
  // {
  //   title: 'sidbar.user',
  //   to: { name: 'content-management-customer' },
  //   icon: { icon: 'uil:user' },
  // },
  // {
  //   title: 'sidbar.contact',
  //   to: { name: 'content-management-contactUs' },
  //   icon: { icon: 'uil:phone' },
  // },
  // {
  //   title: 'sidbar.report',
  //   to: { name: 'content-management-report' },
  //   icon: { icon: 'uil:analytics' },
  // },

] as VerticalNavItems;

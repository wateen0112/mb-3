import type { HorizontalNavItems } from '@layouts/types'

export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-home' },
  },
  {
    title: 'Forget Password',
    to: { name: 'forgetPassword' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Got Mail',
    to: { name: 'gotMail' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Reset Password',
    to: { name: 'resetPassword' },
    icon: { icon: 'tabler-file' },
  },
] as HorizontalNavItems

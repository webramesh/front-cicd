// single pages
import homePage from '../pages/Home.vue';
const Categories = () => import('../pages/Categories.vue');
// const LoginPage = () => import('../pages/Login.vue');
import LoginPage from '../pages/Login.vue'

const Features = () => import('../pages/Features.vue');
const AppsShow = () => import('../pages/AppShow.vue');
const Process = () => import('../pages/Process.vue');
const BusinessForm = () => import('../pages/BusinessForm.vue');
const ChooseColor = () => import('../pages/ChooseColor.vue');
const Fonts = () => import('../pages/Fonts.vue');

const Templates = () => import('../pages/Templates.vue');
const TemplateShow = () => import('../pages/TemplateShow.vue')

const Otp = () => import('../pages/Otp.vue');
const ForgetPassword = () => import('../pages/ForgetPassword.vue');

const Editor = () => import('../editor/Editor.vue');

const CustomerDashboard = () => import('../pages/customer/CustomerDashboard.vue');

const notFoundPage = () => import('../pages/NotFound.vue');

import { DOMAIN_TITLE } from '../.env';

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: `${DOMAIN_TITLE} | Home`, showFullMenu: true }
  },

  {
    path: '/home',
    name: 'home',
    component: homePage,
    meta: { title: `${DOMAIN_TITLE} | Home` }
  },
  {
    path: '/features',
    name: 'features',
    component: Features,
    meta: { title: `${DOMAIN_TITLE} | Features`, showFullMenu: true }
  },
  {
    path: '/templates',
    name: 'templates',
    component: TemplateShow,
    meta: { title: `${DOMAIN_TITLE} | More Templates`, showFullMenu: true }
  },
  {
    path: '/apps',
    name: 'apps',
    component: AppsShow,
    meta: { title: `${DOMAIN_TITLE} | More Apps` , showFullMenu: true}
  },

  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { title: `${DOMAIN_TITLE} | login` }
  },

  {
    path: '/otp',
    name: 'otp',
    component: Otp,
    meta: { title: `${DOMAIN_TITLE} | OTP` }
  },
  {
    path: '/forget-password',
    name: 'forgetPassword',
    component: ForgetPassword,
    meta: { title: `${DOMAIN_TITLE} | Forget Password` }
  },

  {
    path: '/process',
    name: 'process',
    component: Process,
    meta: { title: `${DOMAIN_TITLE} | Process` }
  },

  {
    path: '/category',
    name: 'category',
    component: Categories,
    meta: { title: `${DOMAIN_TITLE} | Categories`, isAuth: true }
  },
  {
    path: '/project-info',
    name: 'business_form',
    component: BusinessForm,
    meta: { title: `${DOMAIN_TITLE} | Business Form`, isAuth: true }
  },
  {
    path: '/color-palette',
    name: 'color-palette',
    component: ChooseColor,
    meta: { title: `${DOMAIN_TITLE} | Choose Color`, isAuth: true }
  },
  {
    path: '/fonts',
    name: 'fonts',
    component: Fonts,
    meta: { title: `${DOMAIN_TITLE} | Font`, isAuth: true }
  },
  {
    path: '/choose-template',
    name: 'chooseTemplate',
    component: Templates,
    meta: { title: `${DOMAIN_TITLE} | Templates`, isAuth: true }
  },
  
  {
    path: '/editor',
    name: 'editor',
    component: Editor,
    meta: { title: `${DOMAIN_TITLE} | Builder`, isAuth: true }
  },

  {
    path: '/customer/dashboard',
    name: 'customerDashboard',
    component: CustomerDashboard,
    meta: { title: `${DOMAIN_TITLE} | Customer Dashboard`, isAuth: true }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  }
];

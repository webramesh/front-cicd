import $store from '../store';
import { AuthService } from '@/services/auth.service';

/**
 * Current user state initialization
 * @WARN Must be always first in middleware chain
 */
export async function initCurrentUserStateMiddleware(to, from, next) {
  const access_token = localStorage.getItem('access_token');
  const refresh_token = localStorage.getItem('refresh_token');
  const expires_in = localStorage.getItem('expires_in');

  const authPayload = {
    access_token,
    refresh_token,
    expires_in
  };

  await $store.dispatch('auth/getUser', authPayload);
  
  const currentUserId = $store.getters['auth/user']?.id;
  const authenticated = $store.getters['auth/authenticated'];

  // if (AuthService.hasRefreshToken() && !authenticated) {
  //   try {
  //     await AuthService.debounceRefreshTokens();
  //     await $store.dispatch('user/getCurrent');
  //     next();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // } else {
  //  next();
  // }
    next();
}

/**
 * Check access permission to auth routes
 */
export function checkAccessMiddleware(to, from, next) {
  const currentUserId = $store.getters['auth/user']?.id;

  const authenticated = $store.getters['auth/authenticated'];

  if (authenticated && to.name === 'login') return next({ name: 'category' });

  const isAuthRoute = to.matched.some(item => item.meta.isAuth);

  if (isAuthRoute && authenticated) return next();
  if (isAuthRoute) return next({ name: 'login' });
  next();
}

export function setPageTitleMiddleware(to, from, next) {
  const pageTitle = to.matched.find(item => item.meta.title);

  if (pageTitle) window.document.title = pageTitle.meta.title;
  next();
}

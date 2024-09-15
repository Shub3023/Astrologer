
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./sign-up/sign-up.page').then(m => m.SignUpPage)
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./sign-in/sign-in.page').then(m => m.SignInPage)
  },
  {
    path: 'verify-otp',
    loadComponent: () => import('./verify-otp/verify-otp.page').then(m => m.VerifyOtpPage)
  },
  {
    path: 'loading-pop-up',
    loadComponent: () => import('./loading-pop-up/loading-pop-up.page').then(m => m.LoadingPopUpPage)
  },
  {
    path: 'success-pop-up',
    loadComponent: () => import('./success-pop-up/success-pop-up.page').then(m => m.SuccessPopUpPage)
  },
  {
    path: 'wait-pop-up',
    loadComponent: () => import('./wait-pop-up/wait-pop-up.page').then(m => m.WaitPopUpPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/tabs/home/home.page').then(m => m.HomePage)
      },
      {
        path: 'chat',
        loadComponent: () => import('./pages/tabs/chat/chat.page').then( m => m.ChatPage)
      },
    
      // {
        // path: 'chat',
        // loadComponent: () => import('./pages/tabs/chat/chat.page').then(m => m.ChatPage)
      // },
      {
        path: 'live',
        loadComponent: () => import('./pages/tabs/live/live.page').then(m => m.LivePage)
      },
      {
        path: 'call',
        loadComponent: () => import('./pages/tabs/call/call.page').then(m => m.CallPage)
      },
      {
        path: 'pooja',
        loadComponent: () => import('./pages/tabs/pooja/pooja.page').then(m => m.PoojaPage)
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full',
  
      }
    ]
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'home-page',
    loadComponent: () => import('./home-page/home-page.page').then( m => m.HomePagePage)
  },
  {
    path: 'my-profile',
    loadComponent: () => import('./astrouser/my-profile/my-profile.page').then( m => m.MyProfilePage)
  },
  {
    path: 'my-profile1',
    loadComponent: () => import('./astrologer/my-profile/my-profile.page').then( m => m.MyProfilePage)
  },
  {
    path: 'media-icon-pop-up',
    loadComponent: () => import('./media-icon-pop-up/media-icon-pop-up.page').then( m => m.MediaIconPopUpPage)
  },
  {
    path: 'my-order',
    loadComponent: () => import('./astrouser/my-order/my-order.page').then( m => m.MyOrderPage)
  },
  {
    path: 'test',
    loadComponent: () => import('./test/test.page').then( m => m.TestPage)
  },
];

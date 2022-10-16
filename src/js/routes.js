import IndexPage from '@/pages/index.f7'
import HomePage from '@/pages/home/index.f7'
import VideosPage from '@/pages/videos/index.f7'
import VideosDetailsPage from '@/pages/videos/details.f7'
import AudioPage from '@/pages/audio/index.f7'
import AudioDetailsPage from '@/pages/audio/details.f7'
import PhotosPage from '@/pages/photos/index.f7'
import PhotosDetailsPage from '@/pages/photos/details.f7'
import BooksPage from '@/pages/books/index.f7'
import BooksDetailsPage from '@/pages/books/details.f7'
import NotFoundPage from '@/pages/404.f7'


const tabs = [
  {
    name: 'videos', 
    components: { 
      index: VideosPage, 
      details: VideosDetailsPage 
    }
  },
  {
    name: 'audio', 
    components: { 
      index: AudioPage, 
      details: AudioDetailsPage 
    }
  },
  {
    name: 'photos', 
    components: { 
      index: PhotosPage, 
      details: PhotosDetailsPage 
    }
  },
  {
    name: 'books', 
    components: { 
      index: BooksPage, 
      details: BooksDetailsPage 
    }
  }
].map(({name, components}) => ({
  path: `/${name}/`,
  id: `${name}-tab`,
  component: components.index
}))

const detail_pages = [
  {
    name: 'videos', 
    component: VideosDetailsPage
  },
  {
    name: 'audio', 
    component: AudioDetailsPage
  },
  {
    name: 'photos', 
    component: PhotosDetailsPage
  },
  {
    name: 'books', 
    component: BooksDetailsPage
  }
].map(({name, component}) => ({
  path: `/${name}/details/:id`,
  component: component,
}))

console.log("🚀 ~ file: routes.js ~ line 43 ~ tabs", tabs)
var routes = [
  {
    path: '/',
    component: IndexPage,
    tabs: [
      {
        path: '/',
        id: 'home-tab',
        component: HomePage,
      },
      ...tabs
    ],
  },
  ...detail_pages,

  // {
  //   path: '/dynamic-route/blog/:blogId/post/:postId/',
  //   component: DynamicRoutePage,
  // },
  // {
  //   path: '/request-and-load/user/:userId/',
  //   async: function ({ router, to, resolve }) {
  //     // App instance
  //     var app = router.app;

  //     // Show Preloader
  //     app.preloader.show();

  //     // User ID from request
  //     var userId = to.params.userId;

  //     // Simulate Ajax Request
  //     setTimeout(function () {
  //       // We got user data from request
  //       var user = {
  //         firstName: 'Vladimir',
  //         lastName: 'Kharlampidi',
  //         about: 'Hello, i am creator of Framework7! Hope you like it!',
  //         links: [
  //           {
  //             title: 'Framework7 Website',
  //             url: 'http://framework7.io',
  //           },
  //           {
  //             title: 'Framework7 Forum',
  //             url: 'http://forum.framework7.io',
  //           },
  //         ]
  //       };
  //       // Hide Preloader
  //       app.preloader.hide();

  //       // Resolve route to load page
  //       resolve(
  //         {
  //           component: RequestAndLoad,
  //         },
  //         {
  //           props: {
  //             user: user,
  //           }
  //         }
  //       );
  //     }, 1000);
  //   },
  // },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
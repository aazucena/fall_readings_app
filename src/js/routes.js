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
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
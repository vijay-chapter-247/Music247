import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trending',
    name: 'Trending',
    component: () => import('../views/Trending.vue')
  },
  {
    path: '/artists/:artistId',
    name: 'ArtistTrack',
    component: () => import('../views/ArtistTrack.vue')
  },
  {
    path: '/trending/:trendingId',
    name: 'TrendingTrack',
    component: () => import('../views/TrendingTrack.vue')
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: () => import('../views/Playlists.vue')
  },
  {
    path: '/playlists/:playlistId',
    name: 'PlaylistTrack',
    component: () => import('../views/PlaylistTrack.vue')
  },
  {
    path: '/albums',
    name: 'Albums',
    component: () => import('../views/Albums.vue')
  },
  {
    path: '/albums/:albumId',
    name: 'AlbumsTrack',
    component: () => import('../views/AlbumsTrack.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

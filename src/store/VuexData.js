import router from "@/router";

var SpotifyWebApi = require("spotify-web-api-node");
var spotifyApi = new SpotifyWebApi({
  clientId: "6d280f8d789b4a858a67c830a85545be",
  clientSecret: "354f43281e0e40b8afa003a6f5361b54",
  redirectUri: "http://localhost:8080/",
});
spotifyApi.setAccessToken(
  "BQBlVgv7nvQUDM_0a3h2xxgIrQu2NYlF5_QZFnvh8EfFCCZ3LVJaSN04aLxRE8YLWqmVjj7PLDLlo7Fe8bE6aVl9efR5xI6riEJxa_F3VFrwbqXWCbac4WKO9NJNgYz__KKLWsEcb7FqVXP4nMoO4drRHZhsOZlUwiqaBsMCf0A_wCsWt6vNo7nvtv4icVENUmsrBkNEdERO75a5tGlvI6qdHw-UFePHsZEKuIZS8SFNwuw7bU0qX4CmRzemQ6rpPvQbDoUFurt7cIb_758dK4Gzb-SyHmpD1406M1w2"
);

const state = {
  playlist: [],
  playlisttrack: [],
  playlistheader: [],
  trending: [],
  trendingtrack: [],
  album: [],
  albumtrack: [],
  recentplaylist: [],
  topartist: [],
  categories: [],
  categoriesTrack: []
};

const getters = {
  playlist: (state) => state.playlist,

  playlisttrack: (state) => state.playlisttrack,

  playlistheader: (state) => state.playlistheader,

  trending: (state) => state.trending,

  trendingtrack: (state) => state.trendingtrack,

  trendingImage: (state) =>
    state.trending.find((p) => p.id === router.currentRoute.params.trendingId),

  album: (state) => state.album,

  albumtrack: (state) => state.albumtrack,

  recentplaylist: (state) => state.recentplaylist,

  artist: (state) => state.topartist.find((p) => p.id === router.currentRoute.params.artistId),

  topartist: (state) => state.topartist,

  categories: (state) => state.categories,

  categoriesTracks: (state) => state.categoriesTrack,
};

const actions = {
  async fetchRecentPlaylist({ commit }) {
    // Get Current User's Recently Played Tracks
    spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then(
      (data) => {
        commit("setRecentplaylist", data.body.items);
      },
      function (err) {
        console.log("56. Something went wrong!", err);
      }
    );
  },
  async fetchTrending({ commit }) {
    // Retrieve new releases
    spotifyApi.getNewReleases({ limit: 50, country: "IN" }).then(
      (data) => {
        commit("setTrending", data.body.albums.items);
      },
      function (err) {
        console.log("47. Something went wrong!", err);
      }
    );
  },
  async fetchTrendingTrack({ commit }) {
    const trendingId = router.currentRoute.params.trendingId;
    spotifyApi.getAlbumTracks(trendingId).then(
      (data) => {
        commit("setTrendingTrack", data.body.items[0]);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  },
  async fetchPlaylist({ commit }) {
    // Get a user's playlists
    spotifyApi.getUserPlaylists("yzwbnheupw8eocc5io5at5fup", { limit: 8 }).then(
      (data) => {
        commit("setPlaylist", data.body.items);
      },
      function (err) {
        console.log("20. Something went wrong!", err);
      }
    );
  },
  async fetchPlaylistHeader({ commit }) {
    const playlistId = router.currentRoute.params.playlistId;
    // Get a playlist
    spotifyApi.getPlaylist(playlistId).then(
      (data) => {
        // this.playlistTrack.push(data.body);
        commit("setPlaylistHeader", data.body);
      },
      function (err) {
        console.log("19. Something went wrong!", err);
      }
    );
  },
  async fetchPlaylistTrack({ commit }) {
    // Get tracks in an Playlist
    const playlistId = router.currentRoute.params.playlistId;
    spotifyApi.getPlaylistTracks(playlistId).then(
      (data) => {
        commit("setPlaylistTrack", data.body);
      },
      function (err) {
        console.log("11. Something went wrong!", err);
      }
    );
  },
  async fetchAlbum({ commit }) {
    spotifyApi.getAlbums([
      "1CHHIPnOBaLjn0XO0sN07W",
      "0I4qWmnLr665zzPdIhRIB5",
      "4nsfoy12XSqqLDwJzAGGH7",
      "61kijqkLmurIjlNOv65WYJ",
      "4bTGJwlmrPCsl5Ib62S7CE",
      "2gNPnKP1PDkB5SZz3IMKuX",
      "2nVYv9PlewRjBK6vfPTpxw",
      "3cbW8Lfxw1NJzSxiMMtsrk",
    ])
      .then(
        (data) => {
          // this.albums.push(data.body.albums);
          commit("setAlbum", data.body.albums);
        },
        function (err) {
          console.error("2. Something went wrong!", err);
        }
      );
  },
  async fetchAlbumtrack({ commit }) {
    // Get tracks in an album
    const albumId = router.currentRoute.params.albumId;
    spotifyApi.getAlbumTracks(albumId, { limit: 50, offset: 0 }).then(
      (data) => {
        commit("setAlbumTrack", data.body);
      },
      function (err) {
        console.log("11. Something went wrong!", err);
      }
    );
  },
  async fetchtopartist({ commit }) {
    /* Get a User’s Top Artists*/
    spotifyApi.getMyTopArtists().then(
      (data) => {
        commit("setTopArtist", data.body.items);
      },
      function (err) {
        console.log("67. Something went wrong!", err);
      }
    );
  },
  async fetchCategories({ commit }) {
    // Get a List of Categories
    spotifyApi.getCategories({ limit: 50, country: 'IN' }).then(
      (data) => {
        commit("setCategories", data.body.categories.items);
      },
      function (err) {
        console.log("49. Something went wrong!", err);
      }
    );
  },
  async fetchCategoriesTrack({ commit }) {
    // Get Playlists for a Category
    const categoryId = router.currentRoute.params.categoryId;
    spotifyApi.getPlaylistsForCategory(categoryId, { country: 'IN', limit: 50 }).then((data) => {
      commit("setCategoriesTrack", data.body.playlists.items);
    }, function (err) {
      console.log("51. Something went wrong!", err);
    });
  },
};
const mutations = {
  setPlaylist: (state, playlist) => (state.playlist = playlist),

  setPlaylistTrack: (state, playlisttrack) => (state.playlisttrack = playlisttrack),

  setPlaylistHeader: (state, playlistheader) => (state.playlistheader = playlistheader),

  setTrending: (state, trending) => (state.trending = trending),

  setTrendingTrack: (state, trendingtrack) => (state.trendingtrack = trendingtrack),

  setAlbum: (state, album) => (state.album = album),

  setAlbumTrack: (state, albumtrack) => (state.albumtrack = albumtrack),

  setRecentplaylist: (state, recentplaylist) => (state.recentplaylist = recentplaylist),

  setTopArtist: (state, topartist) => (state.topartist = topartist),

  setCategories: (state, categories) => (state.categories = categories),

  setCategoriesTrack: (state, categoriesTrack) => (state.categoriesTrack = categoriesTrack),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

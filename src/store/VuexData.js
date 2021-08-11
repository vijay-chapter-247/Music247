import router from "@/router";

var SpotifyWebApi = require("spotify-web-api-node");
var spotifyApi = new SpotifyWebApi({
  clientId: "6d280f8d789b4a858a67c830a85545be",
  clientSecret: "354f43281e0e40b8afa003a6f5361b54",
  redirectUri: "http://localhost:8080/",
});
spotifyApi.setAccessToken(
  "BQC4LE2SPWYDHwJoVHbDF7hiN8J_ORGiybhSYfbNrOc507_NJ_RtUnHyunS0vCkAhHtIrtt7lAYUF6w6-SVcl14vm-9XlMwOiiy5TL5mIm0lPaaReMKlUSiGoLH9bkSrehYe2Pt9o7xh15b9NmfGAa-VPCK1wlJWguekFRkTMQ72cChsyDFWo2LoyIfEh4nSHQ_5NINCJTD8d3OSNHPvm5DE6JyoLtyG3HcEduvSwAU_o9bjCkVwq7EowaSsS7PBx3J6AooPL8jtA_Jb8by5Agl7PXoEFDyzrp72TZ1E"
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
  // artist: [],
  topartist: [],
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

  // artist: (state) => state.artist,

  artist: (state) =>
    state.topartist.find((p) => p.id === router.currentRoute.params.artistId),

  topartist: (state) => state.topartist,
};

const actions = {
  async fetchRecentPlaylist({ commit }) {
    // Get Current User's Recently Played Tracks
    spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then(
      (data) => {
        commit("setRecentplaylist", data.body.items);
      },
      function(err) {
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
      function(err) {
        console.log("47. Something went wrong!", err);
      }
    );
  },
  async fetchTrendingTrack({ commit }) {
    const trendingId = router.currentRoute.params.trendingId;

    spotifyApi.getAlbumTracks(trendingId).then(
      (data) => {
        commit("setTrendingTrack", data.body.items[0]);
        // this.trendingTrack.push(data.body.items[0]);
        // console.log(data.body.items[0]);
      },
      function(err) {
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
      function(err) {
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
      function(err) {
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
      function(err) {
        console.log("11. Something went wrong!", err);
      }
    );
  },
  async fetchAlbum({ commit }) {
    // Get multiple albums
    spotifyApi
      .getAlbums([
        "5U4W9E5WsYb2jUQWePT8Xm",
        "3KyVcddATClQKIdtaap4bV",
        "6GKdqG98cRgVf8mI9wJU5g",
        "61kijqkLmurIjlNOv65WYJ",
        "1lz1oSTTrZuNe0nE02PjKJ",
        "4KA206tstq17hbvPIZm2nZ",
      ])
      .then(
        (data) => {
          // this.albums.push(data.body.albums);
          commit("setAlbum", data.body.albums);
        },
        function(err) {
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
      function(err) {
        console.log("11. Something went wrong!", err);
      }
    );
  },
  // async fetchArtist({ commit }) {
  //   // Get an artist
  //   const artistsId = router.currentRoute.params.artistId;
  //   spotifyApi.getArtist(artistsId).then(
  //     (data) => {
  //       commit("setArtist", data.body);
  //     },
  //     function(err) {
  //       console.error(err);
  //     }
  //   );
  // },
  async fetchtopartist({ commit }) {
    /* Get a User’s Top Artists*/
    spotifyApi.getMyTopArtists().then(
      (data) => {
        commit("setTopArtist", data.body.items);
      },
      function(err) {
        console.log("67. Something went wrong!", err);
      }
    );
  },
};
const mutations = {
  setPlaylist: (state, playlist) => (state.playlist = playlist),

  setPlaylistTrack: (state, playlisttrack) =>
    (state.playlisttrack = playlisttrack),

  setPlaylistHeader: (state, playlistheader) =>
    (state.playlistheader = playlistheader),

  setTrending: (state, trending) => (state.trending = trending),

  setTrendingTrack: (state, trendingtrack) =>
    (state.trendingtrack = trendingtrack),

  setAlbum: (state, album) => (state.album = album),

  setAlbumTrack: (state, albumtrack) => (state.albumtrack = albumtrack),

  setRecentplaylist: (state, recentplaylist) =>
    (state.recentplaylist = recentplaylist),

  // setArtist: (state, artist) => (state.artist = artist),

  setTopArtist: (state, topartist) => (state.topartist = topartist),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

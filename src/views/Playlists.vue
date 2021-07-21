<template>
  <v-container class="">
    <v-card dark flat class="dark mt-2 ">
      <v-card-title class="">
        <div class="headline font-family--poppins wrap--text--1 ">
          Playlists
        </div>
      </v-card-title>
    </v-card>

    <v-row justify="">
      <v-col cols="6" sm="3" v-for="card in cards" :key="card.title">
        <v-card class="pa-3 darkest rounded">
          <v-img
            :src="card.src"
            class="rounded"
            :height="
              $vuetify.breakpoint.xs
                ? '120px'
                : $vuetify.breakpoint.sm
                ? '110px'
                : $vuetify.breakpoint.md
                ? '140px'
                : $vuetify.breakpoint.lg
                ? '200px '
                : '20px '
            "
          >
          </v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Best airlines1",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
    ],
  }),
  // computed: {
  //   imageHeight () {
  //     switch (this.$vuetify.breakpoint.name) {
  //       case 'xs': return '50px'
  //       case 'sm': return '70px'
  //       case 'md': return '100px'
  //       case 'lg': return '150px'
  //       case 'xl': return '150px'
  //     }
  //   },
  // },
  created() {
    var SpotifyWebApi = require("spotify-web-api-node");
    var spotifyApi = new SpotifyWebApi({
      clientId: "6d280f8d789b4a858a67c830a85545be",
      clientSecret: "354f43281e0e40b8afa003a6f5361b54",
      redirectUri: "http://localhost:8080/",
    });
    spotifyApi.setAccessToken(
      "BQASBosTlLyVKapi5NgG6zZjZuAVp0NpVba6ArISjtkysb4E-haRy5H7b2fM7inc2mgHhi7fP2YdnQhYJSvFwe3WBaxHH6jocQhshLwHNFIsMzoX49G5tO_EbZ9mVfjEdAXQ4KeYQN09kV6jYvx4TZuFY8XfvH2jZnJ18qQh8LKmXuuOdbwqXwyh30rgG4N_kx5H2ybq2J-4IjD2mCLnACHvsKGpRoouBOCDpakPItKkgKX_BW8vgsRT6vyJqwVcDDLksYKdCHBiqAcqysAUAYquHTcn5UCjzAah7yLq"
    );

    // Get a playlist
    spotifyApi.getPlaylist("5ieJqeLJjjI8iJWaxeBLuK").then(
      function(data) {
        console.log("19. Some information about this playlist", data.body);
      },
      function(err) {
        console.log("19. Something went wrong!", err);
      }
    );

    // Get a user's playlists
    spotifyApi.getUserPlaylists("thelinmichael").then(
      function(data) {
        console.log("20. Retrieved playlists", data.body);
      },
      function(err) {
        console.log("20. Something went wrong!", err);
      }
    );
  },
};
</script>

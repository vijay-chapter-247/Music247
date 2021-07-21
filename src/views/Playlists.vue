<template>
  <v-container class="">
    <v-card dark flat class="dark mt-2 ">
      <v-card-title class="">
        <div class="headline  wrap--text--1 ">
          Playlists
        </div>
      </v-card-title>
    </v-card>

    <v-row>
      <v-col cols="6" sm="3" v-for="card in cards" :key="card.title">
        <v-hover v-slot="{ hover }">
          <v-card
            :class="{ '': hover }"
            :elevation="hover ? 15 : 0"
            class="pt-3 pt-md-5 px-3 px-md-5 lightdark pointer rounded-lg"
          >
            <v-img :src="card.src" class="rounded-lg" :height="imageHeight">
            </v-img>
            <v-card-text class="white--text">
              <p class="mb-2 text-sm-Subtitle-2 font-weight-bold wrap--text--1">
                {{ card.name }}
              </p>
              <p class="mb-2 text-sm-body-2 grey--text wrap--text--2">
                {{ card.artist }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
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
        name: "Kapoor & Sons",
        artist: "Mothoon, Jasleen Royal",
      },
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        name: "Shore in the City (Original Motion Picture Soundtrack)",
        artist: "Sachine-Jigar, Harpreet",
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        name: "Ae dil hai mushkil",
        artist: "Tulsi Kumar, Darshan Raval",
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        name: "Tu hi yaar mera",
        artist: "Pritam, Arijit Singh, Ritviz",
      },
    ],
  }),
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "120px";
        case "sm":
          return "110px";
        case "md":
          return "140px";
        case "lg":
          return "200px";
        default:
          return "200px";
      }
    },
  },
  created() {
    var SpotifyWebApi = require("spotify-web-api-node");
    var spotifyApi = new SpotifyWebApi({
      clientId: "6d280f8d789b4a858a67c830a85545be",
      clientSecret: "354f43281e0e40b8afa003a6f5361b54",
      redirectUri: "http://localhost:8080/",
    });
    spotifyApi.setAccessToken(
      "BQBp6d2T0-Go6c9sd_snvyEbXTgLsKyHZHNUvDLolaP42YYsQvo6sMl2BMmGetCyKZGEuwKR5tnksRWrJsbsEbbtPLh1ai3rH29NkSxlT2sVqeWlGe8jxwfMb1hTdMVUUBEiEev0Q20qSY72kzVnt11aPzJzfy4N1ioWn2VxfXtH0mVH8a2EQGcISBgdCvvM7fBeXvbt3ZTQl6u_NXuFpaMznYmNF_rZ1bYaI-ZCZTK5rVDIYl-bEYCNLAy3QBDufuWJZWKICH-qGJrh5eXYbKq6tn6hbOmVMRkeZUyA"
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

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
            :height="cardHeight"
            :elevation="hover ? 15 : 0"
            class="pt-3 pt-md-5 px-3 px-md-5 lightdark pointer rounded-md"
          >
            <v-img :src="card.src" :height="imageHeight" class="rounded-sm">
              <v-btn
                fab
                v-bind="size"
                absolute
                right
                bottom
                color="bg--orange border--btn white--text no-background-hover position--bottom"
                @click="changeSong(card.id)"
                v-if="isPlaying && card.id === selectedId"
              >
                <v-icon>mdi-pause</v-icon>
              </v-btn>
              <v-btn
                fab
                v-bind="size"
                absolute
                right
                bottom
                color="bg--orange border--btn white--text no-background-hover position--bottom"
                @click="changeSong(card.id)"
                v-else
                v-show="hover"
              >
                <v-icon>mdi-play</v-icon>
              </v-btn>
            </v-img>

            <v-card-text class="white--text px-0">
              <p class="mb-1 Subtitle-1 font-weight-bold wrap--text--1">
                {{ card.name }}
              </p>
              <v-hover v-slot="{ hover }">
                <p
                  class="mb-2 body-2 grey--text wrap--text--2"
                  :class="{ 'text-decoration-underline': hover }"
                >
                  {{ card.artist }}
                </p>
              </v-hover>
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
    isPlaying: false,
    selectedId: null,
    cards: [
      {
        id: 1,
        title: "Best airlines1",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        name: "Kapoor & Sons",
        artist: "Mothoon, Jasleen Royal",
      },
      {
        id: 2,
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        name: "Shore in the City (Original Motion Picture Soundtrack)",
        artist: "Sachine-Jigar, Harpreet",
      },
      {
        id: 3,
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        name: "Ae dil hai mushkil",
        artist: "Tulsi Kumar, Darshan Raval",
      },
      {
        id: 4,
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        name: "Tu hi yaar mera",
        artist: "Pritam, Arijit Singh, Ritviz, Shreya Ghoshal",
      },
    ],
  }),
  methods: {
    play() {
      this.isPlaying = true;
    },
    pause() {
      this.isPlaying = false;
    },
    changeSong(songId) {
      if (this.selectedId === songId) {
        if (this.isPlaying) {
          this.pause();
        } else {
          this.play();
        }
      } else {
        this.selectedId = songId;
        this.play();
      }
    },
  },
  computed: {
    size() {
      const size = {
        xs: "x-small",
        sm: "x-small",
        md: "x-small",
        lg: "small",
        xl: "small",
      }[this.$vuetify.breakpoint.name];
      return size
        ? {
            [size]: true,
          }
        : {};
    },
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "120";
        case "sm":
          return "110";
        case "md":
          return "140";
        case "lg":
          return "200";
        default:
          return "200";
      }
    },
    cardHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "230";
        case "sm":
          return "230";
        case "md":
          return "260";
        case "lg":
          return "320";
        default:
          return "320";
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
      "BQA5xKURGuaJqjyGW17QfOgbzGqLYl7Hi9vU_aFyNdvPCqO_Pd_Ct4XiOkuTLz0DY9GV6YfiQl2E7PC7FWs7gWRGRlt4qvEfi63q2CaRPjyfwDchYmva6NQsTogt3taHQxl26H_n1GQ_UgOAc0MO4jswahCgneDnUf6Gw-mtxcVPwDL62_HMCeXaVULQ32Sk1xl4fp_pK_aYbonWERFbFDNwz4tNC2g0r0YGdy4dXd0qQq-QKvQnTjXtk4N1OdCm09y8l82mQZFLZ2QhdanFrP5kHSK_vv_rWNeEyH8Y"
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

<style>
.position--bottom {
  bottom: 5px !important;
  right: 10px !important;
}
</style>

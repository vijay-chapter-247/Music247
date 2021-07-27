<template>
  <v-container>
    <v-card dark flat class="dark mt-2 ">
      <v-card-title class="">
        <div class="headline  wrap--text--1 ">
          Playlists
        </div>
      </v-card-title>
    </v-card>

    <v-row v-for="playlist in playlist" :key="playlist.href">
      <v-col cols="6" sm="3" v-for="item in playlist.items" :key="item.id">
        <v-hover v-slot="{ hover }">
          <v-card
            :height="cardHeight"
            :elevation="hover ? 15 : 0"
            class="pt-3 pt-md-5 px-3 px-md-5 lightdark pointer rounded-lg"
            :to="`playlists/${item.id}`"
          >
            <v-img
              :src="item.images[0].url"
              :height="imageHeight"
              class="rounded-lg"
            >
              <span class="d-none d-sm-inline">
                <v-btn
                  fab
                  v-bind="size"
                  absolute
                  right
                  bottom
                  class="arrow bg--orange  white--text no-background-hover position--bottom"
                  @click="changeSong(item.id)"
                  v-if="isPlaying && item.id === selectedId"
                  to="playlists"
                >
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
                <v-btn
                  fab
                  v-bind="size"
                  absolute
                  right
                  bottom
                  class="arrow bg--orange  white--text no-background-hover position--bottom"
                  @click="changeSong(item.id)"
                  v-else
                  v-show="hover"
                  to="playlists"
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>
              </span>
            </v-img>

            <v-card-text class="white--text px-0">
              <p
                class="mb-1 Subtitle-1 font-weight-bold text-capitalize wrap--text--1"
              >
                {{ item.type }}
              </p>
              <v-hover v-slot="{ hover }">
                <p
                  class="mb-2 body-2 grey--text text-capitalize wrap--text--2"
                  :class="{ 'text-decoration-underline': hover }"
                >
                  {{ item.name }}
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
    playlist: [],
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
      clientId: this.$myClientId,
      clientSecret: this.$myClientSecret,
      redirectUri: "http://localhost:8080/",
    });
    spotifyApi.setAccessToken(
      "BQD1jPTO1fGmCDGjaZP3aD1VP2SdJZUo_43V-JsNasgbH1N7pAeCrLxQDTZuYc7s4-ytJbo2eIXcdmNZPOW5l4NPdfKS9Q0JnSQJ3ELj1zeXYH7uzd7LKN4ec7FJcayv4mZ8ZlnVoT0jop5rTePDYpuCw0AKHLW8U_kmrT1dM6ndAeY_Wq2P_Z_jODnYPThRz5Rr8uLLuA326ggGuR2Kn6-r_L3urBqw0EM1WDB74h-TpQtDTDni5bGnSThGVEn8fX_VsgShYQXdJ7fnQ4IHFssA8TOHjdt382BnMYYG"
    );

    // Get a user's playlists
    spotifyApi
      .getUserPlaylists("yzwbnheupw8eocc5io5at5fup", {
        limit: 8,
      })
      .then(
        (data) => {
          this.playlist.push(data.body);
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

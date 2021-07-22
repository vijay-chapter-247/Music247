<template>
  <v-container>
    <v-row class="dark mt-2">
      <v-col>
        <v-card flat v-for="(item, i) in items" :key="i" class="dark">
          <v-row class="white--text" justify="center">
            <v-col cols="12" md="3" class="text-center text-md-start">
              <v-avatar :size="avatarSize" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </v-col>

            <v-col cols="12" md="9" class="text-center text-md-start">
              <v-subheader
                class="pl-0 d-none d-md-flex white--text font-weight-bold"
                >Playlist</v-subheader
              >
              <p
                class="mb-3 text-h6 text-sm-h5 text-md-h2 font-weight-bold wrap--text--1"
              >
                Arijit Happy Melodies
              </p>
              <p class="my-3 text-body-2 text-md-body-1 wrap--text--2">
                New playlist description
              </p>
              <p class="my-3 caption text-md-body-2 wrap--text--2">
                VIJAY VISHWAKARMA . 1HR 30 MIN
              </p>
            </v-col>

            <v-col class="text-center text-md-end pt-0">
              <v-btn
                fab
                v-bind="size"
                class="arrow bg--orange  white--text no-background-hover"
                @click="changeSong(item.id)"
                v-if="isPlaying && item.id === selectedId"
              >
                <v-icon>mdi-pause</v-icon>
              </v-btn>
              <v-btn
                fab
                v-bind="size"
                class="arrow bg--orange  white--text no-background-hover"
                @click="changeSong(item.id)"
                v-else
              >
                <v-icon>mdi-play</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isPlaying: false,
    selectedId: null,
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
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
        xs: "small",
        sm: "small",
        md: "large",
        lg: "large",
        xl: "large",
      }[this.$vuetify.breakpoint.name];
      return size
        ? {
            [size]: true,
          }
        : {};
    },
    avatarSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100";
        case "sm":
          return "100";
        case "md":
          return "210";
        case "lg":
          return "210";
        default:
          return "210";
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
      "BQBMqcAAAL4MN-bdZH1TpjHgg3mzHxsr4_ehyHV4PPgRvu4NlXo5ddCJG1rxkp76SE5aSgDR0EizCdXcDMWzIHpbmc3IcbxZmb0Rl8ALpTugo0eLD-678d9U-0VKVY7xRNCzl4x52T_u_ozVIe3kjEOcMAHDaVfmSEobp7dkZX5wfY42rmbdxgDJEMqq4gwiTmC1mV4KVG3Eps5o6WuXGxhF_NkErxLOyQnCfZd1NMmCXa1L8xsG2-m4nvs83miS8Q3RYIb5HbjmSac_U0KncbBqhaLGWLwVJH0cOxXd"
    );

    // Get a playlist
    const playlistId = this.$route.params.playlistId;
    spotifyApi.getPlaylist(playlistId).then(
      function(data) {
        console.log("19. Some information about this playlist", data.body);
      },
      function(err) {
        console.log("19. Something went wrong!", err);
      }
    );
  },
};
</script>

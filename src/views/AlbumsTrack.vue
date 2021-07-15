<template>
  <v-container fluid-lg>
    <v-card dark flat class="dark mt-2">
      <v-card-title>
        <div class="headline font-family--poppins wrap--text--1">
          Albums
        </div>
      </v-card-title>
    </v-card>

    <!-- Albums
    <v-row justify="space-between">
      <v-col cols="12" v-for="(album, index) in albumsTrack" :key="index">
        <v-card
          id="create"
          class="rounded-xl darkest pa-15 mb-5"
          v-for="item in album.items"
          :key="item.id"
        >
          <p class="white--text">
            duration_ms - {{ millisToMinutesAndSeconds(item.duration_ms) }}
          </p>
          <p class="white--text">explicit - {{ item.explicit }}</p>
          <p class="white--text">
            external_urls.spotify - {{ item.external_urls.spotify }}
          </p>
          <p class="white--text">id - {{ item.id }}</p>
          <p class="white--text">is_local - {{ item.is_local }}</p>
          <p class="white--text">name - {{ item.name }}</p>
          <p class="white--text">preview_url - {{ item.preview_url }}</p>
          <p class="white--text">track_number - {{ item.track_number }}</p>
          <p class="white--text">type - {{ item.type }}</p>
          <p class="white--text">uri - {{ item.uri }}</p>
        </v-card>
      </v-col>
    </v-row> -->

    <v-card dark flat class="dark mt-2">
      <v-card-text>
        <v-row class="white--text mt-5">
          <v-col cols="9" md="7">
            <v-row>
              <v-col cols="2" md="1" class="text-center">
                <div>#</div>
              </v-col>
              <v-col>
                <div>Title</div>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="4" class="d-none d-md-flex">
            <div class="wrap--text--1">Album</div>
          </v-col>
          <v-col cols="3" md="1" class="text-center">
            <div class="wrap--text--1">Time</div>
          </v-col>
        </v-row>
        <v-row class="mt-3">
          <v-divider color="white"></v-divider>
        </v-row>
      </v-card-text>

      <v-hover v-slot="{ hover }">
        <v-card-text class="rounded-lg mt-3" :class="hover ? 'darkest' : ''">
          <v-row class="white--text">
            <v-col cols="9" md="7" align-self="center">
              <v-row>
                <v-col cols="2" md="1" class="text-center" align-self="center">
                  <div v-show="!hover">1</div>

                  <v-btn
                    fab
                    outlined
                    class="border--btn"
                    x-small
                    v-show="hover"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="9" sm="10" md="11">
                  <v-list-item class="pa-0">
                    <v-list-item-avatar
                      tile
                      size="50"
                      class="d-none d-md-flex rounded-lg"
                    >
                      <v-img src="../assets/image_4.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="body-1 mb-1">
                        Arijit Singh
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Greyhound divisely hello coldly
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="4" align-self="center" class="d-none d-md-flex">
              <p class="wrap--text--1">Arijit Singh Solid Strings</p>
            </v-col>

            <v-col cols="3" md="1" align-self="center" class="text-center">
              <p>2:30</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-hover>

      <v-hover v-slot="{ hover }">
        <v-card-text class="rounded-lg mt-3" :class="hover ? 'darkest' : ''">
          <v-row class="white--text">
            <v-col cols="9" md="7" align-self="center">
              <v-row>
                <v-col cols="2" md="1" class="text-center" align-self="center">
                  <div v-show="!hover">2</div>

                  <v-btn
                    fab
                    outlined
                    class="border--btn"
                    x-small
                    v-show="hover"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="9" sm="10" md="11">
                  <v-list-item class="pa-0">
                    <v-list-item-avatar
                      tile
                      size="50"
                      class="d-none d-md-flex rounded-lg"
                    >
                      <v-img src="../assets/image_2.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="body-1 mb-1">
                        Honey Singh
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Doloribus, culpa voluptas ea alias!
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="4" align-self="center" class="d-none d-md-flex">
              <p class="wrap--text--1">Party Lover Songs</p>
            </v-col>

            <v-col cols="3" md="1" align-self="center" class="text-center">
              <p>4:27</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-hover>

      <v-hover v-slot="{ hover }">
        <v-card-text class="rounded-lg mt-3" :class="hover ? 'darkest' : ''">
          <v-row class="white--text">
            <v-col cols="9" md="7" align-self="center">
              <v-row>
                <v-col cols="2" md="1" class="text-center" align-self="center">
                  <div v-show="!hover">3</div>

                  <v-btn
                    fab
                    outlined
                    class="border--btn"
                    x-small
                    v-show="hover"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="9" sm="10" md="11">
                  <v-list-item class="pa-0">
                    <v-list-item-avatar
                      tile
                      size="50"
                      class="d-none d-md-flex rounded-lg"
                    >
                      <v-img src="../assets/image_10.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="body-1 mb-1">
                        Atif Aslam
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Eos minus similique odit commodi.
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="4" align-self="center" class="d-none d-md-flex">
              <p class="wrap--text--1">Broken Heart Strings</p>
            </v-col>

            <v-col cols="3" md="1" align-self="center" class="text-center">
              <p>3:38</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-hover>

      <v-hover v-slot="{ hover }">
        <v-card-text class="rounded-lg mt-3" :class="hover ? 'darkest' : ''">
          <v-row class="white--text">
            <v-col cols="9" md="7" align-self="center">
              <v-row>
                <v-col cols="2" md="1" class="text-center" align-self="center">
                  <div v-show="!hover">4</div>

                  <v-btn
                    fab
                    outlined
                    class="border--btn"
                    x-small
                    v-show="hover"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="9" sm="10" md="11">
                  <v-list-item class="pa-0">
                    <v-list-item-avatar
                      tile
                      size="50"
                      class="d-none d-md-flex rounded-lg"
                    >
                      <v-img src="../assets/image_8.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="body-1 mb-1">
                        Kishor Kumar
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Consectetur adipisicing elit. Sunt, dolor!
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="4" align-self="center" class="d-none d-md-flex">
              <p class="wrap--text--1">Unforgetable album</p>
            </v-col>

            <v-col cols="3" md="1" align-self="center" class="text-center">
              <p>5:50</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-hover>

      <v-hover v-slot="{ hover }">
        <v-card-text class="rounded-lg mt-3" :class="hover ? 'darkest' : ''">
          <v-row class="white--text">
            <v-col cols="9" md="7" align-self="center">
              <v-row>
                <v-col cols="2" md="1" class="text-center" align-self="center">
                  <div v-show="!hover">5</div>

                  <v-btn
                    fab
                    outlined
                    class="border--btn"
                    x-small
                    v-show="hover"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="9" sm="10" md="11">
                  <v-list-item class="pa-0">
                    <v-list-item-avatar
                      tile
                      size="50"
                      class="d-none d-md-flex rounded-lg"
                    >
                      <v-img src="../assets/image_7.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="body-1 mb-1">
                        Udit Narayan
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Lorem ipsum dolor sit.
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="4" align-self="center" class="d-none d-md-flex">
              <p class="wrap--text--1">Old is gold collection</p>
            </v-col>

            <v-col cols="3" md="1" align-self="center" class="text-center">
              <p>2:57</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-hover>
    </v-card>
  </v-container>
</template>

<script>
// export default {
//   data: () => ({
//     albumsTrack: [],
//   }),
//   methods: {
//     millisToMinutesAndSeconds(millis) {
//       var minutes = Math.floor(millis / 60000);
//       var seconds = ((millis % 60000) / 1000).toFixed(0);
//       return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//     },
//   },

//   created() {
//     var SpotifyWebApi = require("spotify-web-api-node");
//     var spotifyApi = new SpotifyWebApi({
//       clientId: "6d280f8d789b4a858a67c830a85545be",
//       clientSecret: "354f43281e0e40b8afa003a6f5361b54",
//       redirectUri: "http://localhost:8080/",
//     });
//     spotifyApi.setAccessToken(
//       "BQDekwVKx9PEqPLI01y6LpSnNlEYrDSldynh5wFKRzHmoR7rlKTLoPmt2LZhwCflIhfpWMmqkoOUb7J1_quKIEKoRYwmu8DzTOtqOSGUpMdII6jDOx1R8EPgTD7nNzrSCBe5rBP9OA6KNOspd50TBUgFAnbm0e0bgl9TwBxwvA7l7r2slh7Qu0JivEiV_d_7e3HeqLT0Jr663vyKAa5iXBHeY7r52BOXqIaSxWvf0wsRt7-GbbHabNo5-H6RKUFgLwaEbYPXJjxvgFt4IDHypt87JM39MZpg535J2GDq"
//     );

//     // Get tracks in an album
//     const albumId = this.$route.params.albumId;
//     spotifyApi
//       .getAlbumTracks(albumId, {
//         limit: 30,
//         offset: 0,
//       })
//       .then(
//         (data) => {
//           this.albumsTrack.push(data.body);
//           console.log("11. Get tracks in an album", this.albumsTrack);
//         },
//         function(err) {
//           console.log("11. Something went wrong!", err);
//         }
//       );
//   },
// };
//
</script>

<style scoped>
/* .wrap--text--3 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  -webkit-line-clamp: 3 !important;
} */
</style>

<template>
  <v-container>
    <v-card dark flat class="dark mt-2">
      <v-card-title>
        <div class="headline  wrap--text--1">
          Albums
        </div>
      </v-card-title>
    </v-card>

    <!-- Albums -->
    <v-row justify="space-between">
      <v-col cols="12" sm="6" v-for="(album, index) in albums" :key="index">
        <v-card id="create" class="rounded-xl lightdark" height="370">
          <v-img :src="album.images[0].url" height="200px">
            <v-speed-dial top right>
              <template v-slot:activator>
                <v-chip
                  small
                  color="#3d414d"
                  class="white--text font-weight-bold "
                  >7:00 min
                </v-chip>
              </template>
            </v-speed-dial>
          </v-img>

          <v-speed-dial top right class="position--down">
            <template v-slot:activator>
              <div class="avatar--border-3 pa-2">
                <v-avatar size="50">
                  <v-img :src="album.images[0].url"></v-img>
                </v-avatar>
                <span class="position--absolute rounded-circle border--card--3">
                  <v-icon color="blue">mdi-check-circle</v-icon>
                </span>
              </div>
            </template>
          </v-speed-dial>

          <v-card-title>
            <p class="grey--text body-1  wrap--text--1">
              {{ album.name }}
              <v-badge dot class="mx-2 mb-2" inline></v-badge>
            </p>
          </v-card-title>

          <v-card-subtitle class="mt-n7">
            <p class="white--text title  wrap--text--2">
              {{ album.label }}
            </p>
          </v-card-subtitle>

          <v-card-actions class="mt-n5 ml-2">
            <p class="grey--text body-2  wrap--text--1">
              {{ album.release_date }}
            </p>
            <v-spacer></v-spacer>
            <p>
              <v-btn text dark :to="`albums/${album.id}`">Click Me!</v-btn>
            </p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    albums: [],
  }),

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

    // Get multiple albums
    spotifyApi
      .getAlbums(["5U4W9E5WsYb2jUQWePT8Xm", "3KyVcddATClQKIdtaap4bV"])
      .then(
        (data) => {
          const album = data.body.albums;
          for (var i = 0; i < album.length; i++) {
            this.albums.push(album[i]);
          }
          // debugger
          console.log("2. Multiple albums information", this.albums);
        },
        function(err) {
          console.error("2. Something went wrong!", err);
        }
      );
  },
};
</script>

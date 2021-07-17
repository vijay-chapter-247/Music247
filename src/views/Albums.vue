<template>
  <v-container>
    <v-card dark flat class="dark mt-2">
      <v-card-title>
        <div class="headline font-family--poppins wrap--text--1">
          Albums
        </div>
      </v-card-title>
    </v-card>

    <!-- Albums -->
    <v-row justify="space-between">
      <v-col cols="12" sm="6" v-for="(album, index) in albums" :key="index">
        <v-card id="create" class="rounded-xl darkest" height="370">
          <v-img :src="album.images[0].url" height="200px">
            <v-speed-dial top right>
              <template v-slot:activator>
                <v-chip
                  small
                  color="#3d414d"
                  class="white--text font-weight-bold font-family--poppins"
                  >{{ album.label }}
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
            <p class="grey--text body-1 font-family--poppins wrap--text--1">
              {{ album.name }}
              <v-badge dot class="mx-2 mb-2" inline></v-badge>
            </p>
          </v-card-title>

          <v-card-subtitle class="mt-n7">
            <p class="white--text title font-family--poppins wrap--text--2">
              {{ album.label }}
            </p>
          </v-card-subtitle>

          <v-card-actions class="mt-n5 ml-2">
            <p class="grey--text body-2 font-family--poppins wrap--text--1">
              {{ album.release_date }}
            </p>
            <v-spacer></v-spacer>
            <p>
              <v-btn text dark :to="`albums/${album.id}`">Click Me!</v-btn>
            </p>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- <v-col class="white--text">
        </v-col> -->
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
      "BQChJQezDPdVwOXpzLXxWjF38zhYN1rts0X7BeEa3T6DjGiYUYDeRpBQRhxM9galKaz6hiQgfrBnq7IesRRHY0-eeJtOCFRF2SIih-6PBq0EbdIfCwsTe939B8CsqlFTiJveglYG553J5zb1MPPDGC_KAFZB8FrxCUdoD3UTIgKI1xmobcvdR_yDeWAU5fKz-F9eeTo912xrsHlQMwM50WeWVutIakk4ZEzftoSLW0C-mwrQliXaTDc1kxpM0S-Zm90ApeZNic4L3QhH7caQSPAzFcVjDpYp449skvN5"
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

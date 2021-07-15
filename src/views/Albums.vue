<template>
  <v-container>
    <v-card dark flat class="dark mt-2">
      <v-card-title>
        <div class="headline font-family--poppins wrap--text--1">
          Albums
        </div>
      </v-card-title>
    </v-card>

    <!-- Most Listened Card -->
    <v-row justify="space-between">
      <v-col cols="12" sm="6" v-for="(card, index) in cards" :key="index">
        <v-card id="create" class="rounded-xl darkest" height="370">
          <v-img :src="require('./../assets/' + card.image)" height="200px">
            <v-speed-dial top right>
              <template v-slot:activator>
                <v-chip
                  small
                  color="#3d414d"
                  class="white--text font-weight-bold font-family--poppins"
                  >{{ card.time }}
                </v-chip>
              </template>
            </v-speed-dial>
          </v-img>

          <v-speed-dial top right class="position--down">
            <template v-slot:activator>
              <div class="avatar--border-3 pa-2">
                <v-avatar size="50">
                  <v-img :src="require('./../assets/' + card.avatar)"></v-img>
                </v-avatar>
                <span class="position--absolute rounded-circle border--card--3">
                  <v-icon color="blue">mdi-check-circle</v-icon>
                </span>
              </div>
            </template>
          </v-speed-dial>

          <v-card-title>
            <p class="grey--text body-1 font-family--poppins wrap--text--1">
              {{ card.name }}
              <v-badge
                dot
                :color="card.color"
                class="mx-2 mb-2"
                inline
              ></v-badge>
            </p>
          </v-card-title>

          <v-card-subtitle class="mt-n7">
            <p class="white--text title font-family--poppins wrap--text--2">
              {{ card.title }}
            </p>
          </v-card-subtitle>

          <v-card-actions class="mt-n5 ml-2">
            <p class="grey--text body-2 font-family--poppins wrap--text--1">
              {{ card.text }}
            </p>
            <v-spacer></v-spacer>
            <p>
              <v-btn text dark :to="`albums/${albums[index].id}`"
                >Click Me!</v-btn
              >
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
    cards: [
      {
        name: "Andy William",
        title: "Basic how to ride your skateboard comfortly",
        text: "53K plays . 2 week ago",
        time: "7 min",
        color: "green",
        image: "image_5.png",
        avatar: "image_10.png",
      },
      {
        name: "Johny Wise",
        title: "Prepare for your first skateboard jump",
        text: "53K plays . 2 week ago",
        time: "7 min",
        color: "red",
        image: "image_7.png",
        avatar: "image_12.png",
      },
    ],
    albums: [],
  }),

  created() {
    var SpotifyWebApi = require("spotify-web-api-node");

    // credentials are optional
    var spotifyApi = new SpotifyWebApi({
      clientId: "6d280f8d789b4a858a67c830a85545be",
      clientSecret: "354f43281e0e40b8afa003a6f5361b54",
      redirectUri: "http://localhost:8080/",
    });

    spotifyApi.setAccessToken(
      "BQDAL6k9Jz5naXHxhgxN1ncYLiO24YaiBcQ43nlCZvPso86vyYnVybItJjE3P0X8EneBLkJpeP1Ab08VS3iBhGTkT6J4ixvGHz-tU-yRXstJNaotWal0-BzzWSYbGf35ipeb2Nqlk9MAH_-cYCppj80wuefDd0LeNj7vPHKt3W_e2M3NE1XjlmYIGf3BIldlLeZxdVS2o_EEMYwUmMZsUhOddMiiXScxNC417dNHYtJTeapfRQEMxlnK3Y3F618GAy7yPVuEV94H6DhLYpmBbsoD_l2uCDqWTaU0O_0a"
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

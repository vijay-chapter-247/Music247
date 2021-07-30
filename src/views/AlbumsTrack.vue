<template>
<v-container>
    <v-card dark flat class="dark mt-2">
        <v-card-title>
            <div class="headline  wrap--text--1">
                Albums
            </div>
        </v-card-title>
    </v-card>

    <v-card dark flat class="dark mt-2">
        <v-card-text class="d-none d-md-block">
            <!-- Heading -->
            <v-row class="white--text d-none d-md-flex">
                <v-col cols="1" class="text-center">
                    <div class="body-1 font-weight-medium grey--text">#</div>
                </v-col>

                <v-col cols="10" md="6">
                    <div class="body-1 font-weight-medium grey--text">Title</div>
                </v-col>

                <v-col md="4" class="d-none d-md-flex">
                    <div class="wrap--text--1 body-1 font-weight-medium grey--text">
                        Album
                    </div>
                </v-col>
                <v-col cols="1" class="text-center">
                    <v-icon color="grey">mdi-clock-outline</v-icon>
                </v-col>
            </v-row>

            <!-- Divider -->
            <v-row>
                <v-divider color="grey"></v-divider>
            </v-row>
        </v-card-text>

        <!-- Content -->
        <v-card-text class="mt-3" v-for="(album, index) in albumsTrack" :key="index">
            <template class="white--text " v-for="item in album.items">
                <v-hover v-slot:default="{ hover }" :key="item.id">
                    <v-row class="rounded-lg" :class="{ lightdark: hover }">
                        <!-- <v-col sm="1" class="text-center body-2 pa-0 font-weight-medium d-none d-sm-inline" align-self="center">
                            <div v-show="!hover && !(isPlaying && item.id === selectedId)">
                                {{ item.track_number }}
                            </div>
                            <v-btn icon small class="no-background-hover" @click="changeSong(item.id)" v-if="isPlaying && item.id === selectedId">
                                <v-icon>mdi-pause</v-icon>
                            </v-btn>
                            <v-btn icon small class="no-background-hover" @click="changeSong(item.id)" v-else v-show="hover">
                                <v-icon>mdi-play</v-icon>
                            </v-btn>

                        </v-col>

                        <v-col cols="10" sm="10" md="6" align-self="center" class="py-0 ">
                            <v-list-item class="pa-0">
                                <v-list-item-avatar tile size="50" class="rounded-lg">
                                    <v-img :src="require(`../assets/image_${item.track_number}.png`)"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="body-2 font-weight-medium mb-1">
                                        {{ item.name }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="body-2 font-weight-medium" :class="{ 'white--text': hover }">
                                        {{ item.artists[0].name }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>

                        <v-col md="4" align-self="center" class="d-none d-md-flex py-0">
                            <v-list-item class="wrap--text--1 pl-0 pt-4">
                                <v-list-item-content>
                                    <v-list-item-subtitle class="body-2 font-weight-medium" :class="{ 'white--text': hover }">
                                        Greyhound divisely hello coldly fonwderfully
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>

                        <v-col cols="2" sm="1" align-self="center" class="text-center  pa-0">
                            <v-list-item class="pa-0">
                                <v-list-item-content>
                                    <v-list-item-subtitle class="body-2 font-weight-medium d-none d-md-inline">
                                        {{ millisToMinutesAndSeconds(item.duration_ms) }}
                                    </v-list-item-subtitle>

                                    <v-list-item-subtitle class="body-2 font-weight-medium d-inline d-md-none">
                                        <v-btn icon small class="no-background-hover">
                                            <v-icon>mdi-dots-vertical</v-icon>
                                        </v-btn>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col> -->


                        <iframe :src="`https://open.spotify.com/embed?uri=${item.uri}`" width="100%" height="80" style="margin: 7px;" frameborder="0"></iframe>
                    </v-row>
                </v-hover>
            </template>
        </v-card-text>
    </v-card>

  <!-- <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> -->

</v-container>
</template>

<script>
export default {
  data: () => ({
    albumsTrack: [],
        isPlaying: false,
        selectedId: null,
    }),
    methods: {
      millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        },

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

    created() {
        var SpotifyWebApi = require("spotify-web-api-node");
        var spotifyApi = new SpotifyWebApi({
            clientId: this.$myClientId,
            clientSecret: this.$myClientSecret,
            redirectUri: "http://localhost:8080/",
        });
        spotifyApi.setAccessToken(
            this.$mySetAccessToken
        );

        // Get tracks in an album
        const albumId = this.$route.params.albumId;
        spotifyApi
            .getAlbumTracks(albumId, {
                limit: 50,
                offset: 0,
            })
            .then(
                (data) => {
                    this.albumsTrack.push(data.body);
                    console.log("11. Get tracks in an album", this.albumsTrack);
                },
                function (err) {
                    console.log("11. Something went wrong!", err);
                }
            );
    },
};
</script>

<style scoped>
.border {
    border: 1px solid red;
}
</style>

<template>
<v-container fluid-lg>
    <v-card dark flat class="dark mt-2">
        <v-card-title>
            <div class="headline font-family--poppins wrap--text--1">
                Albums
            </div>
            <v-spacer></v-spacer>
            <div>
                <v-btn dark text color="orange" to="5U4W9E5WsYb2jUQWePT8Xm/new">Click Me!</v-btn>
            </div>
        </v-card-title>
    </v-card>

    <!-- Albums -->

    <!-- <v-row justify="space-between">
        <v-col cols="6" v-for="(album, index) in albumsTrack" :key="index">
            <v-card id="create" class="rounded-xl darkest pa-15 mb-5" v-for="item in album.items" :key="item.id">
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
                <p class="white--text">uri - {{ item.artists[0].name }}</p>
            </v-card>
        </v-col>
    </v-row> -->

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
        <v-hover v-slot="{ hover }">
            <v-card-text class="mt-3" v-for="(album, index) in albumsTrack" :key="index">
                <v-row class="white--text on-hover rounded-lg mb-2" :class="{ darkest: hover }" v-for="item in album.items" :key="item.id">
                    <v-col cols="1" class="text-center body-2 pa-0 font-weight-medium d-sm-none d-inline" align-self="center">
                        <div v-show="!hover">{{ item.track_number }}</div>
                        <v-btn icon v-show="hover">
                            <v-icon>mdi-play-circle-outline</v-icon>
                        </v-btn>
                    </v-col>

                    <v-col cols="1" class="text-center body-2 pa-0 font-weight-medium d-none d-sm-inline" align-self="center">
                        <div v-show="!hover">{{ item.track_number }}</div>
                        <v-btn icon v-show="hover">
                            <v-icon large>mdi-play-circle-outline</v-icon>
                        </v-btn>
                    </v-col>

                    <v-col cols="10" md="6" align-self="center" class=" py-0">
                        <v-list-item class="pa-0 ml-1 ml-sm-0">
                            <v-list-item-avatar tile size="50" class="d-none d-md-flex rounded-lg">
                                <v-img src="../assets/image_4.png"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="body-2 font-weight-medium mb-1">
                                    {{ item.artists[0].name }}
                                </v-list-item-title>
                                <v-list-item-subtitle class="body-2 font-weight-medium" :class="{ 'white--text': hover }">
                                    {{ item.name }}, Greyhound divisely hello coldly
                                    fonwderfully
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>

                    <v-col md="4" align-self="center" class="d-none d-md-flex py-0">
                        <v-list-item class="wrap--text--1 pl-0 pt-4">
                            <v-list-item-content>
                                <v-list-item-subtitle class="body-2 font-weight-medium" :class="{ 'white--text': hover }">
                                    <!-- Arijit Singh Solid Strings -->
                                    Greyhound divisely hello coldly fonwderfully
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>

                    <v-col cols="1" align-self="center" class="text-center  pa-0">
                        <v-list-item class="pa-0">
                            <v-list-item-content>
                                <v-list-item-subtitle class="body-2 font-weight-medium d-none d-md-block">
                                    {{ millisToMinutesAndSeconds(item.duration_ms) }}
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="body-2 font-weight-medium d-block d-md-none">
                                    <!-- <v-btn icon small> -->
                                    <v-icon>mdi-dots-vertical</v-icon>
                                    <!-- </v-btn> -->
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-hover>
    </v-card>
</v-container>
</template>

<script>
export default {
    data: () => ({
        albumsTrack: [],
    }),
    methods: {
        millisToMinutesAndSeconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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
            "BQChJQezDPdVwOXpzLXxWjF38zhYN1rts0X7BeEa3T6DjGiYUYDeRpBQRhxM9galKaz6hiQgfrBnq7IesRRHY0-eeJtOCFRF2SIih-6PBq0EbdIfCwsTe939B8CsqlFTiJveglYG553J5zb1MPPDGC_KAFZB8FrxCUdoD3UTIgKI1xmobcvdR_yDeWAU5fKz-F9eeTo912xrsHlQMwM50WeWVutIakk4ZEzftoSLW0C-mwrQliXaTDc1kxpM0S-Zm90ApeZNic4L3QhH7caQSPAzFcVjDpYp449skvN5"
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

        // Get the authenticated user
        spotifyApi.getMe().then(
            function (data) {
                console.log(
                    "18. Some information about the authenticated user",
                    data.body
                );
            },
            function (err) {
                console.log("18. Something went wrong!", err);
            }
        );
    },
};
</script>

<style scoped>
.border {
    border: 1px solid red;
}

/*

<v-hover v-slot="{ hover }">
<v-card-text class="rounded-lg mt-3" :class="hover ? 'darkest' : ''">
<v-row class="white--text">
<v-col cols="9" md="7" align-self="center">
<v-row>
<v-col cols="2" md="1" class="text-center" align-self="center">
<div v-show="!hover">2</div>

<v-btn fab outlined class="border--btn" x-small v-show="hover">
<v-icon>mdi-play</v-icon>
</v-btn>
</v-col>

<v-col cols="9" sm="10" md="11">
<v-list-item class="pa-0">
<v-list-item-avatar tile size="50" class="d-none d-md-flex rounded-lg">
<v-img src="../assets/image_2.png"></v-img>
</v-list-item-avatar>
<v-list-item-content>
<v-list-item-title class="body-1 mb-1">
Honey Singh
</v-list-item-title>
<v-list-item-subtitle>Doloribus, culpa voluptas ea alias!
fonwderfully</v-list-item-subtitle>
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

<v-btn fab outlined class="border--btn" x-small v-show="hover">
<v-icon>mdi-play</v-icon>
</v-btn>
</v-col>

<v-col cols="9" sm="10" md="11">
<v-list-item class="pa-0">
<v-list-item-avatar tile size="50" class="d-none d-md-flex rounded-lg">
<v-img src="../assets/image_10.png"></v-img>
</v-list-item-avatar>
<v-list-item-content>
<v-list-item-title class="body-1 mb-1">
Atif Aslam
</v-list-item-title>
<v-list-item-subtitle>Eos minus similique odit commodi.
fonwderfully</v-list-item-subtitle>
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

<v-btn fab outlined class="border--btn" x-small v-show="hover">
<v-icon>mdi-play</v-icon>
</v-btn>
</v-col>

<v-col cols="9" sm="10" md="11">
<v-list-item class="pa-0">
<v-list-item-avatar tile size="50" class="d-none d-md-flex rounded-lg">
<v-img src="../assets/image_8.png"></v-img>
</v-list-item-avatar>
<v-list-item-content>
<v-list-item-title class="body-1 mb-1">
Kishor Kumar
</v-list-item-title>
<v-list-item-subtitle>Consectetur adipisicing elit. Sunt, dolor!
fonwderfully</v-list-item-subtitle>
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

<v-btn fab outlined class="border--btn" x-small v-show="hover">
<v-icon>mdi-play</v-icon>
</v-btn>
</v-col>

<v-col cols="9" sm="10" md="11">
<v-list-item class="pa-0">
<v-list-item-avatar tile size="50" class="d-none d-md-flex rounded-lg">
<v-img src="../assets/image_7.png"></v-img>
</v-list-item-avatar>
<v-list-item-content>
<v-list-item-title class="body-1 mb-1">
Udit Narayan
</v-list-item-title>
<v-list-item-subtitle>Lorem ipsum dolor sit.
fonwderfully</v-list-item-subtitle>
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
} */
</style>

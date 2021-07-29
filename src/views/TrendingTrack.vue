<template>
<div>
    <v-container v-for="tracks in trendingTrack" :key="tracks.id">
        <v-row class="dark mt-md-2 mt-0">
            <v-col>
                <v-card flat class="dark">
                    <v-row class="white--text" justify="center">
                        <v-col cols="12" md="3" class="text-center text-md-start">
                            <v-avatar :size="avatarSize" tile>
                                <v-img :src="imageSource"></v-img>
                            </v-avatar>
                        </v-col>

                        <v-col cols="12" md="9" class="text-center text-md-start pb-0 mt-0 mt-md-5">
                            <v-subheader class="pl-0 d-none d-md-inline caption text-uppercase white--text font-weight-bold">
                                SINGLE
                            </v-subheader>
                            <p class="mb-3 text-h6 text-sm-h5 text-md-h2 font-weight-bold wrap--text--2">
                                {{ tracks.name }}
                            </p>
                            <p class="my-3 caption text-md-body-1 font-weight-medium wrap--text--2 ">
                                <span class="item" v-for="artist in tracks.artists" :key="artist.id">
                                    {{ artist.name }}
                                </span>
                            </p>
                        </v-col>

                        <v-col class="text-center text-md-start pt-0 my-0 my-md-5">
                            <v-btn fab v-bind="size" class="arrow bg--orange  white--text no-background-hover" @click="show = !show" v-show="!show">
                                <v-icon v-bind="iconSize">mdi-pause</v-icon>
                            </v-btn>
                            <v-btn fab v-bind="size" class="arrow bg--orange  white--text no-background-hover" @click="show = !show" v-show="show">
                                <v-icon v-bind="iconSize">mdi-play</v-icon>
                            </v-btn>

                            <v-icon large class="grey--text no-background-hover d-none d-md-inline ml-5">mdi-dots-horizontal</v-icon>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <v-card dark flat class="dark mt-0 mt-md-2">
            <v-card-text class="d-none d-md-block">
                <!-- Heading -->
                <v-row class="white--text d-none d-md-flex">
                    <v-col cols="1" class="text-center">
                        <div class="body-1 font-weight-medium grey--text">#</div>
                    </v-col>

                    <v-col cols="10">
                        <div class="body-1 font-weight-medium grey--text">Title</div>
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
            <v-card-text class="mt-5 mt-sm-3">
                <v-hover v-slot:default="{ hover }">
                    <v-row class="rounded-lg mb-2" :class="{ lightdark: hover }">
                        <!-- <v-col cols="1" class="text-center body-2 pa-0 font-weight-medium" align-self="center">
                            <div v-show="!hover && !(isPlaying && tracks.id === selectedId)">
                                1
                            </div>
                            <v-btn icon small class="no-background-hover" @click="changeSong(tracks.id)" v-if="isPlaying && tracks.id === selectedId">
                                <v-icon>mdi-pause</v-icon>
                            </v-btn>
                            <v-btn icon small class="no-background-hover" @click="changeSong(tracks.id)" v-else v-show="hover">
                                <v-icon>mdi-play</v-icon>
                            </v-btn>
                        </v-col>

                        <v-col cols="10" align-self="center" class="py-0 ">
                            <v-list-item class="pa-0">
                                <v-list-item-avatar tile size="50" class="rounded-lg">
                                    <v-img :src="imageSource"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="body-2 font-weight-medium mb-1">
                                        {{ tracks.name }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="body-2 font-weight-medium" :class="{ 'white--text': hover }">
                                        <span class="item" v-for="artist in tracks.artists" :key="artist.id">
                                            {{ artist.name }}
                                        </span>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>

                        <v-col cols="1" align-self="center" class="text-center  pa-0">
                            <v-list-item class="pa-0">
                                <v-list-item-content>
                                    <v-list-item-subtitle class="body-2 font-weight-medium d-none d-md-inline">
                                        {{ millisToMinutesAndSeconds(tracks.duration_ms) }}
                                    </v-list-item-subtitle>

                                    <v-list-item-subtitle class="body-2 font-weight-medium d-inline d-md-none">
                                        <v-btn icon small class="no-background-hover">
                                            <v-icon>mdi-dots-vertical</v-icon>
                                        </v-btn>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col> -->


                        <iframe :src="`https://open.spotify.com/embed?uri=${tracks.uri}`" width="100%" height="80" style="margin: 7px" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                    </v-row>
                </v-hover>
            </v-card-text>
        </v-card>
    </v-container>
</div>
</template>

<script>
export default {
    props: {
        imageSource: String,
    },
    data: () => ({
        isPlaying: false,
        selectedId: null,
        show: true,
        trendingTrack: [],
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
    computed: {
        size() {
            const size = {
                md: "large",
                lg: "large",
                xl: "large",
            } [this.$vuetify.breakpoint.name];
            return size ? {
                [size]: true,
            } : {};
        },
        iconSize() {
            const iconSize = {
                sm: "large",
                md: "large",
                lg: "large",
                xl: "large",
            } [this.$vuetify.breakpoint.name];
            return iconSize ? {
                [iconSize]: true,
            } : {};
        },
        avatarSize() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return "120";
                case "sm":
                    return "150";
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
      clientId: this.$myClientId,
      clientSecret: this.$myClientSecret,
      redirectUri: "http://localhost:8080/",
    });
    spotifyApi.setAccessToken(
        this.$mySetAccessToken
    );

        const trendingId = this.$route.params.trendingId;

        // // Retrieve new releases
        // spotifyApi
        //     .getNewReleases(trendingId)
        //     .then(
        //         (data) => {
        //             this.trendingTrack.push(data.body);
        //             console.log("47. Retrieve new releases", data.body);
        //         },
        //         function (err) {
        //             console.log("47. Something went wrong!", err);
        //         }
        //     );

        spotifyApi.getAlbumTracks(trendingId).then(
            (data) => {
                this.trendingTrack.push(data.body.items[0]);
                console.log(data.body.items[0]);
            },
            function (err) {
                console.log("Something went wrong!", err);
            }
        );
    },
};
</script>

<style scoped>
.item+.item:before {
    content: "," !important;
}
</style>

<template>
<v-container>
    <v-card dark flat class="dark mt-2 ">
        <v-card-title class="">
            <div class="headline  wrap--text--1 ">
                Trending
            </div>
        </v-card-title>
    </v-card>
    <v-row v-for="tracks in topTracks" :key="tracks.id">
        <v-col cols="6" sm="3" v-for="(track, i) in tracks" :key="i">
            <v-hover v-slot="{ hover }">
                <v-card exact tile :height="cardHeight" :elevation="hover ? 15 : 0" class="pt-3 pt-md-5 px-3 px-md-5 lightdark pointer rounded-lg" @click.native="doSomething(track.images[0].url)" :to="`trending/${track.id}`">
                    <v-img :src="track.images[0].url" :height="imageHeight" class="rounded-lg">
                        <span class="d-none d-sm-inline">
                            <v-btn fab v-bind="size" absolute right bottom class="arrow bg--orange  white--text no-background-hover position--bottom" @click="changeSong(track.id)" v-if="isPlaying && item.id === selectedId" to="playlists">
                                <v-icon>mdi-pause</v-icon>
                            </v-btn>
                            <v-btn fab v-bind="size" absolute right bottom class="arrow bg--orange  white--text no-background-hover position--bottom" @click="changeSong(track.id)" v-else v-show="hover" to="playlists">
                                <v-icon>mdi-play</v-icon>
                            </v-btn>
                        </span>
                    </v-img>

                    <v-card-text class="white--text px-0">
                        <p class="mb-1 Subtitle-1 font-weight-bold text-capitalize wrap--text--1">
                            {{ track.name }}
                        </p>
                        <v-hover v-slot="{ hover }" :class="{ 'text-decoration-underline': hover }">
                            <p class="mb-2 body-2 grey--text text-capitalize wrap--text--2 ">
                                <span class="item" v-for="(artist, j) in track.artists" :key="j">
                                    {{ artist.name }}
                                </span>
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
        topTracks: [],
        props: ["imageSource"],
    }),
    methods: {
        doSomething(imageLink) {
            this.$emit("imageLinkChange", imageLink);
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
                xs: "x-small",
                sm: "x-small",
                md: "x-small",
                lg: "small",
                xl: "small",
            } [this.$vuetify.breakpoint.name];
            return size ?
                {
                    [size]: true,
                } :
                {};
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
            this.$mySetAccessToken
        );

        // Retrieve new releases
        spotifyApi
            .getNewReleases({
                limit: 50,
                country: "IN",
            })
            .then(
                (data) => {
                    this.topTracks.push(data.body.albums.items);
                    console.log("47. Retrieve new releases", data.body.albums.items);
                },
                function (err) {
                    console.log("47. Something went wrong!", err);
                }
            );

        // /* Get a User’s Top Tracks*/
        // spotifyApi
        //     .getMyTopTracks({
        //         limit: 50,
        //         offset: 0,
        //     })
        //     .then((data) => {
        //             this.topTracks.push(data.body.items);
        //             console.log("68. Get a User’s Top Tracks", data.body.items);
        //         },
        //         function (err) {
        //             console.log("68. Something went wrong!", err);
        //         }
        //     );
    },
};
</script>

<style>
.position--bottom {
    bottom: 5px !important;
    right: 10px !important;
}

.item+.item:before {
    content: ",";
}
</style>

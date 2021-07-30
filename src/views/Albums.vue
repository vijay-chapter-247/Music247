<template>
<!-- <v-container>
    <v-card dark flat class="dark mt-2">
        <v-card-title>
            <div class="headline  wrap--text--1">
                Albums
            </div>
        </v-card-title>
    </v-card>

     Albums

    <v-row justify="space-between">
        <v-col cols="12" sm="6" md="4" v-for="(album, index) in albums" :key="index">
            <v-card id="create" class="rounded-xl lightdark" height="370">
                <v-img :src="album.images[0].url" height="200px">
                    <v-speed-dial top right>
                        <template v-slot:activator>
                            <v-chip small color="#3d414d" class="white--text font-weight-bold ">7:00 min
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

</v-container> -->

<v-container>
    <v-card dark flat class="dark mt-2 ">
        <v-card-title class="">
            <div class="headline  wrap--text--1 ">
                Albums
            </div>
        </v-card-title>
    </v-card>

    <v-row class="px-3">
        <v-col cols="6" sm="3" v-for="(album, index) in albums" :key="index" class="px-1 px-sm-2">
            <v-hover v-slot="{ hover }">
                <v-card :height="cardHeight" :elevation="hover ? 15 : 0" class="pt-3 pt-md-5 px-3 px-md-5 lightdark pointer rounded-lg" :to="`albums/${album.id}`">
                    <v-img :src="album.images[0].url" :height="imageHeight" class="rounded-lg">
                        <!-- <span class="d-none d-sm-inline">
                            <v-btn fab v-bind="size" absolute right bottom class="arrow bg--orange  white--text no-background-hover position--bottom" @click="changeSong(item.id)" v-if="isPlaying && item.id === selectedId" to="playlists">
                                <v-icon>mdi-pause</v-icon>
                            </v-btn>
                            <v-btn fab v-bind="size" absolute right bottom class="arrow bg--orange  white--text no-background-hover position--bottom" @click="changeSong(item.id)" v-else v-show="hover" to="playlists">
                                <v-icon>mdi-play</v-icon>
                            </v-btn>
                        </span> -->
                    </v-img>

                    <v-card-text class="white--text px-0">
                        <p class="mb-1 Subtitle-1 font-weight-bold text-capitalize wrap--text--1">
                            {{album.name}}
                        </p>
                        <v-hover v-slot="{ hover }">
                            <p class="mb-2 body-2 grey--text text-capitalize wrap--text--2" :class="{ 'text-decoration-underline': hover }">
                                {{ album.label }}
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
        albums: [],
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
            } [this.$vuetify.breakpoint.name];
            return size ? {
                [size]: true,
            } : {};
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

        // Get multiple albums
        spotifyApi
            .getAlbums([
                "5U4W9E5WsYb2jUQWePT8Xm",
                "3KyVcddATClQKIdtaap4bV",
                "6GKdqG98cRgVf8mI9wJU5g",
                "61kijqkLmurIjlNOv65WYJ",
                "1lz1oSTTrZuNe0nE02PjKJ",
                "4KA206tstq17hbvPIZm2nZ",
            ])
            .then(
                (data) => {
                    const album = data.body.albums;
                    for (var i = 0; i < album.length; i++) {
                        this.albums.push(album[i]);
                    }
                    // debugger
                    console.log("2. Multiple albums information", this.albums);
                },
                function (err) {
                    console.error("2. Something went wrong!", err);
                }
            );
    },
};
</script>

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
            <v-col cols="12" sm="3" class="px-1 px-sm-2" v-for="(albumData, index) in album" :key="index">
                <v-hover v-slot="{ hover }">
                    <v-card :height="cardHeight" :elevation="hover ? 15 : 0" class="pt-3 pt-md-5 px-3 px-md-5 lightdark pointer rounded-lg" :to="`albums/${albumData.id}`">
                        <v-img :src="albumData.images[0].url" :height="imageHeight" class="rounded-lg">
                        </v-img>

                        <v-card-text class="white--text px-0">
                            <p class="mb-1 Subtitle-1 font-weight-bold text-capitalize wrap--text--1">
                                {{ albumData.name }}
                            </p>
                            <v-hover v-slot="{ hover }">
                                <p class="mb-2 body-2 grey--text text-capitalize wrap--text--2" :class="{ 'text-decoration-underline': hover }">
                                    {{ albumData.label }}
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
import {
    mapActions,
    mapGetters
} from "vuex";
export default {
    methods: {
        ...mapActions(["fetchAlbum"]),
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
        ...mapGetters(["album"]),
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
        this.fetchAlbum();
    },
};
</script>

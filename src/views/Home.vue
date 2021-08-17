<template>
<v-container fluid class="dark mt-n5">
    <!-- Discover Section -->
    <v-card dark flat class="dark">
        <v-card-title>
            <div class="font-weight-bold text-h4  wrap--text--1">
                Discover
            </div>
        </v-card-title>
    </v-card>

    <v-row>
        <v-col cols="12" sm="6" md="7">
            <v-card id="create" class="rounded-xl">
                <v-img src="./../assets/image_1.png" height="400">
                    <v-speed-dial top left class="card-title-position">
                        <template v-slot:activator>
                            <div class="card-title-cover rounded-xl pa-1">
                                <div class="card--title display-1 text-md-h4 font-weight-bold white--text wrap--text--4">
                                    How to do Basic Jumping and how to landing safely
                                </div>
                            </div>
                        </template>
                    </v-speed-dial>

                    <v-speed-dial bottom right>
                        <template v-slot:activator>
                            <v-chip small color="#3d414d" class="white--text font-weight-bold ">7:30 min</v-chip>
                        </template>
                    </v-speed-dial>

                    <v-speed-dial bottom left class="card-avatar-position">
                        <template v-slot:activator>
                            <div class="avatar--border-1 pa-2 ">
                                <v-avatar size="50">
                                    <v-img src="./../assets/image_2.png"></v-img>
                                </v-avatar>
                                <span class="position--absolute rounded-circle border--card--1">
                                    <v-icon color="white">mdi-check-circle</v-icon>
                                </span>
                            </div>
                        </template>
                    </v-speed-dial>

                    <v-speed-dial bottom left class="card-1-name-position">
                        <template v-slot:activator>
                            <div class="card-title-cover rounded-xl pa-1">
                                <div class="white--text text-h6  wrap--text--1">
                                    Thomas Hope
                                </div>
                                <div class="subtitle-1 lightblue--text  wrap--text--1">
                                    53K plays . 2 week ago
                                </div>
                            </div>
                        </template>
                    </v-speed-dial>
                </v-img>
            </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="5">
            <v-card id="create" class="rounded-xl">
                <v-img src="./../assets/image_3.png" height="400">
                    <v-speed-dial top left class="card-title-position">
                        <template v-slot:activator>
                            <div class="card-title-cover rounded-xl pa-1">
                                <div class="card--title display-1 text-md-h4 font-weight-bold white--text wrap--text--3">
                                    Skateboard Tips You need to know
                                </div>
                            </div>
                        </template>
                    </v-speed-dial>

                    <v-speed-dial bottom right>
                        <template v-slot:activator>
                            <v-chip small color="#3d414d" class="white--text font-weight-bold ">12:10 min</v-chip>
                        </template>
                    </v-speed-dial>

                    <v-speed-dial bottom left class="card-avatar-position">
                        <template v-slot:activator>
                            <div class="avatar--border-2 pa-2">
                                <v-avatar size="50">
                                    <v-img src="./../assets/image_4.png"></v-img>
                                </v-avatar>
                                <span class="position--absolute rounded-circle border--card--2">
                                    <v-icon color="white">mdi-check-circle</v-icon>
                                </span>
                            </div>
                        </template>
                    </v-speed-dial>

                    <v-speed-dial bottom left class="card-2-name-position">
                        <template v-slot:activator>
                            <div class="card-title-cover rounded-xl pa-1">
                                <div class="white--text text-h6  wrap--text--1">
                                    Tony Andrew
                                </div>
                                <div class="subtitle-1 lightorange--text  wrap--text--1">
                                    53K plays . 2 week ago
                                </div>
                            </div>
                        </template>
                    </v-speed-dial>
                </v-img>
            </v-card>
        </v-col>
    </v-row>

    <!-- Recently Played Section -->

    <v-card dark flat class="dark mt-2">
        <v-card-title>
            <div class="headline  wrap--text--1">
                Recently Played
            </div>
        </v-card-title>
    </v-card>

    <!-- Most Listened Card -->
    <!-- <v-row>
        <v-col cols="12" sm="6" md="3" v-for="(card, index) in cards" :key="index">
            <v-card id="create" class="rounded-xl lightdark" height="370">
                <v-img :src="require('./../assets/' + card.image)" height="200px">
                    <v-speed-dial top right>
                        <template v-slot:activator>
                            <v-chip small color="#3d414d" class="white--text font-weight-bold ">{{ card.time }}
                            </v-chip>
                        </template>
                    </v-speed-dial>
                    <v-row justify="center" class="mt-14">
                        <v-col align="center">
                            <v-btn fab outlined large color="white" class="" @click="toggleActive($event, card)" v-show="card.active">
                                <v-icon x-large color="white">mdi-pause</v-icon>
                            </v-btn>
                            <v-btn fab outlined large color="white" class="" @click="toggleActive($event, card)" v-show="!card.active">
                                <v-icon x-large color="white">mdi-play</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
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
                    <p class="grey--text body-1  wrap--text--1">
                        {{ card.name }}
                        <v-badge dot :color="card.color" class="mx-2 mb-2" inline></v-badge>
                    </p>
                </v-card-title>

                <v-card-subtitle class="mt-n7">
                    <p class="white--text title  wrap--text--2">
                        {{ card.title }}
                    </p>
                </v-card-subtitle>

                <v-card-actions class="mt-n5 ml-2">
                    <p class="grey--text body-2  wrap--text--1">
                        {{ card.text }}
                    </p>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row> -->

    <v-row class="px-3">
        <v-col cols="12" sm="3" class="px-1 px-sm-2" v-for="(recentTrack, i) in recentplaylist" :key="i">
            <v-hover v-slot="{ hover }">
                <v-card :height="cardHeight" :elevation="hover ? 15 : 0" class="pt-3 pt-md-5 px-3 px-md-5 lightdark pointer rounded-lg" :to="`albums/${recentTrack.track.album.id}`">
                    <v-img :src="recentTrack.track.album.images[0].url" :height="imageHeight" class="rounded-lg">
                        <Controller :hover="hover" :item="recentTrack.track.album.id" />
                    </v-img>

                    <v-card-text class="white--text px-0">
                        <p class="mb-1 Subtitle-1 font-weight-bold text-capitalize wrap--text--1">
                            {{ recentTrack.track.album.album_type | toUpperCase }}
                        </p>
                        <v-hover v-slot="{ hover }">
                            <p class="mb-2 body-2 grey--text text-capitalize wrap--text--2" :class="{ 'text-decoration-underline': hover }">
                                {{ recentTrack.track.album.name }}
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
import Controller from './Controller.vue'
import mergeMixin from "../mixins/mergeData.js";

export default {
    components: {
        Controller
    },
    mixins: [mergeMixin],
    methods: {
        ...mapActions(["fetchRecentPlaylist"]),
    },
    computed: {
        ...mapGetters(["recentplaylist"]),
    },
    created() {
        this.fetchRecentPlaylist();
    },
};
</script>

<style scoped lang="scss">
.card--title {
    max-width: 250px;
}

.card-title-position {
    top: 40px;
    left: 30px;
}

.card-avatar-position {
    bottom: 80px;
    left: 25px;
}

.card-1-name-position {
    bottom: 80px;
    left: 100px;
}

.card-2-name-position {
    bottom: 155px;
    left: 30px;
}

.lightblue--text {
    color: #cfeef2;
}

.lightorange--text {
    color: #fbebe0;
}

@media only screen and (max-width: 1024px) {
    .card--title {
        max-width: 230px !important;
    }

    .card-title-cover {
        background-color: #5046460f;
    }

    .card-title-position {
        left: 20px;
    }

    .card-2-name-position {
        left: 20px;
    }
}

@mixin avatar-border-radius($value) {
    border: 2px solid $value;
    border-radius: 50%;
}

.avatar--border-1 {
    @include avatar-border-radius(#09c6db);
}

.avatar--border-2 {
    @include avatar-border-radius(#ead5b4);
}

.avatar--border-3 {
    @include avatar-border-radius(#ffffff);
}

.position--absolute {
    position: absolute;
    top: 50px;
    right: 0px;
}

#create .v-speed-dial {
    position: absolute;
}

.border--card--1 {
    border: 1px solid #50b7ca;
    background-color: #50b7ca;
}

.border--card--2 {
    border: 1px solid #ebc080;
    background-color: #ebc080;
}

.border--card--3 {
    border: 1px solid #ffffff;
    background-color: #ffffff;
}

.white--border {
    border: 2px solid #ffffff !important;
    /* background-color: #ffffff; */
}

.lightdark {
    background-color: #202b38;
}

.position--down {
    top: 165px !important;
}
</style>

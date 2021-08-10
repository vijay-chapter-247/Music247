<template>
    <v-container>
        <v-card dark flat class="dark mt-2 ">
            <v-card-title class="">
                <div class="headline  wrap--text--1 ">
                    Trending
                </div>
            </v-card-title>
        </v-card>
        <v-row class="px-3">
            <v-col cols="6" sm="3" v-for="(track, i) in trending" :key="i" class="px-1 px-sm-2">
                <v-hover v-slot="{ hover }">
                    <v-card exact tile :height="cardHeight" :elevation="hover ? 15 : 0" class="pt-3 pt-md-5 px-3 px-md-5 lightdark pointer rounded-lg" :to="`trending/${track.id}`">
                        <v-img :src="track.images[0].url" :height="imageHeight" class="rounded-lg">
                            <Controller :hover="hover" :item="track.id" />
                        </v-img>

                        <v-card-text class="white--text px-0">
                            <p class="mb-1 Subtitle-1 font-weight-bold text-capitalize wrap--text--1">
                                {{ track.name }}
                            </p>
                            <v-hover v-slot="{ hover }" :class="{ 'text-decoration-underline': hover }">
                                <p class="mb-2 body-2 grey--text text-capitalize wrap--text--2" :class="{ 'text-decoration-underline': hover }">
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
import { mapActions, mapGetters } from "vuex";
import Controller from './Controller.vue'
import mergeMixin from "../mixins/mergeData.js";

export default {
    components: {
        Controller
    },
    mixins: [ mergeMixin ],
    methods: {
        ...mapActions(["fetchTrending"]),
    },
    computed: {
        ...mapGetters(["trending"]),
    },
    created() {
        this.fetchTrending();
    },
};
</script>

<style>
.item+.item:before {
    content: ",";
}
</style>

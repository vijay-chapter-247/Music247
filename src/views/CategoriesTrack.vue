<template>
<v-container>
    <v-card dark flat class="dark mt-2 ">
        <v-card-title class="">
            <div class="headline ">
                Category
            </div>
        </v-card-title>
    </v-card>

    <v-row class="px-3">
        <v-col cols="6" sm="3" class="px-1 px-sm-2" v-for="(categoryTrack, index) in categoriesTracks" :key="index">

             <v-hover v-slot="{ hover }">
                <v-card :height="cardHeight" :elevation="hover ? 15 : 0" class="pt-3 pt-md-5 px-3 px-md-5 lightdark pointer rounded-lg" :to="`/playlists/${categoryTrack.id}`">
                    <v-img :src="categoryTrack.images[0].url" :height="imageHeight" class="rounded-lg">
                         <Controller :hover="hover" :item="categoryTrack.id" />
                    </v-img>

                    <v-card-text class="white--text px-0">
                        <p class="mb-1 Subtitle-1 font-weight-bold text-capitalize wrap--text--1">
                            {{ categoryTrack.name }}
                        </p>
                        <v-hover v-slot="{ hover }">
                            <p class="mb-2 body-2 grey--text text-capitalize wrap--text--2" :class="{ 'text-decoration-underline': hover }">
                                {{ categoryTrack.description }}
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
import Controller from "./Controller.vue";
import mergeMixin from "../mixins/mergeData.js";

export default {
    components: {
        Controller,
    },
    mixins: [mergeMixin],
    methods: {
        ...mapActions(["fetchCategoriesTrack"]),
    },
    computed: {
        ...mapGetters(["categoriesTracks"]),
    },
    created() {
        this.fetchCategoriesTrack();
    },
};
</script>

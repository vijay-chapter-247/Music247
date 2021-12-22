<template>
<v-container>
    <v-card dark flat class="dark mt-2">
        <v-card-title class="">
            <div class="headline wrap--text--1">Albums</div>
        </v-card-title>
    </v-card>

    <v-row class="px-3">
        <v-col cols="6" sm="3" class="px-1 px-sm-2" v-for="(albumData, index) in album" :key="index">
            <Card>
                <template v-slot:v-card>
                    <v-hover v-slot="{ hover }">
                        <v-card :height="cardHeight" :elevation="hover ? 15 : 0" class="pt-3 pt-md-5 px-3 px-md-5 lightdark pointer rounded-lg" :to="`albums/${albumData.id}`">
                            <template v-slot:image>
                                <v-img :src="albumData.images && albumData.images.length > 0? albumData.images[0].url: ''" :height="imageHeight" class="rounded-lg"></v-img>
                            </template>

                            <template v-slot:heading>
                                {{ albumData.name }}
                            </template>

                            <template v-slot:sub-heading>
                                {{ albumData.label }}
                            </template>
                        </v-card>
                    </v-hover>
                </template>
            </Card>
        </v-col>
    </v-row>
    <!-- </div> -->

    <!-- <v-row class="px-3">
        <v-col cols="6" sm="3" class="px-1 px-sm-2" v-for="(albumData, index) in album" :key="index">
            <v-hover v-slot="{ hover }">
                <v-card :height="cardHeight" :elevation="hover ? 15 : 0" class="pt-3 pt-md-5 px-3 px-md-5 lightdark pointer rounded-lg" :to="`albums/${albumData.id}`">
                    <v-img :src="albumData.images[0].url" :height="imageHeight" class="rounded-lg">
                        <Controller :hover="hover" :item="albumData.id" />
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
    </v-row> -->
</v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "./Card.vue";
// import Controller from "./Controller.vue";
import mergeMixin from "../mixins/mergeData.js";

export default {
    components: {
        // Controller,
        Card,
    },
    mixins: [mergeMixin],
    methods: {
        ...mapActions(["fetchAlbum"]),
    },
    computed: {
        ...mapGetters(["album"]),
    },
    created() {
        this.fetchAlbum();
    },
};
</script>

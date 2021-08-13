<template>
<v-container>
    <v-card dark flat class="dark mt-2 ">
        <v-card-title class="">
            <div class="headline  wrap--text--1 ">
                Categories
            </div>
        </v-card-title>
    </v-card>

    <v-row class="px-3">
        <v-col cols="6" sm="3" class="px-1 px-sm-2" v-for="(category,i) in categories" :key="i">
            <v-hover v-slot="{ hover }">
                <v-card :height="cardHeight" :elevation="hover ? 15 : 0" class="pt-3 pt-md-5 px-3 px-md-5 lightdark pointer rounded-lg" :to="`categories/${category.id}`">
                    <v-img :src="category.icons[0].url" :height="imageHeight" class="rounded-lg">
                        <Controller :hover="hover" :item="category.id" />
                    </v-img>
                    <v-card-text class="white--text px-0">
                        <p class="mb-1 Subtitle-1 font-weight-bold text-capitalize wrap--text--1">
                            {{ category.name }}
                        </p>
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
        ...mapActions(["fetchCategories"]),
    },
    computed: {
        ...mapGetters(["categories"]),
        cardHeight() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return "200";
                case "sm":
                    return "200";
                case "md":
                    return "230";
                case "lg":
                    return "290";
                default:
                    return "290";
            }
        },
    },
    created() {
        this.fetchCategories();
    },
};
</script>

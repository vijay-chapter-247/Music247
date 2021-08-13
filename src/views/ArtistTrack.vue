<template>
<div>
    <v-container>
        <v-row class="dark mt-md-2 mt-0">
            <v-col>
                <v-card flat class="dark">
                    <v-row class="white--text" justify="center">
                        <v-col cols="12" md="3" class="text-center text-md-start">
                            <v-avatar :size="avatarSize" tile>
                                <v-img :src="artist.images[0].url"></v-img>
                            </v-avatar>
                        </v-col>

                        <v-col cols="12" md="9" class="text-center text-md-start pb-0 mt-0 mt-md-5">
                            <v-subheader class="pl-0 d-none d-md-inline caption text-uppercase white--text font-weight-bold">
                                {{ artist.type }}
                            </v-subheader>
                            <p class="mb-3 text-h6 text-sm-h5 text-md-h2 font-weight-bold wrap--text--1">
                                {{ artist.name }}
                            </p>
                            <p class="my-3 body-2 text-md-body-2 wrap--text--2 text-uppercase">
                                Followers : {{ artist.followers.total }}
                            </p>
                            <p class="my-3 caption text-md-body-1 font-weight-medium wrap--text--2">
                                <span class="item text-uppercase" v-for="(genres, i) in artist.genres" :key="i">
                                    {{ genres }}
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

                    <v-col md="5">
                        <div class="body-1 font-weight-medium grey--text">Title</div>
                    </v-col>

                    <v-col md="3" class="d-none d-md-flex">
                        <div class="wrap--text--1 body-1 font-weight-medium grey--text">
                            Album
                        </div>
                    </v-col>

                    <v-col md="2" class="d-none d-md-flex">
                        <div class="wrap--text--1 body-1 font-weight-medium grey--text">
                            Date Added
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
            <v-card-text class="mt-3">
                <v-hover v-slot:default="{ hover }">
                    <v-row class="rounded-lg mb-2" :class="{ lightdark: hover }">
                        <iframe :src="`https://open.spotify.com/embed?uri=${artist.uri}`" width="100%" height="400" style="margin: 7px" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </v-row>
                </v-hover>
            </v-card-text>
        </v-card>
    </v-container>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
import mergeMixin from "../mixins/mergeData.js";

export default {
    mixins: [mergeMixin],
    data: () => ({
        show: true,
    }),
    methods: {
        ...mapActions(["fetchtopartist"]),
    },
    computed: {
        ...mapGetters(["artist"]),
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

    updated() {
        this.fetchtopartist();
    },
    mounted() {
        this.fetchtopartist();
    },

    // created() {
    //     this.fetchtopartist();
    // },
};
</script>

<style scoped>
.item+.item:before {
    content: ",";
}
</style>

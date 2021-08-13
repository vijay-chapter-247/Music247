<template>
<span class="d-none d-sm-inline">
    <v-btn fab v-bind="size" absolute right bottom class="arrow bg--orange  white--text no-background-hover position--bottom" @click="changeSong(item)" v-if="isPlaying && item === selectedId">
        <v-icon>mdi-pause</v-icon>
    </v-btn>
    <v-btn fab v-bind="size" absolute right bottom class="arrow bg--orange  white--text no-background-hover position--bottom" @click="changeSong(item)" v-else v-show="hover">
        <v-icon>mdi-play</v-icon>
    </v-btn>
</span>
</template>

<script>
import mergeMixin from "../mixins/mergeData.js";

export default {
    mixins: [mergeMixin],
    props: ["hover", "item"],
};
</script>

<style>
.position--bottom {
    bottom: 5px !important;
    right: 10px !important;
}
</style>

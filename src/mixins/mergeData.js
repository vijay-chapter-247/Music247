export default {
    data: () => ({
        isPlaying: false,
        selectedId: null,
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
        millisToMinutesAndSeconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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
};
<template>
<v-container fluid class="dark mt-n5">
    <!-- Discover Section -->
    <v-card dark flat class="dark">
        <v-card-title>
            <div class="font-weight-bold text-h4 font-family--poppins wrap--text--1">
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
                            <v-chip small color="#3d414d" class="white--text font-weight-bold font-family--poppins">7:30 min</v-chip>
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
                                <div class="white--text text-h6 font-family--poppins wrap--text--1">
                                    Thomas Hope
                                </div>
                                <div class="subtitle-1 lightblue--text font-family--poppins wrap--text--1">
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
                            <v-chip small color="#3d414d" class="white--text font-weight-bold font-family--poppins">12:10 min</v-chip>
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
                                <div class="white--text text-h6 font-family--poppins wrap--text--1">
                                    Tony Andrew
                                </div>
                                <div class="subtitle-1 lightorange--text font-family--poppins wrap--text--1">
                                    53K plays . 2 week ago
                                </div>
                            </div>
                        </template>
                    </v-speed-dial>
                </v-img>
            </v-card>
        </v-col>
    </v-row>

    <!-- Most Listened Section -->

    <v-card dark flat class="dark mt-2">
        <v-card-title>
            <div class="headline font-family--poppins wrap--text--1">
                Most Listened
            </div>
        </v-card-title>
    </v-card>

    <!-- Most Listened Card -->
    <v-row>
        <v-col cols="12" sm="6" md="3" v-for="(card, index) in cards" :key="index">
            <v-card id="create" class="rounded-xl darkest" height="370">
                <v-img v-bind:src="require('./../assets/' + card.image)" height="200px">
                    <v-speed-dial top right>
                        <template v-slot:activator>
                            <v-chip small color="#3d414d" class="white--text font-weight-bold font-family--poppins">{{ card.time }}
                            </v-chip>
                        </template>
                    </v-speed-dial>

                    <v-row justify="center" class="mt-14">
                        <v-col align="center">
                            <v-btn fab outlined large color="white" class="border--btn" @click="toggleActive($event, card)" v-show="card.active">
                                <v-icon x-large color="white">mdi-pause</v-icon>
                            </v-btn>
                            <v-btn fab outlined large color="white" class="border--btn" @click="toggleActive($event, card)" v-show="!card.active">
                                <v-icon x-large color="white">mdi-play</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-img>

                <v-speed-dial top right class="position--down">
                    <template v-slot:activator>
                        <div class="avatar--border-3 pa-2">
                            <v-avatar size="50">
                                <v-img v-bind:src="require('./../assets/' + card.avatar)"></v-img>
                            </v-avatar>
                            <span class="position--absolute rounded-circle border--card--3">
                                <v-icon color="blue">mdi-check-circle</v-icon>
                            </span>
                        </div>
                    </template>
                </v-speed-dial>

                <v-card-title>
                    <p class="grey--text body-1 font-family--poppins wrap--text--1">
                        {{ card.name }}
                        <v-badge dot :color="card.color" class="mx-2 mb-2" inline></v-badge>
                    </p>
                </v-card-title>

                <v-card-subtitle class="mt-n7">
                    <p class="white--text title font-family--poppins wrap--text--2">
                        {{ card.title }}
                    </p>
                </v-card-subtitle>

                <v-card-actions class="mt-n5 ml-2">
                    <p class="grey--text body-2 font-family--poppins wrap--text--1">
                        {{ card.text }}
                    </p>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import Vue from "vue";

export default {
    data: () => ({
        cards: [{
                name: "Andy William",
                title: "Basic how to ride your skateboard comfortly",
                text: "53K plays . 2 week ago",
                time: "7 min",
                color: "green",
                image: "image_5.png",
                avatar: "image_10.png",
            },
            {
                name: "Johny Wise",
                title: "Prepare for your first skateboard jump",
                text: "53K plays . 2 week ago",
                time: "7 min",
                color: "red",
                image: "image_7.png",
                avatar: "image_12.png",
            },
            {
                name: "Budi Hakim",
                title: "Tips to playing skateboard on the ramp",
                text: "53K plays . 2 week ago",
                time: "7 min",
                color: "red",
                image: "image_6.png",
                avatar: "image_11.png",
            },
            {
                name: "Wijaya Abadi",
                title: "Basic Equipment to play skateboard safely",
                text: "53K plays . 2 week ago",
                time: "7 min",
                color: "green",
                image: "image_8.png",
                avatar: "image_13.png",
            },
        ],
    }),
    methods: {
        toggleActive: function (event, card) {
            if (card.active) {
                card.active = false;
            } else if (!card.active) {
                Vue.set(card, "active", true);
            }
        },
    },
};
</script>

<style scoped>
.wrap--text--1 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
}

.wrap--text--2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
}

.wrap--text--4 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4;
}

.wrap--text--3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
}

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

.avatar--border-1 {
    border: 2px solid #09c6db;
    border-radius: 50%;
}

.avatar--border-2 {
    border: 2px solid #ead5b4;
    border-radius: 50%;
}

.avatar--border-3 {
    border: 2px solid #ffffff;
    border-radius: 50%;
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

.border--btn {
    border: 2px solid #ffffff !important;
    /* background-color: #ffffff; */
}

.darkest {
    background-color: #202b38;
}

.font-family--poppins {
    font-family: "Poppins", sans-serif !important;
}

.position--down {
    top: 165px !important;
}
</style>

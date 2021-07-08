<template>
<v-app class="dark">
    <!-- Navigation Bar -->
    <v-app-bar flat app dark color="dark">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-lg-none"></v-app-bar-nav-icon>
        <v-card-title class="d-lg-none font-weight-bold font--subtitle--2 font-family--poppins white--text">
            Songs247x7
        </v-card-title>

        <v-text-field append-icon="mdi-magnify" placeholder="Search" filled dense rounded class="d-none d-sm-flex mt-6"></v-text-field>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <!-- Profile Button -->
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn text class="profile--btn text-none font-family--poppins" color="dark" rounded v-bind="attrs" v-on="on">
                    <v-avatar size="25" left>
                        <v-img src="./assets/image_14.png" />
                    </v-avatar>
                    <span class="font-weight-bold ml-2 font-family--poppins">Profile</span>
                    <v-icon right size="24">mdi-chevron-down</v-icon>
                </v-btn>
            </template>
            <v-list rounded color="dark" dark>
                <v-list-item v-for="(item, index) in profile" :key="index" route :to="item.route">
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold profile--text--dropdown text-center font-family--poppins">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>

    <!-- Drawer Content -->
    <v-navigation-drawer v-model="drawer" app dark color="dark" class="white--text">
        <v-card-title class="dark font-weight-bold font-family--poppins">
            Songs247x7
        </v-card-title>

        <v-text-field class="d-sm-none mx-4 my-0 py-0" placeholder="Search" append-icon="mdi-magnify" filled dense rounded></v-text-field>

        <v-subheader class="font-weight-black grey--text">Menu</v-subheader>

        <!-- Menu Section -->
        <v-btn text block v-for="item in menu" :key="item.text" :to="item.route" class="body-2 py-5 text-none font-family--poppins">
            <span class="bg--grey grey--light--text mr-5 pa-1 rounded-lg">
                <v-icon size="18" class="icon--white grey--icon" v-text="item.icon"></v-icon>
            </span>
            <span class="font-weight-medium grey--text text font-weight-bold font-family--poppins" v-text="item.text">
            </span>
            <v-spacer></v-spacer>
        </v-btn>

        <v-row justify="center">
            <v-col cols="10">
                <v-divider class="my-5"></v-divider>
            </v-col>
        </v-row>

        <!-- Artist Section -->
        <v-subheader class="font-weight-black grey--text">Artist</v-subheader>

        <v-btn text block v-for="(artist, index) in artists" :key="index" :to="artist.route" class="body-2 py-5 text-none font-family--poppins">
            <span class="bg--grey grey--light--text mr-5 pa-1 rounded-lg ">
                <v-icon size="18" class="icon--white grey--icon" v-text="artist.icon"></v-icon>
            </span>
            <span class="grey--text text font-weight-bold font-family--poppins" v-text="artist.text">
            </span>
            <v-spacer></v-spacer>
        </v-btn>

        <v-row justify="center">
            <v-col cols="10">
                <v-divider class="my-5"></v-divider>
            </v-col>
        </v-row>

    </v-navigation-drawer>

    <!-- Router Content -->
    <v-main>
        <router-view />
    </v-main>
</v-app>
</template>

<script>
export default {
    name: "App",
    data: () => ({
        drawer: true,
        profile: [{
                title: "Account",
                route: "/account",
            },
            {
                title: "Log Out",
                route: "/logout",
            },
        ],
        setId: 1,
        setArtistId: null,
        menu: [{
                id: 1,
                icon: "mdi-home",
                text: "Home",
                route: "/",
            },
            {
                id: 2,
                icon: "mdi-file-check",
                text: "Trending",
                route: "/trending",
            },
            {
                id: 3,
                icon: "mdi-nutrition",
                text: "Playlist",
                route: "/playlist",
            },
            {
                id: 4,
                icon: "mdi-library",
                text: "Albums",
                route: "/album",
            },
            {
                id: 5,
                icon: "mdi-clipboard-check",
                text: "Profile",
                route: "/profile",
            },
        ],
        artists: [{
                id: 1,
                icon: "mdi-home",
                text: "Arijit Singh",
                route: "/arijit",
            },
            {
                id: 2,
                icon: "mdi-file-check",
                text: "KAKA",
                route: "/kaka",
            },
            {
                id: 3,
                icon: "mdi-nutrition",
                text: "Arman Malik",
                route: "/arman",
            },
            {
                id: 4,
                icon: "mdi-library",
                text: "K.K.",
                route: "/kk",
            },
        ],
    }),
};
</script>

<style>
@media only screen and (max-width: 624px) {
    .font--subtitle--2 {
        font-size: 0.875rem !important;
        font-weight: 500 !important;
        letter-spacing: 0.0071428571em !important;
        line-height: 1.375rem !important;
        font-family: 'Poppins', sans-serif !important;
    }

    .profile--btn {
        font-size: 0.75rem !important;
    }

    .profile--text--dropdown {
        font-size: 0.85rem !important;
    }
}

.font-family--poppins {
    font-family: 'Poppins', sans-serif !important;
}

.dark {
    background: #17212d !important;
}

.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix,
.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix,
.v-text-field.v-input--dense:not(.v-text-field--outlined) input {
    padding: 0px !important;
}

.v-input__icon--append .v-icon,
.grey--text {
    color: #94999e !important;
}

.grey--light--text {
    background-color: #29323d !important;
}

.grey--icon {
    color: #94999e !important;
}

.v-navigation-drawer__border {
    background-color: #17212d !important;
}

.v-list-item__content {
    padding: 0 !important;
}

.pr-100 {
    padding-right: 200px !important;
}

.theme--dark.v-btn--active:hover::before,
.theme--dark.v-btn--active::before {
    opacity: 0 !important;
}

.v-btn--active span .text {
    color: white !important;
    font-weight: 900 !important;
}

.v-btn--active span .bg--grey,
.v-btn--active span .icon--white {
    background-color: #ff7300 !important;
    color: white !important;
}
</style>

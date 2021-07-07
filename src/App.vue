<template>
<v-app class="dark">
    <v-app-bar flat app dark color="dark">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-lg-none"></v-app-bar-nav-icon>

        <v-card-title class="white--text d-lg-none font--subtitle--2">
            Songs247x7
        </v-card-title>

        <v-text-field append-icon="mdi-magnify" placeholder="Search" filled dense rounded class="mt-6 d-none d-sm-flex"></v-text-field>

        <!-- <v-spacer></v-spacer> -->
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn text class="profile--btn text-none" color="dark" rounded v-bind="attrs" v-on="on">
                    <v-avatar size="20" left>
                        <v-img src="./assets/logo.png" />
                    </v-avatar>
                    <span class="ml-2">Profile</span>
                    <v-icon right size="24">mdi-chevron-down</v-icon>
                </v-btn>
            </template>
            <v-list color="dark" dark>
                <v-list-item v-for="(item, index) in items" :key="index" route :to="item.route">
                    <v-list-item-title class="profile--text--dropdown">{{
              item.title
            }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app dark color="dark" class="white--text">
        <v-card-title class="dark">
            Songs247x7
        </v-card-title>

        <v-text-field class="d-sm-none" placeholder="Search" append-icon="mdi-magnify" filled dense rounded></v-text-field>
    </v-navigation-drawer>
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
        items: [{
                title: "Account",
                route: "/account",
            },
            {
                title: "Log Out",
                route: "/logout",
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
        font-family: "Roboto", sans-serif !important;
    }

    .profile--btn {
        font-size: 0.75rem !important;
    }

    .profile--text--dropdown {
        font-size: 0.85rem !important;
    }
}

.dark {
    background: #17212d !important;
}

.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix,
.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix,
.v-text-field.v-input--dense:not(.v-text-field--outlined) input {
    padding: 0px !important;
}

.v-input__icon--append .v-icon {
    color: #94999e !important;
}

.v-navigation-drawer__border {
    background-color: #17212d !important;
}
</style>

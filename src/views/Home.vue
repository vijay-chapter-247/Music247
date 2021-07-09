<template>
  <v-container fluid class="dark mt-n5">
    <!-- Discover Section -->
    <v-card dark flat class="dark">
      <v-card-title class="font-weight-bold text-h4 font-family--poppins">
        Discover
      </v-card-title>
    </v-card>

    <v-row>
      <v-col cols="12" sm="7">
        <v-card id="create" class="rounded-xl">
          <v-img
            src="./../assets/image_1.png"
            min-height="350"
            max-height="350"
          >
            <v-speed-dial bottom="bottom" right="right">
              <template v-slot:activator>
                <v-chip
                  small
                  color="#3d414d"
                  class="white--text font-weight-bold font-family--poppins"
                  >7:30 min</v-chip
                >
              </template>
            </v-speed-dial>
            <v-speed-dial bottom left>
              <template v-slot:activator>
                <div class="avatar--border-1 pa-2 ">
                  <v-avatar size="50">
                    <v-img src="./../assets/image_2.png"></v-img>
                  </v-avatar>
                  <span class="position--absolute rounded-pill border--card--1">
                    <v-icon color="white">mdi-check-circle</v-icon>
                  </span>
                </div>
              </template>
            </v-speed-dial>
          </v-img>
        </v-card>
      </v-col>

      <v-col cols="12" sm="5">
        <v-card id="create" class="rounded-xl">
          <v-img
            src="./../assets/image_3.png"
            min-height="350"
            max-height="350"
          >
            <v-speed-dial bottom="bottom" right="right">
              <template v-slot:activator>
                <v-chip
                  small
                  color="#3d414d"
                  class="white--text font-weight-bold font-family--poppins"
                  >12:10 min</v-chip
                >
              </template>
            </v-speed-dial>

            <v-speed-dial bottom left>
              <template v-slot:activator>
                <div class="avatar--border-2 pa-2">
                  <v-avatar size="50">
                    <v-img src="./../assets/image_4.png"></v-img>
                  </v-avatar>
                  <span class="position--absolute rounded-pill border--card--2">
                    <v-icon color="white">mdi-check-circle</v-icon>
                  </span>
                </div>
              </template>
            </v-speed-dial>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <!-- Most Listened Section -->

    <v-card dark flat class="dark mt-2">
      <v-card-title class="headline font-family--poppins">
        Most Listened
      </v-card-title>
    </v-card>

    <v-row>
      <v-col cols="12" sm="6" lg="3" v-for="(card, index) in cards" :key="index">
        <v-card id="create" class="rounded-xl darkest">
          <v-img  v-bind:src="require('./../assets/' + card.image)"  height="200px">
            <v-speed-dial top="top" right="right">
              <template v-slot:activator>
                <v-chip
                  small
                  color="#3d414d"
                  class="white--text font-weight-bold font-family--poppins"
                  >{{ card.time }} </v-chip
                >
              </template>
            </v-speed-dial>
          </v-img>

          <v-speed-dial top right class="position--down">
            <template v-slot:activator>
              <div class="avatar--border-3 pa-2">
                <v-avatar size="50">
                  <v-img src="./../assets/image_13.png"></v-img>
                </v-avatar>
                <span class="position--absolute rounded-pill border--card--3">
                  <v-icon color="blue">mdi-check-circle</v-icon>
                </span>
              </div>
            </template>
          </v-speed-dial>

          <v-card-title>
            <p class="grey--text body-1 font-family--poppins">
              {{ card.name }}
              <v-badge dot :color="card.color" class="mx-2 mb-2" inline></v-badge>
            </p>
          </v-card-title>

          <v-card-subtitle class="mt-n7">
            <p class="white--text title font-family--poppins">
              {{ card.title }}
            </p>
          </v-card-subtitle>

          <v-card-actions class="mt-n5 ml-2">
            <p class="grey--text body-2 font-family--poppins">
              {{ card.text }}
            </p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        name: "Andy William",
        title: "Basic how to ride your skateboard comfortly",
        text: "53K plays . 2 week ago",
        time: "7 min",
        color: "green",
        image: "image_5.png",
        avatar: "./../assets/image_10.png"
      },
      {
        name: "Johny Wise",
        title: "Prepare for your first skateboard jump",
        text: "53K plays . 2 week ago",
        time: "7 min",
        color: "red",
        image: "image_7.png",
        avatar: "./../assets/image_12.png"
      },
      {
        name: "Budi Hakim",
        title: "Tips to playing skateboard on the ramp",
        text: "53K plays . 2 week ago",
        time: "7 min",
        color: "red",
        image: "image_6.png",
        avatar: "./../assets/image_11.png"
      },
      {
        name: "Wijaya Abadi",
        title: "Basic Equipment to play skateboard safely",
        text: "53K plays . 2 week ago",
        time: "7 min",
        color: "green",
        image: "image_8.png",
        avatar: "./../assets/image_13.png"
      },
    ],
  }),
};
</script>

<style scoped>
.avatar--border-1 {
  border: 2px solid #09c6db;
  border-radius: 50%;
}

.avatar--border-2 {
  border: 2px solid #ead5b4;
  border-radius: 50%;
}

.avatar--border-3 {
  border: 1px solid #ffffff;
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



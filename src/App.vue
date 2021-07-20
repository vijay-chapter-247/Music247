<template>
  <div>
    <v-app class="dark">
      <!-- Navigation Bar -->
      <v-app-bar flat app dark color="dark">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="d-lg-none"
        ></v-app-bar-nav-icon>
        <!-- <v-card-title> -->
        <v-toolbar-title
          class="d-lg-none mr-3 font-weight-bold font--subtitle--2 font-family--poppins white--text"
          >Songs247x7</v-toolbar-title
        >

        <!-- </v-card-title> -->

        <v-text-field
          append-icon="mdi-magnify"
          placeholder="Search"
          filled
          dense
          rounded
          class="d-none d-sm-flex mt-6"
        ></v-text-field>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <!-- Profile Button -->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              class="profile--btn text-none font-family--poppins"
              color="dark"
              rounded
              v-bind="attrs"
              v-on="on"
            >
              <v-avatar size="25" left>
                <v-img src="./assets/image_14.png" />
              </v-avatar>
              <span class="font-weight-bold ml-2 font-family--poppins"
                >Profile</span
              >
              <v-icon right size="24">mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list rounded color="dark" dark>
            <v-list-item
              v-for="(item, index) in profile"
              :key="index"
              route
              :to="item.route"
            >
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-bold profile--text--dropdown text-center font-family--poppins"
                  >{{ item.title }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <!-- Drawer Content -->
      <v-navigation-drawer
        v-model="drawer"
        app
        dark
        color="dark"
        class="white--text"
      >
        <v-card-title class="dark font-weight-bold font-family--poppins">
          Songs247x7
        </v-card-title>

        <v-text-field
          class="d-sm-none mx-4 my-0 py-0"
          placeholder="Search"
          append-icon="mdi-magnify"
          filled
          dense
          rounded
        ></v-text-field>

        <v-subheader class="font-weight-black grey--text">Menu</v-subheader>

        <!-- Menu Section -->
        <v-btn
          text
          block
          v-for="item in menu"
          :key="item.text"
          :to="item.route"
          class="body-2 py-5 text-none font-family--poppins"
        >
          <span class="bg--grey grey--light--text mr-5 pa-1 rounded-lg">
            <v-icon
              size="18"
              class="icon--white grey--icon"
              v-text="item.icon"
            ></v-icon>
          </span>
          <span
            class="font-weight-medium grey--text text font-weight-bold font-family--poppins text-capitalize"
            v-text="item.text"
          >
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

        <v-btn
          text
          block
          v-for="(artist, index) in artists"
          :key="index"
          :to="`/artists/${artist.id}`"
          class="body-2 py-5 text-none font-family--poppins"
        >
          <span class="bg--grey grey--light--text mr-5 pa-1 rounded-lg ">
            <v-icon size="18" class="icon--white grey--icon"
              >mdi-nutrition</v-icon
            >
          </span>
          <span
            class="grey--text text font-weight-bold font-family--poppins text-capitalize"
            v-text="artist.name"
          >
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

      <!-- Footer Section -->
      <v-footer color="darkest" app height="90">
        <v-avatar size="50" rounded>
          <v-img :src="require(`./assets/image_${imageIndex}.png`)"></v-img>
        </v-avatar>

        <v-spacer></v-spacer>

        <span class="wrap--text--1">
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              fab
              small
              class="white--text no-background-hover"
              @click="decrement"
            >
              <v-icon :class="{ 'text--orange': hover }"
                >mdi-skip-previous</v-icon
              >
            </v-btn>
          </v-hover>

          <v-hover v-slot="{ hover }">
            <v-btn
              text
              fab
              small
              class="white--text no-background-hover mx-sm-5 mx-1"
            >
              <v-icon :class="{ 'text--orange': hover }"
                >mdi-skip-backward</v-icon
              >
            </v-btn>
          </v-hover>

          <v-btn
            text
            fab
            small
            class="white--text border--btn no-background-hover"
            @click="player = !player"
          >
            <v-icon>{{ player ? "mdi-play" : "mdi-pause" }}</v-icon>
          </v-btn>

          <v-hover v-slot="{ hover }">
            <v-btn
              text
              fab
              small
              class="white--text no-background-hover mx-sm-5 mx-1"
            >
              <v-icon :class="{ 'text--orange': hover }"
                >mdi-skip-forward</v-icon
              >
            </v-btn>
          </v-hover>

          <v-hover v-slot="{ hover }">
            <v-btn
              text
              fab
              small
              class="white--text no-background-hover"
              @click="increment"
            >
              <v-icon :class="{ 'text--orange': hover }">mdi-skip-next</v-icon>
            </v-btn>
          </v-hover>
        </span>

        <v-spacer></v-spacer>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: true,
    player: true,
    imageIndex: 1,
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    profile: [
      {
        title: "Account",
        route: "/account",
      },
      {
        title: "Log Out",
        route: "/logout",
      },
    ],
    menu: [
      {
        text: "Home",
        icon: "mdi-home",
        route: "/",
      },
      {
        text: "Treanding",
        icon: "mdi-library",
        route: "/trending",
      },
      {
        text: "Playlists",
        icon: "mdi-file-check",
        route: "/playlists",
      },
      {
        text: "Albums",
        icon: "mdi-library",
        route: "/albums",
      },
      {
        text: "Profile",
        icon: "mdi-nutrition",
        route: "/profile",
      },
    ],
    artists_icon: [
      {
        icon: "mdi-home",
      },
      {
        icon: "mdi-file-check",
      },
      {
        icon: "mdi-nutrition",
      },
      {
        icon: "mdi-library",
      },
    ],
    artists: [],
    albums: [],
  }),

  methods: {
    increment() {
      if (this.imageIndex < 14) {
        this.imageIndex++;
        this.player = false;
      } else {
        this.imageIndex = 1;
        this.player = false;
      }
    },
    decrement() {
      if (this.imageIndex > 1) {
        this.imageIndex--;
        this.player = false;
      } else {
        this.imageIndex = 14;
        this.player = false;
      }
    },
  },
  created() {
    var SpotifyWebApi = require("spotify-web-api-node");
    var spotifyApi = new SpotifyWebApi({
      clientId: "6d280f8d789b4a858a67c830a85545be",
      clientSecret: "354f43281e0e40b8afa003a6f5361b54",
      redirectUri: "http://localhost:8080/",
    });
    spotifyApi.setAccessToken(
      "BQD48NX7wxsdR5CH20ANPO03CPCQ3zJRMHmeBlLJgunSPtbUJwNXs5f3o8ynouvNcV_enmBiOyA1rKKugQQmgRJbWTYgqizEDOwwf3lRyQ2TLGL1x22xcWh9rhOt3TxirC2jvG9_fO1GAdt_6ISz5bi59pfLL3OpNL18tuHm0WvjJu_nW9FvZvlCPohp8rQvaCrbDuyGITv-GFHc43WRYMmjqAGjSfBEcz11RAddCORWnsqY5tvvchV4fh3bmzCkGTq6S08Uss48nRFMfK6XlTRTe8gxU3vNpYuxvdKO"
    );

    // // Get album
    // spotifyApi.getAlbum('5U4W9E5WsYb2jUQWePT8Xm')
    //     .then(function (data) {
    //         console.log('1. Album information', data);
    //     }, function (err) {
    //         console.error('1. Something went wrong!', err);
    //     });

    // // Get multiple albums
    // spotifyApi
    //     .getAlbums(["5U4W9E5WsYb2jUQWePT8Xm", "3KyVcddATClQKIdtaap4bV"])
    //     .then(
    //         (data) => {
    //             const album = data.body.albums;
    //             for (var i = 0; i < album.length; i++) {
    //                 this.albums.push(album[i]);
    //             }
    //             console.log("2. Multiple albums information", this.albums);
    //         },
    //         function (err) {
    //             console.error("2. Something went wrong!", err);
    //         }
    //     );

    // // Get an artist
    // spotifyApi.getArtist('4YRxDV8wJFPHPTeXepOstw')
    //     .then(function (data) {
    //         console.log('3. Artist information', data);
    //     }, function (err) {
    //         console.error('3. Something went wrong!', err);
    //     });

    // Get multiple artists
    spotifyApi
      .getArtists([
        "2CIMQHirSU0MQqyYHq0eOx",
        "57dN52uHvrHOxijzpIgu3E",
        "1vCWHaC5f2uS3yhpwWbIA6",
      ])
      .then(
        (data) => {
          const artist = data.body.artists;
          for (var i = 0; i < artist.length; i++) {
            this.artists.push(artist[i]);
          }
        },
        function(err) {
          console.error("4. Something went wrong!", err);
        }
      );

    // // Get albums by a certain artist
    // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
    //     .then(function (data) {
    //         console.log('5. Artist albums', data);
    //     }, function (err) {
    //         console.error('5. Something went wrong!', err);
    //     });

    // // Search tracks whose name, album or artist contains 'Love'
    // spotifyApi.searchTracks('Love')
    //     .then(function (data) {
    //         console.log('6. Search by "Love"', data);
    //     }, function (err) {
    //         console.error('6. Something went wrong!', err);
    //     });

    // // Search artists whose name contains 'Love'
    // spotifyApi.searchArtists('Love')
    //     .then(function (data) {
    //         console.log('7. Search artists by "Love"', data);
    //     }, function (err) {
    //         console.error('7. Something went wrong!', err);
    //     });

    // // Search tracks whose artist's name contains 'Love'
    // spotifyApi.searchTracks('artist:Love')
    //     .then(function (data) {
    //         console.log('8. Search tracks by "Love" in the artist name', data);
    //     }, function (err) {
    //         console.log('8. Something went wrong!', err);
    //     });

    // // Search tracks whose artist's name contains 'Kendrick Lamar', and track name contains 'Alright'
    // spotifyApi.searchTracks('track:Alright artist:Kendrick Lamar')
    //     .then(function (data) {
    //         console.log('9. Search tracks by "Alright" in the track name and "Kendrick Lamar" in the artist name', data);
    //     }, function (err) {
    //         console.log('9. Something went wrong!', err);
    //     });

    // // Search playlists whose name or description contains 'workout'
    // spotifyApi.searchPlaylists('workout')
    //     .then(function (data) {
    //         console.log('10. Found playlists are', data);
    //     }, function (err) {
    //         console.log('10. Something went wrong!', err);
    //     });

    // // Get tracks in an album
    // spotifyApi.getAlbumTracks('41MnTivkwTO3UUJ8DrqEJJ', {
    //         limit: 5,
    //         offset: 1
    //     })
    //     .then(function (data) {
    //         console.log("11. Get tracks in an album", data);
    //     }, function (err) {
    //         console.log('11. Something went wrong!', err);
    //     });

    // // Get an artist's top tracks
    // spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB')
    //     .then(function (data) {
    //         console.log("12. Get an artist's top tracks", data);
    //     }, function (err) {
    //         console.log('12. Something went wrong!', err);
    //     });

    // // Get artists related to an artist
    // spotifyApi.getArtistRelatedArtists('0qeei9KQnptjwb8MgkqEoy')
    //     .then(function (data) {
    //         console.log("13. Get artists related to an artist", data);
    //     }, function (err) {
    //         console.log('13. Something went wrong!', err);
    //     });

    // /* Get Audio Features for a Track */
    // spotifyApi.getAudioFeaturesForTrack('3Qm86XLflmIXVm1wcwkgDK')
    //     .then(function (data) {
    //         console.log("14. Get Audio Features for a Track ", data);
    //     }, function (err) {
    //         console.log('14. Something went wrong!', err);
    //     });

    // /* Get Audio Analysis for a Track */
    // spotifyApi.getAudioAnalysisForTrack('4YRxDV8wJFPHPTeXepOstw')
    //     .then(function (data) {
    //         console.log("15. Get Audio Analysis for a Track", data);
    //     }, function (err) {
    //         console.log('15. Something went wrong!', err);
    //     });

    // /* Get Audio Features for several tracks */
    // spotifyApi.getAudioFeaturesForTracks(['4iV5W9uYEdYUVa79Axb7Rh', '3Qm86XLflmIXVm1wcwkgDK'])
    //     .then(function (data) {
    //         console.log("16. Get Audio Features for several tracks", data);
    //     }, function (err) {
    //         console.log('16. Something went wrong!', err);
    //     });

    /*
     * User methods
     */

    // // Get a user
    // spotifyApi.getUser('petteralexis')
    //     .then(function (data) {
    //         console.log('17. Some information about this user', data);
    //     }, function (err) {
    //         console.log('17. Something went wrong!', err);
    //     });

    // // Get the authenticated user
    // spotifyApi.getMe()
    //     .then(function (data) {
    //         console.log('18. Some information about the authenticated user', data);
    //     }, function (err) {
    //         console.log('18. Something went wrong!', err);
    //     });

    /*
     * Playlist methods
     */

    // // Get a playlist
    // spotifyApi.getPlaylist("5ieJqeLJjjI8iJWaxeBLuK").then(
    //   function(data) {
    //     console.log("19. Some information about this playlist", data);
    //   },
    //   function(err) {
    //     console.log("19. Something went wrong!", err);
    //   }
    // );

    // // Get a user's playlists
    // spotifyApi.getUserPlaylists("thelinmichael").then(
    //   function(data) {
    //     console.log("20. Retrieved playlists", data);
    //   },
    //   function(err) {
    //     console.log("20. Something went wrong!", err);
    //   }
    // );

    // // Create a private playlist
    // spotifyApi
    //   .createPlaylist("My playlist", {
    //     description: "My description",
    //     public: true,
    //   })
    //   .then(
    //     function(data) {
    //       console.log("21. Created playlist!",data);
    //     },
    //     function(err) {
    //       console.log("21. Something went wrong!", err);
    //     }
    //   );

    // // // Add tracks to a playlist
    // // spotifyApi
    // //   .addTracksToPlaylist("5ieJqeLJjjI8iJWaxeBLuK", [
    // //     "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
    // //     "spotify:track:1301WleyT98MSxVHPZCA6M",
    // //   ])
    // //   .then(
    // //     function(data) {
    // //       console.log("22. Added tracks to playlist!",data);
    // //     },
    // //     function(err) {
    // //       console.log("22. Something went wrong!", err);
    // //     }
    // //   );

    // // // Add tracks to a specific position in a playlist
    // // spotifyApi
    // //   .addTracksToPlaylist(
    // //     "5ieJqeLJjjI8iJWaxeBLuK",
    // //     [
    // //       "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
    // //       "spotify:track:1301WleyT98MSxVHPZCA6M",
    // //     ],
    // //     {
    // //       position: 5,
    // //     }
    // //   )
    // //   .then(
    // //     function(data) {
    // //       console.log("23. Added tracks to playlist!",data);
    // //     },
    // //     function(err) {
    // //       console.log("23. Something went wrong!", err);
    // //     }
    // //   );

    // // // Remove tracks from a playlist at a specific position
    // // spotifyApi
    // //   .removeTracksFromPlaylistByPosition(
    // //     "5ieJqeLJjjI8iJWaxeBLuK",
    // //     [0, 2, 130],
    // //     "0wD+DKCUxiSR/WY8lF3fiCTb7Z8X4ifTUtqn8rO82O4Mvi5wsX8BsLj7IbIpLVM9"
    // //   )
    // //   .then(
    // //     function(data) {
    // //       console.log("24. Tracks removed from playlist!",data);
    // //     },
    // //     function(err) {
    // //       console.log("24. Something went wrong!", err);
    // //     }
    // //   );

    // // // Remove all occurrence of a track
    // // var tracks = [
    // //   {
    // //     uri: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
    // //   },
    // // ];
    // // var playlistId = "5ieJqeLJjjI8iJWaxeBLuK";
    // // var options = {
    // //   snapshot_id:
    // //     "0wD+DKCUxiSR/WY8lF3fiCTb7Z8X4ifTUtqn8rO82O4Mvi5wsX8BsLj7IbIpLVM9",
    // // };
    // // spotifyApi.removeTracksFromPlaylist(playlistId, tracks, options).then(
    // //   function(data) {
    // //     console.log("25. Tracks removed from playlist!",data);
    // //   },
    // //   function(err) {
    // //     console.log("25. Something went wrong!", err);
    // //   }
    // // );

    // // // Reorder the first two tracks in a playlist to the place before the track at the 10th position
    // // var options_1 = {
    // //   range_length: 2,
    // // };
    // // spotifyApi
    // //   .reorderTracksInPlaylist("5ieJqeLJjjI8iJWaxeBLuK", 0, 10, options_1)
    // //   .then(
    // //     function(data) {
    // //       console.log("26. Tracks reordered in playlist!",data);
    // //     },
    // //     function(err) {
    // //       console.log("26. Something went wrong!", err);
    // //     }
    // //   );

    // // // Change playlist details
    // // spotifyApi
    // //   .changePlaylistDetails("5ieJqeLJjjI8iJWaxeBLuK", {
    // //     name:
    // //       "This is a new name for my Cool Playlist, and will become private",
    // //     public: false,
    // //   })
    // //   .then(
    // //     function(data) {
    // //       console.log("27. Playlist is now private!",data);
    // //     },
    // //     function(err) {
    // //       console.log("27. Something went wrong!", err);
    // //     }
    // //   );

    // // // Upload a custom playlist cover image
    // // spotifyApi
    // //   .uploadCustomPlaylistCoverImage("5ieJqeLJjjI8iJWaxeBLuK", "longbase64uri")
    // //   .then(
    // //     function(data) {
    // //       console.log("28. Playlsit cover image uploaded!",data);
    // //     },
    // //     function(err) {
    // //       console.log("28. Something went wrong!", err);
    // //     }
    // //   );

    // // Follow a playlist (privately)
    // spotifyApi
    //   .followPlaylist("5ieJqeLJjjI8iJWaxeBLuK", {
    //     public: false,
    //   })
    //   .then(
    //     function(data) {
    //       console.log("29. Playlist successfully followed privately!",data);
    //     },
    //     function(err) {
    //       console.log("29. Something went wrong!", err);
    //     }
    //   );

    // // Unfollow a playlist
    // spotifyApi.unfollowPlaylist("5ieJqeLJjjI8iJWaxeBLuK").then(
    //   function(data) {
    //     console.log("30. Playlist successfully unfollowed!",data);
    //   },
    //   function(err) {
    //     console.log("30. Something went wrong!", err);
    //   }
    // );

    // // // Check if Users are following a Playlist
    // // spotifyApi
    // //   .areFollowingPlaylist("5ieJqeLJjjI8iJWaxeBLuK", ["thelinmichael", "ella"])
    // //   .then(
    // //     function(data) {
    // //       data.forEach(function(isFollowing) {
    // //         console.log("31. User is following: ", isFollowing);
    // //       });
    // //     },
    // //     function(err) {
    // //       console.log("31. Something went wrong!", err);
    // //     }
    // //   );

    /*
     * Following Users and Artists methods
     */

    // /* Get followed artists */
    // spotifyApi.getFollowedArtists({
    //         limit: 1
    //     })
    //     .then(function (data) {
    //         // 'This user is following 1051 artists!'
    //         console.log('32. This user is following ', data.body.artists.total, ' artists!');
    //     }, function (err) {
    //         console.log('32. Something went wrong!', err);
    //     });

    // /* Follow a user */
    // spotifyApi.followUsers(['thelinmichael'])
    //     .then(function (data) {
    //         console.log("33. Follow a user",data);
    //     }, function (err) {
    //         console.log('33. Something went wrong!', err);
    //     });

    // /* Follow an artist */
    // spotifyApi.followArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8'])
    //     .then(function (data) {
    //         console.log("34. Follow an artist", data);
    //     }, function (err) {
    //         console.log('34. Something went wrong!', err);
    //     });

    // /* Unfollow a user */
    // spotifyApi.unfollowUsers(['thelinmichael'])
    //     .then(function (data) {
    //         console.log("35. Unfollow a user",data);
    //     }, function (err) {
    //         console.log('35. Something went wrong!', err);
    //     });

    // /* Unfollow an artist */
    // spotifyApi.unfollowArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8'])
    //     .then(function (data) {
    //         console.log("36. Unfollow an artist",data);
    //     }, function (err) {
    //         console.log('36. Something went wrong!', err);
    //     });

    // /* Check if a user is following a user */
    // let usersId = ['thelinmichael'];

    // spotifyApi.isFollowingUsers(usersId)
    //     .then(function (data) {
    //         let isFollowing = data.body;

    //         for (let index = 0; index < usersId.length; index++) {
    //             console.log("37. Check if a user is following a user",usersId[index] + ':' + isFollowing[index])
    //         }
    //     }, function (err) {
    //         console.log('37. Something went wrong!', err);
    //     });

    // /* Check if a user is following an artist */
    // let artistsId = ['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'];

    // spotifyApi.isFollowingArtists(artistsId)
    //     .then(function (data) {
    //         let isFollowing = data.body;

    //         for (let index = 0; index < artistsId.length; index++) {
    //             console.log("38. Check if a user is following an artist",artistsId[index] + ':' + isFollowing[index])
    //         }
    //     }, function (err) {
    //         console.log('38. Something went wrong!', err);
    //     });

    /*
     * Your Music library methods
     */

    /* Tracks */

    // // Get tracks in the signed in user's Your Music library
    // spotifyApi.getMySavedTracks({
    //         limit: 2,
    //         offset: 1
    //     })
    //     .then(function (data) {
    //         console.log("39. Get tracks in the signed in user's Your Music library!", data);
    //     }, function (err) {
    //         console.log('39. Something went wrong!', err);
    //     });

    // // Check if tracks are in the signed in user's Your Music library
    // spotifyApi.containsMySavedTracks(["5ybJm6GczjQOgTqmJ0BomP"])
    //     .then(function (data) {

    //         // An array is returned, where the first element corresponds to the first track ID in the query
    //         var trackIsInYourMusic = data.body[0];

    //         if (trackIsInYourMusic) {
    //             console.log('40. Track was found in the user\'s Your Music library', data);
    //         } else {
    //             console.log('40. Track was not found.', data);
    //         }
    //     }, function (err) {
    //         console.log('Something went wrong!', err);
    //     });

    // // Remove tracks from the signed in user's Your Music library
    // spotifyApi.removeFromMySavedTracks(["3VNWq8rTnQG6fM1eldSpZ0"])
    //     .then(function (data) {
    //         console.log('41. Removed!',data);
    //     }, function (err) {
    //         console.log('41. Something went wrong!', err);
    //     });

    // // Add tracks to the signed in user's Your Music library
    // spotifyApi.addToMySavedTracks(["3VNWq8rTnQG6fM1eldSpZ0"])
    //     .then(function (data) {
    //         console.log('42. Added track!',data);
    //     }, function (err) {
    //         console.log('42. Something went wrong!', err);
    //     });

    /* Albums */

    // // Get albums in the signed in user's Your Music library
    // spotifyApi.getMySavedAlbums({
    //         limit: 1,
    //         offset: 0
    //     })
    //     .then(function (data) {
    //         // Output items
    //         console.log("43. Get albums in the signed in user's Your Music library",data.body.items);
    //     }, function (err) {
    //         console.log('43. Something went wrong!', err);
    //     });

    // // Check if albums are in the signed in user's Your Music library
    // spotifyApi.containsMySavedAlbums(["1H8AHEB8VSE8irHViGOIrF"])
    //     .then(function (data) {

    //         // An array is returned, where the first element corresponds to the first album ID in the query
    //         var albumIsInYourMusic = data.body[0];

    //         if (albumIsInYourMusic) {
    //             console.log('44. Album was found in the user\'s Your Music library',data);
    //         } else {
    //             console.log('44. Album was not found.',data);
    //         }
    //     }, function (err) {
    //         console.log('Something went wrong!', err);
    //     });

    // // Remove albums from the signed in user's Your Music library
    // spotifyApi.removeFromMySavedAlbums(["1H8AHEB8VSE8irHViGOIrF"])
    //     .then(function (data) {
    //         console.log('45. Removed!',data);
    //     }, function (err) {
    //         console.log('45. Something went wrong!', err);
    //     });

    // // Add albums to the signed in user's Your Music library
    // spotifyApi.addToMySavedAlbums(["1H8AHEB8VSE8irHViGOIrF"])
    //     .then(function (data) {
    //         console.log('46. Added album!',data);
    //     }, function (err) {
    //         console.log('46. Something went wrong!', err);
    //     });

    /*
     * Browse methods
     */

    // // Retrieve new releases
    // spotifyApi.getNewReleases({
    //         limit: 5,
    //         offset: 0,
    //         country: 'SE'
    //     })
    //     .then(function (data) {
    //         console.log("47. Retrieve new releases",data);
    //         // done();
    //     }, function (err) {
    //         console.log("47. Something went wrong!", err);
    //     });

    // //  Retrieve featured playlists
    // spotifyApi.getFeaturedPlaylists({
    //         limit: 3,
    //         offset: 1,
    //         country: 'SE',
    //         locale: 'sv_SE',
    //         timestamp: '2014-10-23T09:00:00'
    //     })
    //     .then(function (data) {
    //         console.log("48. Retrieve featured playlists",data);
    //     }, function (err) {
    //         console.log("48. Something went wrong!", err);
    //     });

    // // Get a List of Categories
    // spotifyApi.getCategories({
    //         limit: 5,
    //         offset: 0,
    //         country: 'SE',
    //         locale: 'sv_SE'
    //     })
    //     .then(function (data) {
    //         console.log("49. Get a List of Categories",data);
    //     }, function (err) {
    //         console.log("49. Something went wrong!", err);
    //     });

    // // Get a Category (in Sweden)
    // spotifyApi.getCategory('party', {
    //         country: 'SE',
    //         locale: 'sv_SE'
    //     })
    //     .then(function (data) {
    //         console.log("50 Get a Category (in Sweden)",data);
    //     }, function (err) {
    //         console.log("50. Something went wrong!", err);
    //     });

    // // Get Playlists for a Category (Party in Brazil)
    // spotifyApi.getPlaylistsForCategory('party', {
    //         country: 'BR',
    //         limit: 2,
    //         offset: 0
    //     })
    //     .then(function (data) {
    //         console.log("51 Get Playlists for a Category (Party in Brazil)",data);
    //     }, function (err) {
    //         console.log("51. Something went wrong!", err);
    //     });

    // // Get Recommendations Based on Seeds
    // spotifyApi.getRecommendations({
    //         min_energy: 0.4,
    //         seed_artists: ['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'],
    //         min_popularity: 50
    //     })
    //     .then(function (data) {
    //         let recommendations = data.body;
    //         console.log("52. Get Recommendations Based on Seeds",recommendations);
    //     }, function (err) {
    //         console.log("52. Something went wrong!", err);
    //     });

    // // Get available genre seeds
    // spotifyApi.getAvailableGenreSeeds()
    //     .then(function (data) {
    //         let genreSeeds = data.body;
    //         console.log("53. Get available genre seeds",genreSeeds);
    //     }, function (err) {
    //         console.log('53. Something went wrong!', err);
    //     });

    // /* Player */

    // // Add an Item to the User's Playback Queue
    // // TBD

    // // Get a User's Available Devices
    // spotifyApi.getMyDevices()
    //     .then(function (data) {
    //         let availableDevices = data.body.devices;
    //         console.log("54. Get a User's Available Devices",availableDevices);
    //     }, function (err) {
    //         console.log('54. Something went wrong!', err);
    //     });

    // // Get Information About The User's Current Playback State
    // spotifyApi.getMyCurrentPlaybackState()
    //     .then(function (data) {
    //         // Output items
    //         if (data.body && data.body.is_playing) {
    //             console.log("55. User is currently playing something!");
    //         } else {
    //             console.log("55. User is not playing anything, or doing so in private.");
    //         }
    //     }, function (err) {
    //         console.log('55. Something went wrong!', err);
    //     });

    // // Get Current User's Recently Played Tracks
    // spotifyApi.getMyRecentlyPlayedTracks({
    //     limit: 20
    // }).then(function (data) {
    //     // Output items
    //     console.log("56. Your 20 most recently played tracks are:");
    //     data.body.items.forEach(item => console.log(item.track));
    // }, function (err) {
    //     console.log('56. Something went wrong!', err);
    // });

    // // Get the User's Currently Playing Track
    // spotifyApi.getMyCurrentPlayingTrack()
    //     .then(function (data) {
    //         console.log('57. Now playing: ' + data.body.item.name);
    //     }, function (err) {
    //         console.log('57. Something went wrong!', err);
    //     });

    // // Pause a User's Playback
    // spotifyApi.pause()
    //     .then(function () {
    //         console.log('58. Playback paused');
    //     }, function (err) {
    //         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    //         console.log('58. Something went wrong!', err);
    //     });

    // // // Seek To Position In Currently Playing Track
    // // spotifyApi.seek(positionMs)
    // //     .then(function () {
    // //         console.log('59. Seek to ' + positionMs);
    // //     }, function (err) {
    // //         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    // //         console.log('59. Something went wrong!', err);
    // //     });

    // // Set Repeat Mode On User’s Playback
    // spotifyApi.setRepeat('track')
    //     .then(function () {
    //         console.log('60. Repeat track.');
    //     }, function (err) {
    //         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    //         console.log('60. Something went wrong!', err);
    //     });

    // // Set Volume For User's Playback
    // spotifyApi.setVolume(50)
    //     .then(function () {
    //         console.log('61. Setting volume to 50.');
    //     }, function (err) {
    //         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    //         console.log('61. Something went wrong!', err);
    //     });

    // // Skip User’s Playback To Next Track
    // spotifyApi.skipToNext()
    //     .then(function () {
    //         console.log('62. Skip to next');
    //     }, function (err) {
    //         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    //         console.log('62. Something went wrong!', err);
    //     });

    // // Skip User’s Playback To Previous Track
    // spotifyApi.skipToPrevious()
    //     .then(function () {
    //         console.log('63. Skip to previous');
    //     }, function (err) {
    //         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    //         console.log('63. Something went wrong!', err);
    //     });

    // // Start/Resume a User's Playback
    // spotifyApi.play()
    //     .then(function () {
    //         console.log('64. Playback started');
    //     }, function (err) {
    //         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    //         console.log('64. Something went wrong!', err);
    //     });

    // // Toggle Shuffle For User’s Playback
    // spotifyApi.setShuffle(true)
    //     .then(function () {
    //         console.log('65. Shuffle is on.');
    //     }, function (err) {
    //         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    //         console.log('65. Something went wrong!', err);
    //     });

    // // // Transfer a User's Playback
    // // spotifyApi.transferMyPlayback(deviceIds)
    // //     .then(function () {
    // //         console.log('66. Transfering playback to ' + deviceIds);
    // //     }, function (err) {
    // //         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    // //         console.log('66. Something went wrong!', err);
    // //     });

    /**
     * Personalization Endpoints
     */

    // /* Get a User’s Top Artists*/
    // spotifyApi.getMyTopArtists()
    //     .then(function (data) {
    //         let topArtists = data.body.items;
    //         console.log("67. Get a User’s Top Artists",topArtists);
    //     }, function (err) {
    //         console.log('67. Something went wrong!', err);
    //     });

    // /* Get a User’s Top Tracks*/
    // spotifyApi.getMyTopTracks()
    //     .then(function (data) {
    //         let topTracks = data.body.items;
    //         console.log("68. Get a User’s Top Tracks",topTracks);
    //     }, function (err) {
    //         console.log('68. Something went wrong!', err);
    //     });
  },
};
</script>

<style>
@media only screen and (max-width: 624px) {
  .font--subtitle--2 {
    font-size: 0.875rem !important;
    font-weight: 500 !important;
    letter-spacing: 0.0071428571em !important;
    line-height: 1.375rem !important;
    font-family: "Poppins", sans-serif !important;
  }

  .profile--btn {
    font-size: 0.75rem !important;
  }

  .profile--text--dropdown {
    font-size: 0.85rem !important;
  }
}

.font-family--poppins {
  font-family: "Poppins", sans-serif !important;
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

/* Home Css */

.wrap--text--1 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  -webkit-line-clamp: 1 !important;
}

.wrap--text--2 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  -webkit-line-clamp: 2 !important;
}

.wrap--text--4 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  -webkit-line-clamp: 4 !important;
}

.wrap--text--3 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  -webkit-line-clamp: 3 !important;
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
  background-color: #202b38 !important;
}

.font-family--poppins {
  font-family: "Poppins", sans-serif !important;
}

.position--down {
  top: 165px !important;
}

.border {
  border: 1px solid red;
}

.no-background-hover::before,
.no-background-hover::after {
  background-color: transparent !important;
}

.text--orange {
  color: #ef7105 !important;
}
</style>

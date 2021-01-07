<template>
<v-app id="inspire">
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="primary" size="32"><span class="white--text">IB</span></v-avatar>

      <!-- <v-btn v-for="link in links" :key="link" text>
        {{ link }}
      </v-btn> -->

      <v-spacer></v-spacer>

      <!-- <v-responsive max-width="260">
        <v-text-field dense flat hide-details rounded solo-inverted></v-text-field>
      </v-responsive> -->
    </v-container>
  </v-app-bar>

  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list color="transparent">
              <div v-for="tab in tabs" :key="tab.link">
                <v-list-item :to="tab.link" link>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ tab.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider v-if="tabs.indexOf(tab) < (tabs.length - 1)" class="my-2"></v-divider>

              </div>

              <!-- <router-link to="/">Home</router-link> | -->
              <!-- <router-link to="/about">About</router-link> -->
            </v-list>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <!--  -->
            <router-view />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
    tabs: [{
        title: 'Suche',
        link: '/search'
      },
      {
        title: 'Bewertung',
        link: '/valuation'
      }, {
        title: 'Anfrage',
        link: '/inquiry'
      }, {
        title: 'Besichtigung',
        link: '/visit'
      }, {
        title: 'Kreditanfrage',
        link: '/credit-request'
      }, {
        title: 'Transaktion',
        link: '/transaction'
      }
    ]
  }),
}
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>

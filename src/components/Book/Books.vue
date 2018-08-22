<template>
  <v-container>
      <v-layout row wrap>   
          <v-flex xs12 sm6 offset-sm3>
              <v-card>
                  <v-container fluid>
                      <v-layout row>
                          <v-flex xs5 sm4 md3>
                             <v-card-media
                                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                height="200px"
                                ></v-card-media>
                          </v-flex>
                          <v-flex xs7 sm8 md9>
                              <v-card-title primary-title>
                                  <div>
                                    <h3 class="text-primary mb-2">My Book</h3>
                                    <div>book info book info book info <br>Southern Highlands of New South Wales, ...</div>
                                    <hr>
                                    <div> Date added: 22/Aug/2018</div>
                                  </div>  
                              </v-card-title>
                              <v-card-actions>
                                <v-btn flat class="secondary text--primary">View Book</v-btn>
                                <v-btn flat class="secondary text--primary">Explore</v-btn>
                              </v-card-actions>
                          </v-flex>
                      </v-layout>
                  </v-container>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
    export default {
        

    }
</script>

<style scoped>

</style>
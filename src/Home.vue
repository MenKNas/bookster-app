<template>
<v-app>
<v-container>
<v-parallax
    dark
    class="m-2"
  >
    <v-layout
      align-center
      column
      justify-center
      class="text-xs-center hero-page"
    >
      <h1 class="display-2 font-weight-thin mb-3 mt-5"> Bookster </h1>
      <h4 class="subheading"> Discover a new world, full of books</h4>
      <v-flex xs12 sm6>
                <v-btn class="secondary text--primary text-xs-center text-right" large to="/books"> Explore Books </v-btn>
        </v-flex>
            <v-flex xs12 sm6>
                <v-btn class="secondary text--primary text-xs-center text-sm-left" large to="/book/new"> Add new Book </v-btn>
            </v-flex>     
    </v-layout>

  </v-parallax>
      </v-container>
    <!-- <v-container>
        <v-parallax src="./assets/images/nature-me.png"></v-parallax>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <v-btn class="secondary text--primary text-xs-center text-right" large to="/books"> Explore Books </v-btn>
            </v-flex>
            <v-flex xs12 sm6>
                <v-btn class="secondary text--primary text-xs-center text-sm-left" large to="/book/new"> Add new Book </v-btn>
            </v-flex>
        </v-layout>
    </v-container> -->
    </v-app>
</template>

<script>
    export default {
        

    }
</script>

<style scoped>

.hero-page{
    border-top:3px solid #0e0b16;
    border-bottom:10px solid #0e0b16;
    border-right:10px solid #0e0b16;
    border-left:3px solid #0e0b16;
    width:60%;
    margin:0 auto;
    text-align: center;
    padding-bottom:4%;
    box-shadow: 4px 3px 4px darkgrey;
}


</style>
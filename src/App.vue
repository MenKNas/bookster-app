<template>
  <v-app :dark="yes" fixed>
    
    <v-toolbar id="toolbar">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up nav-icon"></v-toolbar-side-icon>
      <v-toolbar-title> Bookster </v-toolbar-title>
      <v-spacer></v-spacer>
     <v-toolbar-items class="hidden-xs-only">
       <v-btn id="btn-text" flat> 
         <v-icon left> book </v-icon>
         View Books 
         </v-btn>
     </v-toolbar-items>
    </v-toolbar>
      <v-navigation-drawer v-model="sideNav" class="hidden-md-and-up">
        <v-list>
          <v-list-tile> 
            <v-list-tile-action>
              <v-icon> book </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              VIEW BOOKS 
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <main> 

    </main> 
  </v-app>
</template>

<script>

export default {
  data(){
    return{
      yes:false,
      sideNav:true
    }
  }
}

</script>

<style>
  .nav-icon:hover{
    /* color:blue; */
  }

  #toolbar{
    background-color:#0e0b16;
    color:#e7dfdd;
    font-family: 'Montserrat', sans-serif;
  }

  #btn-text{
    color:#e7dfdd;
    font-family: 'Montserrat', sans-serif;
  }

 
</style>
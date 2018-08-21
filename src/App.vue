<template>
  <v-app :dark="yes" fixed>
    
    <v-toolbar id="toolbar">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up nav-icon"></v-toolbar-side-icon>
      <v-toolbar-title> Bookster </v-toolbar-title>
      <v-spacer></v-spacer>
     <v-toolbar-items class="hidden-xs-only">
       <v-btn id="btn-text" flat v-for="item in menuItems" :key="item.title"> 
         <v-icon left> {{item.icon}} </v-icon>
        {{item.title}}
         </v-btn>
     </v-toolbar-items>
    </v-toolbar>
      <v-navigation-drawer v-model="sideNav" class="hidden-md-and-up">
        <v-list>
          <v-list-tile v-for="item in menuItems" :key="item.title">
            <v-list-action>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-action>
            <v-list-tile-content>
              {{ item.title }}
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <main> 
      <router-view/>
    </main> 
  </v-app>
</template>

<script>

export default {
  data(){
    return{
      yes:false,
      sideNav:true,
      menuItems:[
        {icon:'book',title:'VIEW BOOKS'},
        {icon:'library_books',title:'VIEW BOOKSHELF'},
        {icon:'person',title:'PROFILE'},
        {icon:'face',title:'SIGN UP'},
        {icon:'lock_open',title:'SIGN IN'},
      ]
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
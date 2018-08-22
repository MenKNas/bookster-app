<template>
  <v-app :dark="yes" fixed>
    
    <v-toolbar id="toolbar">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up nav-icon"></v-toolbar-side-icon>
      <v-toolbar-title> 
        <router-link to="/" tag="span" id="brand"> Bookster </router-link> 
      </v-toolbar-title>
      <v-spacer></v-spacer>
     <v-toolbar-items class="hidden-xs-only">
       <v-btn id="btn-text" flat v-for="item in menuItems" :key="item.title"
        :to="item.link"
       > 
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
    
<div id="footer">
<p>&copy; Menelaos Nasies 2018. All rights reserved.</p>
<p> Social Media icons </p>
</div>

  </v-app>
</template>

<script>

export default {
  data(){
    return{
      yes:false,
      sideNav:true,
      menuItems:[
        {icon:'book',title:'VIEW BOOKS',link:'/books'},
        {icon:'library_books',title:'VIEW BOOKSHELF',link:'/book/new'},
        {icon:'person',title:'PROFILE',link:'/profile'},
        {icon:'face',title:'SIGN UP',link:'/signup'},
        {icon:'lock_open',title:'SIGN IN',link:'signin'},
      ],
       icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
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

  #brand{
    color:#e7dfdd;
    cursor: pointer;
  }

  #footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color:#0e0b16;
    color: white;
    text-align: center;
    padding:0.3%;
    font-family: 'Montserrat', sans-serif;
  }

 
</style>
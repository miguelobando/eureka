<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div v-if="etapa['etapa1']">
       <etapa1 v-bind:datos="datosEtapa1"  />
    </div>
    <div v-if="etapa['etapa2']">
      <etapa2 v-bind:datos="datosEtapa2" /> 
    </div>
    <div v-if="etapa['etapa3']">
      <etapa3 v-bind:datos="datosEtapa3" />
    </div>
    <div v-if="etapa['etapa4']">
      <etapa4 v-bind:datos="datosEtapa4" v-bind:metodoSeleccionado="metodoSeleccionado" />
    </div>
    
   </div>
</template>

<script>
import ImportacionDeEtapa1 from "./components/etapa1/datosEtapa1.json";
import ImportacionDeEtapa2 from "./components/etapa2/datosEtapa2.json";
import ImportacionDeEtapa3 from "./components/etapa3/datosEtapa3.json";
import etapa1 from './components/etapa1/etapa1.vue';
import etapa2 from './components/etapa2/etapa2.vue';
import etapa3 from './components/etapa3/etapa3.vue';
import etapa4 from './components/etapa4/etapa4.vue';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';



//TODO: Debo enlazar las rutas de la etapa 2 
//TODO: Debo verificar si la ruta 2 tiene todas las imagenes 
//TODO: Debo enlazar todos los componentes! 
//TODO: Verificar la logica de cada uno de los componentes 
//TODO: Verificar que todos los componentes funcionen bien y arrastren el conocimiento del anterior

export default {
  name: 'App',
  components: {
    etapa1,
    etapa2,
    etapa3,
    etapa4
  },
  data(){
    return{
      foo: {},
      datosEtapa1: {},
      datosEtapa2 : {},
      datosEtapa3 : {},
      datosDeEtapa: {},
      siguientePasoEtapa1: "",
      siguientePasoEtapa2: "",
      siguientePasoEtapa3: "",
      metodoRecomendado: "",
      finEtapa: false,
      etapa:{
        etapa1: true,
        etapa2: false,
        etapa3: false,
        etapa4: false
      }
    }
   },

  created(){
    this.datosEtapa1 = ImportacionDeEtapa1['tareasDeAnalisis'];
    this.datosEtapa2 = ImportacionDeEtapa2['aplicacionDeAlgoritmo'];   
    this.datosEtapa3 = ImportacionDeEtapa3[this.metodoRecomendado]['detectarAnomaliasYExtremos'];
  },
  watch:{
    siguientePasoEtapa1: function(val){
      this.datosEtapa1 = ImportacionDeEtapa1[val];
    },
    siguientePasoEtapa2: function(val){
      this.datosEtapa2 = ImportacionDeEtapa2[val];
    }, 
    siguientePasoEtapa3: function (val){
      this.datosEtapa3 = ImportacionDeEtapa3[this.metodoRecomendado][val];
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

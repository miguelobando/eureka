<template>
  <div class="container">
    <div>
     <p>Etapa 3</p>
    </div>
    <div class="row">
      <div class="col s12">
        <div class>
          <h4 class="center-align">{{datos.pregunta}}</h4>
        </div>
      </div>
    </div>
    <div class="row">
      <button
        class="col offset-s1 s4 waves-effect waves-light btn indigo darken-1"
        @click="enviarRespuesta3('Si')"
      >Si</button>

      <button
        class="col offset-s2 s4 waves-effect waves-light btn indigo darken-1"
        @click="enviarRespuesta3('No')"
      >No</button>
    </div>
    <div class="row" v-if="instrucciones">
      <div class="col s8 offset-s2">
        <div class="card">
          <span class="card-title">En un documento realice lo siguiente:</span>
          <div
            class="card-content"
            v-for="recomendaciones in respuesta"
            :key="recomendaciones.index"
          >
            <p class="left-align">☼ {{recomendaciones.texto}}</p>
            <img v-bind:src="recomendaciones.imagen" class="responsive-img" />
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="siguientePasoPostRecomendacion">
      <div class="col s8 offset-s2">
        <button
          @click="siguientePregunta3()"
          class="waves-effect waves-light btn indigo darken-1"
        >Siguiente Paso</button>
      </div>
    </div>
  </div>
</template>

 

<script>
export default {
  name: "etapa3",
  props: {
    datos: Object,
    metodoSeleccionado: String
  },
  data() {
    return {
      instrucciones: false,
      resultado: false,
      respuesta: Object,
      siguientePasoPostRecomendacion: false,
      siguientePaso: ""
    };
  },
  methods: {
    enviarRespuesta3: function(arg) {
      let respuesta = this.datos[arg];
      console.log("respuesta",respuesta);

      if(respuesta.tipo == "regla"){
        this.instrucciones = false;
        console.log("mando la regla",respuesta.regla);
        this.$parent.siguientePasoEtapa3 = respuesta.regla;
      } 
      
      if(respuesta.tipo == "recomendación"){
        this.mostrarBotonSiguientePaso3(arg);
        this.respuesta = respuesta.recomendaciones;
        this.instrucciones = true;
        
      }
    },
    mostrarBotonSiguientePaso3: function(arg){
        if(this.datos[arg].siguientePaso){
          console.log("Este es el argummento ",arg);
          console.log("Este es el siguiente paso ",this.datos[arg].siguientePaso);
          this.siguientePasoPostRecomendacion = true;
          this.siguientePaso = this.datos[arg].siguientePaso; 
        }
    },   
    siguientePregunta3: function() {
      this.instrucciones = false;
      this.siguientePasoPostRecomendacion = false;
      this.$parent.siguientePasoEtapa3 = this.siguientePaso;
    }
  },
  
}

</script>

<style>
</style>
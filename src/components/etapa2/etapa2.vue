<template>
  <div class="container">
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
        @click="enviarRespuesta(datos.Si)"
      >Si</button>

      <button
        class="col offset-s2 s4 waves-effect waves-light btn indigo darken-1"
        @click="enviarRespuesta(datos.No)"
      >No</button>
    </div>
    <div class="row" v-if="instrucciones">
      <div class="col s8 offset-s2">
        <div class="card">
          <span class="card-title">En un documento realice lo siguiente:</span>
          <div
            class="card-content"
            v-for="instrucciones in respuesta.recomendaciones"
            :key="instrucciones.index"
          >
            <p class="left-align">☼ {{instrucciones.texto}}</p>
            <img v-bind:src="instrucciones.imagen" class="responsive-img" />
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="siguientePasoPostRecomendacion">
      <div class="col s8 offset-s2">
        <button
          @click="siguientePregunta()"
          class="waves-effect waves-light btn indigo darken-1"
        >Siguiente Paso</button>
      </div>
    </div>
  </div>
</template>

 

<script>
export default {
  name: "etapa2",
  props: {
    datos: Object
  },
  data() {
    return {
      instrucciones: false,
      resultado: false,
      respuesta: Object,
      siguientePasoPostRecomendacion: false
    };
  },
  methods: {
    enviarRespuesta: function(args) {
      this.axios
        .post("http://localhost:3000/" + this.datos.urlYRegla + "?ans=" + args)
        .then(response => {
          this.respuesta = response.data.params;
         console.log("respuesta");
        console.log(response.data); 
          console.log("fin de respuesta");
          if (response.data.type == "recomendación") {
            this.instrucciones = true;
          } else if (response.data.type == "regla") {
            this.$parent.siguientePasoEtapa2 = response.data.params.regla;
          } else if (response.data == "finEtapa") {
            // this.$parent.etapa["etapa2"] = true;
            // this.$parent.etapa["etapa1"] = false;
          } else {
            this.instrucciones = false;
            this.$parent.siguientePasoEtapa2 = this.datos.siguientePaso;
          }
        })
        .catch(() => {
          console.log("No existe la ruta");
        });
    },
   
    siguientePregunta: function() {
      this.$parent.siguientePasoEtapa2 = this.respuesta.siguienteRegla;
    }
  },
   watch:{
      'respuesta.siguientePaso': function (val){
          if(val.siguientePaso){
            this.siguientePasoPostRecomendacion = true;
        }
      }
    }
};
</script>

<style>
</style>
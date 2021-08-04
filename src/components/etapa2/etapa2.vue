<template>
  <div class="container">
    <div>
      <p>Etapa 2</p>
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
        @click="enviarRespuesta2('Si')"
        id="si"
      >Si</button>

      <button
        class="col offset-s2 s4 waves-effect waves-light btn indigo darken-1"
        @click="enviarRespuesta2('No')"
        id="no"
      >No</button>
    </div>
    <div class="row" v-if="instrucciones">
      <div class="col s8 offset-s2">
        <div class="card">
          <span class="card-title">Realice lo siguiente:</span>
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
          @click="siguientePregunta()"
          class="waves-effect waves-light btn indigo darken-1"
        >Siguiente Paso</button>
      </div>
    </div>
  </div>
</template>

 

<script>
// TODO: Arreglar la logica de este paso al llegar a seleccionar la ruta

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
      siguientePasoPostRecomendacion: false,
      siguientePaso: ""
    };
  },
  mounted() {},
  methods: {
    enviarRespuesta2: function(arg) {
      var respuesta = "";
      if (
        this.datos.pregunta ==
        "Aplicación de algoritmo de minería para previsualización de resultados sin preprocesamiento"
      ) {
        if (arg == "Si") respuesta = this.datos["kmedias"];
        else respuesta = this.datos["apriori"];
      } else {
        respuesta = this.datos[arg];
        this.mostrarBotonSiguientePaso(arg);
      }

      if (respuesta.tipo == "regla") {
        this.instrucciones = false;
        this.$parent.siguientePasoEtapa2 = respuesta.regla;
      }
      if (respuesta.tipo == "recomendación") {
        this.respuesta = respuesta.recomendaciones;
        this.instrucciones = true;
      }
    },
    mostrarBotonSiguientePaso: function(arg) {
      if (this.datos[arg].siguientePaso) {
        this.siguientePasoPostRecomendacion = true;
        this.siguientePaso = this.datos[arg].siguientePaso;
      }
    },
    siguientePregunta: function() {
      document.getElementById("si").disabled = false;
      document.getElementById("no").disabled = false;
      this.instrucciones = false;
      this.siguientePasoPostRecomendacion = false;
      if (this.siguientePaso === "finDeEtapa") {
        this.$parent.etapa["etapa3"] = true;
        this.$parent.etapa["etapa2"] = false;
      } else {
        this.$parent.siguientePasoEtapa2 = this.siguientePaso;
      }
    }
  },
  watch: {
    siguientePasoPostRecomendacion: function(val) {
      if (val == true) {
        document.getElementById("si").disabled = true;
        document.getElementById("no").disabled = true;
      }
    },
    datos: function(val) {
      if (
        val.pregunta ==
        "Aplicación de algoritmo de minería para previsualización de resultados sin preprocesamiento"
      ) {
        document.getElementById("si").style.display = "none";
        document.getElementById("no").style.display = "none";

        if (this.$parent.metodoRecomendado == "kmedias") {
          this.datos["kmedias"];
        }

        if (this.$parent.metodoRecomendado == "apriori") this.datos["apriori"];

        this.siguientePaso = "finDeEtapa";
        this.siguientePasoPostRecomendacion = true;
        this.instrucciones = true;
      }
    }
  }
};
</script>

<style>
</style>
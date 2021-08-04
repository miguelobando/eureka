<template>
  <div class="container">
    <div>
     <p>Etapa 1</p>
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
        class="col offset-s1 s4 waves-effect waves-light btn indigo darken-1" id="si"
        @click="enviarRespuesta('Si')"
      >Si</button>

      <button
        class="col offset-s2 s4 waves-effect waves-light btn indigo darken-1" id="no"
        @click="enviarRespuesta('No')"
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
          @click="siguientePregunta()"
          class="waves-effect waves-light btn indigo darken-1"
        >Siguiente Paso</button>
      </div>
    </div>
  </div>
</template>

 

<script>
export default {
  name: "etapa1",
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
  mounted(){
  },
  methods: {
  enviarRespuesta: function(arg) {
      let respuesta = this.datos[arg];
      console.log("respuesta",respuesta);
    
      if(respuesta.tipo == "regla"){
        this.instrucciones = false;
        console.log("mando la regla",respuesta.regla);
        this.$parent.siguientePasoEtapa1 = respuesta.regla;
      } 
      
      if(respuesta.tipo == "recomendación"){
        if(this.pregunta === "¿La tarea de analisis de datos involucra segmentación de los datos en subgrupos? Por ejemplo: Separar los clientes en grupos de acuerdo a sus compras")
            this.$parent.metodoRecomendado = "kmedias";
        
        if(this.pregunta === "La tarea de analisis de datos datos involucra encontrar dependencias entre los datos? Por ejemplo: Encontrar que se compra de manera mas frecuente despues de comprar un paquete de pan")
            this.$parent.metodoRecomendado = "apriori";
       console.log("siguiente paso ",respuesta.siguientePaso); 
        this.siguientePaso = respuesta.siguientePaso;
        this.respuesta = respuesta.recomendaciones;
        this.instrucciones = true;
        this.siguientePasoPostRecomendacion = true;
      }
    },   
    siguientePregunta: function() {
      document.getElementById("si").disabled = false;
      document.getElementById("no").disabled = false;
      this.instrucciones = false;
      this.siguientePasoPostRecomendacion = false;
      if(this.siguientePaso === "finDeEtapa"){
        this.$parent.etapa['etapa2'] = true;
        this.$parent.etapa['etapa1'] = false;
      }
    }
  },
  watch:{
    siguientePasoPostRecomendacion: function(val){
      if(val == true){
        document.getElementById("si").disabled = true;
        document.getElementById("no").disabled = true;
      }
    }
  }
}

</script>

<style>
</style>
<template>
  <div class="container">
    <div>
     <p>Introducción al asistente</p>
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
        @click="enviarRespuesta0('Si')"
      >Si</button>

      <button
        class="col offset-s2 s4 waves-effect waves-light btn indigo darken-1" id="no"
        @click="enviarRespuesta0('No')"
      >No</button>
    </div>
    <div class="row" v-if="instrucciones">
      <div class="col s8 offset-s2">
        <div class="card">
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
    <div class="row" v-if="siguientePasoPostRecomendacion0">
      <div class="col s8 offset-s2">
        <button
          @click="siguientePregunta0()"
          class="waves-effect waves-light btn indigo darken-1"
        >Siguiente Paso</button>
      </div>
    </div>
  </div>
</template>

 

<script>
export default {
  name: "etapa0",
  props: {
    datos: Object
  },
  data() {
    return {
      instrucciones: false,
      resultado: false,
      respuesta: "",
      siguientePasoPostRecomendacion0: false,
      siguientePaso: "",
      argumento: ""
    };
  },
  mounted(){
  },
  methods: {
  enviarRespuesta0: function(arg) {
      this.argumento = arg;
      let respuesta = this.datos[arg];
      console.log("respuesta",respuesta);
    
      if(respuesta.tipo == "regla"){
        this.instrucciones = false;
        console.log("mando la regla",respuesta.regla);
        if(respuesta.regla =="finDeEtapa"){
          this.$parent.etapa['etapa1'] = true;  
          this.$parent.etapa['etapa0'] = false;          
        }else
          this.$parent.siguientePasoEtapa0 = respuesta.regla;
      } 
      
      if(respuesta.tipo == "recomendación"){
        console.log("siguiente paso ",respuesta.siguientePaso); 
        this.siguientePaso = respuesta.siguientePaso;
        this.respuesta = respuesta.recomendaciones;
        this.instrucciones = true;
        this.siguientePasoPostRecomendacion0 = true;
      }
     
    },   
    siguientePregunta0: function() {
      document.getElementById("si").disabled = false;
      document.getElementById("no").disabled = false;
      this.instrucciones = false;
      this.siguientePasoPostRecomendacion0 = false;
      if(this.siguientePaso === "finDeEtapa"){
        this.$parent.etapa['etapa1'] = true;
        this.$parent.etapa['etapa0'] = false;
      }else{
        this.$parent.siguientePasoEtapa0 =  this.datos[this.argumento].siguientePaso;
      }
    }
  },
  watch:{
    siguientePasoPostRecomendacion0: function(val){
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
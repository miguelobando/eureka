<template>
  <div class="container">
    <div class="row">
        <div class="col s12">
            <div class="">
                <h4 class="center-align">
                    {{datos.pregunta}}
                </h4>
            </div>
        </div>
    </div>
    <div class="row">        
            <button class=" col offset-s1 s4 waves-effect waves-light btn indigo darken-1" 
            @click="enviarRespuesta('Si')"> Si </button>
        
            <button class=" col offset-s2 s4 waves-effect waves-light btn indigo darken-1" 
            @click="enviarRespuesta('No')">No</button>
    </div>
    <div class="row" v-if="instrucciones">
        <div class="col s8 offset-s2">
            <div class="card">
                <span class="card-title">En un documento realice lo siguiente:</span>
                <div class="card-content" v-for="instrucciones in respuesta.recomendaciones" :key="instrucciones.index">
                    <p class="left-align"  >☼ {{instrucciones}}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row" v-if="resultado">
        <div class="col s8 offset-s2">
            <div class="card">
                <span class="card-title">Fin de etapa</span>
                <div class="card-content" v-for="instrucciones in datos" :key="instrucciones.index">
                    <p class="left-align"  >☼ {{instrucciones}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"etapa1",
    props:{
       datos:Object,
    
        
    },
    data(){
        return{
            instrucciones:false,
            resultado:false,
            respuesta: Object
        }
    },
    methods:{
        enviarRespuesta(args){
            this.axios.post('http://localhost:3000/' + this.datos.urlYRegla +'?ans='+args)
                .then((response) => {
                   this.respuesta = response.data.params;
                   if(response.data.type == "recomendación"){
                        this.instrucciones=true;
                   }
                    else{  
                        if(response.data == "finEtapa"){
                            this.$parent.etapa["etapa2"] = true;
                            this.$parent.etapa["etapa1"] = false;
                         
                        }else{  
                            this.instrucciones=false;
                            // console.log(this.);
                            this.$parent.siguientePasoEtapa1 = this.datos.siguientePaso; 
                        }
                    } 

                })
                .catch( () =>{
                    console.log("No existe la ruta");
                });
        }
    }
    
}
</script>

<style>

</style>
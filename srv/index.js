import express from 'express';
const cors = require('cors');
// import socketIO from "socket.io";

export default (app) => {
  app.use(express.json());
  app.use(cors());
  // const entiendiendoElProblema = require('./models/etapa1/entiendiendoElProblema.json');
  // const expertoEnLosDatos = require('./models/etapa1/expertoEnLosDatos.json');
  // const problemaYAreaRelacionada = require('./models/etapa1/problemaYAreaRelacionada.json');
  // const analisisAnteriores = require('./models/etapa1/analisisAnteriores.json');
  // const publicoYExpectativas = require('./models/etapa1/publicoYExpectativas.json');
  // const solucionATravesDeMineria = require('./models/etapa1/solucionATravesDeMineria.json');
  // const beneficioDeNegocio = require('./models/etapa1/beneficioDeNegocio.json');
  // const criteriosDeExito = require('./models/etapa1/criteriosDeExito');
  // const disponibilidadDehardware = require('./models/etapa1/disponibilidadDehardware.json');
  // const fuentesDeDatos = require('./models/etapa1/fuentesDeDatos.json');
  // const conocimientoRelevanteSobreDatos = require('./models/etapa1/conocimientoRelevanteSobreDatos.json');
  // const supuestosDeOrganizacionYDatos = require('./models/etapa1/supuestosDeOrganizacionYDatos.json');
  // const terminosRelevantes = require('./models/etapa1/terminosRelevantes.json');
  // const tareasDeAnalisis = require('./models/etapa1/tareasDeAnalisis.json');
  // const clusteringDatos = require('./models/etapa1/clusteringDatos.json');
  // const asociacionDatos = require('./models/etapa1/asociacionDatos.json');
  // const preddcionDatos = require('./models/etapa1/predicionDatos.json');
  // const deteccionAnomaliasDatos = require('./models/etapa1/deteccionAnomaliasDatos.json');
  // const personasClave = require('./models/etapa1/personasClave.json');
  // const solucionTemporal = require('./models/etapa1/solucionTemporal.json');
  // const validacionDeCriteriosDeExito = require('./models/etapa1/validacionDeCriteriosDeExito.json');
  // const hardwareDeNegocio = require('./models/etapa1/hardwareDeNegocio.json');
  // var engine = new Engine();
  

  // engine.addRule(entiendiendoElProblema);
  // engine.addRule(expertoEnLosDatos);
  // engine.addRule(problemaYAreaRelacionada);
  // engine.addRule(analisisAnteriores);
  // engine.addRule(publicoYExpectativas);
  // engine.addRule(solucionATravesDeMineria);
  // engine.addRule(beneficioDeNegocio);
  // engine.addRule(criteriosDeExito);
  // engine.addRule(disponibilidadDehardware);
  // engine.addRule(fuentesDeDatos);
  // engine.addRule(conocimientoRelevanteSobreDatos);
  // engine.addRule(supuestosDeOrganizacionYDatos);
  // engine.addRule(terminosRelevantes);
  // engine.addRule(tareasDeAnalisis);
  // engine.addRule(clusteringDatos);
  // engine.addRule(deteccionAnomaliasDatos);
  // engine.addRule(preddcionDatos);
  // engine.addRule(asociacionDatos);
  // engine.addRule(personasClave);
  // engine.addRule(solucionTemporal);
  // engine.addRule(validacionDeCriteriosDeExito);
  // engine.addRule(hardwareDeNegocio);
  

  // engine2.addRule(integracionDeDatosSi);
  // engine2.addRule(integracionDeDatosNo);
  // engine2.addRule(integracionAWekaCSVSi);
  // engine2.addRule(integracionAWekaCSVNo);
  
  // engine.addRule(fuentesEnBasesDeDatos);
  // engine.addRule(integracionAWekaBD);
 
  // var facts = {
  //   experto_de_datos: "",
  //   organizacion_negocio: "",
  //   problemaYAreaRelacionada: "",
  //   analisisAnteriores: "",
  //   publicoYExpectativas: "",
  //   solucionTemporal: "",
  //   solucionATravesDeMineria: "",
  //   beneficioDeNegocio: "",
  //   criteriosDeExito: "",
  //   disponibilidadDehardware: "",
  //   fuentesDeDatos: "",
  //   conocimientoRelevanteSobreDatos: "",
  //   supuestosDeOrganizacionYDatos: "",
  //   terminosRelevantes: "",
  //   tareasDeAnalisis: "",
  //   clusteringDatos: "",
  //   asociacionDatos: "",
  //   predicionDatos: "",
  //   deteccionAnomaliasDatos: "",
  //   personasClave: "",
  //   validacionDeCriteriosDeExito: "",
  //   hardwareDeNegocio: ""
  // };



  //  app.post('/:fact', (req, res) => {
    
  //   facts[req.params.fact] = req.query.ans;
  //   if (facts[req.params.fact] == "Si") {
  //     res.send("Siguiente");
  //   }
  //   else {
  //     engine
  //       .run(facts)
  //       .then(({ events }) => {
  //         events.map(event => {
  //           reglaDisparada = event;
  //         });
  //         facts[req.params.fact] = "Si";
  //         res.send(reglaDisparada);
  //       })
  //       .catch(() =>{
  //         res.status(404);
  //       });
          
  //   }


  // });

  // app.post('/:fact/final', (req,res) => {
  //   facts[req.params.fact] = req.query.ans;
  //   if(facts[req.params.fact] == "Si")
  //     res.send("finEtapa");
  //   else
  //     res.send("Siguiente");
  // });

 

};

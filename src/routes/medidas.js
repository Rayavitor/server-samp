var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/resgatarMaquinas", function(req, res){
    medidaController.buscarMaquinas(req, res);
});

router.get("/mediaUsoComponente", function(req, res){
    medidaController.mediaUsoComponente(req, res);
});

// DAVI
router.get("/correlacaoTempCPU/:idMaquina", function(req, res){
    medidaController.correlacaoTempCPU(req, res);
});

router.get("/buscarComponentesMaquina/:idEmpresa/:idMaquina", function (req, res){
    medidaController.buscarComponentesMaquina(req, res);
});

router.get("/infoMaquina/:idMaquina", function(req, res){
    medidaController.infoMaquina(req, res);
});

router.get("/ultimosRegistros/:idEmpresa/:idMaquina/:fkComponente", function (req, res){
    medidaController.buscarUltimosRegistros(req, res);
});

router.get("/registrosTempoReal/:idEmpresa/:idMaquina/:fkComponente", function(req, res){
    medidaController.buscarRegistroTempoReal(req, res);
});

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.post("/buscarServidores", function (req, res) {
    medidaController.buscarServidores(req, res);
})

module.exports = router;
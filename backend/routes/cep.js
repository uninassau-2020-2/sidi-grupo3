var express = require('express');
var router = express.Router();
const axios = require('axios').default;
var verificaCep = /^[0-9]{8}$/;
var {CepQueries} = require("../model");
/* GET home page. */
router.get('/:cep', function(req, res, next) {
  
    var cep = req.params.cep;

    if(verificaCep.test(cep)) {

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  .then(async function (response) {
    // handle success
   // console.log(response); 
   await CepQueries.create(response.data);
   res.json(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
} else {
  //cep é inválido.
  res.send('Verifique o CEP e tente novamente')
}
});

module.exports = router;
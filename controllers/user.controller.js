const {response, request} = require('express');


const usuarioGet = (req = request, res= response) => {
  const queryParams = req.query;
    res.json({
        mensaje: 'GET operation',
        query: queryParams,
    });
  };
const usuarioPost = (req = request, res= response) => {
  const body = req.body;
  console.log(body); 
    res.json({
        mensaje: 'Post operation',
        data: body,
    });
  };
const usuarioPut = (req = request, res= response) => {
  const id = req.params.id;  
  res.json({
        mensaje: 'Put operation',
        put: id,
    });
  };
const usuarioDelete = (req = request, res= response) => {
    res.json({
        mensaje: 'Delete operation'
    });
  };
const usuarioPatch = (req = request, res= response) => {
    res.json({
        mensaje: 'Patch operation'
    });
  };



module.exports={
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete,
    usuarioPatch,
}
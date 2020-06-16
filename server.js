//para gerenciamento de rotas e views
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const url = 'mongodb://localhost:27017/nodeapi';

//iniciando o app
const app = express();

//permite o envio de dados para aplicação no formato de json
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect(url,  { useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/models');

//rotas
app.use("/api", require("./src/routes"));
app.listen(3001);

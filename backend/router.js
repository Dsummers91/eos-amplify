// const Contract = require('../controllers/contract');
import shelljs from 'shelljs';

module.exports = (app) => {

  app.get('/createContract', (req, res) => {res.send("creating contract...")} );

  app.post('/createContract', (req, res) => {
    res.send(
      shelljs.exec(`docker exec -it eosio_notechain_container bash /opt/eosio/bin/scripts/create_account.sh ${req.name}`)
    )
  })
};
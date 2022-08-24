const homeController = require('../controllers/home-controller')
const homeRouter = require('express').Router()
const { createConnection } = require("../utils/db-utils");
const { memberMapper } = require("../models/mappers/member-mapper.js");

homeRouter.post("/post", homeController.memberPost)

homeRouter.get('/getAll', async (req, res) => {
  const db = await createConnection();

  const queryAll = `SELECT * FROM member`;

  const result = await db.query(queryAll);

  const members = result.map((row) => memberMapper(row));

  res.status(200).json(members);
  db.end();
}); 



module.exports = homeRouter
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const sqlQueryText = 
  `
  UPDATE "gallery"
  SET "likes" = likes + 1
    WHERE "id" = ($1);
  `
  const sqlValues = [req.params.id];
  pool.query(sqlQueryText, sqlValues)
    .then((dbResult) => {
      res.sendStatus(200);
    }).catch((dbError) => {
      console.log('PUT /likes SQL query failed:', dbError);
      res.sendStatus(500);
    })
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM gallery ORDER BY title ASC;`;
  pool.query(sqlText)
      .then((result) => {
          console.log(`Got gallery back from the database`, result.rows);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      })
});

module.exports = router;

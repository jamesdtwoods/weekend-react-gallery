const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.delete('/:id', (req, res) => {
  const sqlQueryText = `
  DELETE FROM "gallery"
    WHERE "id" = ($1);
  `
  const sqlValues = [req.params.id];
  pool.query(sqlQueryText, sqlValues)
  .then((result) => {
      res.sendStatus(200);
    }).catch((dbError) => {
      console.log('DELETE /gallery SQL query failed:', dbError);
      res.sendStatus(500);
    });
});

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

router.post('/', (req, res) => {
  const item = req.body;
  const sqlText = 
    `INSERT INTO gallery ("url", "title", "description")
      VALUES ($1, $2, $3)`;
  // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
  // the $1, $2, etc get substituted with the values from the array below
  pool.query(sqlText, [item.url, item.title, item.description])
      .then((result) => {
          console.log(`Added picture to the database`, item);
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); // Good server always responds
      })
})

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM gallery ORDER BY likes DESC;`;
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

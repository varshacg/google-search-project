const express = require('express');
const router = express.Router();
const Search = require('../models/Search');
 
// Save search query
router.post('/', async (req, res) => {
  const { title,description,link } = req.body;
  try {
    const newResult = new Search({title,description,link });
    await newResult.save();
    res.status(201).json(newResult);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
 
// Get all search queries
router.get('/', async (req, res) => {
  const query=req.query.q;
  try {
    const results = await Search.find({
      $or:[
        {title:{$regex:query, $options:'i'}},
        {description:{$regex:query, $options:'i'}}
      ]
    });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
 
module.exports = router;
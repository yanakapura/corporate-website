const express = require('express');

const { getAll, get } = require('../data/projects');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const projects = await getAll();
    res.json({ projects: projects });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const project = await get(req.params.id);
    res.json({ project: project });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

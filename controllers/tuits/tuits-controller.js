import * as tuitsDao from '../../tuits/tuits-dao.js';

const currentUser = {
  "username": "NASA",
  "handle": "@nasa",
  "image": "nasa.png"
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "disliked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
  "dislikes": 0
};

const createTuit = async (req, res) => {
  const newTuit = {...req.body, ...templateTuit};
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
};

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
};

const updateTuit = async (req, res) => {
  const tuitIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);
  res.json(status);
};

const deleteTuit = async (req, res) => {
  const tuitIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitIdToDelete);
  res.json(status);
};

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}

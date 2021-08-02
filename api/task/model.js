const db = require('../../data/dbConfig');

function getTasks() {
  return db('tasks as T')
    .leftJoin('projects as P', 'P.project_id', 'T.project_id')
    .select('T.*', 'P.project_name', 'P.project_description');
}

async function createTask(task) {
  const [id] = await db('tasks as T')
    .leftJoin('projects as P', 'P.project_id', 'T.project_id')
    .select('T.*', 'P.project_id')
    .insert(task);
  return getTasks().where({ id }).first();
}

module.exports = {
  getTasks,
  createTask,
};

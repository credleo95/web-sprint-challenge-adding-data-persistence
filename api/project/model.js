const db = require('../../data/dbConfig');

function getProjects() {
  return db('projects as p').select(
    'p.project_id',
    'p.project_name',
    'p.project_description',
    'p.project_completed'
  );
}
async function createProject(project) {
  const [id] = await db('projects').insert(project);
  return getProjects().where({ id }).first();
}
module.exports = {
  getProjects,
  createProject,
};

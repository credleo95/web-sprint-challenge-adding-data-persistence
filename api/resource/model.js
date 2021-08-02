const db = require('../../data/dbConfig');

function getResources() {
  return db('resources as r').select(
    'r.resource_id',
    'r.resource_name',
    'r.resource_description'
  );
}

async function createResource(resource) {
  const [id] = await db('resources').insert(resource);
  return getResources().where({ id }).first();
}

module.exports = {
  getResources,
  createResource,
};

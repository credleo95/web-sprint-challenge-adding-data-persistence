const db = require('.../data/dbConfig.js');

function getResources() {
  return db('resources as r').select(
    'r.resource_id',
    'r.resource_name',
    'r.resource_description'
  );
}

async function createResource(resource) {
  return db('resources').insert(resource);
}

module.exports = {
  getResources,
  createResource,
};

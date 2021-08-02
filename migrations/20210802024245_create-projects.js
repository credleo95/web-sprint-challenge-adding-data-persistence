exports.up = function (knex) {
  return knex.schema.createTable('projects', (tbl) => {
    tbl.increments('project_id');
    tbl.text('project_name').unique().notNullable();
    tbl.text('project_description');
    tbl.boolean('false');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('projects');
};

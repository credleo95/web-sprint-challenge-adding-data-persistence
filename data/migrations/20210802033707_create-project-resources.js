exports.up = function (knex) {
  return knex.schema.createTable('project_resources', (tbl) => {
    tbl
      .increments()
      .integer('project_id')
      .unsigned()
      .references('projects.id')
      .notNullable()
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('resource_id')
      .unsigned()
      .references('resource.id')
      .notNullable()
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('project_resources');
};

exports.up = function (knex) {
  return knex.schema
    .createTable('projects', (tbl) => {
      tbl.increments('project_id');
      tbl.text('project_name').notNullable();
      tbl.text('project_description').nullable();
      tbl.boolean('project_completed');
    })

    .createTable('tasks', (tbl) => {
      tbl.increments('task_id');
      tbl.text('task_description').notNullable();
      tbl.text('task_notes').nullable();
      tbl.boolean('task_completed');
      tbl
        .integer('project_id')
        .notNullable()
        .unsigned()
        .references('project_id')
        .intable('projects');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('tasks').dropTableIfExists('projects');
};

exports.up = function (knex) {
  return knex.schema.createTable('resource', (tbl) => {
    tbl.increments('resource_id');
    tbl.text('resource_name', 145).unique().notNullable();
    tbl.text('resource_description').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('resource');
};

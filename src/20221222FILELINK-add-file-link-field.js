module.exports = {
  async up(knex) {
    await knex('directus_fields').insert([
      {
        collection: 'directus_files',
        field: 'file_link',
        special: 'alias,no-data',
        interface: 'custom',
        options: null,
        display: null,
        display_options: null,
        readonly: 0,
        hidden: 0,
        sort: null,
        width: 'full',
        translations: null,
        note: null,
        conditions: null,
        required: 0,
        group: null,
        validation: null,
        validation_message: null
      },
    ]);
  },

  async down(knex) {
    await knex('directus_fields').where('collection', 'directus_files').andWhere('field', 'file_link').del()
  },
};

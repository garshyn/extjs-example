Ext.define('ExtJSExample.model.User', {
  extend: 'Ext.data.Model',

  fields: [
    {
      name: 'id',
      type: 'int'
    },
    {
      name: 'name'
    },
    {
      name: 'firstname'
    },
    {
      name: 'lastname'
    },
    {
      name: 'department'
    },
    {
      name: 'email'
    },
    {
      name: 'login'
    },
    {
      name: 'status'
    }
  ]
})

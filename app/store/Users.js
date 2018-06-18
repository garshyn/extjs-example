Ext.define('ExtJSExample.store.Users', {
  extend: 'Ext.data.Store',
  storeId: 'Users',
  model: 'ExtJSExample.model.User',
  proxy: {
    type: 'ajax',
    url: 'users.csv',
    reader: {
      type: 'csv'
    }
  },
  autoLoad: true
});

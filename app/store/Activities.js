Ext.define('ExtJSExample.store.Activities', {
  extend: 'Ext.data.Store',
  storeId: 'Activities',
  model: 'ExtJSExample.model.Activity',
  proxy: {
    type: 'ajax',
    url: 'activities.csv',
    reader: {
      type: 'csv'
    }
  },
  autoLoad: true
});

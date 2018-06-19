Ext.define('ExtJSExample.store.Effects', {
  extend: 'Ext.data.Store',
  model: 'ExtJSExample.model.Effect',
  alias: 'store.effects',
  proxy: {
    type: 'ajax',
    url: 'effects.csv',
    reader: {
      type: 'csv'
    }
  },
  autoLoad: true
});

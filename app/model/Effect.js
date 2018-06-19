Ext.define('ExtJSExample.model.Effect', {
  extend: 'Ext.data.Model',

  fields: [
    {
      name: 'time'
    },
    {
      name: 'plan',
      type: 'number'
    },
    {
      name: 'actual',
      type: 'number'
    },
    {
      name: 'report',
      calculate: function(data) {
        return Math.floor(data.actual / data.plan * 100)
      }
    }
  ]
})

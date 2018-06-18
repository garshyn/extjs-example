Ext.define('ExtJSExample.model.Activity', {
  extend: 'Ext.data.Model',

  fields: [
    {
      name: 'activity'
    },
    {
      name: 'plannedstart',
      type: 'date',
      dateFormat: 'd.m.Y'
    },
    {
      name: 'actualstart',
      type: 'date',
      dateFormat: 'd.m.Y'
    },
    {
      name: 'plannedend',
      type: 'date',
      dateFormat: 'd.m.Y'
    },
    {
      name: 'actualend',
      type: 'date',
      dateFormat: 'd.m.Y'
    },
    {
      name: 'responsibleuser',
      type: 'int'
    },
    {
      name: 'report',
      calculate: function(data) {
        var result = [];
        if(data.plannedstart < data.actualstart) {
          result.push(-1);
        }
        else {
          result.push(1);
        }

        if(data.plannedend > data.actualend) {
          result.push(1);
        }
        else if(Ext.Date.isEqual(data.plannedend, data.actualend)) {
          result.push(0);
        }
        else {
          result.push(-1);
        }
        return result;
      }
    }
  ]
})

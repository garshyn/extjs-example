Ext.define('ExtJSExample.view.main.ActivityGrid', {
  extend: 'Ext.grid.Panel',
  xtype: 'activitygrid',
  title: 'Activity Grid',
  store: 'Activities',
  columns: [
    {
      text: 'Activity',
      dataIndex: 'activity',
      width: 200,
      align: 'left'
    },
    {
      text: 'Planned Start',
      dataIndex: 'plannedstart',
      xtype: 'datecolumn',
      format: 'd.m.Y'
    },
    {
      text: 'Actual Start',
      dataIndex: 'actualstart',
      xtype: 'datecolumn',
      format: 'd.m.Y'
    },
    {
      text: 'Planned End',
      dataIndex: 'plannedend',
      xtype: 'datecolumn',
      format: 'd.m.Y'
    },
    {
      text: 'Actual End',
      dataIndex: 'actualend',
      xtype: 'datecolumn',
      format: 'd.m.Y'
    },
    {
      text: 'Responsible user',
      dataIndex: 'responsibleuser',
      width: 200,
      align: 'left',
      renderer: function(value, record) {
        var user = Ext.getStore('Users').findRecord('id', value);
        return user.get('name');
      }
    },
    {
      text: 'Schedule',
      width: 100,
      xtype: 'widgetcolumn',
      widget: {
        xtype: 'sparklinetristate',
        bind: '{record.report}'
      }
    }
  ]
})

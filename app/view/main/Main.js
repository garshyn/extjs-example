Ext.define('ExtJSExample.view.main.Main', {
  extend: 'Ext.tab.Panel',

  requires: [
    'ExtJSExample.view.main.UserGrid',
    'ExtJSExample.view.main.ActivityGrid'
  ],

  items: [
    {
      title: 'Home',
      items: [
        {
          xtype: 'usergrid'
        }
      ]
    },
    {
      title: 'Activities',
      items: [
        {
          xtype: 'activitygrid'
        }
      ]
    }
  ]
});

Ext.define('ExtJSExample.view.main.Main', {
  extend: 'Ext.tab.Panel',

  requires: [
    'ExtJSExample.view.main.UserGrid'
  ],

  items: [
    {
      title: 'Home',
      items: [
        {
          xtype: 'usergrid'
        }
      ]
    }
  ]
});

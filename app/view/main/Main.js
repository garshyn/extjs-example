Ext.define('ExtJSExample.view.main.Main', {
  extend: 'Ext.tab.Panel',

  requires: [
    'ExtJSExample.view.main.UserGrid',
    'ExtJSExample.view.main.ActivityChart',
    'ExtJSExample.view.main.ActivityGrid'
  ],
  controller: 'main',
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
    },
    {
      title: 'Activity Chart',
      layout: 'column',
      items: [
        { xtype: 'activitychart', title: 'Started on schedule', columnWidth: '0.33', id: 'cmpStartedChart' },
        { xtype: 'activitychart', title: 'Finished on schedule', columnWidth: '0.33', id: 'cmpFinishedChart' },
        { xtype: 'activitychart', title: 'Start and Finish on schedule', columnWidth: '0.33', id: 'cmpOverallChart' }
      ]
    }
  ]
});

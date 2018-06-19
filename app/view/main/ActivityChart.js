Ext.define('ExtJSExample.view.main.ActivityChart', {
  extend: 'Ext.chart.PolarChart',
  requires: [
    'Ext.chart.series.Pie',
    'Ext.chart.interactions.ItemHighlight'
  ],
  xtype: 'activitychart',
  controller: 'activitychart',
  width: '100%',
  height: 500,
  insetPadding: 50,
  innerPadding: 40,
  store: {
    type: 'activitiesonschedule'
  },
  legend: {
    docked: 'bottom'
  },
  colors: ['green', 'red'],
  series: [
    {
      type: 'pie',
      angleField: 'count',
      label: {
        field: 'label'
      },
      tooltip: {
        trackMouse: true,
        renderer: 'onSeriesTooltipRender'
      }
    }
  ]
})

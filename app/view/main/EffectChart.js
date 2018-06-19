Ext.define('ExtJSExample.view.main.EffectChart', {
  extend: 'Ext.chart.CartesianChart',
  requires: [
    'Ext.chart.axis.Numeric',
    'Ext.chart.axis.Category',
    'Ext.chart.series.Bar'
  ],
  xtype: 'effectchart',
  controller: 'effectchart',
  width: '100%',
  height: 500,
  store: {
      type: 'effects'
  },
  axes: [{
      type: 'numeric',
      position: 'left',
      grid: true,
      minimum: 0,
      renderer: 'onAxisLabelRender'
  }, {
      type: 'category',
      position: 'bottom',
      label: {
          rotate: {
              degrees: -90
          }
      }
  }],
  series: [
    {
      type: 'bar',
      xField: 'time',
      yField: 'report',
      style: {
          lineWidth: 2
      },
      marker: {
          radius: 4,
          lineWidth: 2
      },
      label: {
          field: 'report',
          display: 'over'
      },
      tooltip: {
          trackMouse: true,
          showDelay: 0,
          dismissDelay: 0,
          hideDelay: 0,
          renderer: 'onSeriesTooltipRender'
      }
    },
  ],
})

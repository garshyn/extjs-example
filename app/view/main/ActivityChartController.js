Ext.define('ExtJSExample.view.main.ActivityChartController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.activitychart',

  onSeriesTooltipRender: function (tooltip, record, item) {
    tooltip.setHtml(record.get('label') + ': ' + record.get('count'));
  }
})

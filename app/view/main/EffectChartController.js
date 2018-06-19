Ext.define('ExtJSExample.view.main.EffectChartController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.effectchart',

  onAxisLabelRender: function (axis, label, layoutContext) {
    return layoutContext.renderer(label);
  },

  onSeriesTooltipRender: function (tooltip, record, item) {
    tooltip.setHtml(record.get('time') + ': ' + record.get('report') + '%' + "<br>Plan: " + record.get('plan')+ "<br>Actual: "  + record.get('actual'));
  }
})

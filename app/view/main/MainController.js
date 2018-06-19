Ext.define('ExtJSExample.view.main.MainController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.main',

  listen: {
    store: {
      '#Activities': {
        load: 'onActivitiesLoad'
      }
    }
  },

  onActivitiesLoad: function(activitiesStore) {
    var started = [{ label: 'In time', count: 0 }, { label: 'Late', count: 0 }];
    var finished = [{ label: 'In time', count: 0 }, { label: 'Late', count: 0 }];
    var overall = [{ label: 'In time', count: 0 }, { label: 'Late', count: 0 }];
    activitiesStore.each(function(record) {
      var report = record.get('report');
      if(report[0] < 0) {
        started[1].count++;
      }
      else {
        started[0].count++;
      }
      if(report[1] < 0) {
        finished[1].count++;
      }
      else {
        finished[0].count++;
      }
      if(report[0] < 0 || report[1] < 0) {
        overall[1].count++;
      }
      else {
        overall[0].count++;
      }
    })
    var startedStore = this.getView().down('#cmpStartedChart').getStore();
    startedStore.removeAll();
    startedStore.add(started);

    var finishedStore = this.getView().down('#cmpFinishedChart').getStore();
    finishedStore.removeAll();
    finishedStore.add(finished);

    var overallStore = this.getView().down('#cmpOverallChart').getStore();
    overallStore.removeAll();
    overallStore.add(overall);
  }
})

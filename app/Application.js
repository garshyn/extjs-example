Ext.define('ExtJSExample.Application', {
    extend: 'Ext.app.Application',

    mainView: 'ExtJSExample.view.main.Main',

    stores: [
      'Users',
      'ActivitiesOnSchedule',
      'Activities'
    ]
});

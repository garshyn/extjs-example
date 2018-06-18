Ext.define('ExtJSExample.CsvReader', {
  extend: 'Ext.data.reader.Json',
  alias: 'reader.csv',
  getResponseData: function(response) {
    var lines = response.responseText.split("\n");
    var keys = lines[0].split(';');
    var names = Ext.Array.map(keys, function(key) {
      return key.replace(/[^a-zA-Z]/g, '').toLowerCase()
    })
    var data = [];
    for(var i = 1; i < lines.length; i++) {
      var recordData = lines[i].split(';')
      if(!recordData[0]) {
        break;
      }
      var record = { id: i };
      Ext.Array.forEach(names, function(name, index) {
        record[name] = recordData[index]
      })
      data.push(record)
    }
    return data;
  }
})

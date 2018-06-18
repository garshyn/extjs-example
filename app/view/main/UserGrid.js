Ext.define('ExtJSExample.view.main.UserGrid', {
  extend: 'Ext.grid.Panel',
  xtype: 'usergrid',
  title: 'User Grid',
  store: 'Users',
  columns: [
    {
      text: 'Name',
      dataIndex: 'name',
      width: 200,
      align: 'left'
    },
    {
      text: 'First Name',
      dataIndex: 'firstname',
      align: 'left'
    },
    {
      text: 'Last Name',
      dataIndex: 'lastname',
      align: 'left'
    },
    {
      text: 'Department',
      dataIndex: 'department',
      align: 'left'
    },
    {
      text: 'E-mail',
      dataIndex: 'email',
      width: 200,
      align: 'left'
    },
    {
      text: 'Login',
      dataIndex: 'login',
      width: 200,
      align: 'left'
    },
    {
      text: 'Status',
      dataIndex: 'status',
      align: 'left'
    }
  ]
})

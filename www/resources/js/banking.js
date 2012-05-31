Ext.application({
  name: 'Sencha',
  launch: function() {
    Ext.regModel('Account', {
       fields: ['name']
    });

    var store = new Ext.data.JsonStore({
      model: 'Account',
      sorters: 'name',
      
      data: [
        {name: 'Administration'},
        {name: 'lotswholetime'}
      ]
    });

    var list = new Ext.List({
      fullscreen : true,
      itemTpl: '<div>{name}</div>',
      store: store
    });

    var myNavBar = new Ext.Toolbar({
        docked: 'top',
        items: [
          { text: 'Edit' },
          { xtype: 'spacer' },
          { xtype: 'label', html: 'Inspire', style: 'color: #fff; font-weight: bold;' },
          { xtype: 'spacer' },
          { iconCls: 'add', iconMask: true }
        ]
    });
    list.add(myNavBar);
  }
});




Ext.define('ebmt.view.layout.Center', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.center',
    region: 'center',
    layout: 'fit',
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{

        });
        me.callParent( arguments );
    } 
});
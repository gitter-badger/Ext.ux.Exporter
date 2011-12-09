/**
 * @class Ext.ux.exporter.excelformatter.Cell
 * @extends Object
 * Represents a single cell in a worksheet
 */
Ext.define('Ext.ux.exporter.excelformatter.Cell', {

  constructor: function(config) {
    Ext.applyIf(config, {
      type: "String"
    });
    
    Ext.apply(this, config);
    this.callParent(arguments);
  },
  
  render: function() {
    return this.tpl.apply(this);
  },
  
  tpl: new Ext.XTemplate(
    '<ss:Cell ss:StyleID="{style}">',
      '<ss:Data ss:Type="{type}"><![CDATA[{value}]]></ss:Data>',
    '</ss:Cell>'
  )
});
Blockly.JavaScript['ads1115.get_volt'] = function(block) {
  var code = 'DEV_I2C0.ADS1115(0,73).get_volt(' + block.getFieldValue('AIN') + ') *500\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

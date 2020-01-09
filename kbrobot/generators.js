
Blockly.JavaScript['KBRobot_ReadDigital'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var code = 'DEV_IO.KBRobot().digitalRead('+dropdown_pin+')\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['KBRobot_servo'] = function(block) {
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'DEV_IO.KBRobot().servoSetAngle(18,'+ value_angle +');\n';
  return code;
};
Blockly.JavaScript['KBRobot_motor_forward'] = function(block) {
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = 'DEV_IO.KBRobot().motorspeed(1,1,'+ value_speed +');\n';
    code += 'DEV_IO.KBRobot().motorspeed(2,1,'+ value_speed +');\n';
    return code;
};
Blockly.JavaScript['KBRobot_motor_backward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'DEV_IO.KBRobot().motorspeed(1,2,'+ value_speed +');\n';
  code += 'DEV_IO.KBRobot().motorspeed(2,2,'+ value_speed +');\n';
  return code;
};
Blockly.JavaScript['KBRobot_motor_forward2'] = function(block) {
  var value_speedA = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speedB = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'DEV_IO.KBRobot().motorspeed(1,1,'+ value_speedA +');\n';
  code += 'DEV_IO.KBRobot().motorspeed(2,1,'+ value_speedB +');\n';
  return code;
};
Blockly.JavaScript['KBRobot_motor_backward2'] = function(block) {
  var value_speedA = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speedB = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'DEV_IO.KBRobot().motorspeed(1,2,'+ value_speedA +');\n';
  code += 'DEV_IO.KBRobot().motorspeed(2,2,'+ value_speedB +');\n';
  return code;
};
Blockly.JavaScript['KBRobot_motor_turn_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'DEV_IO.KBRobot().motorspeed(1,2,0);\n';
  code += 'DEV_IO.KBRobot().motorspeed(2,1,'+ value_speed +');\n';
  return code;
};

Blockly.JavaScript['KBRobot_motor_turn_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'DEV_IO.KBRobot().motorspeed(1,1,'+ value_speed +');\n';
  code += 'DEV_IO.KBRobot().motorspeed(2,1,0);\n';
  return code;
};

Blockly.JavaScript['KBRobot_motor_spin_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'DEV_IO.KBRobot().motorspeed(1,2,'+ value_speed +');\n';
  code += 'DEV_IO.KBRobot().motorspeed(2,1,'+ value_speed +');\n';
  return code;
};

Blockly.JavaScript['KBRobot_motor_spin_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'DEV_IO.KBRobot().motorspeed(1,1,'+ value_speed +');\n';
  code += 'DEV_IO.KBRobot().motorspeed(2,2,'+ value_speed +');\n';
  return code;
};

Blockly.JavaScript['KBRobot_motor_stop'] = function(block) { 
  var code = 'DEV_IO.KBRobot().motorspeed(1,1,0);\n';
  code += 'DEV_IO.KBRobot().motorspeed(2,2,0);\n';
  return code;
};

Blockly.JavaScript['KBRobot_motor_stop_ch'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var code = 'DEV_IO.KBRobot().motorspeed(' + dropdown_ch + ',1,0);\n';
  return code;
};
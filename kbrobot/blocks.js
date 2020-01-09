
Blockly.Blocks['KBRobot_ReadDigital'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.KBRobot_DigitalRead_MESSAGE)
        .appendField(new Blockly.FieldDropdown([["IN1","32"],["IN2","33"], ["IN3","34"], ["IN4","35"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read adc 16 bit");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['KBRobot_servo'] = {
  init: function() {
    this.appendValueInput("angle")
      .setCheck("Number")
      .appendField(Blockly.Msg.KBRobot_Servo_MOTOR_MESSAGE);
    this.appendDummyInput()
      .appendField("degree");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.KBRobot_MOTOR_Stop_MESSAGE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  }
};

Blockly.Blocks['KBRobot_motor_stop_ch'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.KBRobot_MOTOR_Stop_CH_MESSAGE)
      .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "ch")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_forward'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField(Blockly.Msg.KBRobot_MOTOR_Forward_MESSAGE);
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
    }
};
Blockly.Blocks['KBRobot_motor_backward'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField(Blockly.Msg.KBRobot_MOTOR_Backward_MESSAGE);
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_forward2'] = {
  init: function() {
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField(Blockly.Msg.KBRobot_Motor1_Move_FA_MESSAGE);
    this.appendDummyInput()
      .appendField("%");
      this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField(Blockly.Msg.KBRobot_Motor1_Move_FB_MESSAGE);
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_backward2'] = {
  init: function() {
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField(Blockly.Msg.KBRobot_Motor1_Move_BA_MESSAGE);
    this.appendDummyInput()
      .appendField("%");
      this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField(Blockly.Msg.KBRobot_Motor1_Move_BB_MESSAGE);
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_turn_left'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField(Blockly.Msg.KBRobot_MOTOR_turn_left_MESSAGE);
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_turn_right'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField(Blockly.Msg.KBRobot_MOTOR_turn_right_MESSAGE);
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_spin_left'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField(Blockly.Msg.KBRobot_MOTOR_spin_Left_MESSAGE);
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_spin_right'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField(Blockly.Msg.KBRobot_MOTOR_spin_Right_MESSAGE);
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
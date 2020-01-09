Blockly.Blocks["ads1115.get_volt"] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.ADS1115_GET_LUX_TITLE);
		// adc channel
		this.appendDummyInput()
			.appendField(' ')
			.appendField(new Blockly.FieldDropdown([
				["AIN0", "0"],
				["AIN1", "1"],
				["AIN2", "2"],
				["AIN3", "3"]
			]), 'AIN');

		this.setOutput(true, 'Number');
		this.setInputsInline(true);
		this.setPreviousStatement(false);
		this.setNextStatement(false);
		this.setColour(58);
		this.setTooltip(Blockly.Msg.ADS1115_GET_LUX_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.ADS1115_GET_LUX_HELPURL);
	}
};

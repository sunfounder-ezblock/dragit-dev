/*
  Input:
    .appendDummyInput
    .appendStatementInput
    .appendValueInput
 
  Field:
    .appendField(Blockly.Msg.MODULE_BLOCKNAME_TITLE1)
    .appendField(new Blockly.FieldTextInput("DEFAULT"), "NAME")
    .appendField(new Blockly.FieldNumber(DEFAULT, MIN, MAX), "NAME")
    .appendField(new Blockly.FieldAngle(90), "NAME")
    .appendField(new Blockly.FieldDropdown(Blockly.Constants.MODULE.XXX), "NAME")
    .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    .appendField(new Blockly.FieldVariable("item"), "NAME");
    .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"));
 
  Type:
    .setCheck(null)
    .setCheck("Boolean")
    .setCheck("Number")
    .setCheck("String")
    .setCheck("Array")
    .setCheck("CUSTOM")
    .setCheck(["Boolean", "Number"])
 
  this.setInputsInline(false);
  this.setOutput(true, TYPE);
  this.setPreviousStatement(true, TYPE);
  this.setNextStatement(true, TYPE);
  this.setColour(Blockly.Constants.MODULE.RGB);
  this.setTooltip(Blockly.Msg.MODULE_BLOCKNAME_TOOLTIP);
  this.setHelpUrl('');
 */

'use strict';
goog.provide('Blockly.Blocks.remote');  // Deprecated
goog.provide('Blockly.Constants.Remote');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.Remote.RGB = '#58ce6a';
Blockly.Blocks.remote.RGB = Blockly.Constants.Remote.RGB;

Blockly.Constants.Remote.Joystick_Coordinate = [
  ["X", "X"],
  ["Y", "Y"],
];

Blockly.Constants.Remote.Compare = [
  ["=", "=="],
  ["<", "<"],
  [">", ">"],
  ["\u2265", ">="],
  ["\u2264", "<="],
  ["\u2260", "!="],

];
Blockly.Constants.Remote.Direction = [
  ["UP", "UP"],
  ["DOWN", "DOWN"],
  ["LEFT", "LEFT"],
  ["RIGHT", "RIGHT"],
];

Blockly.Constants.Remote.JoystickID = [["0", "0"],];
Blockly.Constants.Remote.SliderID = [["0", "0"],];
Blockly.Constants.Remote.DpadID = [["0", "0"],];
Blockly.Constants.Remote.ButtonID = [["0", "0"],];
Blockly.Constants.Remote.SliderID = [["0", "0"],];

Blockly.Blocks['remote_read_from'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_READ_FROM_TITLE1);
    this.setInputsInline(true);
    this.appendStatementInput("statement");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Remote.RGB);
    this.setTooltip(Blockly.Msg.REMOTE_READ_FROM_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['remote_joystick_get_value'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_JOYSTICK_GET_VALUE_TITLE1)
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Remote.JoystickID), "id");
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_JOYSTICK_GET_VALUE_TITLE2)
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Remote.Joystick_Coordinate), "coord");
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_JOYSTICK_GET_VALUE_TITLE3);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Constants.Remote.RGB);
    this.setTooltip(Blockly.Msg.REMOTE_JOYSTICK_GET_VALUE_TOOLTIP);
    this.setHelpUrl('');
  },
  onchange: function(/* e */) {
    if (!this.workspace.isDragging || this.workspace.isDragging()) {
      return;  // Don't change state at the start of a drag.
    }
    var legal = false;
    // Is the block nested in a procedure?
    var block = this;
    do {
      if (block.type == "remote_read_from") {
        legal = true;
        break;
      }
      block = block.getSurroundParent();
    } while (block);
    if (legal) {
      if (!this.isInFlyout) {
        this.setDisabled(false);
      }
    } else {
      this.setWarningText(Blockly.Msg.REMOTE_NOT_IN_LOOP_WARNING);
      if (!this.isInFlyout) {
        this.setDisabled(true);
      }
    }
  },
};

Blockly.Blocks['remote_slider_get_value'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_SLIDER_GET_VALUE_TITLE1)
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Remote.SliderID), "id");
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_SLIDER_GET_VALUE_TITLE2);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Constants.Remote.RGB);
    this.setTooltip(Blockly.Msg.REMOTE_SLIDER_GET_VALUE_TOOLTIP);
    this.setHelpUrl('');
  },
  onchange: Blockly.Blocks['remote_joystick_get_value'],onchange,
};

Blockly.Blocks['remote_dpad_get_value'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_DPAD_GET_DIRECTION_TITLE1)
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Remote.DpadID), "id")
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_DPAD_GET_DIRECTION_TITLE2);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Remote.Direction), "direction")
      .appendField(Blockly.Msg.REMOTE_DPAD_GET_DIRECTION_TITLE3);
    this.setOutput(true, "Number");
    this.setInputsInline(true);
    this.setColour(Blockly.Constants.Remote.RGB);
    this.setTooltip(Blockly.Msg.REMOTE_DPAD_GET_DIRECTION_TOOLTIP);
    this.setHelpUrl('');
  },
  onchange: Blockly.Blocks['remote_joystick_get_value'],onchange,
};

Blockly.Blocks['remote_button_get_value'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_BUTTON_GET_VALUE_TITLE1)
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Remote.ButtonID), "id");
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_BUTTON_GET_VALUE_TITLE2);
    this.setOutput(true, "Number");
    this.setInputsInline(true);
    this.setColour(Blockly.Constants.Remote.RGB);
    this.setTooltip(Blockly.Msg.REMOTE_BUTTON_GET_VALUE_TOOLTIP);
    this.setHelpUrl('');
  },
  onchange: Blockly.Blocks['remote_joystick_get_value'],onchange,
};

Blockly.Blocks['remote_switch_get_value'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_SWITCH_GET_VALUE_TITLE1)
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Remote.SwitchID), "id");
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_SWITCH_GET_VALUE_TITLE2);
    this.setOutput(true, "Number");
    this.setInputsInline(true);
    this.setColour(Blockly.Constants.Remote.RGB);
    this.setTooltip(Blockly.Msg.REMOTE_SWITCH_GET_VALUE_TOOLTIP);
    this.setHelpUrl('');
  },
  onchange: Blockly.Blocks['remote_joystick_get_value'],onchange,
};


// Blockly.Blocks['remote_read_from_remote'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(Blockly.Msg.REMOTE_READ_FROM_REMOTE_TITLE1)
//         .appendField('', 'PARAMS');
//     this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
//     this.setColour(Blockly.Constants.Remote.RGB);
//     this.setTooltip(Blockly.Msg.REMOTE_READ_FROM_REMOTE_TOOLTIP);
//     this.setHelpUrl('');
//     this.arguments_ = [];
//     this.argumentVarModels_ = [];
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setStatements_(true);
//     this.statementConnection_ = null;
//   },
//   /**
//    * Add or remove the statement block from this function definition.
//    * @param {boolean} hasStatements True if a statement block is needed.
//    * @this Blockly.Block
//    */
//   setStatements_: function(hasStatements) {
//     if (this.hasStatements_ === hasStatements) {
//       return;
//     }
//     if (hasStatements) {
//       this.appendStatementInput('STACK')
//           .appendField(Blockly.Msg['PROCEDURES_DEFNORETURN_DO']);
//       if (this.getInput('RETURN')) {
//         this.moveInputBefore('STACK', 'RETURN');
//       }
//     } else {
//       this.removeInput('STACK', true);
//     }
//     this.hasStatements_ = hasStatements;
//   },
//   /**
//    * Update the display of parameters for this procedure definition block.
//    * Display a warning if there are duplicately named parameters.
//    * @private
//    * @this Blockly.Block
//    */
//   updateParams_: function() {
//     // Check for duplicated arguments.
//     var badArg = false;
//     var hash = {};
//     for (var i = 0; i < this.arguments_.length; i++) {
//       if (hash['arg_' + this.arguments_[i].toLowerCase()]) {
//         badArg = true;
//         break;
//       }
//       hash['arg_' + this.arguments_[i].toLowerCase()] = true;
//     }
//     if (badArg) {
//       this.setWarningText(Blockly.Msg['PROCEDURES_DEF_DUPLICATE_WARNING']);
//     } else {
//       this.setWarningText(null);
//     }
//     // Merge the arguments into a human-readable list.
//     var paramString = '';
//     if (this.arguments_.length) {
//       paramString = Blockly.Msg['PROCEDURES_BEFORE_PARAMS'] +
//           ' ' + this.arguments_.join(', ');
//     }
//     // The params field is deterministic based on the mutation,
//     // no need to fire a change event.
//     Blockly.Events.disable();
//     try {
//       this.setFieldValue(paramString, 'PARAMS');
//     } finally {
//       Blockly.Events.enable();
//     }
//   },
//   /**
//    * Create XML to represent the argument inputs.
//    * @param {boolean=} opt_paramIds If true include the IDs of the parameter
//    *     quarks.  Used by Blockly.Procedures.mutateCallers for reconnection.
//    * @return {!Element} XML storage element.
//    * @this Blockly.Block
//    */
//   mutationToDom: function(opt_paramIds) {
//     var container = document.createElement('mutation');
//     if (opt_paramIds) {
//       container.setAttribute('name', this.getFieldValue('NAME'));
//     }
//     for (var i = 0; i < this.argumentVarModels_.length; i++) {
//       var parameter = document.createElement('arg');
//       var argModel = this.argumentVarModels_[i];
//       parameter.setAttribute('name', argModel.name);
//       parameter.setAttribute('varid', argModel.getId());
//       if (opt_paramIds && this.paramIds_) {
//         parameter.setAttribute('paramId', this.paramIds_[i]);
//       }
//       container.appendChild(parameter);
//     }

//     // Save whether the statement input is visible.
//     if (!this.hasStatements_) {
//       container.setAttribute('statements', 'false');
//     }
//     return container;
//   },
//   /**
//    * Parse XML to restore the argument inputs.
//    * @param {!Element} xmlElement XML storage element.
//    * @this Blockly.Block
//    */
//   domToMutation: function(xmlElement) {
//     this.arguments_ = [];
//     this.argumentVarModels_ = [];
//     for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
//       if (childNode.nodeName.toLowerCase() == 'arg') {
//         var varName = childNode.getAttribute('name');
//         var varId = childNode.getAttribute('varid') || childNode.getAttribute('varId');
//         this.arguments_.push(varName);
//         var variable = Blockly.Variables.getOrCreateVariablePackage(
//             this.workspace, varId, varName, '');
//         if (variable != null) {
//           this.argumentVarModels_.push(variable);
//         } else {
//           console.log('Failed to create a variable with name ' + varName + ', ignoring.');
//         }
//       }
//     }
//     this.updateParams_();
//     Blockly.Procedures.mutateCallers(this);

//     // Show or hide the statement input.
//     this.setStatements_(xmlElement.getAttribute('statements') !== 'false');
//   },
//   /**
//    * Populate the mutator's dialog with this block's components.
//    * @param {!Blockly.Workspace} workspace Mutator's workspace.
//    * @return {!Blockly.Block} Root block in mutator.
//    * @this Blockly.Block
//    */
//   decompose: function(workspace) {
//     var containerBlock = workspace.newBlock('procedures_mutatorcontainer');
//     containerBlock.initSvg();

//     // Check/uncheck the allow statement box.
//     if (this.getInput('RETURN')) {
//       containerBlock.setFieldValue(
//           this.hasStatements_ ? 'TRUE' : 'FALSE', 'STATEMENTS');
//     } else {
//       containerBlock.getInput('STATEMENT_INPUT').setVisible(false);
//     }

//     // Parameter list.
//     var connection = containerBlock.getInput('STACK').connection;
//     for (var i = 0; i < this.arguments_.length; i++) {
//       var paramBlock = workspace.newBlock('procedures_mutatorarg');
//       paramBlock.initSvg();
//       paramBlock.setFieldValue(this.arguments_[i], 'NAME');
//       // Store the old location.
//       paramBlock.oldLocation = i;
//       connection.connect(paramBlock.previousConnection);
//       connection = paramBlock.nextConnection;
//     }
//     // Initialize procedure's callers with blank IDs.
//     Blockly.Procedures.mutateCallers(this);
//     return containerBlock;
//   },
//   /**
//    * Reconfigure this block based on the mutator dialog's components.
//    * @param {!Blockly.Block} containerBlock Root block in mutator.
//    * @this Blockly.Block
//    */
//   compose: function(containerBlock) {
//     // Parameter list.
//     this.arguments_ = [];
//     this.paramIds_ = [];
//     this.argumentVarModels_ = [];
//     var paramBlock = containerBlock.getInputTargetBlock('STACK');
//     while (paramBlock) {
//       var varName = paramBlock.getFieldValue('NAME');
//       this.arguments_.push(varName);
//       var variable = this.workspace.getVariable(varName, '');
//       if (variable != null) {
//         this.argumentVarModels_.push(variable);
//       } else {
//         console.log('Failed to get variable named ' + varName + ', ignoring.');
//       }

//       this.paramIds_.push(paramBlock.id);
//       paramBlock = paramBlock.nextConnection &&
//           paramBlock.nextConnection.targetBlock();
//     }
//     this.updateParams_();
//     Blockly.Procedures.mutateCallers(this);

//     // Show/hide the statement input.
//     var hasStatements = containerBlock.getFieldValue('STATEMENTS');
//     if (hasStatements !== null) {
//       hasStatements = hasStatements == 'TRUE';
//       if (this.hasStatements_ != hasStatements) {
//         if (hasStatements) {
//           this.setStatements_(true);
//           // Restore the stack, if one was saved.
//           Blockly.Mutator.reconnect(this.statementConnection_, this, 'STACK');
//           this.statementConnection_ = null;
//         } else {
//           // Save the stack, then disconnect it.
//           var stackConnection = this.getInput('STACK').connection;
//           this.statementConnection_ = stackConnection.targetConnection;
//           if (this.statementConnection_) {
//             var stackBlock = stackConnection.targetBlock();
//             stackBlock.unplug();
//             stackBlock.bumpNeighbours_();
//           }
//           this.setStatements_(false);
//         }
//       }
//     }
//   },
//   /**
//    * Return the signature of this procedure definition.
//    * @return {!Array} Tuple containing three elements:
//    *     - the name of the defined procedure,
//    *     - a list of all its arguments,
//    *     - that it DOES NOT have a return value.
//    * @this Blockly.Block
//    */
//   getProcedureDef: function() {
//     return [this.getFieldValue('NAME'), this.arguments_, false];
//   },
//   /**
//    * Return all variables referenced by this block.
//    * @return {!Array.<string>} List of variable names.
//    * @this Blockly.Block
//    */
//   getVars: function() {
//     return this.arguments_;
//   },
//   /**
//    * Return all variables referenced by this block.
//    * @return {!Array.<!Blockly.VariableModel>} List of variable models.
//    * @this Blockly.Block
//    */
//   getVarModels: function() {
//     return this.argumentVarModels_;
//   },
//   /**
//    * Notification that a variable is renaming.
//    * If the ID matches one of this block's variables, rename it.
//    * @param {string} oldId ID of variable to rename.
//    * @param {string} newId ID of new variable.  May be the same as oldId, but
//    *     with an updated name.  Guaranteed to be the same type as the old
//    *     variable.
//    * @override
//    * @this Blockly.Block
//    */
//   renameVarById: function(oldId, newId) {
//     var oldVariable = this.workspace.getVariableById(oldId);
//     if (oldVariable.type != '') {
//       // Procedure arguments always have the empty type.
//       return;
//     }
//     var oldName = oldVariable.name;
//     var newVar = this.workspace.getVariableById(newId);

//     var change = false;
//     for (var i = 0; i < this.argumentVarModels_.length; i++) {
//       if (this.argumentVarModels_[i].getId() == oldId) {
//         this.arguments_[i] = newVar.name;
//         this.argumentVarModels_[i] = newVar;
//         change = true;
//       }
//     }
//     if (change) {
//       this.displayRenamedVar_(oldName, newVar.name);
//     }
//   },
//   /**
//    * Notification that a variable is renaming but keeping the same ID.  If the
//    * variable is in use on this block, rerender to show the new name.
//    * @param {!Blockly.VariableModel} variable The variable being renamed.
//    * @package
//    * @override
//    * @this Blockly.Block
//    */
//   updateVarName: function(variable) {
//     var newName = variable.name;
//     var change = false;
//     for (var i = 0; i < this.argumentVarModels_.length; i++) {
//       if (this.argumentVarModels_[i].getId() == variable.getId()) {
//         var oldName = this.arguments_[i];
//         this.arguments_[i] = newName;
//         change = true;
//       }
//     }
//     if (change) {
//       this.displayRenamedVar_(oldName, newName);
//     }
//   },
//   /**
//    * Update the display to reflect a newly renamed argument.
//    * @param {string} oldName The old display name of the argument.
//    * @param {string} newName The new display name of the argument.
//    * @private
//    */
//   displayRenamedVar_: function(oldName, newName) {
//     this.updateParams_();
//     // Update the mutator's variables if the mutator is open.
//     if (this.mutator.isVisible()) {
//       var blocks = this.mutator.workspace_.getAllBlocks(false);
//       for (var i = 0, block; block = blocks[i]; i++) {
//         if (block.type == 'procedures_mutatorarg' &&
//             Blockly.Names.equals(oldName, block.getFieldValue('NAME'))) {
//           block.setFieldValue(newName, 'NAME');
//         }
//       }
//     }
//   },
//   /**
//    * Add custom menu options to this block's context menu.
//    * @param {!Array} options List of menu options to add to.
//    * @this Blockly.Block
//    */
//   customContextMenu: function(options) {
//     if (this.isInFlyout){
//       return;
//     }
//     // Add option to create caller.
//     var option = {enabled: true};
//     var name = this.getFieldValue('NAME');
//     option.text = Blockly.Msg['PROCEDURES_CREATE_DO'].replace('%1', name);
//     var xmlMutation = document.createElement('mutation');
//     xmlMutation.setAttribute('name', name);
//     for (var i = 0; i < this.arguments_.length; i++) {
//       var xmlArg = document.createElement('arg');
//       xmlArg.setAttribute('name', this.arguments_[i]);
//       xmlMutation.appendChild(xmlArg);
//     }
//     var xmlBlock = document.createElement('block');
//     xmlBlock.setAttribute('type', this.callType_);
//     xmlBlock.appendChild(xmlMutation);
//     option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
//     options.push(option);

//     // Add options to create getters for each parameter.
//     if (!this.isCollapsed()) {
//       for (var i = 0; i < this.argumentVarModels_.length; i++) {
//         var option = {enabled: true};
//         var argVar = this.argumentVarModels_[i];
//         var name = argVar.name;
//         option.text = Blockly.Msg['VARIABLES_SET_CREATE_GET'].replace('%1', name);

//         var xmlField = Blockly.Variables.generateVariableFieldDom(argVar);
//         var xmlBlock = document.createElement('block');
//         xmlBlock.setAttribute('type', 'variables_get');
//         xmlBlock.appendChild(xmlField);
//         option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
//         options.push(option);
//       }
//     }
//   },
//   callType_: 'procedures_callnoreturn'
// };

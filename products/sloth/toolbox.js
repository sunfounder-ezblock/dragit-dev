Sloth.toolboxText = `
<category name="%{BKY_CATSLOTH}" colour="#FFCB6A">
${RobotShield.toolboxText}
<block type="sloth_do_action">
  <value name="step">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="speed">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
   </value>
</block>
<block type="sloth_set_offset">
  <value name="right_leg_angle">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
    <value name="left_leg_angle">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="right_foot_angle">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="left_foot_angle">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
  <block type="modules_ultrasonic_get_value">
      <value name="Trig">
          <shadow type="robotshield_sensor_pin">
              <field name="pin">"A4"</field>
          </shadow>'
      </value>
      <value name="Echo">
          <shadow type="robotshield_sensor_pin">
              <field name="pin">"A5"</field>
          </shadow>'
      </value>
  </block>
</category>

`
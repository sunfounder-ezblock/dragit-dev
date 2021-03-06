RobotShield.toolboxText =
    '    <block type="robotshield_sensor_pin"></block>' +
    '    <block type="robotshield_servo_pin"></block>' +

    '    <block type="leaf_pin_set_value">' +
    '      <value name="pin">' +
    '        <shadow type="robotshield_sensor_pin">' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="value">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    '    <block type="leaf_adc_read">' +
    '      <value name="pin">' +
    '        <shadow type="robotshield_sensor_pin">' +
    '        </shadow>' +
    '      </value>' +
    '    </block>'

RobotShield.timeToolboxText = Leaf.timeToolboxText;
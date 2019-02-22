RobotShield.toolboxText =
    '  <category name="%{BKY_CATROBOTSHIELD}" colour="#3F34D1">' +
    '    <block type="robotshield_digital_pin"></block>' +
    '    <block type="robotshield_analog_pin"></block>' +
    '    <block type="robotshield_pwm_pin"></block>' +
    '    <block type="robotshield_device_pin"></block>' +

    '    <block type="raspberrypi_pin_set_value">' +
    '      <value name="pin">' +
    '        <shadow type="robotshield_digital_pin">' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="value">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    '    <block type="raspberrypi_pin_set_value">' +
    '      <value name="pin">' +
    '        <shadow type="robotshield_pwm_pin">' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="value">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    '    <block type="raspberrypi_pin_get_value">' +
    '      <value name="pin">' +
    '        <shadow type="robotshield_digital_pin">' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '    <block type="raspberrypi_pin_get_value">' +
    '      <value name="pin">' +
    '        <shadow type="robotshield_analog_pin">' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    // '    <block type="robotshield_line_follower"> ' +
    // '    <value name="line"> ' +
    // '        <shadow type="robotshield_line"> ' +
    // '        </shadow> ' +
    // '    </value> ' +
    // '    </block> ' +
    '    <block type="robotshield_ultarsonic_distance"> ' +
    '        <value name="Triq"> ' +
    '        <shadow type="raspberrypi_digital_pin"> ' +
    '        </shadow> ' +
    '        </value> ' +
    '        <value name="Echo"> ' +
    '        <shadow type="raspberrypi_digital_pin"> ' +
    '            <field name="NUM">"P1"</field> ' +
    '        </shadow> ' +
    '        </value> ' +
    '    </block> ' +
    '    <block type="robotshield_motor"> ' +
    '        <value name="speed"> ' +
    '            <shadow type="math_number"> ' +
    '                <field name="NUM">75</field> ' +
    '            </shadow> ' +
    '        </value> ' +
    '    </block> ' +

    '   <block type="robotshield_motor_direction_calibration"> ' +
    '        <value name="value"> ' +
    '        <shadow type="math_number"> ' +
    '        </shadow> ' +
    '        </value> ' +
    '    </block>' +

    '   <block type="robotshield_motor_speed_calibration"> ' +
    '       <value name="speed"> ' +
    '           <shadow type="math_number"> ' +
    '           </shadow> ' +
    '       </value> ' +
    '       <value name="value"> ' +
    '           <shadow type="math_number"> ' +
    '               <field name="NUM">0</field> ' +
    '           </shadow> ' +
    '       </value> ' +
    '   </block> ' +

    '  </category>' +
    '  <sep></sep>'
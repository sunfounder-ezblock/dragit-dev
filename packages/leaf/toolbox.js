Leaf.toolboxText =
    '<category name="%{BKY_CATLEAF}" colour="80">' +
    '  <label text="Pin"></label>' +
    '  <block type="leaf_digital_pin"></block>' +
    '  <block type="leaf_analog_pin"></block>' +
    '  <block type="leaf_device_pin"></block>' +
    '  <block type="leaf_servo_pin"></block>' +
    '  <sep></sep>' +
    '  <block type="leaf_pin_get_value">' +
    '    <value name="pin">' +
    '      <shadow type="leaf_digital_pin">' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="leaf_pin_set_value">' +
    '    <value name="pin">' +
    '      <shadow type="leaf_digital_pin">' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="value">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">0</field>' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="leaf_pin_on">' +
    '    <value name="pin">' +
    '      <shadow type="leaf_digital_pin">' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="leaf_pin_off">' +
    '    <value name="pin">' +
    '      <shadow type="leaf_digital_pin">' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="leaf_pin_irq">' +
    '    <value name="irq_pin">' +
    '      <shadow type="leaf_digital_pin">' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="irq_mode">' +
    '      <shadow type="leaf_pin_irq_trigger">' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="pin_pull">' +
    '      <shadow type="leaf_pin_pull">' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +

    '  <label text="ADC"></label>' +
    '  <block type="leaf_adc_read">' +
    '    <value name="analog_pin">' +
    '      <shadow type="leaf_analog_pin">' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +

    '  <label text="DAC"></label>' +
    '  <block type="leaf_dac_write">' +
    '    <value name="analog_pin">' +
    '      <shadow type="leaf_analog_pin">' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="analog_value">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">0</field>' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +

    '  <label text="Servo"></label>' +
    '  <block type="leaf_servo_set_angle">' +
    '    <value name="servo_pin">' +
    '      <shadow type="leaf_servo_pin">' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="angle">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">0</field>' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="time">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">0</field>' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="leaf_servo_set_speed">' +
    '    <value name="servo_pin">' +
    '      <shadow type="leaf_servo_pin">' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="speed">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">0</field>' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="time">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">0</field>' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="leaf_servo_set_calibration">' +
    '    <value name="servo_pin">' +
    '      <shadow type="leaf_servo_pin">' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="pulse_min">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">0</field>' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="pulse_max">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">0</field>' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="pulse_centre">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">0</field>' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="pulse_angle_90">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">0</field>' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="pulse_speed_100">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">0</field>' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="leaf_servo_get_angle">' +
    '    <value name="servo_pin">' +
    '      <shadow type="leaf_servo_pin">' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="leaf_servo_get_speed">' +
    '    <value name="servo_pin">' +
    '      <shadow type="leaf_servo_pin">' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="leaf_servo_get_calibration">' +
    '    <value name="servo_pin">' +
    '      <shadow type="leaf_servo_pin">' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '</category>' +

    '<category name="%{BKY_CATTIME}" colour="292">' +
    '  <block type="time_localtime">' +
    '  </block>' +
    '  <block type="time_mktime">' +
    '  </block>' +
    '  <block type="time_sleep">' +
    '    <value name="delay_secs">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">1</field>' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="time_sleep_ms">' +
    '    <value name="delay_secs">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">1000</field>' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="time_sleep_us">' +
    '    <value name="delay_secs">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">1000000</field>' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="time_ticks_ms">' +
    '  </block>' +
    '  <block type="time_ticks_us">' +
    '  </block>' +
    '  <block type="time_ticks_cpu">' +
    '  </block>' +
    '  <block type="time_ticks_add">' +
    '    <value name="ticks">' +
    '      <shadow type="time_ticks_ms">' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="delta">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">1000</field>' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="time_ticks_diff">' +
    '    <value name="ticks1">' +
    '      <shadow type="time_ticks_ms">' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="ticks2">' +
    '      <shadow type="time_ticks_ms">' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="time_time">' +
    '  </block>' +
    '</category>' +

    '<sep></sep>'
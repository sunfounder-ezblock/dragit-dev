Sloth.toolboxText = `
<category name="%{BKY_CATSLOTH}" colour="#FFCB6A">
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
</category>
`
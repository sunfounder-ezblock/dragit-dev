// This file was automatically generated.  Do not modify.

'use strict';

goog.provide('Blockly.Msg.leaf.en');

goog.require('Blockly.Msg');

MSG.catLeaf = "Leaf";
MSG.catSensorKitForLeaf = "SensorKit For Leaf";

MSG.leaf_description = "A Development board with cotex-m4 processor, and build-in bluetooth for your creative electric project.";
//#################################################
// class Pin - control I/O pins
//#################################################
  Blockly.Msg.LEAF_PIN_OUTPUT          = "input";
  Blockly.Msg.LEAF_PIN_INPUT           = "output";
  Blockly.Msg.LEAF_PIN_OPEN_DRAIN      = "open_drain";

  Blockly.Msg.LEAF_PIN_DIGITAL_PIN_TOOLTIP = "Digital pins number";

  Blockly.Msg.LEAF_PIN_ANALOG_PIN_TOOLTIP  = "Analog pin number";

  Blockly.Msg.LEAF_PIN_DEVICE_PIN_TOOLTIP  = "Build-in device";

  Blockly.Msg.LEAF_PIN_SERVO_PIN_TOOLTIP  = "Servo pin number";

  Blockly.Msg.LEAF_PIN_PULL_TITLE          = "pull up";
  Blockly.Msg.LEAF_PIN_PULL_TOOLTIP        = "Input pin pull up /down or not";

  Blockly.Msg.LEAF_PIN_IRQ_TRIGGER_TITLE   = "irq trigger";
  Blockly.Msg.LEAF_PIN_IRQ_TRIGGER_TOOLTIP = "IRQ trigger";

  Blockly.Msg.LEAF_PIN_SET_VALUE_TITLE1    = "set pin";
  Blockly.Msg.LEAF_PIN_SET_VALUE_TITLE2    = "value to";
  Blockly.Msg.LEAF_PIN_SET_VALUE_TOOLTIP   = "Set pin value to 0/1";

  Blockly.Msg.LEAF_PIN_GET_VALUE_TITLE1    = "get pin";
  Blockly.Msg.LEAF_PIN_GET_VALUE_TITLE2    = "value";
  Blockly.Msg.LEAF_PIN_GET_VALUE_TOOLTIP   = "Get pin value";

  Blockly.Msg.LEAF_PIN_ON_TITLE1    = "set pin";
  Blockly.Msg.LEAF_PIN_ON_TITLE2    = "on";
  Blockly.Msg.LEAF_PIN_ON_TOOLTIP   = "Set pin to 1 output level.";

  Blockly.Msg.LEAF_PIN_OFF_TITLE1    = "set pin";
  Blockly.Msg.LEAF_PIN_OFF_TITLE2    = "off";
  Blockly.Msg.LEAF_PIN_OFF_TOOLTIP   = "Set pin to 0 output level.";

  Blockly.Msg.LEAF_PIN_IRQ_TITLE1    = "configure an irq";
  Blockly.Msg.LEAF_PIN_IRQ_TITLE2    = "pin";
  Blockly.Msg.LEAF_PIN_IRQ_TITLE3    = "mode";
  Blockly.Msg.LEAF_PIN_IRQ_TITLE4    = "pull";
  Blockly.Msg.LEAF_PIN_IRQ_TITLE5    = "handler";
  Blockly.Msg.LEAF_PIN_IRQ_TOOLTIP   = "There are a total of 22 interrupt lines. 16 of these can come from GPIO pins and the remaining 6 are from internal sources.\n\
        Create an ExtInt object:\n\
        pin is the pin on which to enable the interrupt (can be a pin object or any valid pin name).\n\
        mode can be one of: - ExtInt.IRQ_RISING - trigger on a rising edge; - ExtInt.IRQ_FALLING - trigger on a falling edge; - ExtInt.IRQ_RISING_FALLING - trigger on a rising or falling edge.\n\
        pull can be one of: - pyb.Pin.PULL_NONE - no pull up or down resistors; - pyb.Pin.PULL_UP - enable the pull-up resistor; - pyb.Pin.PULL_DOWN - enable the pull-down resistor.\n\
        callback is the function to call when the interrupt triggers. \n\
        The callback function must accept exactly 1 argument, which is the line that triggered the interrupt.";


//#################################################
// class PWM - control pins PWM
//#################################################
  Blockly.Msg.LEAF_PWM_INIT_TITLE1    = "init pin";
  Blockly.Msg.LEAF_PWM_INIT_TITLE2    = "as pwm";
  Blockly.Msg.LEAF_PWM_INIT_TOOLTIP   = "create PWM object from a pin, PWM can be enabled on all pins except Pin(16)";

  Blockly.Msg.LEAF_PWM_DEINIT_TITLE1    = "pwm";
  Blockly.Msg.LEAF_PWM_DEINIT_TITLE2    = "deinit";
  Blockly.Msg.LEAF_PWM_DEINIT_TOOLTIP   = "turn off PWM on the pin"

  Blockly.Msg.LEAF_PWM_GET_FREQ_TITLE1    = "get pwm";
  Blockly.Msg.LEAF_PWM_GET_FREQ_TITLE2    = "freqency";
  Blockly.Msg.LEAF_PWM_GET_FREQ_TOOLTIP   = "get current frequency"

  Blockly.Msg.LEAF_PWM_SET_FREQ_TITLE1    = "set pwm";
  Blockly.Msg.LEAF_PWM_SET_FREQ_TITLE2    = "freqency";
  Blockly.Msg.LEAF_PWM_SET_FREQ_TOOLTIP   = "set frequency range between 1 and 1000 (measured in Hz)"

  Blockly.Msg.LEAF_PWM_GET_DUTY_TITLE1    = "get pwm";
  Blockly.Msg.LEAF_PWM_GET_DUTY_TITLE2    = "duty cycle";
  Blockly.Msg.LEAF_PWM_GET_DUTY_TOOLTIP   = "get current duty cycle"

  Blockly.Msg.LEAF_PWM_SET_DUTY_TITLE1    = "set pwm";
  Blockly.Msg.LEAF_PWM_SET_DUTY_TITLE2    = "duty cycle";
  Blockly.Msg.LEAF_PWM_SET_DUTY_TOOLTIP   = "set duty cycle, the duty cycle is between 0 and 1023 inclusive."


//#################################################
// class ADC - analog to digital conversion
//#################################################
  Blockly.Msg.LEAF_ADC_READ_TITLE1  = "get pin";
  Blockly.Msg.LEAF_ADC_READ_TITLE2  = "value";
  Blockly.Msg.LEAF_ADC_READ_TOOLTIP = "read analog value, return 0-4095"


//#################################################
// class DAC - digital to analog conversion
//#################################################
  Blockly.Msg.LEAF_DAC_WRITE_TITLE1 = "write analog pin";
  Blockly.Msg.LEAF_DAC_WRITE_TITLE2  = "analog_value";
  Blockly.Msg.LEAF_DAC_WRITE_TOOLTIP = "write analog value to the pin.\n\
       The DAC is used to output analog values (a specific voltage) on pin X5 or pin X6. \n\
       The voltage will be between 0 and 3.3V."


//#################################################
// class Servo  - 3-wire hobby servo driver
//#################################################
Blockly.Msg.LEAF_SERVO_GET_ANGLE_TITLE1        = "Servo pin"
Blockly.Msg.LEAF_SERVO_GET_ANGLE_TITLE2        = "angle"
Blockly.Msg.LEAF_SERVO_GET_ANGLE_TOOLTIP       = "Get the servo current angle"

Blockly.Msg.LEAF_SERVO_SET_ANGLE_TITLE1        = "Servo pin"
Blockly.Msg.LEAF_SERVO_SET_ANGLE_TITLE2        = "set angle"
Blockly.Msg.LEAF_SERVO_SET_ANGLE_TITLE3        = "time"
Blockly.Msg.LEAF_SERVO_SET_ANGLE_TOOLTIP       = "Sets the angle of the servo:\n\
     angle is the angle to move to in degrees.\n\
     time is the number of milliseconds to take to get to the specified angle. If omitted, then the servo moves as quickly as possible to its new position."

Blockly.Msg.LEAF_SERVO_GET_SPEED_TITLE1        = "Servo pin"
Blockly.Msg.LEAF_SERVO_GET_SPEED_TITLE2        = "speed"
Blockly.Msg.LEAF_SERVO_GET_SPEED_TOOLTIP       = "Get the servo current speed"

Blockly.Msg.LEAF_SERVO_SET_SPEED_TITLE1        = "Servo pin"
Blockly.Msg.LEAF_SERVO_SET_SPEED_TITLE2        = "set speed"
Blockly.Msg.LEAF_SERVO_SET_SPEED_TITLE3        = "time"
Blockly.Msg.LEAF_SERVO_SET_SPEED_TOOLTIP       = "Sets the angle of the servo:\n\
     speed is the speed to change to, between -100 and 100.\n\
     time is the number of milliseconds to take to get to the specified speed. If omitted, then the servo accelerates as quickly as possible."

Blockly.Msg.LEAF_SERVO_GET_CALIBRATION_TITLE1  = "Servo pin"
Blockly.Msg.LEAF_SERVO_GET_CALIBRATION_TITLE2  = "calibration"
Blockly.Msg.LEAF_SERVO_GET_CALIBRATION_TOOLTIP = "Get the servo current calibration"

Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE1  = "Set servo calibration"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE2  = "pin"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE3  = "pulse_min"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE4  = "pulse_max"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE5  = "pulse_centre"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE6  = "pulse_angle_90"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE7  = "pulse_speed_100"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TOOLTIP = "Sets the angle of the servo:\n\
      pulse_min is the minimum allowed pulse width.\n\
      pulse_max is the maximum allowed pulse width.\n\
      pulse_centre is the pulse width corresponding to the centre/zero position.\n\
      pulse_angle_90 is the pulse width corresponding to 90 degrees.\n\
      pulse_speed_100 is the pulse width corresponding to a speed of 100."


//#################################################
// class SPI - real time clock
//#################################################
  Blockly.Msg.LEAF_SPI_MSB_TITLE    = "SPI MSB";
  Blockly.Msg.LEAF_SPI_MSB_TOOLTIP  = "Set the first bit to be the most significant bit"

  Blockly.Msg.LEAF_SPI_INIT_TITLE1  = "spi init";
  Blockly.Msg.LEAF_SPI_INIT_TITLE2  = "baudrate";
  Blockly.Msg.LEAF_SPI_INIT_TITLE3  = "polarity";
  Blockly.Msg.LEAF_SPI_INIT_TITLE4  = "phase";
  Blockly.Msg.LEAF_SPI_INIT_TOOLTIP = "The hardware SPI is faster (up to 80Mhz),\
                      but only works on following pins: \
                      MISO is GPIO12, MOSI is GPIO13, and SCK is GPIO14."

  Blockly.Msg.LEAF_SPI_DEINIT_TITLE  = "spi deinit";
  Blockly.Msg.LEAF_SPI_DEINIT_TOOLTIP = "Turn off the SPI bus."

  Blockly.Msg.LEAF_SPI_READ_TITLE1  = "spi read";
  Blockly.Msg.LEAF_SPI_READ_TITLE2  = "bytes";
  Blockly.Msg.LEAF_SPI_READ_TOOLTIP = "Read a number of bytes specified by nbytes while continuously writing the single byte given by write. \n\
          Returns a bytes object with the data that was read."

  Blockly.Msg.LEAF_SPI_READINTO_TITLE   = "spi read into buffer";
  Blockly.Msg.LEAF_SPI_READINTO_TOOLTIP = "Read into the buffer specified by buf while \
          continuously writing the single byte given by write. Returns None."

  Blockly.Msg.LEAF_SPI_WRITE_TITLE   = "spi write words";
  Blockly.Msg.LEAF_SPI_WRITE_TOOLTIP = "Write the bytes contained in buf. Returns None."

  Blockly.Msg.LEAF_SPI_WRITE_READINTO_TITLE1  = "spi write then read into";
  Blockly.Msg.LEAF_SPI_WRITE_READINTO_TITLE2  = "write buf";
  Blockly.Msg.LEAF_SPI_WRITE_READINTO_TITLE3  = "read buf";
  Blockly.Msg.LEAF_SPI_WRITE_READINTO_TOOLTIP = "Write the bytes contained in buf. Returns None."


//#################################################
// class I2C - a two-wire serial protocol
//#################################################
  Blockly.Msg.LEAF_I2C_INIT_TITLE1  = "i2c init";
  Blockly.Msg.LEAF_I2C_INIT_TITLE2  = "freq";
  Blockly.Msg.LEAF_I2C_INIT_TOOLTIP = "create I2C peripheral at frequency of 400kHz\
                       depending on the port scl=Pin(5),sda=Pin(4)"

  Blockly.Msg.LEAF_I2C_SCAN_TITLE  = "i2c scan";
  Blockly.Msg.LEAF_I2C_SCAN_TOOLTIP = "scan i2c bus for slave addr";

  Blockly.Msg.LEAF_I2C_START_TITLE  = "i2c start";
  Blockly.Msg.LEAF_I2C_START_TOOLTIP = "Generate a START condition on the bus (SDA transitions to low while SCL is high).\n\
          Availability: ESP8266.";

  Blockly.Msg.LEAF_I2C_STOP_TITLE  = "i2c stop";
  Blockly.Msg.LEAF_I2C_STOP_TOOLTIP = "Generate a STOP condition on the bus (SDA transitions to high while SCL is high).\n\
          Availability: ESP8266.";

  Blockly.Msg.LEAF_I2C_READ_FROM_TITLE1  = "i2c read";
  Blockly.Msg.LEAF_I2C_READ_FROM_TITLE2  = "bytes from addr";
  Blockly.Msg.LEAF_I2C_READ_FROM_TOOLTIP = "read n bytes from slave device with address 0xAA"

  Blockly.Msg.LEAF_I2C_WRITE_TO_TITLE1  = "i2c write words";
  Blockly.Msg.LEAF_I2C_WRITE_TO_TITLE2  = "to addr";
  Blockly.Msg.LEAF_I2C_WRITE_TO_TOOLTIP = "write 'N' to slave device with address 0xAA";

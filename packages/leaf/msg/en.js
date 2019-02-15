Local['en'].MSG.catLeaf = "Leaf";
Local['en'].MSG.catSensorKitForLeaf = "SensorKit For Leaf";

Local['en'].MSG.leaf_description = "A Development board with cotex-m4 processor, and build-in bluetooth for your creative electric project.";
//#################################################
// class Pin - control I/O pins
//#################################################
Local['en'].LEAF_PIN_OUTPUT          = "input";
Local['en'].LEAF_PIN_INPUT           = "output";
Local['en'].LEAF_PIN_OPEN_DRAIN      = "open_drain";

Local['en'].LEAF_PIN_DIGITAL_PIN_TOOLTIP = "Digital pins number";

Local['en'].LEAF_PIN_ANALOG_PIN_TOOLTIP  = "Analog pin number";

Local['en'].LEAF_PIN_DEVICE_PIN_TOOLTIP  = "Build-in device";

Local['en'].LEAF_PIN_SERVO_PIN_TOOLTIP  = "Servo pin number";

Local['en'].LEAF_PIN_PULL_TITLE          = "pull up";
Local['en'].LEAF_PIN_PULL_TOOLTIP        = "Input pin pull up /down or not";

Local['en'].LEAF_PIN_IRQ_TRIGGER_TITLE   = "irq trigger";
Local['en'].LEAF_PIN_IRQ_TRIGGER_TOOLTIP = "IRQ trigger";

Local['en'].LEAF_PIN_SET_VALUE_TITLE1    = "set pin";
Local['en'].LEAF_PIN_SET_VALUE_TITLE2    = "value to";
Local['en'].LEAF_PIN_SET_VALUE_TOOLTIP   = "Set pin value to 0/1";

Local['en'].LEAF_PIN_GET_VALUE_TITLE1    = "get pin";
Local['en'].LEAF_PIN_GET_VALUE_TITLE2    = "value";
Local['en'].LEAF_PIN_GET_VALUE_TOOLTIP   = "Get pin value";

Local['en'].LEAF_PIN_ON_TITLE1    = "set pin";
Local['en'].LEAF_PIN_ON_TITLE2    = "on";
Local['en'].LEAF_PIN_ON_TOOLTIP   = "Set pin to 1 output level.";

Local['en'].LEAF_PIN_OFF_TITLE1    = "set pin";
Local['en'].LEAF_PIN_OFF_TITLE2    = "off";
Local['en'].LEAF_PIN_OFF_TOOLTIP   = "Set pin to 0 output level.";

Local['en'].LEAF_PIN_IRQ_TITLE1    = "configure an irq";
Local['en'].LEAF_PIN_IRQ_TITLE2    = "pin";
Local['en'].LEAF_PIN_IRQ_TITLE3    = "mode";
Local['en'].LEAF_PIN_IRQ_TITLE4    = "pull";
Local['en'].LEAF_PIN_IRQ_TITLE5    = "handler";
Local['en'].LEAF_PIN_IRQ_TOOLTIP   = "There are a total of 22 interrupt lines. 16 of these can come from GPIO pins and the remaining 6 are from internal sources.\n\
        Create an ExtInt object:\n\
        pin is the pin on which to enable the interrupt (can be a pin object or any valid pin name).\n\
        mode can be one of: - ExtInt.IRQ_RISING - trigger on a rising edge; - ExtInt.IRQ_FALLING - trigger on a falling edge; - ExtInt.IRQ_RISING_FALLING - trigger on a rising or falling edge.\n\
        pull can be one of: - pyb.Pin.PULL_NONE - no pull up or down resistors; - pyb.Pin.PULL_UP - enable the pull-up resistor; - pyb.Pin.PULL_DOWN - enable the pull-down resistor.\n\
        callback is the function to call when the interrupt triggers. \n\
        The callback function must accept exactly 1 argument, which is the line that triggered the interrupt.";


//#################################################
// class PWM - control pins PWM
//#################################################
Local['en'].LEAF_PWM_PIN_TITLE = "PWM"
Local['en'].LEAF_PWM_PIN_TOOLTIP = "PWM pin number";
// Local['en'].LEAF_PWM_INIT_TITLE1    = "init pin";
// Local['en'].LEAF_PWM_INIT_TITLE2    = "as pwm";
// Local['en'].LEAF_PWM_INIT_TOOLTIP   = "create PWM object from a pin, PWM can be enabled on all pins except Pin(16)";

// Local['en'].LEAF_PWM_DEINIT_TITLE1    = "pwm";
// Local['en'].LEAF_PWM_DEINIT_TITLE2    = "deinit";
// Local['en'].LEAF_PWM_DEINIT_TOOLTIP   = "turn off PWM on the pin"

// Local['en'].LEAF_PWM_GET_FREQ_TITLE1    = "get pwm";
// Local['en'].LEAF_PWM_GET_FREQ_TITLE2    = "freqency";
// Local['en'].LEAF_PWM_GET_FREQ_TOOLTIP   = "get current frequency"

// Local['en'].LEAF_PWM_SET_FREQ_TITLE1    = "set pwm";
// Local['en'].LEAF_PWM_SET_FREQ_TITLE2    = "freqency";
// Local['en'].LEAF_PWM_SET_FREQ_TOOLTIP   = "set frequency range between 1 and 1000 (measured in Hz)"

// Local['en'].LEAF_PWM_GET_DUTY_TITLE1    = "get pwm";
// Local['en'].LEAF_PWM_GET_DUTY_TITLE2    = "duty cycle";
// Local['en'].LEAF_PWM_GET_DUTY_TOOLTIP   = "get current duty cycle"

// Local['en'].LEAF_PWM_SET_DUTY_TITLE1    = "set pwm";
// Local['en'].LEAF_PWM_SET_DUTY_TITLE2    = "duty cycle";
// Local['en'].LEAF_PWM_SET_DUTY_TOOLTIP   = "set duty cycle, the duty cycle is between 0 and 1023 inclusive."


//#################################################
// class ADC - analog to digital conversion
//#################################################
Local['en'].LEAF_ADC_READ_TITLE1  = "get pin";
Local['en'].LEAF_ADC_READ_TITLE2  = "value";
Local['en'].LEAF_ADC_READ_TOOLTIP = "read analog value, return 0-4095"


//#################################################
// class DAC - digital to analog conversion
//#################################################
Local['en'].LEAF_DAC_WRITE_TITLE1 = "write analog pin";
Local['en'].LEAF_DAC_WRITE_TITLE2  = "analog_value";
Local['en'].LEAF_DAC_WRITE_TOOLTIP = "write analog value to the pin.\n\
       The DAC is used to output analog values (a specific voltage) on pin X5 or pin X6. \n\
       The voltage will be between 0 and 3.3V."


//#################################################
// class Servo  - 3-wire hobby servo driver
//#################################################
Local['en'].LEAF_SERVO_GET_ANGLE_TITLE1        = "Servo pin"
Local['en'].LEAF_SERVO_GET_ANGLE_TITLE2        = "angle"
Local['en'].LEAF_SERVO_GET_ANGLE_TOOLTIP       = "Get the servo current angle"

Local['en'].LEAF_SERVO_SET_ANGLE_TITLE1        = "Servo pin"
Local['en'].LEAF_SERVO_SET_ANGLE_TITLE2        = "set angle"
Local['en'].LEAF_SERVO_SET_ANGLE_TITLE3        = "time"
Local['en'].LEAF_SERVO_SET_ANGLE_TOOLTIP       = "Sets the angle of the servo:\n\
     angle is the angle to move to in degrees.\n\
     time is the number of milliseconds to take to get to the specified angle. If omitted, then the servo moves as quickly as possible to its new position."

Local['en'].LEAF_SERVO_GET_SPEED_TITLE1        = "Servo pin"
Local['en'].LEAF_SERVO_GET_SPEED_TITLE2        = "speed"
Local['en'].LEAF_SERVO_GET_SPEED_TOOLTIP       = "Get the servo current speed"

Local['en'].LEAF_SERVO_SET_SPEED_TITLE1        = "Servo pin"
Local['en'].LEAF_SERVO_SET_SPEED_TITLE2        = "set speed"
Local['en'].LEAF_SERVO_SET_SPEED_TITLE3        = "time"
Local['en'].LEAF_SERVO_SET_SPEED_TOOLTIP       = "Sets the angle of the servo:\n\
     speed is the speed to change to, between -100 and 100.\n\
     time is the number of milliseconds to take to get to the specified speed. If omitted, then the servo accelerates as quickly as possible."

Local['en'].LEAF_SERVO_GET_CALIBRATION_TITLE1  = "Servo pin"
Local['en'].LEAF_SERVO_GET_CALIBRATION_TITLE2  = "calibration"
Local['en'].LEAF_SERVO_GET_CALIBRATION_TOOLTIP = "Get the servo current calibration"

Local['en'].LEAF_SERVO_SET_CALIBRATION_TITLE1  = "Set servo calibration"
Local['en'].LEAF_SERVO_SET_CALIBRATION_TITLE2  = "pin"
Local['en'].LEAF_SERVO_SET_CALIBRATION_TITLE3  = "pulse_min"
Local['en'].LEAF_SERVO_SET_CALIBRATION_TITLE4  = "pulse_max"
Local['en'].LEAF_SERVO_SET_CALIBRATION_TITLE5  = "pulse_centre"
Local['en'].LEAF_SERVO_SET_CALIBRATION_TITLE6  = "pulse_angle_90"
Local['en'].LEAF_SERVO_SET_CALIBRATION_TITLE7  = "pulse_speed_100"
Local['en'].LEAF_SERVO_SET_CALIBRATION_TOOLTIP = "Sets the angle of the servo:\n\
      pulse_min is the minimum allowed pulse width.\n\
      pulse_max is the maximum allowed pulse width.\n\
      pulse_centre is the pulse width corresponding to the centre/zero position.\n\
      pulse_angle_90 is the pulse width corresponding to 90 degrees.\n\
      pulse_speed_100 is the pulse width corresponding to a speed of 100."


//#################################################
// class SPI - real time clock
//#################################################
Local['en'].LEAF_SPI_MSB_TITLE    = "SPI MSB";
Local['en'].LEAF_SPI_MSB_TOOLTIP  = "Set the first bit to be the most significant bit"

Local['en'].LEAF_SPI_INIT_TITLE1  = "spi init";
Local['en'].LEAF_SPI_INIT_TITLE2  = "baudrate";
Local['en'].LEAF_SPI_INIT_TITLE3  = "polarity";
Local['en'].LEAF_SPI_INIT_TITLE4  = "phase";
Local['en'].LEAF_SPI_INIT_TOOLTIP = "The hardware SPI is faster (up to 80Mhz),\
                      but only works on following pins: \
                      MISO is GPIO12, MOSI is GPIO13, and SCK is GPIO14."

Local['en'].LEAF_SPI_DEINIT_TITLE  = "spi deinit";
Local['en'].LEAF_SPI_DEINIT_TOOLTIP = "Turn off the SPI bus."

Local['en'].LEAF_SPI_READ_TITLE1  = "spi read";
Local['en'].LEAF_SPI_READ_TITLE2  = "bytes";
Local['en'].LEAF_SPI_READ_TOOLTIP = "Read a number of bytes specified by nbytes while continuously writing the single byte given by write. \n\
          Returns a bytes object with the data that was read."

Local['en'].LEAF_SPI_READINTO_TITLE   = "spi read into buffer";
Local['en'].LEAF_SPI_READINTO_TOOLTIP = "Read into the buffer specified by buf while \
          continuously writing the single byte given by write. Returns None."

Local['en'].LEAF_SPI_WRITE_TITLE   = "spi write words";
Local['en'].LEAF_SPI_WRITE_TOOLTIP = "Write the bytes contained in buf. Returns None."

Local['en'].LEAF_SPI_WRITE_READINTO_TITLE1  = "spi write then read into";
Local['en'].LEAF_SPI_WRITE_READINTO_TITLE2  = "write buf";
Local['en'].LEAF_SPI_WRITE_READINTO_TITLE3  = "read buf";
Local['en'].LEAF_SPI_WRITE_READINTO_TOOLTIP = "Write the bytes contained in buf. Returns None."


//#################################################
// class I2C - a two-wire serial protocol
//#################################################
Local['en'].LEAF_I2C_INIT_TITLE1  = "i2c init";
Local['en'].LEAF_I2C_INIT_TITLE2  = "freq";
Local['en'].LEAF_I2C_INIT_TOOLTIP = "create I2C peripheral at frequency of 400kHz\
                       depending on the port scl=Pin(5),sda=Pin(4)"

Local['en'].LEAF_I2C_SCAN_TITLE  = "i2c scan";
Local['en'].LEAF_I2C_SCAN_TOOLTIP = "scan i2c bus for slave addr";

Local['en'].LEAF_I2C_START_TITLE  = "i2c start";
Local['en'].LEAF_I2C_START_TOOLTIP = "Generate a START condition on the bus (SDA transitions to low while SCL is high).\n\
          Availability: ESP8266.";

Local['en'].LEAF_I2C_STOP_TITLE  = "i2c stop";
Local['en'].LEAF_I2C_STOP_TOOLTIP = "Generate a STOP condition on the bus (SDA transitions to high while SCL is high).\n\
          Availability: ESP8266.";

Local['en'].LEAF_I2C_READ_FROM_TITLE1  = "i2c read";
Local['en'].LEAF_I2C_READ_FROM_TITLE2  = "bytes from addr";
Local['en'].LEAF_I2C_READ_FROM_TOOLTIP = "read n bytes from slave device with address 0xAA"

Local['en'].LEAF_I2C_WRITE_TO_TITLE1  = "i2c write words";
Local['en'].LEAF_I2C_WRITE_TO_TITLE2  = "to addr";
Local['en'].LEAF_I2C_WRITE_TO_TOOLTIP = "write 'N' to slave device with address 0xAA";

Local['en'].LEAF_PWM_PULSE_WIDTH_TITLE1 = "PWM set";
Local['en'].LEAF_PWM_PULSE_WIDTH_TITLE2 = "pulse width to";
Local['en'].LEAF_PWM_PULSE_WIDTH_TOOLTIP = "Set PWM pulse width value(0 ~ 4095).";


Local['en'].LEAF_PWM_PULSE_WIDTH_PRECENTAGE_TITLE1 = "PWM set";
Local['en'].LEAF_PWM_PULSE_WIDTH_PRECENTAGE_TITLE2 = "pulse width to";
Local['en'].LEAF_PWM_PULSE_WIDTH_PRECENTAGE_TITLE3 = "%";
Local['en'].LEAF_PWM_PULSE_WIDTH_PRECENTAGE_TOOLTIP = "Set PWM pulse width precentage(0% ~ 100%).";

Local['en'].LEAF_PWM_FREQ_TITLE1 = "PWM set";
Local['en'].LEAF_PWM_FREQ_TITLE2 = "frequency to";
Local['en'].LEAF_PWM_FREQ_TOOLTIP = "Set PWM frequency value(HZ,0 < HZ).";

Local['en'].LEAF_PWM_PRESCALER_TITLE1 = "PWM set";
Local['en'].LEAF_PWM_PRESCALER_TITLE2 = "prescaler to";
Local['en'].LEAF_PWM_PRESCALER_TOOLTIP = "Set PWM prescaler value.";

Local['en'].LEAF_PWM_PERIOD_TITLE1 = "PWM set";
Local['en'].LEAF_PWM_PERIOD_TITLE2 = "period to";
Local['en'].LEAF_PWM_PERIOD_TOOLTIP = "Set PWM period value(0 ~ 4095).";
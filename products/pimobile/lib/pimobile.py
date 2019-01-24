# from pwm import PWM
# from adc import ADC
# from pin import Pin
from raspberrypi import PWM,  ADC, Pin
import time

PERIOD = 4095
PRESCALER = 10
TIMEOUT = 0.02

motor1_pwm_pin = PWM(4)
motor2_pwm_pin = PWM(5)
motor1_dir_pin = Pin(23)
motor2_dir_pin = Pin(24)

motor_direction_pins = [motor1_dir_pin, motor2_dir_pin]
motor_speed_pins = [motor1_pwm_pin, motor2_pwm_pin]
cali_dir_value = [1, -1]
cali_speed_value = [0, 0]

for pin in motor_speed_pins:
    pin.period(PERIOD)
    pin.prescaler(PRESCALER)

def get_distance(trig=17, echo=18):
    trig = Pin(trig)
    echo = Pin(echo)
    trig.low()
    time.sleep(0.01)
    trig.high()
    time.sleep(0.00001)
    trig.low()
    pulse_end = 0
    timeout_start = time.time()
    while echo.value()==0:
        pluse_start = time.time()
        if pluse_start - timeout_start > TIMEOUT:
            return -1
    while echo.value()==1:
        pulse_end = time.time()
        if pulse_end - timeout_start > TIMEOUT:
            return -1

    during = pulse_end - pluse_start
    return during * 340 /2 *100

# def get_line_value(chn):
#     chn = ADC(chn)
#     return chn.read()

def is_black(chn, references=300):
    if get_line_value(chn) < references:
        return True
    else:
        return False

def set_motor_speed(motor, speed):
    motor -= 1
    if speed >= 0:
        direction = 1 * cali_dir_value[motor]
    elif speed < 0:
        direction = -1 * cali_dir_value[motor]
    speed = abs(speed)
    if speed != 0:
        speed = int(speed / 100.0 *2048 ) + 2048
    speed = speed - cali_speed_value[motor]
    if direction < 0:
        motor_direction_pins[motor].high()
        motor_speed_pins[motor].pulse_width(speed)
    else:
        motor_direction_pins[motor].low()
        motor_speed_pins[motor].pulse_width(speed)

def motor_speed_calibration(value):
    global cali_speed_value
    if value < 0:
        cali_speed_value[0] = 0
        cali_speed_value[1] = abs(value)
    else:
        cali_speed_value[0] = abs(value)
        cali_speed_value[1] = 0

def motor_direction_calibration(motor, value):
    # 0: positive direction
    # 1: negative direction
    motor -= 1
    if value == 1:
    cali_dir_value[motor] = -cali_dir_value[motor]

#  def test():
     
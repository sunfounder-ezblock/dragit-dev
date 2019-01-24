# from pwm import PWM
# from adc import ADC
# from pin import Pin
from raspberrypi import PWM， ADC, Pin
import time

PERIOD = 4095
PRESCALER = 10
TIMEOUT = 0.02

motor1_speed = PWM(4)
motor2_speed = PWM(5)
motor1_direction = Pin(23)
motor2_direction = Pin(24)
# next time use
# forward_pins = [PWM(6), PWM(5)]
# backward_pins = [PWM(7), PWM(4)]

motor_directions = [1, -1]
motor_direction_pins = [motor1_direction, motor2_direction]
motors_speed_pins = [motor1_speed, motor2_speed]

for pin in all_motors:
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

def get_line_value(chn):
    chn = ADC(chn)
    return chn.read()

def is_black(chn, references=300):
    if get_line_value(chn) < references:
        return True
    else:
        return False

# def set_motor_speed(motor, speed, value=0):
#     motor -= 1
#     if speed > 0:
#         direction = 1
#     else:
#         direction = 0
#     speed = abs(speed)
#     speed = speed / 4095 * 100
#     if direction > 0:
#         all_motors_direction[motor].high()
#         all_motors[motor].pulse_width(speed)
#     else:
        
#         all_motors_direction[motor].low()
#         all_motors[motor].pulse_width(speed)

def set_motor_speed(motor, speed):
    value = Motor_speed_calibration()
    motor -= 1
    if speed >= 0:
        direction = 1 * motor_directions[motor]
    elif speed < 0:
        direction = -1 * motor_directions[motor]
    speed = abs(speed)
    if value >= 0 and motor == 1:
        speed = speed - value
    elif value < 0 and motor ==0:
        speed = speed - abs(value)
    if speed != 0:
        speed = int(speed / 100.0 *2048 ) + 2048
    if direction < 0:
        motor_direction_pins[motor].high()
        motors_speed_pins[motor].pulse_width(speed)
    else:
        motor_direction_pins[motor].low()
        motors_speed_pins[motor].pulse_width(speed)

def Motor_speed_calibration(value=0):
    motor_direction_pins[0].high()
    motors_speed_pins[0].pulse_width(speed)
    
    motor_direction_pins[1].low()
    motors_speed_pins[1].pulse_width(speed)
    return value

def Motor_direction_calibration():
    motor_direction_pins[0].high()
    motors_speed_pins[0].pulse_width(3500)
    
    motor_direction_pins[1].low()
    motors_speed_pins[1].pulse_width(3500)

def test_all(value, dir):
    set_motor_speed(1, 0, 1)
    set_motor_speed(2, 0, 1)
    while True:
        # value = input("input speed: ")
        try:
            value = int(value)
            set_motor_speed(2, value, dir)
            set_motor_speed(1, value, -dir)
        except Exception as e:
            print(e)
        # set_motor_speed(2, value)

 
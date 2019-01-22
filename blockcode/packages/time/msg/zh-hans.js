
'use strict';

goog.provide('Blockly.Msg.time.zh-hans');

goog.require('Blockly.Msg');

MSG.catTime = "时间";
//#################################################
// class time - time related functions
//#################################################
Blockly.Msg.TIME_LOCALTIME_TITLE1 = "转化秒"
Blockly.Msg.TIME_LOCALTIME_TITLE2 = "为本地时间"
Blockly.Msg.TIME_LOCALTIME_TOOLTIP = "Convert a time expressed in seconds since the Epoch (see above) into \
      an 8-tuple which contains: (year, month, mday, hour, minute, second, weekday, yearday) \n\
      If secs is not provided or None, then the current time from the RTC is used. \n\
      year includes the century (for example 2014). \n\
      month is 1-12 \n\
      mday is 1-31 \n\
      hour is 0-23 \n\
      minute is 0-59 \n\
      second is 0-59 \n\
      weekday is 0-6 for Mon-Sun \n\
      yearday is 1-366"

Blockly.Msg.TIME_MKTIME_TITLE1 = "转化本地时间"
Blockly.Msg.TIME_MKTIME_TITLE2 = "为秒"
Blockly.Msg.TIME_MKTIME_TOOLTIP = "This is inverse function of localtime. \
      It’s argument is a full 8-tuple which expresses a time as per localtime. \
      It returns an integer which is the number of seconds since Jan 1, 2000. \n\
      year includes the century (for example 2014). \n\
      month is 1-12 \n\
      mday is 1-31 \n\
      hour is 0-23 \n\
      minute is 0-59 \n\
      second is 0-59 \n\
      weekday is 0-6 for Mon-Sun \n\
      yearday is 1-366"

Blockly.Msg.TIME_SLEEP_TITLE1 = "睡眠"
Blockly.Msg.TIME_SLEEP_TITLE2 = "秒"
Blockly.Msg.TIME_SLEEP_TOOLTIP = "Sleep for the given number of seconds. \
      Some boards may accept seconds as a floating-point number to sleep for a fractional number of seconds. \
      Note that other boards may not accept a floating-point argument, for compatibility with them use sleep_ms() and sleep_us() functions."

Blockly.Msg.TIME_SLEEP_MS_TITLE1 = "睡眠"
Blockly.Msg.TIME_SLEEP_MS_TITLE2 = "毫秒"
Blockly.Msg.TIME_SLEEP_MS_TOOLTIP = "Delay for given number of milliseconds, should be positive or 0."

Blockly.Msg.TIME_SLEEP_US_TITLE1 = "睡眠"
Blockly.Msg.TIME_SLEEP_US_TITLE2 = "微秒"
Blockly.Msg.TIME_SLEEP_US_TOOLTIP = "Delay for given number of microseconds, should be positive or 0."

Blockly.Msg.TIME_TICKS_MS_TITLE = "ticks ms (milliseconds)"
Blockly.Msg.TIME_TICKS_MS_TOOLTIP = "Returns an increasing millisecond counter with an arbitrary reference point, \
      that wraps around after some value.\n\
      The wrap-around value is not explicitly exposed, but we will refer to it as TICKS_MAX to simplify discussion. \
      Period of the values is TICKS_PERIOD = TICKS_MAX + 1. \
      TICKS_PERIOD is guaranteed to be a power of two, but otherwise may differ from port to port. \
      The same period value is used for all of ticks_ms(), ticks_us(), ticks_cpu() functions (for simplicity). \
      Thus, these functions will return a value in range [0 .. TICKS_MAX], inclusive, total TICKS_PERIOD values. \
      Note that only non-negative values are used. \
      For the most part, you should treat values returned by these functions as opaque. \
      The only operations available for them are ticks_diff() and ticks_add() functions described below.\
      Note: Performing standard mathematical operations (+, -) or relational operators (<, <=, >, >=) \
      directly on these value will lead to invalid result. \
      Performing mathematical operations and then passing their results as arguments to ticks_diff() or ticks_add() will also lead to invalid results from the latter functions."

Blockly.Msg.TIME_TICKS_US_TITLE = "ticks us (microseconds)"
Blockly.Msg.TIME_TICKS_US_TOOLTIP = "Returns an increasing microsecond counter with an arbitrary reference point, \
      that wraps around after some value.\n\
      The wrap-around value is not explicitly exposed, but we will refer to it as TICKS_MAX to simplify discussion. \
      Period of the values is TICKS_PERIOD = TICKS_MAX + 1. \
      TICKS_PERIOD is guaranteed to be a power of two, but otherwise may differ from port to port. \
      The same period value is used for all of ticks_ms(), ticks_us(), ticks_cpu() functions (for simplicity). \
      Thus, these functions will return a value in range [0 .. TICKS_MAX], inclusive, total TICKS_PERIOD values. \
      Note that only non-negative values are used. \
      For the most part, you should treat values returned by these functions as opaque. \
      The only operations available for them are ticks_diff() and ticks_add() functions described below.\
      Note: Performing standard mathematical operations (+, -) or relational operators (<, <=, >, >=) \
      directly on these value will lead to invalid result. \
      Performing mathematical operations and then passing their results as arguments to ticks_diff() or ticks_add() will also lead to invalid results from the latter functions."

Blockly.Msg.TIME_TICKS_CPU_TITLE = "ticks CPU "
Blockly.Msg.TIME_TICKS_CPU_TOOLTIP = "Similar to ticks_ms() and ticks_us(), but with the highest possible resolution in the system. \
      This is usually CPU clocks, and that’s why the function is named that way. \
      But it doesn’t have to be a CPU clock, some other timing source available in a system (e.g. high-resolution timer) can be used instead. \
      The exact timing unit (resolution) of this function is not specified on time module level, but documentation for a specific port may provide more specific information. \
      This function is intended for very fine benchmarking or very tight real-time loops. \
      Avoid using it in portable code.\n\
      Availability: Not every port implements this function."

Blockly.Msg.TIME_TICKS_ADD_TITLE1 = "add a ticks"
Blockly.Msg.TIME_TICKS_ADD_TITLE2 = "with delta"
Blockly.Msg.TIME_TICKS_ADD_TOOLTIP = "Offset ticks value by a given number, which can be either positive or negative. \
      Given a ticks value, this function allows to calculate ticks value delta ticks before or after it, \
      following modular-arithmetic definition of tick values (see ticks_ms() above). \
      ticks parameter must be a direct result of call to ticks_ms(), ticks_us(), or ticks_cpu() functions (or from previous call to ticks_add()). \
      However, delta can be an arbitrary integer number or numeric expression. ticks_add() is useful for calculating deadlines for events/tasks. \
      (Note: you must use ticks_diff() function to work with deadlines.)"

Blockly.Msg.TIME_TICKS_DIFF_TITLE1 = "ticks diff between"
Blockly.Msg.TIME_TICKS_DIFF_TITLE2 = "和"
Blockly.Msg.TIME_TICKS_DIFF_TOOLTIP = "Measure ticks difference between values returned from ticks_ms(), ticks_us(), or ticks_cpu() functions, \
      as a signed value which may wrap around."

Blockly.Msg.TIME_TIME_TITLE = "时间"
Blockly.Msg.TIME_TIME_TOOLTIP = "Returns the number of seconds, as an integer, since the Epoch, assuming that underlying RTC is set and maintained as described above. \
      If an RTC is not set, this function returns number of seconds since a port-specific reference point in time (for embedded boards without a battery-backed RTC, usually since power up or reset). \
      If you want to develop portable MicroPython application, you should not rely on this function to provide higher than second precision. \
      If you need higher precision, use ticks_ms() and ticks_us() functions, if you need calendar time, localtime() without an argument is a better choice."

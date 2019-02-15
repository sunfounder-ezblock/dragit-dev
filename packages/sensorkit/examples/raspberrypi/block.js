RaspberryPi.examplesHasKit.block = {}

RaspberryPi.examplesHasKit.block['Blink LED'] = {
    "name": 'Blink LEDxxxxxxx',
    "project": {
        code: {
            code: "<xml xmlns='http://www.w3.org/1999/xhtml'><block type='basic_start' id='qrswBI$2J**dCagSbF$0' x='-230' y='-290'></block><block type='basic_forever' id='(.X9-M;L7,PGS[je0yNt' x='-190' y='-170'><statement name='statement'><block type='controls_repeat_ext' id='pI6q7blNr1(Qw#)+:Ch}'><value name='TIMES'><shadow type='math_number' id='BI!m:|9C0W6`HB=kOHVE'><field name='NUM'>10</field></shadow></value><statement name='DO'><block type='basic_print' id='-H4?7gf::[VXZ2!H2.iX'><value name='msg'><shadow type='text' id='5K=XYU9LPM-{r`WsT:r^'><field name='TEXT'>abc</field></shadow></value></block></statement><next><block type='basic_delay' id=';DSq;%l?o;y)|v9MuRGq'><value name='ms'><shadow type='math_number' id='VMgAzxp|_N}ERGy}}kPR'><field name='NUM'>100</field></shadow></value></block></next></block></statement></block></xml>",
            libs: {}
        },
        datetime: 1542880086479,
        device: "raspberrypi",
        iot: [],
        name: "c",
        platform: "blockcode",
        readOnly: false,
        remote: {},
        route: {
            device: {
                x: 453,
                y: 351,
                id: 453
            },
            currentModules: {}
        }
    }
}

RaspberryPi.examplesHasKit.block[Blockly.Msg.SENSORKIT_EXAMPLE_BLOCKLY_BREATH_LED] = {
    "name": Blockly.Msg.SENSORKIT_EXAMPLE_BLOCKLY_BREATH_LED,
    "project": {
        "name": "Breath LED",
        "dateTime": "",
        "device": "raspberrypi",
        "platform": "blockcode",
        "code": {
            "code": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><block type=\"basic_start\" id=\"qrswBI$2J**dCagSbF$0\" x=\"-230\" y=\"-290\"></block><block type=\"basic_forever\" id=\"(.X9-M;L7,PGS[je0yNt\" x=\"-230\" y=\"-210\"><statement name=\"statement\"><block type=\"sensorkit_led_module_set_value\" id=\"O5j1N]2m6qyNb/=`wd7/\"><value name=\"SIG\"><block type=\"raspberrypi_digital_pin\" id=\"BZB[aQ+jb0,0HL$lmV?e\"><field name=\"pin\">\"D0\"</field></block></value><value name=\"value\"><shadow type=\"math_number\" id=\"8*)X9G8ot|)inO5^H$0}\"><field name=\"NUM\">0</field></shadow></value></block></statement></block></xml>",
            "libs": {}
        },
        "readOnly": false,
        "datetime": 1548386969062,
        "route": {
            "device": {
                "x": "50%",
                "y": "50%",
                "id": "_0"
            },
            "currentModules": {
                "sensorkit": {
                    "led-module#jsPlumb_1_121": {
                        "x": 522,
                        "y": 121,
                        "src": "http://127.0.0.1:5500/packages/sensorkit/img/led-module.png",
                        "pins": {
                            "SIG": {
                                "targetPoint": "D0",
                                "sourceUuid": "source-jsPlumb_1_121-SIG",
                                "targetUuid": "target20"
                            }
                        }
                    }
                }
            }
        },
        "remote": {},
        "iot": [],
        "kits": ""
    }
}


RaspberryPi.examplesHasKit.block["RGB LED"] = {
    "name": "RGB LED",
    "project": {
        "name": "RGB LED",
        "dateTime": "",
        "device": "raspberrypi",
        "platform": "blockcode",
        "code": {
            "code": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><block type=\"basic_start\" id=\"qrswBI$2J**dCagSbF$0\" x=\"-230\" y=\"-290\"></block><block type=\"basic_forever\" id=\"(.X9-M;L7,PGS[je0yNt\" x=\"-90\" y=\"-190\"><statement name=\"statement\"><block type=\"sensorkit_rgb_set_value\" id=\"whC3I`gH-#gjn@`F,qR9\"><value name=\"R\"><block type=\"raspberrypi_pwm_pin\" id=\"jy#)Ye[B`+0?T=[]HW8y\"><field name=\"pin\">\"P0\"</field></block></value><value name=\"G\"><block type=\"raspberrypi_pwm_pin\" id=\"]z%gr)?:wV#U.QHI!.Bc\"><field name=\"pin\">\"P1\"</field></block></value><value name=\"B\"><block type=\"raspberrypi_pwm_pin\" id=\"HaYFi8,TO@8vPa0G[7|k\"><field name=\"pin\">\"P2\"</field></block></value><value name=\"color\"><shadow type=\"colour_led_picker\" id=\"xE|U7u$c3^aC^K,5mY.@\"><field name=\"colour\">#ff0000</field></shadow></value><next><block type=\"basic_delay\" id=\"$3.yQeD^U);{27=(nUTm\"><value name=\"ms\"><shadow type=\"math_number\" id=\"+xL,~81XuRnC2SjgiG0D\"><field name=\"NUM\">1000</field></shadow></value><next><block type=\"sensorkit_rgb_set_value\" id=\"RcHh%frA0TYsqXSSoGi0\"><value name=\"R\"><block type=\"raspberrypi_pwm_pin\" id=\"eHNU7mP$.U$DnlzOPd1?\"><field name=\"pin\">\"P0\"</field></block></value><value name=\"G\"><block type=\"raspberrypi_pwm_pin\" id=\"8Nq[I]ExF0ndT7H;Js_o\"><field name=\"pin\">\"P1\"</field></block></value><value name=\"B\"><block type=\"raspberrypi_pwm_pin\" id=\"PM,}6o5}#Vl2Est#CgY+\"><field name=\"pin\">\"P2\"</field></block></value><value name=\"color\"><shadow type=\"colour_led_picker\" id=\"B2U=dlypQ#$MI8G`Pm.R\"><field name=\"colour\">#33ff33</field></shadow></value><next><block type=\"basic_delay\" id=\",grP@?:+ipu,TegQ]ers\"><value name=\"ms\"><shadow type=\"math_number\" id=\"%s{wlpRK54{]]4NK9UtP\"><field name=\"NUM\">1000</field></shadow></value><next><block type=\"sensorkit_rgb_set_value\" id=\"u[l1m32.[y*8[mb6L9%d\"><value name=\"R\"><block type=\"raspberrypi_pwm_pin\" id=\"HuM+ZS@9*5v+fs]Hp3zu\"><field name=\"pin\">\"P0\"</field></block></value><value name=\"G\"><block type=\"raspberrypi_pwm_pin\" id=\"XLwa~(Gs7IOyKdNi%Of]\"><field name=\"pin\">\"P1\"</field></block></value><value name=\"B\"><block type=\"raspberrypi_pwm_pin\" id=\"F2{J{zy[,rf_Rn.1H#Zo\"><field name=\"pin\">\"P2\"</field></block></value><value name=\"color\"><shadow type=\"colour_led_picker\" id=\"ek{m(e]4F,6y^RTQk:|=\"><field name=\"colour\">#3333ff</field></shadow></value><next><block type=\"basic_delay\" id=\"i/8CD@8qMFY?G|J62N`F\"><value name=\"ms\"><shadow type=\"math_number\" id=\"8qX70@$5VE5ul9p3t=J/\"><field name=\"NUM\">1000</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></statement></block></xml>",
            "libs": {}
        },
        "readOnly": false,
        "datetime": 1548404547334,
        "route": {
            "device": {
                "x": 474,
                "y": 331,
                "id": 474
            },
            "currentModules": {
                "sensorkit": {
                    "rgb-led#jsPlumb_1_131": {
                        "x": 616,
                        "y": 111,
                        "src": "http://127.0.0.1:5500/packages/sensorkit/img/rgb-led.png",
                        "pins": {
                            "R": {
                                "targetPoint": "P0",
                                "sourceUuid": "source-jsPlumb_1_131-R",
                                "targetUuid": "target0"
                            },
                            "G": {
                                "targetPoint": "P1",
                                "sourceUuid": "source-jsPlumb_1_131-G",
                                "targetUuid": "target1"
                            },
                            "B": {
                                "targetPoint": "P2",
                                "sourceUuid": "source-jsPlumb_1_131-B",
                                "targetUuid": "target2"
                            },
                            "VCC": {
                                "targetPoint": "3V3",
                                "sourceUuid": "source-jsPlumb_1_131-VCC",
                                "targetUuid": "target38"
                            }
                        }
                    }
                }
            }
        },
        "remote": {},
        "iot": [],
        "kits": ""
    }
}



RaspberryPi.examplesHasKit.block["Control LED by Button"] = {
    "name": "Control LED by Button",
    "project": {
        "name": "Control LED by Button",
        "dateTime": "",
        "device": "raspberrypi",
        "platform": "blockcode",
        "code": {
            "code": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><variables><variable type=\"\" id=\"Ug7LYYneAGw(;z0K%vbc\">value</variable></variables><block type=\"basic_start\" id=\"qrswBI$2J**dCagSbF$0\" x=\"-230\" y=\"-290\"></block><block type=\"basic_forever\" id=\"(.X9-M;L7,PGS[je0yNt\" x=\"-170\" y=\"-150\"><statement name=\"statement\"><block type=\"variables_set\" id=\"r5Zg-7xh7?Hxk8Bc(W}p\"><field name=\"VAR\" id=\"Ug7LYYneAGw(;z0K%vbc\" variabletype=\"\">value</field><value name=\"VALUE\"><block type=\"sensorkit_button_get_value\" id=\"HUS1xutJ=|f6WN!daCgW\"><value name=\"SIG\"><block type=\"raspberrypi_digital_pin\" id=\"^s5M%%].#mVaN(%HQ!7U\"><field name=\"pin\">\"D1\"</field></block></value></block></value><next><block type=\"controls_if\" id=\"-%jgvDiSzF@a/_bp@A}]\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"0jC|31hIa+eGcFUsA5s;\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\" id=\"{;C(}):Nw,S]xu-|a6Xn\"><field name=\"VAR\" id=\"Ug7LYYneAGw(;z0K%vbc\" variabletype=\"\">value</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"]8qP%@K|=noq0(Xm3WGn\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"sensorkit_led_module_set_value\" id=\"%%KqS5MK5/gmr)l*@UMM\"><value name=\"SIG\"><block type=\"raspberrypi_digital_pin\" id=\"bJ^rW6G89rv]1B^cp}jO\"><field name=\"pin\">\"D0\"</field></block></value><value name=\"value\"><shadow type=\"math_number\" id=\"PFFNMNs+-H2/#ibU6.Q+\"><field name=\"NUM\">1</field></shadow></value></block></statement><statement name=\"ELSE\"><block type=\"sensorkit_led_module_set_value\" id=\"h:rF(S#A_8ZIZD}ao0J6\"><value name=\"SIG\"><block type=\"raspberrypi_digital_pin\" id=\"uEO_yTxQpg?K~[#]:$.X\"><field name=\"pin\">\"D0\"</field></block></value><value name=\"value\"><shadow type=\"math_number\" id=\"{u|c7Oa(BCJs4${w+z%-\"><field name=\"NUM\">0</field></shadow></value></block></statement></block></next></block></statement></block></xml>",
            "libs": {}
        },
        "readOnly": false,
        "datetime": 1548404979945,
        "route": {
            "device": {
                "x": 401,
                "y": 354,
                "id": 401
            },
            "currentModules": {
                "sensorkit": {
                    "led-module#jsPlumb_1_121": {
                        "x": 594,
                        "y": 181,
                        "src": "http://127.0.0.1:5500/packages/sensorkit/img/led-module.png",
                        "pins": {
                            "SIG": {
                                "targetPoint": "D0",
                                "sourceUuid": "source-jsPlumb_1_121-SIG",
                                "targetUuid": "target20"
                            },
                            "VCC": {
                                "targetPoint": "3V3",
                                "sourceUuid": "source-jsPlumb_1_121-VCC",
                                "targetUuid": "target39"
                            },
                            "GND": {
                                "targetPoint": "GND",
                                "sourceUuid": "source-jsPlumb_1_121-GND",
                                "targetUuid": "target37"
                            }
                        }
                    },
                    "button#jsPlumb_1_164": {
                        "x": 435,
                        "y": 183,
                        "src": "http://127.0.0.1:5500/packages/sensorkit/img/button.png",
                        "pins": {
                            "SIG": {
                                "targetPoint": "D1",
                                "sourceUuid": "source-jsPlumb_1_164-SIG",
                                "targetUuid": "target21"
                            },
                            "VCC": {
                                "targetPoint": "3V3",
                                "sourceUuid": "source-jsPlumb_1_164-VCC",
                                "targetUuid": "target38"
                            },
                            "GND": {
                                "targetPoint": "GND",
                                "sourceUuid": "source-jsPlumb_1_164-GND",
                                "targetUuid": "target36"
                            }
                        }
                    }
                }
            }
        },
        "remote": {},
        "iot": [],
        "kits": ""
    }
}


RaspberryPi.examplesHasKit.block["Touch Switch"] = {
    "name": "Touch Switch",
    "project": {
        "name": "Touch Switch",
        "dateTime": "",
        "device": "raspberrypi",
        "platform": "blockcode",
        "code": {
            "code": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><variables><variable type=\"\" id=\"t{6ph#B~|puEL4Y2)G2/\">status</variable><variable type=\"\" id=\"57[9!mjeA+#.yP@~C]oe\">value</variable></variables><block type=\"basic_start\" id=\"qrswBI$2J**dCagSbF$0\" x=\"-130\" y=\"-210\"><statement name=\"statement\"><block type=\"variables_set\" id=\"NMdvd]Fay[~V9/`8Is_l\"><field name=\"VAR\" id=\"t{6ph#B~|puEL4Y2)G2/\" variabletype=\"\">status</field><value name=\"VALUE\"><block type=\"math_number\" id=\"]i7KF3N6{Q$~Wf^70{Q@\"><field name=\"NUM\">2</field></block></value></block></statement></block><block type=\"basic_forever\" id=\"(.X9-M;L7,PGS[je0yNt\" x=\"-130\" y=\"-110\"><statement name=\"statement\"><block type=\"variables_set\" id=\"kGa~Jh4%6{38z?IvQ`Gc\"><field name=\"VAR\" id=\"57[9!mjeA+#.yP@~C]oe\" variabletype=\"\">value</field><value name=\"VALUE\"><block type=\"sensorkit_touchswitch_get_value\" id=\"3L)qndC.zz(__]Lz6/2h\"><value name=\"SIG\"><block type=\"raspberrypi_digital_pin\" id=\"C}Io!s(?(6uGi?^],lMr\"><field name=\"pin\">\"D0\"</field></block></value></block></value><next><block type=\"controls_if\" id=\"N)0(]7d19IT_WL8,ZR9$\"><value name=\"IF0\"><block type=\"logic_compare\" id=\"`en^IW0A:m_SN/Dz=5hS\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"variables_get\" id=\"sf4aW0UEbKlp^^-iiUC;\"><field name=\"VAR\" id=\"t{6ph#B~|puEL4Y2)G2/\" variabletype=\"\">status</field></block></value><value name=\"B\"><block type=\"variables_get\" id=\"]^uD`7_$#sWPrgr9@:Y,\"><field name=\"VAR\" id=\"57[9!mjeA+#.yP@~C]oe\" variabletype=\"\">value</field></block></value></block></value><statement name=\"DO0\"><block type=\"sensorkit_rgb_set_value\" id=\"6na%3goV#ceZA,,$48UN\"><value name=\"R\"><block type=\"raspberrypi_pwm_pin\" id=\"+lp`i_:)[cD:@=3z~JZ%\"><field name=\"pin\">\"P0\"</field></block></value><value name=\"G\"><block type=\"raspberrypi_pwm_pin\" id=\"$/d|,)IvH@FDC;kfGt1;\"><field name=\"pin\">\"P1\"</field></block></value><value name=\"B\"><block type=\"raspberrypi_pwm_pin\" id=\"i*=!8_ByZv^C5(k:cCAI\"><field name=\"pin\">\"P2\"</field></block></value><value name=\"color\"><shadow type=\"colour_led_picker\" id=\"[)GM[%N,hM0TBlae38hq\"><field name=\"colour\">#ffffff</field></shadow><block type=\"colour_random\" id=\"HA0kUx`MWW2#VI46N2yA\"></block></value><next><block type=\"variables_set\" id=\"Mm:umr;u6hEYjnWs[q(#\"><field name=\"VAR\" id=\"t{6ph#B~|puEL4Y2)G2/\" variabletype=\"\">status</field><value name=\"VALUE\"><block type=\"variables_get\" id=\"Z4,$ry8B*DjQM#l:pt{m\"><field name=\"VAR\" id=\"57[9!mjeA+#.yP@~C]oe\" variabletype=\"\">value</field></block></value></block></next></block></statement></block></next></block></statement></block></xml>",
            "libs": {}
        },
        "readOnly": false,
        "datetime": 1548405331767,
        "route": {
            "device": {
                "x": 326,
                "y": 382,
                "id": 326
            },
            "currentModules": {
                "sensorkit": {
                    "rgb-led#jsPlumb_1_121": {
                        "x": 534,
                        "y": 165,
                        "src": "http://127.0.0.1:5500/packages/sensorkit/img/rgb-led.png",
                        "pins": {
                            "VCC": {
                                "targetPoint": "3V3",
                                "sourceUuid": "source-jsPlumb_1_121-VCC",
                                "targetUuid": "target38"
                            },
                            "R": {
                                "targetPoint": "P0",
                                "sourceUuid": "source-jsPlumb_1_121-R",
                                "targetUuid": "target0"
                            },
                            "G": {
                                "targetPoint": "P1",
                                "sourceUuid": "source-jsPlumb_1_121-G",
                                "targetUuid": "target1"
                            },
                            "B": {
                                "targetPoint": "P2",
                                "sourceUuid": "source-jsPlumb_1_121-B",
                                "targetUuid": "target2"
                            }
                        }
                    },
                    "touch-switch#jsPlumb_1_134": {
                        "x": 354,
                        "y": 164,
                        "src": "http://127.0.0.1:5500/packages/sensorkit/img/touch-switch.png",
                        "pins": {
                            "SIG": {
                                "targetPoint": "D0",
                                "sourceUuid": "source-jsPlumb_1_134-0",
                                "targetUuid": "target20"
                            },
                            "VCC": {
                                "targetPoint": "3V3",
                                "sourceUuid": "source-jsPlumb_1_134-1",
                                "targetUuid": "target39"
                            },
                            "GND": {
                                "targetPoint": "GND",
                                "sourceUuid": "source-jsPlumb_1_134-2",
                                "targetUuid": "target37"
                            }
                        }
                    }
                }
            }
        },
        "remote": {},
        "iot": [],
        "kits": ""
    }
}


RaspberryPi.examplesHasKit.block["Moisture Sensor"] = {
    "name": "Moisture Sensor",
    "project": {
        "name": "Moisture Sensor",
        "dateTime": "",
        "device": "raspberrypi",
        "platform": "blockcode",
        "code": {
            "code": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><variables><variable type=\"\" id=\"LIusRtA#TwdYb[$P#UAm\">Value</variable></variables><block type=\"basic_start\" id=\"qrswBI$2J**dCagSbF$0\" x=\"-230\" y=\"-290\"></block><block type=\"basic_forever\" id=\"(.X9-M;L7,PGS[je0yNt\" x=\"-210\" y=\"-210\"><statement name=\"statement\"><block type=\"variables_set\" id=\"8/4]O}C$XMmxP/B@8M2)\"><field name=\"VAR\" id=\"LIusRtA#TwdYb[$P#UAm\" variabletype=\"\">Value</field><value name=\"VALUE\"><block type=\"sensorkit_moisture_sensor_get_value\" id=\";:G)wt9#H7-y6{UaORWl\"><value name=\"SIG\"><block type=\"raspberrypi_analog_pin\" id=\"i8|4^CB7%Ww8Vm5xZQcw\"><field name=\"pin\">\"A0\"</field></block></value></block></value><next><block type=\"controls_if\" id=\"~26u{]`vnh.0qxN;dNv$\"><value name=\"IF0\"><block type=\"logic_compare\" id=\"$i879}bctBUyKuq]QJbU\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\" id=\"H-0BC5h)1buNJBIe+xj2\"><field name=\"VAR\" id=\"LIusRtA#TwdYb[$P#UAm\" variabletype=\"\">Value</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"6A#~OFn.dR;o`Ejx,~4D\"><field name=\"NUM\">1000</field></block></value></block></value><statement name=\"DO0\"><block type=\"sensorkit_buzzer_set_value\" id=\"|BA*TSPAGnc9FWVHVUMH\"><value name=\"SIG\"><block type=\"raspberrypi_pwm_pin\" id=\"R6,jLFI_G)ycya#DAzO`\"><field name=\"pin\">\"P0\"</field></block></value><value name=\"note\"><shadow type=\"music_notes\" id=\"U1`^z)VlLz-|1e?Mb]f$\"><field name=\"note\">587.33</field></shadow></value><value name=\"beat\"><shadow type=\"music_beat\" id=\"ezR/Lz}6QDM6qlug;%BE\"><field name=\"beat\">1</field></shadow></value></block></statement></block></next></block></statement></block></xml>",
            "libs": {}
        },
        "readOnly": false,
        "datetime": 1549848455970,
        "route": {
            "device": {
                "x": 335,
                "y": 350,
                "id": 335
            },
            "currentModules": {
                "sensorkit": {
                    "moisture-sensor#jsPlumb_1_121": {
                        "x": 359,
                        "y": 93,
                        "src": "http://127.0.0.1:5500/packages/sensorkit/img/moisture-sensor.png",
                        "pins": {
                            "SIG": {
                                "targetPoint": "A0",
                                "sourceUuid": "source-jsPlumb_1_121-0",
                                "targetUuid": "target8"
                            },
                            "VCC": {
                                "targetPoint": "3V3",
                                "sourceUuid": "source-jsPlumb_1_121-1",
                                "targetUuid": "target39"
                            },
                            "GND": {
                                "targetPoint": "GND",
                                "sourceUuid": "source-jsPlumb_1_121-2",
                                "targetUuid": "target37"
                            }
                        }
                    },
                    "buzzer#jsPlumb_1_131": {
                        "x": 550,
                        "y": 102,
                        "src": "http://127.0.0.1:5500/packages/sensorkit/img/buzzer.png",
                        "pins": {
                            "SIG": {
                                "targetPoint": "P0",
                                "sourceUuid": "source-jsPlumb_1_131-0",
                                "targetUuid": "target0"
                            },
                            "VCC": {
                                "targetPoint": "3V3",
                                "sourceUuid": "source-jsPlumb_1_131-1",
                                "targetUuid": "target38"
                            },
                            "GND": {
                                "targetPoint": "GND",
                                "sourceUuid": "source-jsPlumb_1_131-2",
                                "targetUuid": "target36"
                            }
                        }
                    }
                }
            }
        },
        "remote": {},
        "iot": [],
        "kits": ""
    }
}


RaspberryPi.examplesHasKit.block["Vibration Switch"] = {
    "name": "Vibration Switch",
    "project": {
        "name": "Vibration Switch",
        "dateTime": "",
        "device": "raspberrypi",
        "platform": "blockcode",
        "code": {
            "code": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><variables><variable type=\"\" id=\"H#zIjE0wPb[|Xk%^tB0-\">Value</variable></variables><block type=\"basic_start\" id=\"qrswBI$2J**dCagSbF$0\" x=\"-230\" y=\"-290\"></block><block type=\"basic_forever\" id=\"(.X9-M;L7,PGS[je0yNt\" x=\"-170\" y=\"-210\"><statement name=\"statement\"><block type=\"variables_set\" id=\"|sP|Kwu`ivq7Bt%/~E*6\"><field name=\"VAR\" id=\"H#zIjE0wPb[|Xk%^tB0-\" variabletype=\"\">Value</field><value name=\"VALUE\"><block type=\"sensorkit_vibrationswitch_get_value\" id=\"PARgQU^OWVF*^$#{@(k]\"><value name=\"SIG\"><block type=\"raspberrypi_digital_pin\" id=\"2GW%7Wbyt8]GKSe4.BxK\"><field name=\"pin\">\"D0\"</field></block></value></block></value><next><block type=\"controls_if\" id=\"zPfIwsxO7X$UCVBfst^8\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"4a1X/L~Ide{!5x?`lF3.\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\" id=\"DhBfExUgFT!@|,czej+]\"><field name=\"VAR\" id=\"H#zIjE0wPb[|Xk%^tB0-\" variabletype=\"\">Value</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"]RI}`HE^mPh,H2abJUZy\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"sensorkit_led_module_set_value\" id=\"NPH^1qJl1XnF_-HqGTog\"><value name=\"SIG\"><block type=\"raspberrypi_digital_pin\" id=\"DtlI[ID/WvS;Kzg._Ko+\"><field name=\"pin\">\"D1\"</field></block></value><value name=\"value\"><shadow type=\"math_number\" id=\")c{IcpUHa`:[G=Y,~ii=\"><field name=\"NUM\">1</field></shadow></value></block></statement><statement name=\"ELSE\"><block type=\"sensorkit_led_module_set_value\" id=\"+A8b02lOqH2bEQ/.Y?8R\"><value name=\"SIG\"><block type=\"raspberrypi_digital_pin\" id=\"-*$NxvKU47!3BlcLhalP\"><field name=\"pin\">\"D1\"</field></block></value><value name=\"value\"><shadow type=\"math_number\" id=\"MGj$kK)=n4Z.9wch[voY\"><field name=\"NUM\">0</field></shadow></value></block></statement><next><block type=\"basic_delay\" id=\"nFTAfUpm^KzzW5!dEI=N\"><value name=\"ms\"><shadow type=\"math_number\" id=\"i3FP2xxNnzNqFn!w;get\"><field name=\"NUM\">1000</field></shadow></value></block></next></block></next></block></statement></block></xml>",
            "libs": {}
        },
        "readOnly": false,
        "datetime": 1549848979922,
        "route": {
            "device": {
                "x": 242,
                "y": 331,
                "id": 242
            },
            "currentModules": {
                "sensorkit": {
                    "vibration-switch#jsPlumb_1_121": {
                        "x": 263,
                        "y": 107,
                        "src": "http://127.0.0.1:5500/packages/sensorkit/img/vibration-switch.png",
                        "pins": {
                            "SIG": {
                                "targetPoint": "D0",
                                "sourceUuid": "source-jsPlumb_1_121-0",
                                "targetUuid": "target20"
                            },
                            "VCC": {
                                "targetPoint": "3V3",
                                "sourceUuid": "source-jsPlumb_1_121-1",
                                "targetUuid": "target39"
                            },
                            "GND": {
                                "targetPoint": "GND",
                                "sourceUuid": "source-jsPlumb_1_121-2",
                                "targetUuid": "target37"
                            }
                        }
                    },
                    "led-module#jsPlumb_1_131": {
                        "x": 443,
                        "y": 107,
                        "src": "http://127.0.0.1:5500/packages/sensorkit/img/led-module.png",
                        "pins": {
                            "SIG": {
                                "targetPoint": "D1",
                                "sourceUuid": "source-jsPlumb_1_131-SIG",
                                "targetUuid": "target21"
                            },
                            "VCC": {
                                "targetPoint": "3V3",
                                "sourceUuid": "source-jsPlumb_1_131-VCC",
                                "targetUuid": "target38"
                            },
                            "GND": {
                                "targetPoint": "GND",
                                "sourceUuid": "source-jsPlumb_1_131-GND",
                                "targetUuid": "target36"
                            }
                        }
                    }
                }
            }
        },
        "remote": {},
        "iot": [],
        "kits": ""
    }
}


RaspberryPi.examplesHasKit.block["Temperature Sensor-DS18B20"] = {
    "name": "Temperature Sensor-DS18B20",
    "project": {
        "name": "Temperature Sensor-DS18B20",
        "dateTime": "",
        "device": "raspberrypi",
        "platform": "blockcode",
        "code": {
            "code": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><variables><variable type=\"\" id=\"/g:`X5h9!;Mj02/XH%F~\">Value</variable></variables><block type=\"basic_start\" id=\"qrswBI$2J**dCagSbF$0\" x=\"-230\" y=\"-290\"></block><block type=\"basic_forever\" id=\"(.X9-M;L7,PGS[je0yNt\" x=\"-190\" y=\"-210\"><statement name=\"statement\"><block type=\"variables_set\" id=\"G+Gp*71/DwOx+u8yPW}w\"><field name=\"VAR\" id=\"/g:`X5h9!;Mj02/XH%F~\" variabletype=\"\">Value</field><value name=\"VALUE\"><block type=\"sensorkit_ds18b20_get_value\" id=\"dGlLAu@@mx2*+*1AgJU{\"><value name=\"SIG\"><block type=\"raspberrypi_digital_pin\" id=\":F32sOS5q}V/Jde$eyM{\"><field name=\"pin\">\"D7\"</field></block></value></block></value><next><block type=\"controls_if\" id=\"dwF++l,?QL+}j/6.B}-*\"><value name=\"IF0\"><block type=\"logic_compare\" id=\"Nq?u1v+m}vYkz.D*8rFk\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\" id=\"0BvA_V59#E^m;}`-]*W=\"><field name=\"VAR\" id=\"/g:`X5h9!;Mj02/XH%F~\" variabletype=\"\">Value</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"2X3(%V*aR_J5qkhZ4u*(\"><field name=\"NUM\">31</field></block></value></block></value><statement name=\"DO0\"><block type=\"sensorkit_buzzer_set_value\" id=\"i[gRY?^+D=UeBnXF}gwZ\"><value name=\"SIG\"><block type=\"raspberrypi_pwm_pin\" id=\"Z6c}4$Nyd/:5{.(xiQb{\"><field name=\"pin\">\"P0\"</field></block></value><value name=\"note\"><shadow type=\"music_notes\" id=\"2|(gHr?Kxe%LgW~%PVjp\"><field name=\"note\">587.33</field></shadow></value><value name=\"beat\"><shadow type=\"music_beat\" id=\"_nUP1x)/5T]Mzrc%/N[3\"><field name=\"beat\">1</field></shadow></value><next><block type=\"basic_delay\" id=\"E*/gu@(]|TpJ5/XFKTRs\"><value name=\"ms\"><shadow type=\"math_number\" id=\"$T5k$[6~HbwJH#JMoX%G\"><field name=\"NUM\">1000</field></shadow></value></block></next></block></statement></block></next></block></statement></block></xml>",
            "libs": {}
        },
        "readOnly": false,
        "datetime": 1549850024131,
        "route": {
            "device": {
                "x": 296,
                "y": 307,
                "id": 296
            },
            "currentModules": {
                "sensorkit": {
                    "buzzer#jsPlumb_1_121": {
                        "x": 494,
                        "y": 110,
                        "src": "http://127.0.0.1:5500/packages/sensorkit/img/buzzer.png",
                        "pins": {
                            "SIG": {
                                "targetPoint": "P0",
                                "sourceUuid": "source-jsPlumb_1_121-0",
                                "targetUuid": "target0"
                            },
                            "VCC": {
                                "targetPoint": "3V3",
                                "sourceUuid": "source-jsPlumb_1_121-1",
                                "targetUuid": "target39"
                            },
                            "GND": {
                                "targetPoint": "GND",
                                "sourceUuid": "source-jsPlumb_1_121-2",
                                "targetUuid": "target36"
                            }
                        }
                    },
                    "ds18b20#jsPlumb_1_131": {
                        "x": 334,
                        "y": 109,
                        "src": "http://127.0.0.1:5500/packages/sensorkit/img/ds18b20.png",
                        "pins": {
                            "SIG": {
                                "targetPoint": "D7",
                                "sourceUuid": "source-jsPlumb_1_131-0",
                                "targetUuid": "target27"
                            },
                            "VCC": {
                                "targetPoint": "5V",
                                "sourceUuid": "source-jsPlumb_1_131-1",
                                "targetUuid": "target18"
                            },
                            "GND": {
                                "targetPoint": "GND",
                                "sourceUuid": "source-jsPlumb_1_131-2",
                                "targetUuid": "target37"
                            }
                        }
                    }
                }
            }
        },
        "remote": {},
        "iot": [],
        "kits": ""
    }
}
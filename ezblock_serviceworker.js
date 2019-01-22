var VERSION = 'v0.0.189';
var DATE = '2019-1-15';

var FILES = [
    // FILES
    // .html file:
    "./index.html",

    // .js file:
    "./ezblock.js",
    "./msg/en.js",
    "./msg/zh-hans.js",
    "./msg/js/zh-hant.js",
    "./msg/js/pt.js",
    "./msg/js/vi.js",
    "./msg/js/lv.js",
    "./msg/js/lki.js",
    "./msg/js/pl.js",
    "./msg/js/el.js",
    "./msg/js/et.js",
    "./msg/js/is.js",
    "./msg/js/sl.js",
    "./msg/js/ko.js",
    "./msg/js/ms.js",
    "./msg/js/fi.js",
    "./msg/js/th.js",
    "./msg/js/ru.js",
    "./msg/js/mk.js",
    "./msg/js/sq.js",
    "./msg/js/tlh.js",
    "./msg/js/tl.js",
    "./msg/js/be-tarask.js",
    "./msg/js/ja.js",
    "./msg/js/he.js",
    "./msg/js/bg.js",
    "./msg/js/pms.js",
    "./msg/js/ia.js",
    "./msg/js/bcc.js",
    "./msg/js/id.js",
    "./msg/js/az.js",
    "./msg/js/tcy.js",
    "./msg/js/ab.js",
    "./msg/js/sc.js",
    "./msg/js/lb.js",
    "./msg/js/ca.js",
    "./msg/js/ta.js",
    "./msg/js/ba.js",
    "./msg/js/sd.js",
    "./msg/js/diq.js",
    "./msg/js/nb.js",
    "./msg/js/pt-br.js",
    "./msg/js/shn.js",
    "./msg/js/oc.js",
    "./msg/js/lrc.js",
    "./msg/js/da.js",
    "./msg/js/fa.js",
    "./msg/js/de.js",
    "./msg/js/en.js",
    "./msg/js/sv.js",
    "./msg/js/hi.js",
    "./msg/js/uk.js",
    "./msg/js/cs.js",
    "./msg/js/fr.js",
    "./msg/js/nl.js",
    "./msg/js/en-gb.js",
    "./msg/js/sr.js",
    "./msg/js/hu.js",
    "./msg/js/hrx.js",
    "./msg/js/lt.js",
    "./msg/js/ar.js",
    "./msg/js/sk.js",
    "./msg/js/it.js",
    "./msg/js/es.js",
    "./msg/js/bn.js",
    "./msg/js/eo.js",
    "./msg/js/ro.js",
    "./msg/js/br.js",
    "./msg/js/zh-hans.js",
    "./msg/js/tr.js",
    "./js/ace/theme-clouds.js",
    "./js/ace/theme-cobalt.js",
    "./js/ace/theme-eclipse.js",
    "./js/ace/theme-dawn.js",
    "./js/ace/theme-solarized_light.js",
    "./js/ace/theme-chaos.js",
    "./js/ace/keybinding-emacs.js",
    "./js/ace/theme-monokai.js",
    "./js/ace/theme-github.js",
    "./js/ace/theme-merbivore_soft.js",
    "./js/ace/theme-katzenmilch.js",
    "./js/ace/theme-chrome.js",
    "./js/ace/theme-tomorrow.js",
    "./js/ace/mode-python.js",
    "./js/ace/theme-clouds_midnight.js",
    "./js/ace/theme-tomorrow_night_blue.js",
    "./js/ace/theme-gob.js",
    "./js/ace/theme-gruvbox.js",
    "./js/ace/theme-xcode.js",
    "./js/ace/theme-textmate.js",
    "./js/ace/theme-iplastic.js",
    "./js/ace/theme-crimson_editor.js",
    "./js/ace/theme-tomorrow_night_bright.js",
    "./js/ace/ace.js",
    "./js/ace/theme-mono_industrial.js",
    "./js/ace/theme-merbivore.js",
    "./js/ace/theme-sqlserver.js",
    "./js/ace/theme-idle_fingers.js",
    "./js/ace/ext-language_tools.js",
    "./js/ace/theme-ambiance.js",
    "./js/ace/theme-kuroir.js",
    "./js/ace/mode-swift.js",
    "./js/ace/theme-pastel_on_dark.js",
    "./js/ace/theme-kr_theme.js",
    "./js/ace/theme-twilight.js",
    "./js/ace/theme-solarized_dark.js",
    "./js/ace/theme-tomorrow_night.js",
    "./js/ace/ext-keybinding_menu.js",
    "./js/ace/theme-terminal.js",
    "./js/ace/theme-dracula.js",
    "./js/ace/theme-vibrant_ink.js",
    "./js/ace/theme-tomorrow_night_eighties.js",
    "./js/ace/theme-dreamweaver.js",
    "./js/ace/snippets/snippets.js",
    "./js/ace/snippets/python.js",
    "./js/ace/snippets/text.js",
    "./js/ace/snippets/swift.js",
    "./product/leaf/leaf.js",
    "./product/leaf/toolbox.js",
    "./product/leaf/block.js",
    "./product/leaf/generator.js",
    "./product/leaf/simulator.js",
    "./product/leaf/msg/en.js",
    "./product/leaf/msg/zh-hans.js",
    "./product/jellypi/jellypi.js",
    "./product/jellypi/toolbox.js",
    "./product/jellypi/block.js",
    "./product/jellypi/generator.js",
    "./product/jellypi/simulator.js",
    "./product/jellypi/msg/en.js",
    "./product/jellypi/msg/zh-hans.js",
    "./product/lizard/lizard.js",
    "./product/lizard/toolbox.js",
    "./product/lizard/block.js",
    "./product/lizard/generator.js",
    "./product/lizard/msg/en.js",
    "./product/lizard/msg/zh-hans.js",
    "./product/pimobile/toolbox.js",
    "./product/pimobile/pimobile.js",
    "./product/pimobile/block.js",
    "./product/pimobile/generator.js",
    "./product/pimobile/simulator.js",
    "./product/pimobile/msg/en.js",
    "./product/pimobile/msg/zh-hans.js",
    "./product/raspberrypi/toolbox.js",
    "./product/raspberrypi/block.js",
    "./product/raspberrypi/generator.js",
    "./product/raspberrypi/raspberrypi.js",
    "./product/raspberrypi/simulator.js",
    "./product/raspberrypi/msg/en.js",
    "./product/raspberrypi/msg/zh-hans.js",
    "./product/raspberrypi/examples/block.js",
    "./product/raspberrypi/tutorials/block.js",
    "./packages/sensorkit/sensorkit.js",
    "./packages/sensorkit/block.js",
    "./packages/sensorkit/generator.js",
    "./packages/sensorkit/simulator.js",
    "./packages/sensorkit/msg/en.js",
    "./packages/sensorkit/msg/zh-hans.js",
    "./packages/sensorkit/examples/raspberrypi/block.js",
    "./packages/sensorkit/tutorials/raspberrypi/block.js",
    "./packages/jelly/jelly.js",
    "./packages/jelly/block.js",
    "./packages/jelly/generator.js",
    "./packages/jelly/simulator.js",
    "./packages/jelly/msg/en.js",
    "./packages/jelly/msg/zh-hans.js",
    "./packages/switchbot/switchbot.js",
    "./packages/switchbot/block.js",
    "./packages/switchbot/generator.js",
    "./packages/switchbot/simulator.js",
    "./packages/switchbot/msg/en.js",
    "./packages/switchbot/msg/zh-hans.js",
    "./blockcode/blocks_compressed.js",
    "./blockcode/blockly_compressed.js",
    "./blockcode/toolbox.js",
    "./blockcode/generator.js",
    "./blockcode/simulator.js",
    "./blockcode/packages/music/block.js",
    "./blockcode/packages/music/generator.js",
    "./blockcode/packages/music/simulator.js",
    "./blockcode/packages/music/msg/en.js",
    "./blockcode/packages/music/msg/zh-hans.js",
    "./blockcode/packages/basic/block.js",
    "./blockcode/packages/basic/generator.js",
    "./blockcode/packages/basic/simulator.js",
    "./blockcode/packages/basic/msg/en.js",
    "./blockcode/packages/basic/msg/zh-hans.js",
    "./blockcode/packages/iot/block.js",
    "./blockcode/packages/iot/generator.js",
    "./blockcode/packages/iot/simulator.js",
    "./blockcode/packages/iot/msg/en.js",
    "./blockcode/packages/iot/msg/zh-hans.js",
    "./blockcode/packages/time/block.js",
    "./blockcode/packages/time/generator.js",
    "./blockcode/packages/time/simulator.js",
    "./blockcode/packages/time/msg/en.js",
    "./blockcode/packages/time/msg/zh-hans.js",
    "./blockcode/packages/remote/block.js",
    "./blockcode/packages/remote/generator.js",
    "./blockcode/packages/remote/simulator.js",
    "./blockcode/packages/remote/msg/en.js",
    "./blockcode/packages/remote/msg/zh-hans.js",

    // .css file:
    "./css/bootstrap.min.css",
    "./css/register.css",
    "./css/myProject.css",
    "./css/slick.css",
    "./css/home.css",
    "./css/remote.css",
    "./css/editor.css",
    "./css/afterSaleProblem.css",
    "./css/code.css",
    "./css/index.css",
    "./css/routing_bak.css",
    "./css/selectBoard.css",
    "./css/jquery-ui.css",
    "./css/faq.css",
    "./css/prettify.css",
    "./css/internetOfThings.css",
    "./css/style.css",
    "./css/tutorials.css",
    "./css/pInformation.css",
    "./css/routing.css",

    // .png file:
    "./product/leaf/img/leaf_icon.png",
    "./product/leaf/img/leaf_title.png",
    "./product/leaf/img/leaf.png",
    "./product/leaf/img/leaf_board.png",
    "./product/jellypi/img/树莓派-大.png",
    "./product/jellypi/img/jellypi_title.png",
    "./product/jellypi/img/jellypi.png",
    "./product/jellypi/img/jellypi-carousel.png",
    "./product/jellypi/img/jellypi_icon.png",
    "./product/jellypi/img/树莓派-小.png",
    "./product/jellypi/img/jellypi_board.png",
    "./product/lizard/img/lizard_icon.png",
    "./product/lizard/img/蜥蜴.png",
    "./product/lizard/img/lizard.png",
    "./product/pimobile/img/选板页小车.png",
    "./product/pimobile/img/编程页小车.png",
    "./product/pimobile/img/pimobile.png",
    "./product/pimobile/img/pimobile_icon.png",
    "./product/raspberrypi/img/raspberrypi_board.png",
    "./product/raspberrypi/img/raspberrypi.png",
    "./product/raspberrypi/img/raspberrypi_title.png",
    "./product/raspberrypi/img/raspberrypi_icon.png",
    "./img/triangle-down.png",
    "./img/树懒.png",
    "./img/myproject-1.png",
    "./img/pythoncode.png",
    "./img/zoom_out_bak.png",
    "./img/true.png",
    "./img/播放.png",
    "./img/推特.png",
    "./img/文字圆点-橙.png",
    "./img/remote-top.png",
    "./img/模块-大.png",
    "./img/输入.png",
    "./img/编程-大.png",
    "./img/triangle-up.png",
    "./img/stop.png",
    "./img/读.png",
    "./img/树莓派-大.png",
    "./img/swiftcode-大.png",
    "./img/home-leaf.png",
    "./img/连接.png",
    "./img/电路-1.png",
    "./img/login.png",
    "./img/OK.png",
    "./img/expand.png",
    "./img/new-1.png",
    "./img/download.png",
    "./img/trashcan-bucket.png",
    "./img/usetutorial-1.png",
    "./img/zoom_reset.png",
    "./img/python.png",
    "./img/saveproject.png",
    "./img/leaf-大.png",
    "./img/leaf-carousel.png",
    "./img/大图标展示.png",
    "./img/btn.png",
    "./img/python-小.png",
    "./img/open1.png",
    "./img/remote-right.png",
    "./img/close1.png",
    "./img/dwnload.png",
    "./img/zoom_reset_bak.png",
    "./img/zoom_in.png",
    "./img/产品列表.png",
    "./img/dual-color-led.png",
    "./img/电路.png",
    "./img/邮箱号.png",
    "./img/暂停按键.png",
    "./img/myproject.png",
    "./img/shrink.png",
    "./img/userName.png",
    "./img/button-01.png",
    "./img/列表.png",
    "./img/切换箭头.png",
    "./img/bluetooth-disconnected.png",
    "./img/pythoncode-小.png",
    "./img/trashcan-lid.png",
    "./img/视频指引箭头-显示.png",
    "./img/unremote-top.png",
    "./img/rectangle.png",
    "./img/下载.png",
    "./img/代码-大.png",
    "./img/输出.png",
    "./img/goBack.png",
    "./img/leaf_title.png",
    "./img/文字圆点-灰.png",
    "./img/remote-down.png",
    "./img/rightarrow.png",
    "./img/logo_ezblock_title_wrap.png",
    "./img/blockcode-小.png",
    "./img/menu-1.png",
    "./img/lobin.png",
    "./img/lobin-1.png",
    "./img/unremote-down.png",
    "./img/default-headshot.png",
    "./img/其他数值.png",
    "./img/connect.png",
    "./img/编程.png",
    "./img/swiftcode.png",
    "./img/unremote-right.png",
    "./img/帮助.png",
    "./img/series_raspberrypi_medium.png",
    "./img/zoom_out.png",
    "./img/menu.png",
    "./img/choose-device-background-bottom-right.png",
    "./img/IOT.png",
    "./img/help.png",
    "./img/leaf-小.png",
    "./img/返回按键.png",
    "./img/搜索.png",
    "./img/python-大.png",
    "./img/read.png",
    "./img/light_sensor.png",
    "./img/模块-小.png",
    "./img/最大化.png",
    "./img/unremote-left.png",
    "./img/编程-小.png",
    "./img/小窗口暂停图标.png",
    "./img/删除.png",
    "./img/Switch.png",
    "./img/usetutorial.png",
    "./img/swiftcode-小.png",
    "./img/Switch-01.png",
    "./img/remote-left.png",
    "./img/new.png",
    "./img/buzzer.png",
    "./img/sunfounder-steam-education-large.png",
    "./img/树莓派-小.png",
    "./img/密码.png",
    "./img/代码-小.png",
    "./img/4.png",
    "./img/保存.png",
    "./img/暂停.png",
    "./img/open.png",
    "./img/choose-device-background-top-left.png",
    "./img/5.png",
    "./img/视频指引箭头.png",
    "./img/zoom_in-bak.png",
    "./img/leaf.png",
    "./img/trash.png",
    "./img/展开_bak.png",
    "./img/查看密码.png",
    "./img/湿度.png",
    "./img/添加.png",
    "./img/6.png",
    "./img/sprites.png",
    "./img/logo_ezblock_title_inline.png",
    "./img/Facebook.png",
    "./img/bluetooth-connected.png",
    "./img/2.png",
    "./img/背景2.png",
    "./img/example-1.png",
    "./img/返回.png",
    "./img/蓝牙遥控.png",
    "./img/blockcode.png",
    "./img/背景3.png",
    "./img/append.png",
    "./img/play.png",
    "./img/展开.png",
    "./img/3.png",
    "./img/我的.png",
    "./img/series_leaf_small.png",
    "./img/back.png",
    "./img/save.png",
    "./img/1.png",
    "./img/温度.png",
    "./img/series_leaf_medium.png",
    "./img/series_raspberrypi_small.png",
    "./img/button.png",
    "./img/蓝牙未连接.png",
    "./img/close.png",
    "./img/example.png",
    "./packages/sensorkit/icon.png",
    "./packages/sensorkit/img/lcd1602.png",
    "./packages/sensorkit/img/relay-module.png",
    "./packages/sensorkit/img/potentiometer.png",
    "./packages/sensorkit/img/rotary-encoder.png",
    "./packages/sensorkit/img/DS18B20-temperature-sensor.png",
    "./packages/sensorkit/img/vibration-switch.png",
    "./packages/sensorkit/img/rtc-ds1302.png",
    "./packages/sensorkit/img/mercury-switch.png",
    "./packages/sensorkit/img/gas-sensor.png",
    "./packages/sensorkit/img/joystick.png",
    "./packages/sensorkit/img/auto-flash-led.png",
    "./packages/sensorkit/img/Sensorkit.png",
    "./packages/sensorkit/img/humiture-sensor.png",
    "./packages/sensorkit/img/flame-sensor.png",
    "./packages/sensorkit/img/analog-temperature-sensor.png",
    "./packages/sensorkit/img/dual-color-led.png",
    "./packages/sensorkit/img/rain-detection-module.png",
    "./packages/sensorkit/img/photo-interrupter.png",
    "./packages/sensorkit/img/analog-hall-switch.png",
    "./packages/sensorkit/img/laser-emitter.png",
    "./packages/sensorkit/img/rgb-led.png",
    "./packages/sensorkit/img/ir-obstacle-avoidance.png",
    "./packages/sensorkit/img/tracking-sensor.png",
    "./packages/sensorkit/img/active-buzzer.png",
    "./packages/sensorkit/img/ir-receiver.png",
    "./packages/sensorkit/img/reed-switch.png",
    "./packages/sensorkit/img/barometer.png",
    "./packages/sensorkit/img/hall-switch.png",
    "./packages/sensorkit/img/pcf8591.png",
    "./packages/sensorkit/img/photoresistor.png",
    "./packages/sensorkit/img/thermistoe.png",
    "./packages/sensorkit/img/thermistor.png",
    "./packages/sensorkit/img/touch-switch.png",
    "./packages/sensorkit/img/gyro-acceleration-sensor.png",
    "./packages/sensorkit/img/tilt-switch.png",
    "./packages/sensorkit/img/passive-buzzer.png",
    "./packages/sensorkit/img/button.png",
    "./packages/jelly/icon.png",
    "./packages/jelly/img/slider.png",
    "./packages/jelly/img/sound_sensor.png",
    "./packages/jelly/img/oscilator.png",
    "./packages/jelly/img/motor.png",
    "./packages/jelly/img/light_sensor.png",
    "./packages/jelly/img/servo.png",
    "./packages/jelly/img/led_bar.png",
    "./packages/jelly/img/inverter.png",
    "./packages/jelly/img/button.png",
    "./packages/switchbot/icon.png",
    "./packages/switchbot/img/slider.png",
    "./packages/switchbot/img/sound_sensor.png",
    "./packages/switchbot/img/oscilator.png",
    "./packages/switchbot/img/motor.png",
    "./packages/switchbot/img/light_sensor.png",
    "./packages/switchbot/img/servo.png",
    "./packages/switchbot/img/led_bar.png",
    "./packages/switchbot/img/inverter.png",
    "./packages/switchbot/img/button.png",
    "./blockcode/media/sprites_bak.png",
    "./blockcode/media/zoom_reset.png",
    "./blockcode/media/zoom_in.png",
    "./blockcode/media/zoom_out.png",
    "./blockcode/media/quote1.png",
    "./blockcode/media/quote0.png",
    "./blockcode/media/sprites.png",
    "./blockcode/media/mark/Functions.png",
    "./blockcode/media/mark/Loops.png",
    "./blockcode/media/mark/Sensors.png",
    "./blockcode/media/mark/Time.png",
    "./blockcode/media/mark/Communicate.png",
    "./blockcode/media/mark/Actuator.png",
    "./blockcode/media/mark/Music.png",
    "./blockcode/media/mark/Remote.png",
    "./blockcode/media/mark/Variables.png",
    "./blockcode/media/mark/Colour.png",
    "./blockcode/media/mark/Actuators.png",
    "./blockcode/media/mark/Math.png",
    "./blockcode/media/mark/Lists.png",
    "./blockcode/media/mark/Elf.png",
    "./blockcode/media/mark/Modules.png",
    "./blockcode/media/mark/Logic.png",
    "./blockcode/media/mark/AddPackage.png",
    "./blockcode/media/mark/default.png",
    "./blockcode/media/mark/Basic.png",
    "./blockcode/media/mark/Text.png",
    "./blockcode/media/mark/kits.png",
    "./fonts/icon.png",

    // .py file:
    "./product/lizard/lib/lizard.py",
    "./product/lizard/lib/pw.py",
    "./product/lizard/lib/robot.py",
    "./product/pimobile/lib/pimobile.py",
    "./packages/switchbot/lib/switchbot.py",

    // .gif file:
    "./img/loading.gif",
    "./blockcode/media/1x1.gif",

    // .jpg file:
    "./img/背景1.jpg",

    // .wav file:
    "./blockcode/media/disconnect.wav",
    "./blockcode/media/click.wav",
    "./blockcode/media/delete.wav",

    // .ogg file:
    "./blockcode/media/disconnect.ogg",
    "./blockcode/media/delete.ogg",
    "./blockcode/media/click.ogg",

    // .mp3 file:
    "./blockcode/media/click.mp3",
    "./blockcode/media/delete.mp3",
    "./blockcode/media/disconnect.mp3",

    // .cur file:
    "./blockcode/media/handopen.cur",
    "./blockcode/media/handdelete.cur",
    "./blockcode/media/handclosed.cur",

    // .woff file:
    "./fonts/glyphicons-halflings-regular.woff",

    // .eot file:
    "./fonts/glyphicons-halflings-regular.eot",

    // .ttf file:
    "./fonts/ubuntu.ttf",
    "./fonts/glyphicons-halflings-regular.ttf",

    // .woff2 file:
    "./fonts/glyphicons-halflings-regular.woff2",

    // .svg file:
    "./fonts/glyphicons-halflings-regular.svg",
    // FILES
];

var CACHENAME = 'ezblock-static-' + VERSION;

self.addEventListener('install', function (event) {
    event.waitUntil(caches.open(CACHENAME).then(function (cache) {
        return cache.addAll(FILES).then(function(a){
            self.skipWaiting();
        });
    }));
    
});

self.addEventListener('activate', function (event) {
    return event.waitUntil(caches.keys().then(function (keys) {
        return Promise.all(keys.map(function (k) {
            if (k != CACHENAME && (k.indexOf('ezblock-static-') == 0)) {
                return caches.delete(k)
            } else {
                return Promise.resolve();
            }
        }));
    }));
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }

            return fetch(event.request).then(function (response) {
                var shouldCache = response.ok;

                // for (var i = 0; i < BLACKLIST.length; ++i) {
                //     var b = new RegExp(BLACKLIST[i]);
                //     if (b.test(event.request.url)) {
                //         shouldCache = false;
                //         break;
                //     }
                // }

                if (event.request.method == 'POST') {
                    shouldCache = false;
                }

                if (shouldCache) {
                    return caches.open(CACHENAME).then(function (cache) {
                        cache.put(event.request, response.clone());
                        return response;
                    });
                } else {
                    return response;
                }
            });
        })
    );
});

if (!Cache.prototype.add) {

    Cache.prototype.add = function add(request) {
        return this.addAll([request]);
    };
}

if (!Cache.prototype.addAll) {

    Cache.prototype.addAll = function addAll(requests) {
        var cache = this;

        function NetworkError(message) {
            this.name = 'NetworkError';
            this.code = 19;
            this.message = message;
        }
        NetworkError.prototype = Object.create(Error.prototype);

        return Promise.resolve()
            .then(function () {
                if (arguments.length < 1) throw new TypeError();

                requests = requests.map(function (request) {
                    if (request instanceof Request) {
                        return request;
                    } else {
                        return String(request);
                    }
                });

                return Promise.all(requests.map(function (request) {
                    if (typeof request === 'string') {
                        request = new Request(request);
                    }

                    return fetch(request.clone());
                }));
            })
            .then(function (responses) {
                return Promise.all(responses.map(function (response, i) {
                    return cache.put(requests[i], response);
                }));
            })
            .then(function () {
                return undefined;
            });
    };
}

if (!CacheStorage.prototype.match) {

    CacheStorage.prototype.match = function match(request, opts) {
        var caches = this;
        return caches.keys().then(function (cacheNames) {
            var match;
            return cacheNames.reduce(function (chain, cacheName) {
                return chain.then(function () {
                    return match || caches.open(cacheName).then(function (cache) {
                        return cache.match(request, opts);
                    }).then(function (response) {
                        match = response;
                        return match;
                    });
                });
            }, Promise.resolve());
        });
    };
}

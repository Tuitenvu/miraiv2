const _0x3cb3b2 = _0x1dfb;
(function (_0x44a1d8, _0x1390a7) {
    const _0x11da18 = _0x1dfb,
        _0x5daef0 = _0x44a1d8();
    while (!![]) {
        try {
            const _0x1986ad = -parseInt(_0x11da18(0x108)) / 0x1 + parseInt(_0x11da18(0x101)) / 0x2 * (parseInt(_0x11da18(0xfd)) / 0x3) + -parseInt(_0x11da18(0x111)) / 0x4 * (parseInt(_0x11da18(0xfa)) / 0x5) + parseInt(_0x11da18(0x10b)) / 0x6 + -parseInt(_0x11da18(0x112)) / 0x7 * (-parseInt(_0x11da18(0x10f)) / 0x8) + -parseInt(_0x11da18(0xf9)) / 0x9 + -parseInt(_0x11da18(0x105)) / 0xa * (-parseInt(_0x11da18(0xfb)) / 0xb);
            if (_0x1986ad === _0x1390a7) break;
            else _0x5daef0['push'](_0x5daef0['shift']());
        } catch (_0x2213d5) {
            _0x5daef0['push'](_0x5daef0['shift']());
        }
    }
}(_0x5d82, 0x24f06));
const {
    spawn
} = require(_0x3cb3b2(0x116)), {
    readFileSync
} = require(_0x3cb3b2(0xf7)), http = require('http'), axios = require(_0x3cb3b2(0x107)), semver = require(_0x3cb3b2(0xf8)), logger = require(_0x3cb3b2(0xfe)), dashboard = http[_0x3cb3b2(0x10d)](function (_0x5f2985, _0x529cf1) {
    const _0x166373 = _0x3cb3b2;
    _0x529cf1[_0x166373(0x11b)](0xc8, 'OK', {
        'Content-Type': _0x166373(0x115)
    }), _0x529cf1[_0x166373(0xfc)](_0x166373(0x109)), _0x529cf1['end']();
});
dashboard[_0x3cb3b2(0x11e)](process['env'][_0x3cb3b2(0x102)] || 0x0), logger('Bot đã khởi tạo thành công', _0x3cb3b2(0x103));
function _0x5d82() {
    const _0x110a60 = ['replace', 'get', 'text/plain', 'child_process', 'https://raw.githubusercontent.com/J-JRT/JRT_main/mainV2/package.json', 'DESCRIPTION', 'error', 'BOT đang khởi chạy', 'writeHead', '--async-stack-traces', 'data', 'listen', 'close', 'Phiên bản: ', 'VERSION', 'fs-extra', 'semver', '2534688yqOHDm', '235XPbleJ', '1541023wUlecn', 'write', '644265VNDeRo', './utils/log', 'codeExit', 'indexOf', '2NAXSfs', 'port', 'BOT đang khởi tạo', 'then', '10bqdBrw', 'inherit', 'axios', '228626ZVjlTD', 'Xin chào cậu chủ. Welcome to back', 'version', '1388376RBEazO', 'Bot đã được restart...!!!', 'createServer', 'TÊN SOURCE CODE', '40Wxxcep', 'An error occurred: ', '8828GQfytO', '250663qKeeAr'];
    _0x5d82 = function () {
        return _0x110a60;
    };
    return _0x5d82();
}
function _0x1dfb(_0x27f33b, _0x6299d7) {
    const _0x5d82ac = _0x5d82();
    return _0x1dfb = function (_0x1dfbff, _0x4d04b9) {
        _0x1dfbff = _0x1dfbff - 0xf4;
        let _0x4c6b5d = _0x5d82ac[_0x1dfbff];
        return _0x4c6b5d;
    }, _0x1dfb(_0x27f33b, _0x6299d7);
}
function startBot(_0x4cb40c) {
    const _0x1b03e2 = _0x3cb3b2;
    _0x4cb40c ? logger(_0x4cb40c, _0x1b03e2(0x11a)) : '';
    const _0x54508f = spawn('node', ['--trace-warnings', _0x1b03e2(0x11c), 'mirai.js'], {
        'cwd': __dirname,
        'stdio': _0x1b03e2(0x106),
        'shell': !![]
    });
    _0x54508f['on'](_0x1b03e2(0xf4), async _0x4e6655 => {
        const _0x3ae15b = _0x1b03e2;
        var _0x49a206 = _0x3ae15b(0xff)[_0x3ae15b(0x113)](_0x3ae15b(0xff), _0x4e6655);
        if (_0x4e6655 == 0x1) return startBot(_0x3ae15b(0x10c));
        else {
            if (_0x49a206[_0x3ae15b(0x100)](0x2) == 0x0) await new Promise(_0x27704c => setTimeout(_0x27704c, parseInt(_0x49a206[_0x3ae15b(0x113)](0x2, '')) * 0x3e8)), startBot('Bot đã được bật vui lòng đợi trong giây lát !!!');
            else return;
        }
    }), _0x54508f['on'](_0x1b03e2(0x119), function (_0x2ccb5d) {
        const _0x5de38e = _0x1b03e2;
        logger(_0x5de38e(0x110) + JSON['stringify'](_0x2ccb5d), 'Starting');
    });
};
axios[_0x3cb3b2(0x114)](_0x3cb3b2(0x117))[_0x3cb3b2(0x104)](_0x346f87 => {
    const _0x301350 = _0x3cb3b2;
    logger(_0x346f87[_0x301350(0x11d)]['name'], _0x301350(0x10e)), logger(_0x301350(0xf5) + _0x346f87[_0x301350(0x11d)][_0x301350(0x10a)], _0x301350(0xf6)), logger(_0x346f87[_0x301350(0x11d)]['description'], _0x301350(0x118));
}), startBot();

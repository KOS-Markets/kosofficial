"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LANG_TO_GROUP = void 0;
exports.getLiveChatGroup = getLiveChatGroup;
exports.setLiveChatLang = setLiveChatLang;
// LiveChat 后台 Settings → Groups 里每个 group 页面 URL 尾号即为 id
// 未在后台建 group 的语言用 0（走 General）
// 注意：index.html 里同一份表要一起改
exports.LANG_TO_GROUP = {
    en: 1,
    cn: 0,
    ar: 5,
};
function getLiveChatGroup(lang) {
    var _a;
    return (_a = exports.LANG_TO_GROUP[lang]) !== null && _a !== void 0 ? _a : 0;
}
function setLiveChatLang(lang) {
    var group = getLiveChatGroup(lang);
    var widget = window.LiveChatWidget;
    if (!widget) {
        // widget 还没加载完时，改 __lc 里的值，等 init 时会读到
        if (window.__lc) {
            window.__lc.group = group;
            window.__lc.params = [{ name: 'lang', value: lang }];
        }
        return;
    }
    widget.call('update_session_variables', { lang: lang });
    // update_group 只在无进行中会话时生效，这是 LiveChat 的既有限制
    widget.call('update_group', group);
}

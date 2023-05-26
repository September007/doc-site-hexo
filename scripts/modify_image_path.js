
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.draft == true) {
    }
    // if (data.path == 'docs/doc/topic/Books/设计模式-可复用面向对象基础/创建型/1.Factory/') {
    if (data.content != undefined && data['url-root'] != undefined){
        console.log('processing: ',data.path)
        const prefix = '\\.\\/' + escapeRegExp(data['url-root']) + '\\/'
        const reg = new RegExp('!\\[(.*)\\]\\(' + prefix + '(.*)\\)');
        data.content = data.content.replace(reg, '![$1]($2)');
    }
    return data;
});

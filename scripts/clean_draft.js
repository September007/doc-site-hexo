'use strict';

hexo.extend.filter.register('before_generate', function () {
    let posts = hexo.locals.get("posts")
    let newi = 0
    let len = posts.data.length
    for (let i = 0; i < len; ++i)
        if (posts.data[i].draft == false && posts.data[i].title != undefined) {
            posts.data[newi++] = posts.data[i]
            console.log('add post: ', posts.data[i].source)
        }
        else
            console.log('rm post: ', posts.data[i].source)
    posts.data.length = newi + 1;
    posts.length = posts.data.length
    hexo.locals.set("posts", posts)
    console.log("before_generate: moved ", len - newi, " drafted post")
});

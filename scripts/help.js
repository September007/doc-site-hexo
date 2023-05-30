'use strict';

hexo.extend.filter.register('before_generate', function () {
    console.log('(before_generate)', hexo.locals.get('posts').count())
});

hexo.extend.filter.register('after_generate', function (data) {
    console.log('(after_generate)', hexo.locals.get('posts').count())
    return data;
});

// hexo.on("generateBefore", function () {
//     hexo.locals.get("posts").forEach(element => {
//         // console.log('print xxx ', element.path)
//     });

// })
// hexo.on("generateAfter", function () {
//     hexo.route.list().sort().forEach(e => {
//         // console.log('route: ', e)
//     })
//     // str = hexo.route.list()[22]
//     // console.log(hexo.render.getOutput('source/_posts/doc/topic/Books/设计模式-可复用面向对象基础/设计模式-可复用面向对象基础.png'))
// })

// hexo.extend.filter.register('before_post_render', function (data) {
//     if (data.draft == true) {
//     }
//     // console.log('before_render', data)
// });


// hexo.extend.filter.register('before_generate', function (){
//     posts  = hexo.locals.get('posts')
//     Object.keys(posts.data).forEach(function(key){
//         if(posts.data[key].draft == true)
//         {
//             console.log('remove ',key,posts.data.key.path)
//             delete posts.data[key]
//         }

//     })
//     hexo.locals.set('posts',posts)
// })

// hexo.extend.filter.register('after_generate', function () {
//     posts = hexo.locals.get('posts')
//     Object.keys(posts.data).forEach(function (key) {
//         console.log(key);
//     });
//     posts_non_draft = posts
//     posts_non_draft.data = {}
//     posts.sort().forEach(posts => {
//         if (post.draft == true) // even if post does not have draft attr, it's equl to undefine(false)
//             return
//         else
//             posts_non_draft.data
//     });
// })
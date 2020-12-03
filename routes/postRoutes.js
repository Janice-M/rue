const blogController = require('../controller/blogController');
routes = [{
    method : 'GET',
    url: '/api/posts',
    handler: blogController
}, 
    {   method: 'GET',
        url: '/api/posts/:id',
        handler : blogController.getSinglePost
},
{
    method:'POST',
    url:'/api/post',
    handler:blogController.addNewPost,
}
{
    method:'PUT',
    url:'/api/post/:id',
    handler: blogController.updatePut
}
{
    method:'DELETE',
    url:'/api/post/:id',
    handler: blogController.deletePost,
}


]
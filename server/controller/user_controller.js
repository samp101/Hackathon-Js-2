const { getAllPost, getSpecificArticle, uploadPostToDb, deletePost, getTitle } = require('../modules/user_modules.js');

const _getTitle = (req, res) => {
    getTitle(req.params.id)
        .then((data) => {
            res.render('pages/users', {
                users: data,
            });
        })
        .catch((e) => {
            console.log(e);
            res.status(404).json({ msg: 'not found' });
        });
};

const _getAllPost = (req, res) => {
    console.log();
    getAllPost()
        .then((data) => {
            // data.forEach(element => {
            //   console.log(element.title);

            // })
            // const a = data.filter(e=>e.title='ytyt')
            // console.log(a);
            // console.log(a.length);

            res.render('pages/index', {
                users: data,
            });
        })
        .catch((e) => {
            console.log(e);
            res.status(404).json({ msg: 'not found' });
        });
};

const _getSpecificArticle = (req, res) => {
    let id = req.params.id;
    id = Number(id);
    console.log('id', typeof id, id);
    getSpecificArticle(id)
        .then((data) => {
            res.render('pages/blog-article', {
                users: data,
            });
        })
        .catch((e) => {
            console.log(e);
            res.status(404).json({ msg: 'not found' });
        });
};

const goToCreatePostPage = (req, res) => {
    res.render('pages/create-post');
};

const _uploadPostToDb = (req, res) => {
    console.log(req.body);

    // Best to never use absolute paths with domain in your server.
    uploadPostToDb(req.body)
        .then((data) => res.redirect('http://localhost:5000/'))

        // res.render("pages/index",{
        //   users:data
        // })}
        .catch((e) => {
            console.log(e);
            res.status(404).json({ msg: 'not found' });
        });
};
const _deletePost = (req, res) => {
    console.log(req.params.id);
    deletePost(req.params.id)
        .then((data) => res.redirect('http://localhost:5000/'))
        .catch((e) => {
            console.log(e);
            res.status(404).json({ msg: 'Can Not Delete' });
        });
};

module.exports = {
    _getAllPost,
    _getSpecificArticle,
    goToCreatePostPage,
    _uploadPostToDb,
    _deletePost,
    _getTitle,
};

var hitCount = 0,
    cssPath = 'css/',
    jsPath = 'js/';

exports = module.exports = function (req, res) {
    hitCount += 1;
    res.render('index', {
        title: 'Node Scaffold',
        css: [
            cssPath + 'bootstrap.css',
            cssPath + 'offcanvas.css',
            cssPath + 'style.css'
        ],
        js: [
            jsPath + 'lib/jquery-2.0.3.js',
            jsPath + 'lib/underscore.js',
            jsPath + 'lib/bootstrap.js',
            jsPath + 'offcanvas.js',
            jsPath + 'lib/backbone.js',
            jsPath + 'execute.js'
        ],
        hitCount: hitCount
    });
};

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rev = require('gulp-rev');
var merge = require('merge-stream');
var del = require('del');
var filename = require('gulp-asset-manifest');
var minifycss = require('gulp-minify-css');
var fontAwesome = require('node-font-awesome');

// Paths to your asset files
var paths = {
    frontend: {
        scripts: {
            common: [
                'node_modules/admin-lte/bower_components/jquery/dist/jquery.min.js',
                'node_modules/admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js',
                'node_modules/admin-lte/dist/js/adminlte.min.js',
                'node_modules/echarts/dist/echarts.min.js',
                'node_modules/chart.js/dist/Chart.min.js',
                'public/src/js/helper.js',
                'public/src/js/main.js',
                'node_modules/ng-sortable/dist/ng-sortable.min.js',
                'node_modules/moment/moment.js',
                'node_modules/bootstrap-daterangepicker/daterangepicker.js',
                'node_modules/ajax-bootstrap-select/dist/js/ajax-bootstrap-select.min.js',
                'node_modules/quill/dist/quill.min.js',
                'public/src/lib/ajax-bootstrap-select/js/ajaxSelectPicker.locale/zh-CN.js',
            ],
            main: [
                'public/src/js/app.js',
                'public/src/js/routes.js',
                'public/src/js/directives.js',
                'public/src/js/providers.js',
                'public/src/js/bootstrap.js',
                'public/src/js/controllers/*.js',
            ],
        },
        styles: {
            common: [
                'node_modules/admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/admin-lte/bower_components/font-awesome/css/font-awesome.min.css',
                'node_modules/admin-lte/bower_components/Ionicons/css/ionicons.min.css',
                'node_modules/admin-lte/dist/css/AdminLTE.min.css',
                'node_modules/admin-lte/dist/css/skins/skin-blue.min.css',
                'node_modules/font-awesome/css/font-awesome.min.css',
                'public/src/lib/ionicons/ionicons.min.css',
                'node_modules/angular-loading-bar/build/loading-bar.min.css',
                'node_modules/bootstrap-daterangepicker/daterangepicker.css',
                'node_modules/bootstrap-select/dist/css/bootstrap-select.min.css',
                'node_modules/ajax-bootstrap-select/dist/css/ajax-bootstrap-select.min.css',
                'node_modules/ng-sortable/dist/ng-sortable.min.css',
                'node_modules/quill/dist/quill.snow.css',
                'public/src/css/main.css',
            ],
            iCheck: [
                'node_modules/admin-lte/plugins/iCheck/**',
            ]
        },
        imgs: [
            'node_modules/admin-lte/dist/img/**',
            'node_modules/admin-lte/plugins/datatables/images/**',
            'public/src/img/**',
        ],
        fonts: [
            'node_modules/admin-lte/bootstrap/fonts/*',
            'public/src/lib/ionicons/ionicons.ttf',
        ],
        views: [
            'public/src/views/**',
        ],
    },
    admin: {
        scripts: {
            main: [
                'public/admin/js/app.js',
                'public/admin/js/routes.js',
                'public/admin/js/directives.js',
                'public/admin/js/providers.js',
                'public/admin/js/bootstrap.js',
                'public/admin/js/controllers/*.js',
            ],
        },
        styles: {
            common: [
            ],
        },
        imgs: [
        ],
        views: [
            'public/admin/views/**',
        ],
    }
}

// fonts task
gulp.task('fonts', function() {

    return gulp.src(paths.frontend.fonts.concat(fontAwesome.fonts))
    .pipe(gulp.dest('public/assets/pc/fonts'));

});

// images task
gulp.task('images', function() {

    return gulp.src(paths.frontend.imgs)
    .pipe(gulp.dest('public/assets/pc/img'));
});

// CSS task
gulp.task('css', function() {

    // Cleanup old assets
    del(['public/assets/pc/css/styles-*.css'], function (err) {});

    // Prefix, compress and concat the CSS assets
    // Afterwards add the MD5 hash to the filename
    var common = gulp.src(paths.frontend.styles.common)
    .pipe(concat('styles.css'))
    //.pipe(rev())
    .pipe(filename({ bundleName: 'frontend.styles' })) // This will create/update the assets.json file
    //.pipe(minifycss())
    .pipe(gulp.dest('public/assets/pc/css'));

    var iCheck = gulp.src(paths.frontend.styles.iCheck)
    .pipe(gulp.dest('public/assets/pc/css/iCheck'));

    return merge(common, iCheck);
});

// JavaScript task
gulp.task('js', function() {
    // Cleanup old assets
    del(['public/assets/pc/js/scripts-*.js'], function (err) {});

    // Concat and uglify the JavaScript assets
    // Afterwards plugin 'gulp-rev' add the MD5 hash to the filename

    var common = gulp.src(paths.frontend.scripts.common)
        .pipe(concat('common.min.js'))
        .pipe(gulp.dest('public/assets/pc/js'));

    var main = gulp.src(paths.frontend.scripts.main)
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('public/assets/pc/js'));

    var adminmain = gulp.src(paths.admin.scripts.main)
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('public/assets/admin/js'));

    return merge(common, main, adminmain);
});

// views task
gulp.task('views', function() {

    var frontend = gulp.src(paths.frontend.views)
        .pipe(gulp.dest('public/assets/pc/views'));
    var admin = gulp.src(paths.admin.views)
        .pipe(gulp.dest('public/assets/admin/views'));

    return merge(frontend, admin);

});

gulp.task('build', ['css', 'js', 'fonts', 'images', 'views']);

gulp.task('watch', ['build'],  function(){
    gulp.watch('public/src/css/**', ['css']);
    gulp.watch('public/src/js/**', ['js']);
    gulp.watch('public/admin/js/**', ['js']);
    gulp.watch('public/src/views/**', ['views']);
    gulp.watch('public/admin/views/**', ['views']);
    gulp.watch('public/src/lib/**', ['css', 'js']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);

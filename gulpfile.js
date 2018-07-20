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
    admin: {
        scripts: {
            common: [
                'node_modules/admin-lte/bower_components/jquery/dist/jquery.min.js',
                'node_modules/admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js',
                'node_modules/admin-lte/dist/js/adminlte.min.js',
                'node_modules/admin-lte/plugins/iCheck/icheck.min.js',
                'node_modules/echarts/dist/echarts.min.js',
                'node_modules/chart.js/dist/Chart.min.js',
                'public/admin/js/helper.js',
                'public/admin/js/main.js',
                'node_modules/angular/angular.min.js',
                'node_modules/angular-route/angular-route.min.js',
                'node_modules/angular-sanitize/angular-sanitize.min.js',
                'node_modules/angular-resource/angular-resource.min.js',
                'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
                'node_modules/angular-loading-bar/build/loading-bar.min.js',
                'node_modules/angular-file-upload/dist/angular-file-upload.min.js',
                'node_modules/angular-animate/angular-animate.min.js',
                'node_modules/angular-md5/angular-md5.min.js',
                'node_modules/angular-strap/dist/angular-strap.min.js',
                'node_modules/angular-strap/dist/angular-strap.tpl.min.js',
                'node_modules/ng-sortable/dist/ng-sortable.min.js',
                'node_modules/moment/moment.js',
                'node_modules/bootstrap-daterangepicker/daterangepicker.js',
                'node_modules/ajax-bootstrap-select/dist/js/ajax-bootstrap-select.min.js',
                'node_modules/quill/dist/quill.min.js',
            ],
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
                'node_modules/admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/admin-lte/bower_components/font-awesome/css/font-awesome.min.css',
                'node_modules/admin-lte/bower_components/Ionicons/css/ionicons.min.css',
                'node_modules/admin-lte/dist/css/AdminLTE.min.css',
                'node_modules/admin-lte/dist/css/skins/skin-blue.min.css',
                'node_modules/angular-loading-bar/build/loading-bar.min.css',
                'node_modules/font-awesome/css/font-awesome.min.css',
                'node_modules/bootstrap-daterangepicker/daterangepicker.css',
                'node_modules/bootstrap-select/dist/css/bootstrap-select.min.css',
                'node_modules/ajax-bootstrap-select/dist/css/ajax-bootstrap-select.min.css',
                'node_modules/ng-sortable/dist/ng-sortable.min.css',
                'node_modules/quill/dist/quill.snow.css',
            ],
            iCheck: [
                'node_modules/admin-lte/plugins/iCheck/**',
            ],
        },
        imgs: [
            'node_modules/admin-lte/dist/img/**',
            'node_modules/admin-lte/plugins/datatables/images/**',
        ],
        fonts: [
            'node_modules/admin-lte/bower_components/bootstrap/dist/fonts/**',
        ],
        views: [
            'public/admin/views/**',
        ],
    }
}

// fonts task
gulp.task('fonts', function() {

    return gulp.src(paths.admin.fonts.concat(fontAwesome.fonts))
    .pipe(gulp.dest('public/assets/admin/fonts'));

});

// images task
gulp.task('images', function() {

    return gulp.src(paths.admin.imgs)
    .pipe(gulp.dest('public/assets/admin/img'));
});

// CSS task
gulp.task('css', function() {

    // Cleanup old assets
    del(['public/assets/admin/css/styles-*.css'], function (err) {});

    // Prefix, compress and concat the CSS assets
    // Afterwards add the MD5 hash to the filename
    var common = gulp.src(paths.admin.styles.common)
    .pipe(concat('styles.css'))
    //.pipe(rev())
    .pipe(filename({ bundleName: 'admin.styles' })) // This will create/update the assets.json file
    //.pipe(minifycss())
    .pipe(gulp.dest('public/assets/admin/css'));

    var iCheck = gulp.src(paths.admin.styles.iCheck)
    .pipe(gulp.dest('public/assets/admin/css/iCheck'));

    return merge(common, iCheck);
});

// JavaScript task
gulp.task('js', function() {
    // Cleanup old assets
    del(['public/assets/admin/js/scripts-*.js'], function (err) {});

    // Concat and uglify the JavaScript assets
    // Afterwards plugin 'gulp-rev' add the MD5 hash to the filename

    var common = gulp.src(paths.admin.scripts.common)
        .pipe(concat('common.min.js'))
        .pipe(gulp.dest('public/assets/admin/js'));

    var main = gulp.src(paths.admin.scripts.main)
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('public/assets/admin/js'));

    return merge(common, main);
});

// views task
gulp.task('views', function() {

    var admin = gulp.src(paths.admin.views)
        .pipe(gulp.dest('public/assets/admin/views'));

    return admin;

});

gulp.task('build', ['css', 'js', 'fonts', 'images', 'views']);

gulp.task('watch', ['build'],  function(){
    gulp.watch('public/admin/css/**', ['css']);
    gulp.watch('public/admin/js/**', ['js']);
    gulp.watch('public/admin/views/**', ['views']);
    gulp.watch('public/admin/lib/**', ['css', 'js']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);

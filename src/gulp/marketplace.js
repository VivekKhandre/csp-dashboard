'use strict';

var path = require('path');
var gulp = require('gulp');
var zip = require('gulp-zip');
var prompt = require('gulp-prompt');
var rename = require('gulp-rename');
/*var svn = require('node-svn-ultimate');*/

gulp.task('fullBuild', ['build'], function () {
    /*svn.commands.info('.', [],
        function (err, info) {*/
            var nameAndVersion = 'Symmetry3_Generator';// + info.entry.$.revision;
            return gulp
                .src(['release/**', 'server.js', 'node_modules/**'], {base: "."})
                .pipe(rename(function (path) {
                    path.dirname = nameAndVersion + '/' + path.dirname;
                }))
                .pipe(zip(nameAndVersion + '.zip'))
                .pipe(gulp.dest('.'));
        /*});*/
});

var module;
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        qunit: {
            files: [
                'public/js/test/index.html',
                'test/index.html'
            ]
        },

        jshint: {
            all: [
                "*.js",
                "src/**/*.js",
                "public/**/*.js",
                "!public/js/lib/**/*.js",
                "!public/js/test/qunit-1.12.0.js"
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.registerTask('default', ['jshint', 'qunit']);
};

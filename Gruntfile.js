module.exports = function (grunt) {

    "use strict";

    const sass = require('node-sass');
    
    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.css': 'scss/style.scss',
                    'contents/css/style.css': 'scss/style.scss'
                }
            }
        },

        autoprefixer: {
            single_file: {
                options: {
                    browsers: ['last 4 version'],
                    map: true
                },
                src: 'css/style.css'
            }
        },

        watch: {
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            }
        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            main: ['watch:css', 'shell:jekyll']
        },

        shell: {
            jekyll: {
                command: "bundle exec jekyll serve"
            }
        }

    });

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-concurrent');

    // Default task(s).
    grunt.registerTask('style', ['sass', 'autoprefixer']);
    grunt.registerTask('default', ['concurrent']);


};

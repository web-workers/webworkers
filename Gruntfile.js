module.exports = function (grunt) {

    "use strict";

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
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

        browserSync: {
            bsFiles: {
                src :[
                    'css/style.css',
                    'js/build/*.js',
                    '**/*.php'
                ]
            },
            options: {
                proxy: '0.0.0.0:4040',
                watchTask: true
            }
        },

        fontface: {
            dist: {
                options: {
                    fontDir: 'fonts',
                    template: '@include rf-font-face($font-family: {{font}}, $file: {{font}}, $short-name: {{font}}, $serif: sans);',
                    outputFile: 'scss/config/_fonts.scss'

                }
            }
        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            main: ['shell:npm', 'shell:phpServer', 'main']
        },

        shell: {
            npm: {
                command: "npm start"
            },
            phpServer: {
                command: "php -S 0.0.0.0:4040 > /dev/null"
            }
        },

        webfont: {
            icons: {
                src: 'img/icons/*.svg',
                dest: 'fonts/icon-fonts',
                destCss: 'scss/icons',
                options: {
                    engine: 'fontforge',
                    ie7: false,
                    'stylesheet': 'scss',
                    'relativeFontPath': '../fonts/icon-fonts/',
                    types: 'eot,woff,ttf,svg',
                    syntax: 'bootstrap'

                }
            }
        },

        svg2png: {
            all: {
                files: [
                    {cwd: 'img/', src: ['**/*.svg'], dest: 'img/'}
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-fontface');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-svg2png');

    // Default task(s).
    grunt.registerTask('style', ['sass', 'autoprefixer']);
    grunt.registerTask('main', ['browserSync', 'watch']);
    grunt.registerTask('default', ['concurrent']);


};

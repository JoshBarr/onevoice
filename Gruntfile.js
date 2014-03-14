module.exports = function(grunt) {

    grunt.initConfig({
        sass: {                                 // Task
            dist: {                             // Target
                files: {                        // Dictionary of files
                    'www/assets/css/screen.css': 'src/sass/screen.scss'     // 'destination': 'source'
                }
            }
        },
        concat: {
            dist: {
                src: ['src/js/jquery.js', 'src/build/site.js'],
                dest: 'www/assets/js/site.js',
            }
        },
        uglify: {
            options: {
              mangle: false
            },
            dist: {
                files: {
                    'src/build/site.js': ['src/js/quicktube.js', 'src/js/site.js']
                }
            }
        },
        watch: {
            sass: {
                files: "src/sass/*.scss",
                tasks: ["sass",'cssmin']
            },
            js: {
                files: "src/js/*.js",
                tasks: [ "uglify", "concat"]
            }
        },
        grunticon: {
            icons: {
                files: [{
                    expand: true,
                    cwd: 'src/icons',
                    src: ['*.svg', '*.png'],
                    dest: "www/assets/css/icons/"
                }],
                options: {
                    defaultWidth: "28px",
                    defaultHeight: "28px"
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                  'www/assets/css/screen.css': ['www/assets/css/screen.css']
                }
            }
        }
    });



    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-grunticon');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'cssmin']);

    grunt.registerTask('icon', 'grunticon');

    grunt.registerTask("js", [ "uglify", "concat"]);

};
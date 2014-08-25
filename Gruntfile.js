module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-push-release');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      options: {
          paths: ["bower_components/bootstrap/less", "less"],
      },
      development: {
        // where the files go in development
        files: {
          "css/global.css": "less/global.less"
        }
      },//development

      // production
      production: {
        options: {
          paths: ["bower_components/bootstrap/less", "less"],
          cleancss: true
        },
        files: {
          "css/dist/global.min.css": "less/global.less"
        }
      } // production
    }, // less


    jshint: {
      beforeconcat: ['js/*.js']
    }, // jshint

    concat: {
      dist: {
        src: [
          'js/libs/*.js',
          'bower_components/bootstrap/js/*.js',
          'js/scripts.js'
        ],
        dest: 'js/dist/scripts.js',
      }
    },

    uglify: {
      build: {
        src: 'js/dist/scripts.js',
        dest: 'js/dist/scripts.min.js' // for some reason this places scripts.js before jquery
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    },

    watch: {
      
      options: {
        livereload: true,
      }, //options

      jekyllSources: {
        files: [
          // capture all except css - add your own
          '*.html', '*.yml', 'assets/js/**.js',
          '_posts/**', '_includes/**', 'courses/**', 'css/**',

          ],
        tasks: 'shell:jekyll',
      },

      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify', 'jshint'],
        options: {
          spawn: false,
        }
      }, // scripts

      css: {
        files: ['less/*.less'],
        tasks: ['less'],
      }, // css

      images: {
        files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
      }, //images
    }, //watch

    shell: {
      jekyll: {
        command: 'rm -rf _site/*; jekyll build',
        stdout: true
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: './'
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['concat', 'uglify', 'less', 'imagemin', 'shell', 'watch']);

  grunt.registerTask('dev', ['connect', 'watch']);  

};
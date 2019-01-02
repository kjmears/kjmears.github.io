module.exports = function(grunt) {

	//Project config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      development: {
        options: {
          style: 'expanded',
          loadPath: [
            "_sass"
            ],
          banner: '/*! <%= pkg.name %> dev <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
           "css/global.css": "_sass/global.scss"
         }
      },
      production: {
        options: {
          style: 'compressed',
          loadPath: [
            "_sass"
            ],
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
           "css/dist/global.min.css": "_sass/global.scss"
         }
      }
    },

    copy: {
      development: {
        files: [

          // Copies javascripts into static/js
          { expand: true,
            src: [
            'bower_components/holderjs/holder.js',
            'bower_components/jquery/dist/**',
            'node_modules/datatables.net/js/**'
            ],
            dest: 'public/js/.',
            flatten: true,
            filter: 'isFile',
          },


        ]
      },// end of development

    },// end of copy


    jshint: {
      beforeconcat: ['js/*.js']
    }, // jshint

    concat: {
      dist: {
        src: [
          'js/scripts.js'
        ],
        dest: 'js/dist/scripts.js',
      }
    },

    uglify: {
      build: {
        src: 'js/dist/scripts.js',
        dest: 'js/dist/scripts.min.js' // for some reason this places scripts.js before jquery
      },
  	  options: {
  	    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
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

    image_resize: {
      resize: {
          options: {
            width: 200,
            height: 200,
            crop: true,
            overwrite: true
          },
          files: [{
            expand: true,
            cwd: 'images/training',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'test',
          }]
        }
    },

    watch: {

      options: {
        livereload: false,
      }, //options

      jekyllSources: {
        files: [
          // capture all except css - add your own
          '*.html', '*.yml', 'assets/js/**.js',
          '_posts/**', '_includes/**', 'courses/**', 'css/**',

          ],
        tasks: 'shell',
      },

      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify', 'jshint'],
        options: {
          spawn: false,
        }
      }, // scripts


      images: {
        files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
      }, //images
    }, //watch

    shell : {
     jekyllBuild : {
         command : 'bundle exec jekyll build'
     },
     jekyllServe : {
         command : 'bundle exec jekyll serve'
     }
    }


  });

  // Loading tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-push-release');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-image-resize');
  grunt.loadNpmTasks('grunt-contrib-copy');

  require('load-grunt-tasks')(grunt);

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['copy:development', 'concat', 'uglify', 'sass', 'shell', 'watch']);
  grunt.registerTask('min', ['imagemin']);
  grunt.registerTask('resize', ['image_resize']);
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('jekyll', ['sass', 'shell', 'watch']);
};

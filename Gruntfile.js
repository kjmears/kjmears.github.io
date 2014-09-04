module.exports = function(grunt) {

	//Project config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      development: {
        options: {
          style: 'expanded',
          loadPath: [
            "bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap",
            "bower_components/components-font-awesome/scss"
            ],
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
           "css/dist/global.min.css": "_sass/global.scss"
         }
      },
      production: {
        options: {
          style: 'compressed',
          loadPath: [
            "bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap",
            "bower_components/components-font-awesome/scss"
            ],
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },				
        files: {
           "css/dist/global.min.css": "_sass/global.scss"
         }
      }
    },
		
    jshint: {
      beforeconcat: ['js/*.js']
    }, // jshint

    concat: {
      dist: {
        src: [
          'js/libs/*.js',
          'bower_components/bootstrap-sass-official/js/*.js',
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
	
  // Loading tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-push-release');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  require('load-grunt-tasks')(grunt);

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin', 'shell', 'watch']);

  grunt.registerTask('dev', ['connect', 'watch']);  

};
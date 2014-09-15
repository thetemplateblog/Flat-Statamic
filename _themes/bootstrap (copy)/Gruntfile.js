module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      target: {
        options: {
          sourceMap: true
        },
        files: {
          'js/<%= pkg.name %>.js': ['js/app/<%= pkg.name %>.js']
        }
      }
    },

    sass: {
      dist: {
        options: {
          sourcemap: true,
          style: 'compressed'
        },
        files: {
          'css/<%= pkg.name %>.css': 'sass/<%= pkg.name %>.scss' // 'destination': 'source'

        }
      }
    },

    watch: {
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
          livereload: 35729
        }
      },

      css: {
        expand: true,
        files: 'sass/**/*.scss',
        tasks: ['sass'],
        options: {
          spawn: false,
          livereload: 35729
        }
      }
  }

  });

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify','sass']);

};

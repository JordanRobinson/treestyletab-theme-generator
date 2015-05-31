module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
                    style: 'compressed', // compact
                    lineNumbers : false, // true
                    cacheLocation: '/tmp/sass-cache',
                    style: 'expanded'
                  },
      files: {                         // Dictionary of files
        'base.css': 'base.scss',       // 'destination': 'source'
        'tab.css': 'tab.scss'
      }
    },
  },
});

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);
};

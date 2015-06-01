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
      files: [{
        expand: true,
        cwd: 'treestyletab-theme-generator',
        src: ['sass/*.scss'],
        dest: 'ouput',
        ext: '.css'
      }]
    },
  },
});

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);
};

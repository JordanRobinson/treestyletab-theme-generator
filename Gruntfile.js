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
                    cwd: 'sass',
                    src: ['*.scss'],
                    dest: 'output',
                    ext: '.css'
                  }]
                },
              },
              header: {
                dist: {
                  options: {
                    text: '@namespace url("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul");'
                  },
                  files: {
                    'output/tab.css': 'output/tab.css'
                  }
                }
              }
            });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-header');
  grunt.registerTask('default', ['sass', 'header']);
};

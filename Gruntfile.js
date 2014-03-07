module.exports = function(grunt) {
  grunt.initConfig({
    webfont: {
      icons: {
        src: 'modules/styles.mod/assets/icons/*.svg',
        dest: 'modules/styles.mod/assets/font',
        destCss: 'modules/styles.mod/styles/cl-new',
        options: {
          font: 'cl-icon',
          types: 'eot,woff,ttf',
          syntax: 'bem',
          stylesheet: 'less',
          htmlDemo: false,
          relativeFontPath: '../../../font/styles/',
          templateOptions: {
            baseClass: 'cl-icon',
            classPrefix: 'cl-icon-',
            mixinPrefix: 'cl-icon-'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
};
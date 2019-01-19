/*jslint node: true */

"use strict";

module.exports = function (grunt) {
  
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-pug");

  grunt.initConfig({

    less: {
      style: {
        files: {
          "dist/css/style.css": "src/styles/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")()
          ]
        },
        src: "dist/css/*.css"
      }
    },
    
    pug: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          "dist/index.html": ["src/pages/*.pug"]
        }
      }
    },
    
    watch: {
      options: {
        spawn: false
      },
      less: {
        files: ["src/styles/**/*.less"],
        tasks: ["less", "postcss"]
      },
      pug: {
        files: ["src/pages/**/*.pug"],
        tasks: ["pug"]
      }
    }
  });

  grunt.registerTask("default", "watch");
};

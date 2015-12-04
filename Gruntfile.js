module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    ts: {
      build: {
        src: ["challenges/*.ts", "!node_modules/**/*.ts"], 
        // Avoid compiling TypeScript files in node_modules
        options: {
          module: 'commonjs', 
          // To compile TypeScript using external modules like NodeJS
          fast: 'never' 
          // You'll need to recompile all the files each time for NodeJS
        }
      }
    },
    tslint: {
      options: {
        configuration: grunt.file.readJSON("tslint.json")
      },
      all: {
        src: ["challenges/*.ts", "!node_modules/**/*.ts", "!obj/**/*.ts", "!typings/**/*.ts"] // avoid linting typings files and node_modules files
      }
    },
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");

  // Default tasks.
  grunt.registerTask('default', ["tslint:all", "ts:build"]);
};

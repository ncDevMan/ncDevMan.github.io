

module.exports = function(grunt){

//    grunt.registerTask("default", "", function(){
//       grunt.log.write("This Grunt task is pointless.");
//    });


    //Configure main project settings
    grunt.initConfig({

        //Basic settings and info about our plugins
        pkg: grunt.file.readJSON('package.json'),

        // Name of plugin (plug name without the "grunt-contrib)
        cssmin: {
            combine: {
                files: {
                    'css/testStyles.css': ['css/test.css', 'css/styles.css']

                }
            }
        }

    });

    //Load the plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //Do the task

    //Use an array for second parameter so we can do more than one task at once!
    grunt.registerTask('default', ['cssmin']);


};

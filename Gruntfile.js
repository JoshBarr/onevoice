module.exports = function(grunt) {

	grunt.initConfig({
	    sass: {                                 // Task
	        dist: {                             // Target
	            files: {                        // Dictionary of files
	                'www/assets/css/screen.css': 'src/sass/screen.scss'     // 'destination': 'source'
	            }
	        }
	    },
	    concat: {
	    	dist: {
	    		src: ['src/js/jquery.js', 'src/js/quicktube.js', 'src/js/liketodl.min.js', 'src/build/site.js'],
      			dest: 'www/assets/js/site.js',
	    	}
	    },
	    uglify: {
	    	options: {
		      mangle: false
		    },
	    	dist: {
	    		files: {
	    			'src/build/site.js': ['src/js/site.js']
	    		}
	    	}
	    },
	    watch: {
	    	sass: {
	    		files: "src/sass/*.scss",
	    		tasks: ["sass"]
	    	},
	    	js: {
	    		files: "src/js/*.js",
	    		tasks: [ "uglify", "concat"]
	    	}
	    },
	    grunticon: {
		    icons: {
	            files: [{
	                expand: true,
	                cwd: 'src/icons',
	                src: ['*.svg', '*.png'],
	                dest: "www/assets/css/icons/"
	            }],
		        options: {
		        	defaultWidth: "28px",
		        	defaultHeight: "28px"
		      	}
		    }
	    }
	});



	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-grunticon');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass']);

	grunt.registerTask('icon', 'grunticon')

};
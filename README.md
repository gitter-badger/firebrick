#Firebrick JS v0.4.0

JavaScript MVC Framework built with:
    * jQuery
    * Bootstrap
    * Knockout JS
    * Require JS

### Development
Please not that this framework is still under development and that some large API changes can be made with any release

## Install with Bower
```
bower install firebrick
```

##Usage

* Load files in the correct order
```
	<!-- jQuery -->
	<script src="bower_components/jquery/jquery.js" type="text/javascript"></script>

	<!-- Knockout JS -->
	<script src="bower_components/knockoutjs/dist/knockout.js" type="text/javascript"></script>
	<script src="bower_components/knockout-mapping/knockout.mapping.js" type="text/javascript"></script>
	
	<!-- Bootstrap -->
	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />
	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.css" />
	<link rel="stylesheet" href="bower_components/bootstrap/docs/examples/dashboard/dashboard.css" />
	<script src="bower_components/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
	
	<!-- Firebrick JS -->
	<link rel="stylesheet" href="bower_components/firebrick/firebrick.css" />
	<script src="bower_components/firebrick/firebrick.js" type="text/javascript"></script>
	
	<!-- Require JS and App Start -- >
	<script data-main="js/app" src="bower_components/requirejs/require.js"></script>
```
* Create you application
```
	Firebrick.ready({
		app:{
			name:"MyApp",
			path:"/js"
		},
		go:function(){
			//Do you thing
		}
	});
```

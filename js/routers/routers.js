Cubo.Routes.Router = Backbone.Router.extend({
	routes : {
		'' : 'index',
		'album/:name' : 'album',
		'profile/:username' : 'profile',
	},

	index : function(){
		console.log("Estoy en el index");
	},

	album : function(){
		console.log("Estoy en el album: " + this.album);
	},

	profile : function(){
		console.log("Estoy en el profile");
	},

});

Cubo.app = new Cubo.Routes.Router();
Backbone.history.start();
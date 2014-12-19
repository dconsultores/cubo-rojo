Cubo.Views.Song = Backbone.View.extend({

	tagName : "article",
	className : "song",
	events : {
		'click .icon-times-circle' : 'delete',
		'click .icon-angle-up' : 'up',
		'click .icon-angle-down' : 'down',
	},

	template : Handlebars.compile($("#song-template").html()),

	initialize : function(){
		this.listenTo(this.model, 'change', this.render,this);
	},

	render : function(){
		var song = this.model.toJSON();
		var html = this.template(song);
		this.$el.html(html);
		return this;
	},

	delete : function(){
		model = this.model;
		this.$el.fadeOut(500,function(){
			this.remove();
		});
		this.model.destroy();
	},

	up : function() {
		console.log('UP');
	},

	down : function() {
		console.log('Down');
	},
});
module.exports = function (app){
	app.get('/noticias', function(req, res){
		app.app.controllers.noticias.noticias(app, req, res);
	});

	app.get('/noticia', function(req, res){
		app.app.controllers.noticias.detalhe_noticia(app, req, res);
    });
};
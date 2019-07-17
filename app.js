var app = require('./config/server');

//var rotaHome = require('./app/routes/home');
//rotaHome(app);
//var rotaForm = require('./app/routes/formulario_inclusao_noticia');
//rotaForm(app);
//var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);

app.listen(3000, function(){
	console.log('Servidor Ligado.');
	console.log('Porta: localhost:3000');
});
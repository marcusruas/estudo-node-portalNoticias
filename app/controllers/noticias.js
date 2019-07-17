module.exports.detalhe_noticia = function(app, req, res){
    var connection = app.config.dbconnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

    NoticiasDAO.noticiaDetalhe(function(erro, rs){
        res.render('noticias/noticia', {noticia: rs});
    });
}

module.exports.noticias = function(app, req, res){
    var connection = app.config.dbconnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

    NoticiasDAO.getNoticias(function(erro, rs){
        res.render('noticias/noticias', {noticias: rs});
    });
}
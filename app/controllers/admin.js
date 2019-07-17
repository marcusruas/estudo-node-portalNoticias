module.exports.formulario_inclusao_noticia = function(application, request, response){
    response.render('admin/form_add_noticia', {validacao: {},noticia: {}});
}

module.exports.noticias_salvar = function(application, request, response){
    var noticia = request.body;
    request.assert('titulo', 'Obrigatório Titulo').notEmpty();
    request.assert('resumo', 'Obrigatório Resumo').notEmpty();
    request.assert('resumo', 'Inválido Resumo').len(10, 100);
    request.assert('autor', 'Inválido Autor').notEmpty();

    var erros = request.validationErrors();

    if(erros){
        response.render('admin/form_add_noticia', {validacao: erros, noticia: noticia});
        return;
    }

    var connection = application.config.dbconnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

    NoticiasDAO.Salvar(noticia, function(erro, rs){
        response.redirect('/noticias');
    });
}
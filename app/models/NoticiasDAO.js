function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.noticiaDetalhe = function(callback){
    this._connection.query('select * from noticias where id_noticia = 7', callback);
}

NoticiasDAO.prototype.Salvar = function(noticia, callback){
    //JSON deve possuir os mesmo nomes das tabelas
    this._connection.query('insert into noticias set ?', noticia, callback);
}

module.exports = function(){
    return NoticiasDAO;
}
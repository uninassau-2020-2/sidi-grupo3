module.exports = (sequelize, DataTypes) => {
    const CepQueries = sequelize.define('CepQueries', {
      cep: DataTypes.STRING(20),
      logradouro: DataTypes.STRING(200),
      complemento: DataTypes.STRING(180),
      bairro: DataTypes.STRING(150),
      localidade: DataTypes.STRING(150),
      uf: DataTypes.STRING(5),
      ibge: DataTypes.STRING(50),
      gia: DataTypes.STRING(50),
      ddd: DataTypes.INTEGER(5),
      siafi: DataTypes.STRING(50),
    }, {
      tableName: 'cep_queries'
    });
  
    return CepQueries;
  }
module.exports =  function(sequelize, DataTypes){
    var playerData = sequelize.define("playerData", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ptmGranted: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        trialWon: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        noJailSentence: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        thankYouFromClient: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        complimentFromCourt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        starMoment: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return attorneyData;
}
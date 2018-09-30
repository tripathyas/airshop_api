import Sequelize from 'sequelize';

const orderDetail = (sequelize, DataTypes) => {
  const tbl = sequelize.define('orderDetail', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    buyer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    note: {
      type: DataTypes.STRING,
      length: 5000
    }
  }, {
    paranoid: true,
    timestamps: true,
    underscored: true,
    freezeTableName: true
  });
  return tbl;
};


export default orderDetail;
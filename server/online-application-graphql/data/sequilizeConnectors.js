import { Meteor } from 'meteor/meteor';
import Sequelize from 'sequelize';

const sequelizedPIMS = new Sequelize('personnel_information', Meteor.settings.private.pimsMySQL.config.user, Meteor.settings.private.pimsMySQL.config.password, {
  host: Meteor.settings.private.pimsMySQL.config.host,
  port: Meteor.settings.private.pimsMySQL.config.port,
  dialect: 'mysql',
});

const sequelizedSystemSettings = new Sequelize('system_settings', Meteor.settings.private.pimsMySQL.config.user, Meteor.settings.private.pimsMySQL.config.password, {
  host: Meteor.settings.private.pimsMySQL.config.host,
  port: Meteor.settings.private.pimsMySQL.config.port,
  dialect: 'mysql',
});

const sequelizedRolesManagement = new Sequelize('roles_management', Meteor.settings.private.rolesManagementMySQL.config.user, Meteor.settings.private.rolesManagementMySQL.config.password, {
  host: Meteor.settings.private.rolesManagementMySQL.config.host,
  port: Meteor.settings.private.rolesManagementMySQL.config.port,
  dialect: 'mysql',
});

export {
  sequelizedPIMS,
  sequelizedSystemSettings,
  sequelizedRolesManagement,
};

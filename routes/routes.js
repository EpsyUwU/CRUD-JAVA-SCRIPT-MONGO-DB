var express = require('express');

var userController = require('../src/user/userController');
const router = express.Router();

var id

// ruta para login
router.route('/user/login').post(userController.loginUserControllerFunc);
// ruta para crear usuario
router.route('/user/create').post(userController.createUserControllerFunc);
// ruta para obtener todos los usuarios
router.route('/user').get(userController.allUserControllerFunc);
// ruta para obtener un usuario
router.route('/user/search/:id').get(userController.oneUSerControllerFunc);
// ruta para borrar un usuario
router.route('/user/delete/:id').delete(userController.deleteUserControllerFunc);
// ruta para actualizar un usuario
router.route('/user/update/:id').put(userController.updateUserControllerFunc);

module.exports = router;

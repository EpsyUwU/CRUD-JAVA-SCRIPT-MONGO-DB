var userService = require('./userServices');

var createUserControllerFunc = async(req, res) => {
    try {
        var result = await userService.createUserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (error) {
        console.log(error);
    }
}

var loginUserControllerFunc = async (req, res) => {
    var result = null;
    try {
        result = await userService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var allUserControllerFunc = async (req, res) => {

    try{
       var result = await userService.allUserDBService(req.body);
        if(result){
            res.send({ "status": true, "data": result }); 
            console.log(result)
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (error){
        console.log(error);
    }
}

var oneUSerControllerFunc = async(req, res) => {
    try{
        var result = await userService.oneUserDBService(req.params.id);
         if(result){
             res.send({ "status": true, "data": result }); 
             console.log(result)
         } else {
             res.send({ "status": false, "message": result.msg });
         }
     } catch (error){
         console.log(error);
     }
}

var deleteUserControllerFunc = async(req, res) => {
    try {
      var id = req.params.id;
      var result = await userService.deleteUserDBService(id);
      if (result) {
        res.send({ "status": true, "message": result.msg });
      } else {
        res.send({ "status": false, "message": result.msg });
      }
    } catch (error) {
      console.log(error);
    }
  }

  var updateUserControllerFunc = async (req, res) => {
    try {
        const userId = req.params.id;
        const updateDetails = req.body;
        const result = await userService.updateUserDBService(userId, updateDetails);
        if (result) {
            res.send({ "status": true, "message": "Usuario actualizado correctamente" });
            console.log(result);
        } else {
            res.send({ "status": false, "message": "Error al actualizar el usuario" });
        }
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": "Error al actualizar el usuario" });
    }
}



module.exports = { createUserControllerFunc, loginUserControllerFunc, allUserControllerFunc,oneUSerControllerFunc, deleteUserControllerFunc,updateUserControllerFunc };
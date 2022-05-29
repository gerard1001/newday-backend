import model from '../database/models';
import bcrypt  from 'bcryptjs';

const userRoutes = model.User;

const registerUser = async (req, res) => {
    const body = req.body;
    const { firstName, lastName, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(body.password, salt);

    if(!firstName || !lastName || !email || !password) {
        res.send({
            error: 'missing fields!'
        })
    } else {
        return userRoutes.findOne({
            where: {email}
        }).then((usedEmail) => {
            if(usedEmail) {
                res.send({
                    error: "email taken!"
                })
            } else {
                return userRoutes.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    categoryId: req.body.categoryId,
                    roleId: req.body.roleId,
                    where: {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: req.body.password,
                        categoryId: req.body.categoryId,
                        roleId: req.body.roleId,
                    }
                })
                .then((data) => {
                    res.send(data)
                })
                .catch((err) => {
                    return res.send(err);
                })
            }
        })
    }
}

const getUser = async (req, res) => {
    await userRoutes.findAll({})
    .then((data) => {
        return res.status(200).send({
            message: "Fetched all Users",
            body: { data }
        })
    })
}

const updateUser = async (req, res) => {

    const id = req.params.id;

    await userRoutes.update(req.body,
        {
        where: {
            userId: id
        }
    })
    .then((data) => {
        res.status(200).send({
            message: "User updated successfylly!",
        });
    })
    .catch((err) => {
        res.status(500).send({
            message: "An error occured while updated User!"
        });
        console.log(err)
    })

}

const deleteUser = async (req, res) => {   
    await userRoutes.destroy({
        where: {},
        truncate: false
    })
    .then((data) => {
        res.send({
            message: "Deleted"
        });
    }).catch((err) => {
        res.status(500).send({
            message: `Failed ${err}`
        })
    }) 
}

const deleteOneUser = async (req, res) => {
    const id = req.params.id;
    await userRoutes.destroy({
        where: {
            userId: id,
        }
    })
    .then((data) => {
        if(data == 1){
            return res.send({
                message: "success",
            })
        }
        return res.send({
            message: "Failed to delete this user!"
        })
    })
    .catch((err) => {
        return res.status(500).send({err})
    })
}

export{ 
    registerUser, 
    getUser, 
    updateUser, 
    deleteUser,
    deleteOneUser
};





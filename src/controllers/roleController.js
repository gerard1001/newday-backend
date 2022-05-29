import model from "../database/models";

const roleRoutes = model.Role;

const createRole = async (req, res) => {

    await roleRoutes.findOrCreate({
        role: req.body.role,
        where: {
            role: req.body.role
        }
    })
    .then((created) => {
        if(created[1]){
            res.status(201).send({
                message: "successfully created!",
                created
            })
        } else {
            res.send({
                message: "This role already exists!"
            })
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: `You got an error: ${err}`
        });
        console.log(err);
    })

}

const getRole = async (req, res) => {

    await roleRoutes.findAll({
        order: [["role", "ASC"]],
    })
    .then((data) => {
        res.status(200).send({
            message: "Fetched all roles",
            data
        })
    })
}

const getOneRole = async (req, res) => {

    const id = req.params.id;

    await roleRoutes.findOne({
        attributes: ['role'],
        order: [["role", "ASC"]],
        include: [{
            model: model.User,
            as: 'Users',
            attributes: ['email'],
            order: [["email", "ASC"]],
          }],
        where: {
            role: id
        }
    })
    .then((data) => {
        const role = data.role;
        res.status(200).send({
            message: `Fetched list of ${role}s` ,
            data
        })
    })
}

const updateRole = async (req, res) => {

    const id = req.params.id;

    await roleRoutes.update(req.body,
        {
        where: {
            roleId: id
        }
    })
    .then((data) => {
        res.status(200).send({
            message: "role updated successfylly!",
        });
    })
    .catch((err) => {
        res.status(500).send({
            message: "An error occured while updating role!"
        });
        console.log(err)
    })

}

const deleteRole = async (req, res) => {

    await roleRoutes.destroy({
        where: { },
        truncate: false
    })
    .then((data) => {
        if(data === 1){
            res.status(200).send({
                message: `Deleted ${data} role successfully!`,
            })
        } else {
            res.status(200).send({
                message: `Deleted ${data} roles successfully!`,
            })
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: "An error occured while deleting role!"
        });
        console.log(err)
    })
}

export  {
    createRole,
    getRole,
    getOneRole,
    updateRole,
    deleteRole
}
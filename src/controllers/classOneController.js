import model from "../database/models";

const classOneModel = model.subCategoryOne;

const createClassOne  = async (req, res) => {
    const {catOneName, categoryId} = req.body;
    if(!catOneName && !categoryId){
        res.send({
            message: "Please make sure you include both catOneName and category"
        })
    } 
    await classOneModel.findOrCreate({
        where: {
            catOneName: req.body.catOneName,
            categoryId: req.body.categoryId,
        }
    })
    .then((data) => {
        if(data[1]){
            res.status(201).send({
                message: "successfully created!",
                body: { data }
            })
        } else {
            res.send({
                message: "This class already exists!"
            })
        }
    })
    .catch((err) => {
        res.status(500).send(err);
        console.log(err)
    })
}


const getClassOne = async (req, res) => {

    await classOneModel.findAll({
        order: [["catOneName", "ASC"]],
        include: [{
            model: model.subCategoryTwo,
            as: 'subCategoryTwos',
            attributes: [ 'catTwoName' ],
            order: [["catTwoName", "ASC"]],
          }],
    })
    .then((data) => {
        res.status(200).send({
            message: "Fetched all classOne elements",
            body: { data }
        })
    })
}

const getOneClassOne = async (req, res) => {

    const id = req.params.id;

    await classOneModel.findAll({
        order: [["catOneName", "ASC"]],
        include: [{
            model: model.subCategoryTwo,
            as: 'subCategoryTwos',
            attributes: [ 'catTwoName' ],
            order: [["catTwoName", "ASC"]],
          }],
        where: {
            catOneName: id
        }
    })
    .then((data) => {
        res.status(200).send({
            message: "Fetched all classOne elements",
            body: { data }
        })
    })
}

const updateClassOne = async (req, res) => {
    
    const id = req.params.id;

    await classOneModel.update(req.body,
        {
        where: {
            catOneName: id
        }
    })
    .then((data => {
        if(data == 1){
            return res.send({
                message: "Updated class 1 successfully!",
            })
        } else {
            return res.send({
                message: `Cannot update class 1 ${id}!`,
                data
            })
        }
    }))
    .catch((err) => {
        console.log(err);
        return res.send({
            message: "error while trying to update!"
        });
    })
}

const  deleteClassOne = async (req, res) => {

    await classOneModel.destroy({
        where: { },
        truncate: false
    })
    .then((data) => {
        if(data === 1){
            res.status(200).send({
                message: `Deleted ${data} class one element successfully!`,
            })
        } else {
            res.status(200).send({
                message: `Deleted ${data} class one elements successfully!`,
            })
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: "An error occured while deleting category!"
        });
        console.log(err)
    })
}

const  deleteOneClassOne = async (req, res) => {
    const id = req.params.id;

    await classOneModel.destroy({
        where: { 
            catOneName: id
        },
        truncate: false
    })
    .then((data) => {
        if(data === 1){
            res.status(200).send({
                message: `Deleted ${data} class one element successfully!`,
            })
        } else {
            res.status(200).send({
                message: `Deleted ${data} class one elements successfully!`,
            })
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: "An error occured while deleting category!"
        });
        console.log(err)
    })
}

export  {
    createClassOne,
    getClassOne,
    getOneClassOne,
    updateClassOne,
    deleteClassOne,
    deleteOneClassOne,
}
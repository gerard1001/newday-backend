import model from "../database/models";

const categoryRoutes = model.Category;

const createCategory = async (req, res) => {

    await categoryRoutes.findOrCreate({
        categoryName: req.body.categoryName,
        where: {
            categoryName: req.body.categoryName
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
                message: "This category already exists!"
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

const getCategory = async (req, res) => {

    await categoryRoutes.findAll({
        order: [["categoryName", "ASC"]],
        include: [{
            model: model.subCategoryOne,
            as: 'subCategoryOnes',
            attributes: ['catOneName'],
            order: [["catOneName", "ASC"]],
          }],
    })
    .then((data) => {
        res.status(200).send({
            message: "Fetched all categories",
            data
        })
    })
}

const getOneCategory = async (req, res) => {

    const id = req.params.id;

    await categoryRoutes.findOne({
        attributes: ['categoryName'],
        order: [["categoryName", "ASC"]],

        include: [{
          model: model.User,
          as: 'Users',
          attributes: ['firstName', 'lastName', 'email'],

          include: [{
              model: model.Role,
              as: 'Roles',
              attributes: ['role']
          }]
        }],

        // include: [{
        //     model: model.subCategoryOne,
        //     as: 'subCategoryOnes',
        //     attributes: ['catOneName'],
        //     order: [["catOneName", "ASC"]],

        //     include: [{
        //         model: model.subCategoryTwo,
        //         as: 'subCategoryTwos',
        //         attributes: ['catTwoName'],
        //         order: [["catTwoName", "ASC"]],

        //         include: [{
        //             model: model.Product,
        //             as: 'Products',
        //             attributes: ['productName', 'price', 'productImage'],
        //             order: [["productName", "ASC"]],
        //         }],
        //     }],

        //   }],
        where: {
            categoryName: id
        }
    })
    .then((data) => {
        res.status(200).send({
            message: "Fetched all categories",
            data
        })
    })
}

const updateCategory = async (req, res) => {

    const id = req.params.id;

    await categoryRoutes.update(req.body,
        {
        where: {
            categoryName: id
        }
    })
    .then((data) => {
        res.status(200).send({
            message: "Category updated successfylly!",
        });
    })
    .catch((err) => {
        res.status(500).send({
            message: "An error occured while updated category!"
        });
        console.log(err)
    })

}

const deleteCategory = async (req, res) => {

    await categoryRoutes.destroy({
        where: { },
        truncate: false
    })
    .then((data) => {
        if(data === 1){
            res.status(200).send({
                message: `Deleted ${data} category successfully!`,
            })
        } else {
            res.status(200).send({
                message: `Deleted ${data} categories successfully!`,
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
    createCategory,
    getCategory,
    getOneCategory,
    updateCategory,
    deleteCategory
}
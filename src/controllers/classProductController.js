import model from "../database/models";

const cpModel = model.Class_Product;
const classModel = model.Class;
const productModel = model.Product;

export const assignProduct = async (req, res) => {
  try {
    // const existingProduct = await productModel.findOne({
    //   where: {
    //     productId: req.body.productId,
    //   },
    // });

    const existingClass = await classModel.findOne({
      where: {
        classId: req.body.classId,
      },
    });
    if (!existingClass) {
      return res.status(404).send({
        error: "The Class you are trying assign doesn't exist.",
      });
    }

    const myTuts = req.body.productId.split(", ");

    var checker = [];
    var makeup = [];
    for (let i = 0; i < myTuts.length; i++) {
      const existingProduct = await productModel.findOne({
        where: {
          productId: myTuts[i],
        },
      });

      const existingRelation = await cpModel
        .findOne({
          where: { classId: req.body.classId, productId: myTuts[i] },
        })
        .catch((err) => {
          console.log(`${err}`);
        });
      console.log(existingRelation, "*11111111111111*");
      if (!existingRelation && existingProduct) {
        makeup.push(i);
      }
      checker.push(existingRelation);
    }
    console.log(checker, "*CHECKER*");
    console.log(makeup, "*MAKEUP*");

    if (makeup == "") {
      return res.status(404).send({
        error: "All these relations have already been made.",
      });
    }

    // console.log(checkIfRelationExists(myTuts), "*22222222222*");

    // if (existingRelation) {
    //   return res.status(409).send({
    //     error: "This relation has aready been established.",
    //   });
    // }

    const getBulkArr = (myTuts) => {
      var arr = [];
      var newArr = [];
      for (let i = 0; i < myTuts.length; i++) {
        var obj = {};
        obj["classId"] = req.body.classId;
        obj["productId"] = myTuts[i];

        arr.push(obj);
      }
      console.log(arr, "*2222222222222*");

      for (let i = 0; i < arr.length; i++) {
        if (makeup.includes(i)) {
          newArr.push(arr[i]);
        }
      }
      console.log(newArr, "*252525*");
      return newArr;
    };

    console.log(getBulkArr(myTuts), "*333333333333333*");

    await cpModel
      .bulkCreate(
        //   {
        //   classId: req.body.classId,
        //   productId: req.body.productId,
        //   where: {
        //     classId: req.body.classId,
        //     productId: req.body.productId,
        //   },
        // }
        getBulkArr(myTuts)
      )
      .then((data) => {
        return res.status(200).send({
          message: "Link made between the class and product successfully.",
          data,
        });
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  } catch (error) {
    console.log(error);
    console.log(req.body, "&&&&&&&");
    return res.status(400).send({
      error: `Fill all the fields ${error}.`,
    });
  }
};

export const getAssignments = async (req, res) => {
  try {
    await cpModel
      .findAndCountAll({})
      .then((data) => {
        return res.status(200).send({
          message: "Fetched all the assigned classes and products!!!",
          body: data.rows,
        });
      })
      .catch((err) => {
        return res.status(400).send({
          error: "ERR",
          err,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export const getOneAssignment = async (req, res) => {
  try {
    const id = req.params.id;

    await cpModel
      .findOne({
        where: {
          classProductId: id,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched one assignment!!!",
          data,
        });
      })
      .catch((err) => {
        return res.status(400).send({
          error: "ERR",
          err,
        });
      });
  } catch (error) {
    return res.status(500).send({
      error: `${error}`,
    });
  }
};

export const deleteOneAssignment = async (req, res) => {
  try {
    const id = req.params.id;

    await cpModel
      .destroy({
        where: {
          categoryClassId: id,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Deleted one assignment!!!",
          data,
        });
      })
      .catch((err) => {
        return res.status(400).send({
          message: "ERR",
          err,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export const deleteAllAssignments = async (req, res) => {
  try {
    await cpModel
      .destroy({
        where: {},
      })
      .then((data) => {
        return res.status(200).send({
          message: "Deleted all assignments!!!",
          data,
        });
      })
      .catch((err) => {
        return res.status(400).send({
          message: "ERR",
          err,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

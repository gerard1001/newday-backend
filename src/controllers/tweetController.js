import model from "../database/models";
import checkToken from "../helpers/checkToken";
import { decodeToken } from "../helpers/userHelper";
import { fileUpload } from "../helpers/fileUpload";
import { sendTweet } from "../helpers/nodemailer";

const tweetModel = model.Tweet;
const userModel = model.User;

export const createTweet = async (req, res) => {
  try {
    const token = checkToken(req);

    const decode = decodeToken(token);

    const users = await userModel.findAll({});

    const subscribedUsers = users.filter((emails) => {
      return emails.isSubscribed;
    });

    const subscribedUsersEmails = subscribedUsers.map((item) => {
      return item.email;
    });

    console.log(subscribedUsersEmails);

    if (req.file) {
      req.body.image = await fileUpload(req);
    }

    await tweetModel
      .create({
        userId: decode.userId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
      })
      .then((data) => {
        const { image, title, content } = data;

        const message = `

    <div style="background:rgb(255, 191, 0); padding: 50px; width: 500px;display: block;margin: auto;">
      <h2 style="text-align: center; font-family:Arial, Helvetica, sans-serif; text-decoration: underline;text-transform: uppercase;">${title}</h2>
      <p><img width="240px", height="240px", style="display: block;margin: auto;" src="${image}"></img></p>
      <p style="text-align: center; font-family:Arial, Helvetica, sans-serif;font-size: large;">${content}</p>
    </div>

    `;
        sendTweet(message, subscribedUsersEmails);
      return res.status(201).send({
        message: "success!!!",
        data,
      });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export const getTweets = async (req, res) => {
  try {
    await tweetModel
      .findAll({})
      .then((tweets) => {
        return res.send({
          message: "Fetched all tweets",
          tweets,
        });
      })
      .catch((err) => {
        return res.send({ err });
      });
  } catch (error) {
    res.send({ err });
  }
};

export const deleteTweets = async (req, res) => {
  try {
    await tweetModel
      .destroy({ where: {} })
      .then((num) => {
        if (num === 1) {
          return res.status(200).send({
            message: `Deleted ${num} tweet successfully!`,
          });
        } else if (num === 0) {
          return res.status(403).send({
            message: `You don't have any more tweets to delete!`,
          });
        } else {
          return res.status(200).send({
            message: `Deleted ${num} tweets successfully!`,
          });
        }
      })
      .catch((err) => {
        return res.send({
          message: "ERROR",
          err,
        });
      });
  } catch (error) {
    res.send(err);
  }
};

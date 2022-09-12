import model from "../database/models";
import {
  generateToken,
  decodeToken,
} from "../helpers/userHelper";
import { sendTweet } from "../helpers/nodemailer";
import checkToken from "../../dist/helpers/checkToken";

const userModel = model.User;

export const subscribeMsg = async (req, res) => {
  try {
    const userToken = checkToken(req);
    const decode = decodeToken(userToken);
    const email = decode.email;
    const id = decode.userId;

    const token = generateToken({ userId: id }, "1d");

    const message = `
        <h2>Got subscription token.</h2>
        <p>Copy the following token::: <em>${token}</em></p>
        `;
    sendTweet(message, email);
    console.log(email);

    return res.send({
      msg: "Sent subscr...",
    });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export const subscribe = async (req, res) => {
  try {
    const { token } = req.params;
    const userInfo = decodeToken(token);
    const userId = userInfo.userId;

    console.log(token);

    const user = await userModel.findOne({ where: { userId } });
    await user.update({ isSubscribed: true }, { where: { id: userId } });
    return res.status(200).send({
      message: "You have successfully subscribed to our page.",
    });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

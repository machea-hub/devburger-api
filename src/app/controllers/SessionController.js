import * as Yup from 'yup';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authConfig from './../../config/auth.js';

class SessionController {
  async store(req, res) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const isValid = await schema.isValid(req.body, { strict: true });

    const eopi = () => {
      return res.status(400).json({ error: 'Email/password incorrect' });
    };

    if (!isValid) {
      eopi();
    }

    const { email, password } = req.body;

    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (!existingUser) {
      eopi();
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password_hash,
    );

    if (!isPasswordCorrect) {
      eopi();
    }

    const token = jwt.sign({ id: existingUser.id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return res.status(200).json({
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      admin: existingUser.admin,
      token,
    });
  }
}

export default new SessionController();

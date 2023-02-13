const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { hash, compare } = require("bcryptjs");

class UsersController {
  async create(request, response) {
    const { name, email, password, isAdmin = false } = request.body;

    const usersWithEmail = await knex("users").where({ email });
    const checkUserExist = usersWithEmail.length > 0;

    if (checkUserExist) {
      throw new AppError("Este e-mail já está em uso.");
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({
      name,
      email,
      password: hashedPassword,
      isAdmin
    });

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const user_id = request.user.id;

    const user = await knex("users").where({ id: user_id }).first();

    if (!user) {
      throw new AppError("Usuário não encontrado.");
    }

    const userWithUpdateEmail = await knex("users").where({ email }).first();

    if (userWithUpdateEmail && userWithUpdateEmail.id != user.id) {
      throw new AppError("Este email já está em uso.");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && !old_password) {
      throw new AppError("Você precisa informar a senha antiga para alterar a senha.");
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere.");
      }

      user.password = await hash(password, 8);
    }

    await knex("users")
      .where({ id: user.id })
      .update({
        name: user.name,
        email: user.email,
        password: user.password,
        updated_at: knex.fn.now()
      });

    return response.json();
  }
}

module.exports = UsersController;
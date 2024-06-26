import bcrypt from "bcrypt";

const saltRounds = 10;

const encrypt = async (password) => {
    return bcrypt.hashSync(password, saltRounds);
};

const compare = async (password, hash) => {
    return bcrypt.compareSync(password, hash);
};

export { encrypt, compare };
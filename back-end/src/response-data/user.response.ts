export const responseUser = user => {
  const {
    _id,
    fullName,
    gender,
    birthday,
    address,
    phone,
    username,
    password,
    email,
    roles,
    active,
  } = user;

  return {
    _id,
    fullName,
    gender,
    birthday,
    address,
    phone,
    username,
    password,
    email,
    roles,
    active,
  };
};

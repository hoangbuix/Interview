export const responseUser = user => {
  const {
    _id,
    userId,
    fullName,
    gender,
    birthday,
    address,
    inClass,
    phone,
    username,
    password,
    email,
    roles,
    active,
  } = user;

  return {
    _id,
    userId,
    fullName,
    gender,
    birthday,
    address,
    inClass,
    phone,
    username,
    password,
    email,
    roles,
    active,
  };
};

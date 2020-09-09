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
    major,
    teacher,
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
    major,
    teacher,
    active,
  };
};

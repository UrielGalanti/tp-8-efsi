export const MOCK_USER = {
  email: "flor@gmail.com",
  password: "mostaza",
};

export const login = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    email === MOCK_USER.email &&
    password === MOCK_USER.password
  )
};
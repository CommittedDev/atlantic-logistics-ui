const setAccessToken = (accessToken: string) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
  } else {
    localStorage.removeItem("accessToken");
  }
};

const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export { setAccessToken, getAccessToken };

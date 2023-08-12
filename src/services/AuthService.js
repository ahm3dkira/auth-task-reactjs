// const API_HOST = 'http://localhost:5000';
const API_HOST = 'https://auth-task-nodejs.domain.ahmedkira.com'


export const LoginWithEmail = async ({username, password}) => {
    const response = await fetch(`${API_HOST}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password })
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export const SignupWithEmail = async (email, password, username) => {
    const formInfo = {
        email: email,
        password: password,
        username: username
    }
  const response = await fetch(`${API_HOST}/register`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(formInfo)
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export const Logout = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/";
}
export const getSecretMessage = async () => {
    // /getSecretMessage
    const response = await fetch(`${API_HOST}/getSecretMessage`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
    });
    const data = await response.json();
    console.log(data);
    return data;
}
export const setSecretMessage = async (secretMessage) => {
    // /setSecretMessage
    const response = await fetch(`${API_HOST}/setSecretMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({secretMessage: secretMessage})
    });
    const data = await response.json();
    console.log(data);
    return data;
}

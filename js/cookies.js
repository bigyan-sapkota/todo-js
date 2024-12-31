// function to set cookie
export const setCookie = (name, value, days = 7) => {
  const date = new Date();

  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

// get cookie
export const getCookie = (name) => {
  // if you enter "name:john; age=22; tasks=[]"
  // this .split method will give you array as follow:
  // const cookies = ["name=john", "age=22", "tasks=[]"]
  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    // if you enter "name=john" or "age=22"
    // this .split method will give you [name, john] or [age, 22] or [tasks, []]
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
};

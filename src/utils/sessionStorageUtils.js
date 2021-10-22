const set = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
}

const get = (key) => sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : "";

export {
    set,
    get
};
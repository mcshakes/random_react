

let limit = 6;
let page = 1;

async function getPosts() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );

    const json = await res.json();
    return json;
}

getPosts();
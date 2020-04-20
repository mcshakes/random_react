const postsContainer = document.getElementById('posts-container');

let limit = 6;
let page = 1;

async function getPosts() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );

    const json = await res.json();
    return json;
}

async function showPosts() {
    let posts = await getPosts();

    posts.forEach(post => {
        const postElem = document.createElement("div");

        postElem.classList.add("post");

        postElem.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</h2>
            </div>
        `;

        postsContainer.appendChild(postElem);

    })


}

showPosts();
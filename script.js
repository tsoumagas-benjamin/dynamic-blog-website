// Use DOM manipulation to select each of the three blog spaces on our website
const blogPage = document.getElementById("blog-page");
const techContent = document.getElementById("tech-content");
const envContent = document.getElementById("env-content");
const finContent = document.getElementById("fin-content");

// Use DOM manipulation to select the new blog spaces on our website
const submitButton = document.getElementById("submit-post");
const blogTitle = document.getElementById("title");
const blogContent = document.getElementById("content");
const blogImage = document.getElementById("image");

// Use DOM manipulation to select the selected blog spaces on our website
const selectedTitle = document.getElementById("selected-title");
const selectedContent = document.getElementById("selected-content");
const selectedImage = document.getElementById("selected-image");
const editButton = document.getElementById("edit-button");
const deleteButton = document.getElementById("delete-button");

// Content for each of the blog pages
const techBlogContent = "This blog is made for discussing new technologies and their applications. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const envBlogContent = "This blog will discuss environmental trends and ways to save the environment. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
const finBlogContent = "This blog will cover rising and falling stock market values as well as money-saving tips. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.";

// Store the blog post contents into localStorage
localStorage.setItem("tech-blog-content", techBlogContent);
localStorage.setItem("env-blog-content", envBlogContent);
localStorage.setItem("fin-blog-content", finBlogContent);

// Define and call the function that will retrieve blog post data from localStorage and use it to manipulate the HTML
function loadBlogData() {
    techContent.innerHTML = localStorage.getItem("tech-blog-content");
    envContent.innerHTML = localStorage.getItem("env-blog-content");
    finContent.innerHTML = localStorage.getItem("fin-blog-content");
}

// Function to save user input for a new blog post to localStorage
function getBlogData() {
    let title = blogTitle.value;
    let content = blogContent.value;
    let image = blogImage.value;
    if (title === "") {
        console.log("Missing title");
        return;
    }
    if (content === "") {
        console.log("Missing content");
        return;
    }
    localStorage.setItem("new-blog-title", title);
    localStorage.setItem("new-blog-content", content);
    localStorage.setItem("new-blog-image", image);
    console.log("New blog post saved");
}

// Function to display created post data on page load
function displayBlog() {
    selectedTitle.innerHTML = localStorage.getItem("new-blog-title");
    selectedContent.innerHTML = localStorage.getItem("new-blog-content");
    selectedImage.innerHTML = localStorage.getItem("new-blog-image");
}

// Function to allow editing of content on the post.html page
function editBlog() {
    // Allow content to be edited if the edit button is clicked
    if (editButton.innerHTML === "Edit") {
        selectedTitle.setAttribute("contenteditable", true);
        selectedContent.setAttribute("contenteditable", true);
        editButton.innerHTML = "Save";
        return;
    // Allow the edited content to be saved if the edit button saying submit is clicked
    } else {
        selectedTitle.setAttribute("contenteditable", false);
        selectedContent.setAttribute("contenteditable", false);
        localStorage.setItem("new-blog-title", selectedTitle.innerHTML);
        localStorage.setItem("new-blog-content", selectedContent.innerHTML);
        editButton.innerHTML = "Edit";
        return;
    }
}

// Function to allow deletion of content on the post.html page
function deleteBlog() {
    localStorage.removeItem("new-blog-title");
    localStorage.removeItem("new-blog-content");
    localStorage.removeItem("new-blog-image");
}

// Add function triggers
document.addEventListener("DOMContentLoaded", loadBlogData);
submitButton.addEventListener("click", getBlogData);
document.addEventListener("DOMContentLoaded", displayBlog);
editButton.addEventListener("click", editBlog);
deleteButton.addEventListener("click", deleteBlog);
  
// container of all posts
const posts = js.getEl('posts');

function createPost(postData, userInfo, postId) {

	// container of invidual post
	const post = js.createEl('div', 'post');
	
	// posts in reverse chronological order
	//no cronological order
	//posts.insertBefore(post, posts.firstElementChild);

	// add posts in chronological
	posts.appendChild(post);
	
	const text = js.createEl('div', 'post-text', postData.text);
	post.appendChild(text);

	// post info 
const info = js.createEl('div', 'post-info');
post.appendChild(info);
	// author userInfo.displayName
const 
	// date js.formatDate(postData.date) 
	
}
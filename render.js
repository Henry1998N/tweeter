const Render = function () {
  const renderPosts = function (posts) {
    for (let post of posts) {
      //append post
      let newPost = $(
        `<div data-id="${post.id}" class="post">${post.text}</div>`
      );
      $(`#posts`).append(newPost);

      let divForComments = `<div  data-id="pc${post.id}"></div>`;
      $(`[data-id=${post.id}]`).append(divForComments);

      //append comments
      for (let comment of post.comments) {
        let newComment = `<div class="comments"><span data-commentId="${comment.id}" data-postId="${post.id}" class="delete-comment">x </span>${comment.text}</div>`;
        $(`[data-id=pc${post.id}]`).append(newComment);
      }

      // //append input and button for comment
      let newInput = `<input data-id="${post.id}" class="input" type="text">`;
      let addComment = `<button data-id="${post.id}" class="btns">Comment</button>`;
      let br = `<br>`;
      $(`[data-id=pc${post.id}]`).append(br);
      $(`[data-id=pc${post.id}]`).append(newInput);
      $(`[data-id=pc${post.id}]`).append(addComment);

      ///append delete button for post
      let deleteButton = `<div><button class="delete" data-id="${post.id}">Delete Post</button></div>`;
      $(`[data-id=pc${post.id}]`).append(deleteButton);
    }
  };
  return {
    renderPosts: renderPosts,
  };
};

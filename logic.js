const Tweeter = function () {
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];
  let postIdCounter = 3;
  let commentIdCounter = 7;
  const getPosts = () => {
    return _posts;
  };
  const addPost = (postText) => {
    let newPost = {
      text: postText,
      id: `p${postIdCounter++}`,
      comments: [],
    };

    _posts.push(newPost);
  };
  const removePost = (postId) => {
    for (let index in _posts) {
      if (_posts[index].id === postId) {
        _posts.splice(index, 1);
      }
    }
  };
  const addComment = (commentText, postId) => {
    for (let post of _posts) {
      if (post.id === postId) {
        let newComment = {
          id: `c${commentIdCounter++}`,
          text: commentText,
        };
        post.comments.push(newComment);
      }
    }
  };
  const removeComment = (postId, commentId) => {
    for (let post of _posts) {
      if (post.id === postId) {
        for (let index in post.comments) {
          let commentIdd = post.comments[index].id;
          if (commentIdd === commentId) {
            post.comments.splice(index, 1);
          }
        }
      }
    }
  };
  return {
    addPost: addPost,
    removePost: removePost,
    getPosts: getPosts,
    addComment: addComment,
    removeComment: removeComment,
  };
};

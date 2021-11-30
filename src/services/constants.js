const API = {
  // Base
  base: "https://shareart-back.herokuapp.com/shareart/v1/",
  login: "auth/login",
  register: "auth/register",

  // Users
  getUser: "profile/",
  postUser: "",

  // Home
  getHomePosts: "home/post",
  getComments: "home/comments",
  postPost: "",
  deletePost: "",

  //Profile
  getProfilePosts: "profile/posts",
  getArtistList: "home/artists",
  getFollowers: "profile/followers",
  getFollowed: "profile/followed",

};

export default API;

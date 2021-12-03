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
  postPost: "home/post/create",
  deletePost: "",

  //Profile
  getProfilePosts: "profile/posts",
  getArtistList: "home/artists",
  getFollowers: "profile/followers",
  getFollowed: "profile/followed",
  follow: "follow/",


  // Configs
  changeProfile: "profile/picture/profile",
  changeCover: "profile/picture/cover",
  changeProfileInfo: "profile/update/profile",
  changePersonalInfo: "profile/update/info",
  changePassword: "auth/change/password",
};

export default API;

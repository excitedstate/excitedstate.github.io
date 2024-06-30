var posts=["2024/06/27/随想/","2024/06/29/分布式系统复习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
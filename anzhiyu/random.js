var posts=["2024/10/28/BUG排查-关于Monaco编辑器中文字体显示异常的问题/","2024/06/29/分布式系统复习/","2024/06/27/随想/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
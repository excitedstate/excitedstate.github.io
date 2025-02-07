var posts=["2025/02/07/BUG排查-Dify容器重新部署后的数据丢失/","2024/10/28/BUG排查-关于Monaco编辑器中文字体显示异常的问题/","2024/06/29/分布式系统复习/","2024/06/27/随想/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
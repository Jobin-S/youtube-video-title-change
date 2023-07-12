function updateTitle() {
  
  var videoID = 'VUip7y2FvyY'; //https://youtu.be/VUip7y2FvyY
  var part = 'snippet,statistics';
  var params = {'id': videoID};
  
  var response = YouTube.Videos.list(part, params);
  var video = response.items[0];
  var videoViewsCount = video.statistics.viewCount;
  var videoLikeCount = video.statistics.likeCount;
  // var videoDislikeCount = video.statistics.dislikeCount;
  // var videoCommentCount = video.statistics.commentCount;
  // var videoTitle = 'This video has ' + videoViewsCount + ' views and ' + videoLikeCount + ' likes and ' + videoDislikeCount + ' dislikes and ' + videoCommentCount + ' comments';
  var videoTitle = 'This video has ' + videoViewsCount + ' views and '+ videoLikeCount + ' likes';
  
  video.snippet.title = videoTitle;
  
  try{
    YouTube.Videos.update(video, part); // 50 units
    
  }catch(e){

  }
  
}

<?php
$galleryId = $_GET['galleryId'];
$url = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=d45c4b88ef7c4f4d94e1c4e69cb15f10&photoset_id=". $galleryId ."&user_id=132277818%40N04&extras=url_m&per_page=&format=json&nojsoncallback=1";
$content=file_get_contents($url);
echo $content;

?>

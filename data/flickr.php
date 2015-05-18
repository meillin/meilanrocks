<?php

$url = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=cc31489e474eea4a278adf54310b1fb7&photoset_id=".$_GET["galleryId"]."&user_id=132277818%40N04&extras=url_m&format=json&nojsoncallback=1&auth_token=72157652205400389-01d42a531ef28f51&api_sig=086d235906908b049e5e90e7cc005f60";
$content=file_get_contents($url);
echo $content;

?>

<?php
// const marvelAPI = "https://dev.whenisthenextmcufilm.com/api";
const API = "https://whenisthenextmcufilm.com/api";
$my_curl = curl_init(API); // Initialize cURL
curl_setopt($my_curl, CURLOPT_RETURNTRANSFER, true); // Return the response as a string
$response = curl_exec($my_curl); // Execute the cURL request
$data = json_decode($response, true); // Decode the JSON response to an associative array

if (curl_errno($my_curl)) {
    echo 'Error: ' . curl_error($my_curl);
} 

curl_close($my_curl); // Close the handler  

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marvel Movie last</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color: #333;
            padding: 20px;
            place-content: center;
        }
        section {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            place-content: center;
            display: grid;
        }

        hgroup{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <section>
        <img src="<?php echo $data['poster_url']; ?>" width="250" alt="Movie Poster">
    </section>
    <hgroup>
        <h3>¿Cual es la siguiente pelicula de Marvel?</h3>
        <h5>Titulo: <?php echo $data['title']; ?></h5>
        <h5>Fecha de estreno: <?php echo $data['release_date']; ?></h5>
        <h5>Se estrena en  <?php echo $data['days_until']; ?> dias</h5>
    </hgroup>
</body>
</html>
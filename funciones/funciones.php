<?php

const API_URL = "https://whenisthenextmcufilm.com/api";

function get_data(string $api_url): array
{
    // $data = json_decode(file_get_contents($api_url), true); // Fetch and decode JSON data from the API
    $my_curl = curl_init($api_url); // Initialize cURL
    curl_setopt($my_curl, CURLOPT_RETURNTRANSFER, true); // Return the response as a string
    $response = curl_exec($my_curl); // Execute the cURL request
    $data = json_decode($response, true); // Decode the JSON response to an associative array

    if (curl_errno($my_curl)) {
        echo 'Error: ' . curl_error($my_curl);
    }
    curl_close($my_curl);
    return $data;
}
function diasInicio($feechaEstreno): int
{
    $fechaActual = new DateTime();

    $fechaEstreno = new DateTime($feechaEstreno);
    print_r($fechaEstreno);
    $diferencia = $fechaActual->diff($fechaEstreno);
    return $diferencia->days;
}


function render_template(string $template, array $data = [])
{
    extract($data); // Extract array keys as variables
    $path = "templates/$template.php";
    require $path; // Include the template file
}

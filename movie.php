<?php

declare(strict_types=1);
require_once 'funciones/funciones.php';
require 'clases/movies.php';
$movie = Movies::fetch_and_create_movie(API_URL);
$data = $movie->get_data();

// $mensageinicio = mathDate($data['release_date']);
$movie->dias_until = $data['dias_until'];
$movie->release_date = $data['release_date'];
$mensageinicio = $movie->get_ultil_message();
$fechaInicio = $movie->diasInicio();

array_merge($data, ['mensageinicio' => $mensageinicio]);
render_template('head', $data);
render_template('styles');
render_template('body', array_merge($data, ['mensageinicio' => $mensageinicio], ['fechaInicio' => $fechaInicio]));
?>
<html>

<script type="text/javascript" src="lib/jquery4.0.min.js"></script>
<script type="text/javascript" src="clases.js"></script>
<script type="text/javascript" src="movies.js"></script>

</html>
<?php

class Movies
{

    public function __construct(
        private string $title,
        public int $dias_until,
        public string $release_date,
        private string $poster_url
    ) {}

    public function get_ultil_message(): string
    {
        return match ($this->dias_until) {
            -0 => "Ya se estreno la pelicula",
            0 => "Hoy es el estreno",
            1 => "Mañana es el estreno",
            default => $this->dias_until . " dias para el estreno",
        };
    }


    public static function fetch_and_create_movie(string $api_url): Movies
    {
        $data = json_decode(file_get_contents($api_url), true);

        return new self(
            dias_until: $data['days_until'],
            title: $data['title'],
            release_date: $data['release_date'],
            poster_url: $data['poster_url']
        );
    }

    public function get_data()
    {
        //   Este método devuelve un objeto de matriz asociativa
        return get_object_vars($this);
    }

    public function diasInicio(): int
    {
        $fechaActual = new DateTime();
        $fechaEstreno = new DateTime($this->release_date);
        $diferencia = $fechaActual->diff($fechaEstreno);
        return $diferencia->days + 1;
    }
}

<body>
    <h3 style="align-items: center; display: flex; justify-content: center;">¿Cuál es la siguiente película de Marvel?</h3>
    <section>
        <img src="<?php echo $data['poster_url']; ?>" width="220" alt="Movie Poster">
    </section>
    <hgroup>
        <h5>Titulo: <?php echo $data['title'] . " - " . $data["mensageinicio"] ?></h5>
        <h5>Fecha de estreno: <?php echo $data['release_date']; ?></h5>
        <h5>Se estrena en: <?php echo $data["fechaInicio"] ?> días</h5>
        <!-- <hr> -->
        <!-- <h4 id="texto">copyright</h4> -->
    </hgroup>
    <section>
        <div id="verTrailerDiv"><button id="verTrailer" class="btn btn-primary btn-xs">Ver trailer</button></div>
        <div id="trailer">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-vJTsapEYKQ?si=yDvFmSJhNctSjhVU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
            <a href="https://www.marvel.com/movies/spider-man-brand-new-day" target="_blank">Más información</a>
        </div>

    </section>
</body>
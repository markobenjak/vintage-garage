<template>
  <div class="row">
    <div id="carouselExampleCaptions" class="carousel slide col-md-6">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/src/assets/images/dsc-8606-1500x1000.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1>Citroën Traction Avant</h1>
            </div>
          </div>
          <div class="carousel-item">
              <img src="/src/assets/images/dsc-8561-1500x1000.jpg" class="d-block img-fluid" alt="...">
              <div class="carousel-caption d-none d-md-block">
                  <h1>Citroën Traction Avant</h1>
              </div>
          </div>
          <div class="carousel-item">
              <img src="/src/assets/images/dsc-8562-1500x1000.jpg" class="d-block img-fluid" alt="...">
              <div class="carousel-caption d-none d-md-block">
                  <h1>Citroën Traction Avant</h1>
              </div>
          </div>
          <div class="carousel-item">
            <img src="/src/assets/images/dsc-8599-1500x1000.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1>Citroën Traction Avant</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/src/assets/images/dsc-8609-1500x1000.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1>Citroën Traction Avant</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/src/assets/images/dsc-8614-1500x1000.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1>Citroën Traction Avant</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/src/assets/images/dsc-8617-1477x960.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1>Citroën Traction Avant</h1>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="col-md-6 textClass text-wrap">
      <div class=" top-50">
        <hr class="border-2 opacity-100"/>
        <p class="fs-5 lh-base">
          <span><i class="bi bi-arrow-right"></i></span>   Citroën DS 19 proizveden 1972. godine u našoj garaži nalazi se x godina.
        </p>
        <p class="fs-5 lh-base">
          <span><i class="bi bi-arrow-right"></i></span>
          Sa svojim hidro-pneumatskim ovjesom poznat je kao jedan od najudobnih automobila ikad napravljenih. 
        </p>
        <p class="fs-5 lh-base">
          <span><i class="bi bi-arrow-right"></i></span>
          Predstavljen je po prvi puta 1955. godine na pariškome salonu automobila kao automobili budućnosti, koji je odmah bio odlično prihvaćen već prvoga dana kada je zaprimio veliki broj prednarudžbi.
        </p>
        <hr class="border-2 opacity-100"/>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
};
</script>

<style>
.smallerImage{
  height: 631px;
}
.row{
  --bs-gutter-x: 0;
}

</style>



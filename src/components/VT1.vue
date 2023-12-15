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
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
              <img src="../assets/images/vt07744-1-2000x1127.jpg" class="d-block img-fluid" alt="...">
              <div class="carousel-caption d-none d-md-block">
                  <h1>Citroën Traction Avant</h1>
              </div>
          </div>
          <div class="carousel-item">
              <img src="../assets/images/1280x960-1-1280x853.jpg" class="d-block img-fluid" alt="...">
              <div class="carousel-caption d-none d-md-block">
                  <h1>Citroën Traction Avant</h1>
              </div>
          </div>
          <div class="carousel-item smallerImage">
            <img src="../assets/images/1280x960-1-1295x756.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1>Citroën Traction Avant</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/1280x960-7-1280x853.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1>Citroën Traction Avant</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/1280x960-1-1280x853.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1>Citroën Traction Avant</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/1280x960-5-1280x853.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1>Citroën Traction Avant</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/1280x960-8-1280x853.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1>Citroën Traction Avant</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/1280x960-3-1280x853.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1>Citroën Traction Avant</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/1280x960-6-1280x853.jpg" class="d-block img-fluid" alt="...">
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
    <div class="col-md-6 textClass">
      <hr class="border-2 opacity-100"/>
      <p>
        Volkswagen T 1 proizveden je 1963., te je u našem vlasništvu 10 godina.
Prva je generacija Volkswagenovog kombi vozila koji je počeo sa proizvodnjom 1950. godine. Karizmatičan i drukčiji odmah na prvi pogled, vozilo koje je najpoznatije po kraju šezdesetih godina kada je bilo korišteno u "hippie" pokretima diljem Amerike. Vozilo sa najvećim brojem sjedećih mjesta u našoj ponudi, s mogučnošću vožnje do sedam osoba.      </p>
      <hr class="border-2 opacity-100"/>
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
.textClass{
  margin-top: 10%;
  margin-left: 10%;
  width:30%;
}
.smallerImage{
  height: 631px;
}
.row{
  --bs-gutter-x: 0;
}
</style>



<template>
  <body>
    <nav class="navbar navbar-expand-lg shadow p-3 mb-5">
        <div class="container">
          <div class="col align-self-center">
            <img src="/src/assets/images/logo.png" class="d-block img-fluid mx-auto"
                    alt="...">
            <ul class="nav nav-pills">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle dropdownSize" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                  <!-- <i class="bi bi-car-front"></i> -->
                  <img style="width: 50%;" src="/src/assets/images/car_icon2.png">
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#JaguarMk2">Jaguar Mk2</a></li>
                  <li><a class="dropdown-item" href="#CTA">Citroën Traction Avant</a></li>
                  <li><a class="dropdown-item" href="#T1">Volkswagen T1</a></li>
                  <li><a class="dropdown-item" href="#CDS">Citroën DS19</a></li>
                  <li><a class="dropdown-item" href="#Buba">Volkswagen Buba</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#Contact">{{ $t("contactUsNav") }}</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    <main>
        <!-- TODO dodati slike, kupiti domenu -->

      <div class="container">
        <div class="row">
          <div class="col-lg-4 offers">
            <img src="/src/assets/images/version2/offers/t1Wedding.jpg"
              class="shadow-lg p-2 mb-5 bg-body rounded imageOffers" alt="">

            <h2 class="containerHeading">{{ $t("offers.weddings.name") }}</h2>
            <p>{{ $t("offers.weddings.content") }}</p>
          </div>
          <div class="col-lg-4 offers">
            <img src="/src/assets/images/version2/offers/event.jpg"
              class="shadow-lg p-2 mb-5 bg-body rounded imageOffers" alt="">

            <h2 class="containerHeading">{{ $t("offers.rental.name") }}</h2>
            <p>{{ $t("offers.rental.content") }}</p>
          </div>
          <div class="col-lg-4 offers">
            <img src="/src/assets/images/version2/offers/buba.jpg"
              class="shadow-lg p-2 mb-5 bg-body rounded imageOffers" alt="">

            <h2 class="containerHeading">{{ $t("offers.events.name") }}</h2>
            <p>{{ $t("offers.events.content") }}</p>
          </div>
        </div>

        <hr class="featurette-divider">
        <h1 class="ourVehicles">{{ $t("vehicles") }}</h1>
        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-5 order-md-2">
            <a id="JaguarMk2"><h1 class="featurette-heading">Jaguar Mk2</h1></a>
            <p>{{ $t("jaguar.jaguar_part1") }}
            </p>
            <p>
              {{ $t("jaguar.jaguar_part2") }}
            </p>
            <p class="lead">
              <strong>{{ $t("seats") }} 2</strong>
            </p>
            <p class="lead">
              <strong>{{ $t("year") }} 1968.</strong>
            </p>
          </div>
          <div class="col-md-7 order-md-1">
            <div id="jaguar" class="carousel slide carousel-fade shadow-lg p-3 mb-5 bg-body rounded">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#jaguar" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#jaguar" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#jaguar" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#jaguar" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#jaguar" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#jaguar" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#jaguar" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#jaguar" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#jaguar" data-bs-slide-to="8" aria-label="Slide 9"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/src/assets/images/version2/jaguar/jaguar_front_right.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar/jaguar_back_left.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar/inside_front.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar/inside_seat.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar/logo.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar/jaguar_back_left_2.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar/jaguar_back_right.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar/jaguar_front_right_2.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar/jaguar_full.jpg" class="d-block img-fluid"
                    alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#jaguar" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#jaguar" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-5 order-md-1">
            <a id="CTA"><h1 class="featurette-heading">Citroën Traction Avant</h1></a>
            <p>{{ $t("cta.cta_part1") }}
            </p>
            <p>
              {{ $t("cta.cta_part2") }}
            </p>
            <p class="lead">
              <strong>{{ $t("seats") }} 2</strong>
            </p>
            <p class="lead">
              <strong>{{ $t("year") }} 1952.</strong>
            </p>
          </div>
          <div class="col-md-7 order-md-1">
            <div id="tractionAvant" class="carousel slide carousel-fade shadow-lg p-3 mb-5 bg-body rounded">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="6" aria-label="Slide 7"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/src/assets/images/version2/cta/ver2_1080x810/event_front.jpg" class="d-block img-fluid"
                    alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cta/ver2_1080x810/wedding_decorated_side.jpg"
                    class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cta/ver2_1080x810/front.jpg" class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cta/ver2_1080x810/wedding_decorated_back.jpg"
                    class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cta/ver2_1080x810/wedding_decorated_front_2.jpg"
                    class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cta/ver2_1080x810/wedding_decorated_front.jpg"
                    class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cta/ver2_1080x810/wedding_decorated_side_2.jpg"
                    class="d-block img-fluid" alt="...">

                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#tractionAvant" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#tractionAvant" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-5  order-md-1">
            <a id="T1"><h1 class="featurette-heading">Volkswagen T1</h1></a>
            <p>
              {{ $t("t1.t1_part1") }}
            </p>
            <p>
              {{ $t("t1.t1_part2") }}            
            </p>
            <p class="lead">
              <strong>{{ $t("seats") }} 6</strong>
            </p>
            <p class="lead">
              <strong>{{ $t("year") }} 1963.</strong>
            </p>
          </div>
          <div class="col-md-7">
            <div id="VT1" class="carousel slide carousel-fade shadow-lg p-3 mb-5 bg-body rounded">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="0" class="active" aria-current="true"
                  aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="5" aria-label="Slide 5"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/src/assets/images/version2/t1/ver2_2148x1210/decorated_wedding_2.jpg" class="d-block img-fluid"
                    alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/t1/ver2_2148x1210/decorated_wedding_couple.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/t1/ver2_2148x1210/decorated_wedding_front_dark.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/t1/ver2_2148x1210/decorated_wedding_inside.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/t1/ver2_2148x1210/decorated_wedding_logo.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/t1/ver2_2148x1210/decorated_wedding_side.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#VT1" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#VT1" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-5">
            <a id="CDS"><h1 class="featurette-heading">Citroën DS19</h1></a>
            <p>{{ $t("citroenDS.citroenDS_part1") }}
            </p>
            <p>
              {{ $t("citroenDS.citroenDS_part2") }}
            </p>
            <p class="lead">
              <strong>{{ $t("seats") }} 2</strong>
            </p>
            <p class="lead">
              <strong>{{ $t("year") }} 1973.</strong>
            </p>
          </div>
          <div class="col-md-7">
            <div id="CitroenDS19" class="carousel carousel-fade slide shadow-lg p-3 mb-5 bg-body rounded">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="8" aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="9" aria-label="Slide 10"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/src/assets/images/version2/cds/ver2_1500x1000/side_decorated_wedding_people.jpg"
                    class="d-block img-fluid w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_1500x1000/side_decorated_wedding_2.jpg"
                    class="d-block img-fluid w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_1500x1000/left_2.jpg"
                    class="d-block img-fluid w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_1500x1000/front.jpg"
                    class="d-block img-fluid w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_1500x1000/front_right.jpg"
                    class="d-block img-fluid w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_1500x1000/front_right_2.jpg"
                    class="d-block img-fluid w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_1500x1000/back_right.jpg"
                    class="d-block img-fluid w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_1500x1000/doors_open_2.jpg" class="d-block img-fluid w-100"
                    alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_1500x1000/doors_open.jpg" class="d-block img-fluid w-100"
                    alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_1500x1000/dsc_8609.jpg" class="d-block img-fluid w-100" 
                    alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#CitroenDS19" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#CitroenDS19" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-5 order-md-2">
            <a id="Buba"><h1 class="featurette-heading">Volkswagen Buba</h1></a>
            <p>
              {{ $t("buba.buba_part1") }}
            </p>
            <p>
              {{ $t("buba.buba_part2") }}
            </p>
            <p class="lead">
              <strong>{{ $t("seats") }} 2</strong>
            </p>
            <p class="lead">
              <strong>{{ $t("year") }} 1963.</strong>
            </p>
          </div>
          <div class="col-md-6 order-md-1">
            <div id="buba" class="carousel slide carousel-fade shadow-lg p-3 mb-5 bg-body rounded">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#buba" data-bs-slide-to="0" class="active" aria-current="true"
                  aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#buba" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#buba" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#buba" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/src/assets/images/version2/buba/decorated_wedding_front_2.jpg" class="d-block img-fluid"
                    alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/buba/decorated_wedding_front_3.jpg" class="d-block img-fluid"
                    alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/buba/decorated_wedding.jpg" class="d-block img-fluid"
                    alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/buba/decorated_wedding_back.jpg" class="d-block img-fluid"
                    alt="...">

                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#buba" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#buba" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div class="alert alert-success" v-if="showAlertSuccess" id="emailAlertSuccess" role="alert">
          {{ $t("alerts.emailAlertSuccess") }}
        </div>
        <div class="alert alert-danger" v-if="showAlertFail" id="emailAlertFail" role="alert">
          {{ $t("alerts.emailAlertFail") }}
        </div>
      </div>

      <footer class="text-center text-white" style="background-color: #f1f1f1;">
        <div class="container pt-4">
          <div class="row align-items-center">
            <section class="mb-4 col-sm">
              <div class="col">
                <h3 class="navText">Vintage Garage Vinkovic
                  <a class="btn btn-link btn-floating btn-lg navText" href="#!" role="button"
                  data-mdb-ripple-color="dark"><i class="bi bi-facebook"></i></a>
                  <a class="btn btn-link btn-floating btn-lg navText" href="#!" role="button"
                  data-mdb-ripple-color="dark"><i class="bi bi-instagram"></i></a>
                </h3>
                <div class="row">
                  <p class="navText aboutUs">{{ $t("aboutUs") }}</p>
                  <a class="btn btn-floating btn-lg navText contact" href="#!" role="button"
                  data-mdb-ripple-color="dark"><i class="bi bi-phone"></i>Robert: +385912227332</a>
                  <a class="btn btn-floating btn-lg navText contact" href="#!" role="button"
                  data-mdb-ripple-color="dark"><i class="bi bi-phone"></i>Ivan: +385917620501</a>
                  <a class="btn btn-floating btn-lg navText contact" href="#!" role="button"
                  data-mdb-ripple-color="dark"><i class="bi bi-mailbox"></i>vintage.garage.vinkovic@gmail.com</a>
                </div>
              </div>  
            </section> 

            <section class="mb-4 col text-dark">
              <form ref="form" class="form" style="margin: auto">
                <a id="Contact"><h2>{{ $t("form.contactUs") }}</h2></a>
                <!-- Name input -->
                <div class="">
                  <input type="text" id="name" name="name" v-model="name" class="form-control" required />
                  <label class="form-label" for="name">{{ $t("form.name_surname") }}<span v-if="v$.name.$error"> {{ $t("validations.form.name") }}</span></label>
                </div>

                <!-- Email input -->
                <div class="row">
                  <div class="col">
                    <input type="email" id="email" name="email" v-model="email" class="form-control" required />
                    <label class="form-label" for="name">{{ $t("form.email") }} <span v-if="v$.email.$error"> {{ $t("validations.form.email") }}</span></label>
                  </div>
                  <div class="col">
                    <input type="text" id="phone" name="phone" v-model="phone" class="form-control" required />
                    <label class="form-label" for="phone">{{ $t("form.number") }}</label>
                  </div>
                </div>

                <!-- Message input -->
                <div class="">
                  <textarea class="form-control" id="message" v-model="message" name="message" rows="4" required></textarea>
                  <label class="form-label" for="message">{{ $t("form.message") }} <span v-if="v$.message.$error">{{ $t("validations.form.message") }}</span></label>
                </div>
                <!-- Submit button -->
                <button type="button" @click="sendEmail()" data-dismiss="alert" class="form-control btn btn-lg btn-block sendButton">{{ $t("form.send") }}</button>
              </form>
              
            </section>
          </div>
        </div>

        <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          <div class="container">
            <div class="row">
              <div class="col">
                {{ $t("createdBy") }}
                <a class="text-dark" target="_blank" href="https://markobenjak.com/">MB</a>
              </div>
              <div class="col-md-auto">
                <div class="dropdown">
                  <button class="btn btn-light dropdown-toggle" type="button" id="LanguageButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <img v-if="$i18n.locale === 'English'" src="/src/assets/images/English.png" class="imageButton"/>
                    <img v-if="$i18n.locale === 'Hrvatski'" src="/src/assets/images/Hrvatski.png" class="imageButton"/>
                    {{ $i18n.locale }}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="LanguageButton">
                    <li>
                      <a @click="setLocale('Hrvatski')" class="dropdown-item">
                        <img src="/src/assets/images/Hrvatski.png"/>
                        Hrvatski
                      </a>
                      <a @click="setLocale('English')" class="dropdown-item">
                        <img src="/src/assets/images/English.png"/>
                        English
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="pagetop" style="position: fixed;" class="bottom-0 end-0" v-show="scY > 300" @click="toTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
           stroke="#4a5568"
           stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
    </main>
  </body>
</template>

<script>
import emailjs from 'emailjs-com';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
    setup () {
      return {
        v$: useVuelidate()
      }
    },
    data() {
      return {
        showAlert: false,
        name: '',
        email: '',
        message: '',
        phone: '',
        showAlertSuccess: false,
        showAlertFail: false,
        scTimer: 0,
        scY: 0,
      }
    },
    validations () {
      return {
        name: { required },
        email: { required},
        message: {required}
      }
    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      setLocale(locale) {
        this.$i18n.locale = locale;
      },
      handleScroll() {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      async sendEmail() {
        const isFormCorrect = await this.v$.$validate()

        if (isFormCorrect){
          emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, this.$refs.form, import.meta.env.VITE_EMAIL_USER_ID,
          {
            name: this.name,
            phone: this.phone,
            email: this.email,
            message: this.message
          }).then((result) => {
            this.showAlertSuccess = true;
          }, (error) => {
            this.showAlertFail = true;
          });
            this.name = '';
            this.email = '';
            this.message = '';
            this.phone = '';
          setTimeout(() => {
            this.showAlertSuccess = false;
            this.showAlertFail = false;
          }
          , 3000);
        }
      },
    }
}
</script>

<style scoped>

.ourVehicles{
  text-align: center;
  font-size: 2.7rem;
}

main{
  /* background:
      radial-gradient(27% 29% at right, #0000 83%,#714b13 85% 99%,#0000 101%) calc(28px/2) 28px,
      radial-gradient(27% 29% at left, #0000 83%,#714b13 85% 99%,#0000 101%) calc(28px/-2) 28px,
      radial-gradient(29% 27% at top, #0000 83%,#714b13 85% 99%,#0000 101%) 0 calc(28px/2),
      radial-gradient(29% 27% at bottom, #0000 83%,#714b13 85% 99%,#0000 101%) 0 calc(28px/-2)
      #eae6d7;
background-size: 56px 56px; */
background-color: #f7f4f0;
opacity: 1;
background-image:  radial-gradient(#d8c6ad 1.8px, transparent 1.8px), radial-gradient(#d8c6ad 1.8px, #f7f4f0 1.8px);
background-size: 72px 72px;
background-position: 0 0,36px 36px;
  }

  /* .offers > p, h2{
    background-color: #ece5db;
  }

  .offers > h2{
    padding-bottom: 2%;
  } */
  

.imageButton{
  padding-right: 10px;
  padding-left: 10px;
}
.container {
  margin-top: 1%;
}

.col-md-7 {
  padding-right: 1%;
  padding-left: 1%;
}

.col-lg-4 {
  padding-left: 3%;
}

/* .featurette-divider {
  border-top: 8px solid #583503;
  border-radius: 5px;
} */
hr {
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

.navText, .offers,  .featurette > div > p, .sendButton, h2, label, input, textarea, h1, .nav-link, li > a {
  color: #41372f !important;
}

.nav-link{
  padding: 0;
}

.featurette-heading, .containerHeading, .ourVehicles {
  /* color: #82786e !important; */
  color: #685e50 !important;
  font-weight: bold;
}

.offers, .featurette {
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}

.offers > img{
  margin-top: 5%;
  padding-top: 2%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.btn{
  padding-left: 0 !important;
}

.dropdownSize{
  font-weight: 600;
  font-size: 25px;
  text-align: center;
}

p, h1, h2, h3, a, input, label, button, li, a{
  font-family: andale mono, monospace;

}

p, .contact{
  text-align: justify;
}

.navbar, .sendButton{
  background-color: #bb9365b0;
  margin-bottom: -10px !important;

}
.aboutUs{
  font-weight: 500;
  text-align: justify;

}
.contact > i {
  padding-right: 1%;
  padding-left: 2%;
}

.rounded, .img-fluid{
  border-radius: 15px !important;
}


@media only screen and (min-width: 249px) and (max-width: 575px) {
  .form{
    margin-top: 15px;
    border-top: 1px solid #82786e;
  }
}

@media only screen and (max-width: 750px) {

  .nav{
    /* margin-top: 5%; */
  }

  .contact{
    font-size: medium;
  }
}

@media only screen and (min-width: 990px) and (max-width: 1301px) {
  .imageOffers{
    width: 250px;
    height: 200px;
  }
}


</style>
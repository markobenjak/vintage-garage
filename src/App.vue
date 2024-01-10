<template>
  <body>
    <main>
      <nav class="navbar navbar-expand-lg shadow p-3 mb-5">
        <div class="container">
          <div class="col align-self-start">
            <h1 class="h1Name navText">Vintage Garage Vinkovic</h1>
            <p class="navText aboutUs">{{ $t("aboutUs") }}</p>
          </div>          
        </div>
      </nav>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 offers">
            <img src="/src/assets/images/version2/test/t1Wedding.jpg"
              class="shadow-lg p-3 mb-5 bg-body rounded imageOffers" alt="">

            <h2 class="containerHeading">{{ $t("offers.weddings") }}</h2>
            <p>Unajmite vozilo s vozačem za vaš poseban dan! Odaberite jedno od naših pet vozila koja će vam donijeti šarm prošlih vremena stvarajući nezaboravne trenutke i drugačije iskustvo s uspomenama koje će trajati vječno.</p>
          </div>
          <div class="col-lg-4 offers">
            <img src="/src/assets/images/version2/test/event.jpg"
              class="shadow-lg p-3 mb-5 bg-body rounded imageOffers" alt="">

            <h2 class="containerHeading">Najam vozila</h2>
            <p>Snimanje spotova, serija i filmova ili stvaranje fotoalbuma – naša vozila su spremna pozirati na svemu što stvarate</p>
          </div>
          <div class="col-lg-4 offers">
            <img src="/src/assets/images/version2/test/buba.jpg"
              class="shadow-lg p-3 mb-5 bg-body rounded imageOffers" alt="">

            <h2 class="containerHeading">Organizacija događaja</h2>
            <p>Izložbe automobila, posebna poslovna druženja ili događaji na kojima naši auti mogu svojom elegancijom stvoriti drugačija sjećanja – nazovite nas i osigurajte jedinstven doživljaj sebi i svojim gostima.</p>
          </div>
        </div>

        <hr class="featurette-divider">
        
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h1 class="featurette-heading">Jaguar Mk2</h1>
            <p>Jaguar je zadnje pridružen model našoj kolekciji, a proizveden je davne 1968. godine u Ujedinjenom kraljevstvu kao luksuzna sportska limuzina bezvremenskog izgleda i vrhunske udobnosti.
            </p>
            <p>
              Englesko bijele boje i crne kožnate unutrašnjosti, Jaguar je idealna kombinacija za vjenčanje s dozom aristokratskog engleskog luksuza.
            </p>
            <p class="lead">
              <strong>Broj mjesta: 4</strong>
            </p>
            <p class="lead">
              <strong>Godište: 1968.</strong>
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <div id="jaguar" class="carousel slide shadow-lg p-3 mb-5 bg-body rounded">
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
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/src/assets/images/version2/jaguar_800x563/jaguar_full.jpg" class="d-block img-fluid"
                    alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar_800x563/inside3.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar_800x563/back.jpg" class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar_800x563/front.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar_800x563/front2.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar_800x563/back2.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar_800x563/inside.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/jaguar_800x563/logo.jpg"
                    class="d-block img-fluid" alt="...">
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
          <div class="col-md-7">
            <h1 class="featurette-heading">Citroen DS19</h1>
            <p>Auto poznatiji pod imenom „Žaba“ u našoj je obitelji od 2014. godine. 
              Predstavljen je po prvi puta 1955. godine na pariškom salonu automobila kao automobil budućnosti s razvijenim hidropneumatskim ovjesom. 
              Zbog tog je ovjesa žaba postala pojam za udobnost.
            </p>
            <p>
              Odlična je za mladence koji žele dodatnu udobnost tijekom vožnje jer cesta u žabi postaje kao mirno more – bez osjetnih neravnina.
            </p>
            <p class="lead">
              <strong>Broj mjesta: 4</strong>
            </p>
            <p class="lead">
              <strong>Godište: 1973.</strong>
            </p>
          </div>
          <div class="col-md-5">
            <div id="CitroenDS19" class="carousel slide shadow-lg p-3 mb-5 bg-body rounded">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#CitroenDS19" data-bs-slide-to="6" aria-label="Slide 7"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/src/assets/images/version2/cds/ver2_800x563/side_decorated_wedding_people.jpg"
                    class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_800x563/side_decorated_wedding.jpg"
                    class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_800x563/side_decorated_wedding_2.jpg"
                    class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_800x563/doors_open_2.jpg" class="d-block img-fluid"
                    alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_800x563/doors_open.jpg" class="d-block img-fluid"
                    alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_800x563/event_back.jpg" class="d-block img-fluid"
                    alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cds/ver2_800x563/event_side_2.jpg" class="d-block img-fluid"
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
          <div class="col-md-7 order-md-2">
            <h1 class="featurette-heading">Citroën Traction Avant</h1>
            <p>Najstariji model iz naše ponude, Traction Avant, došao je 2019. godine u našu garažu iz Nizozemske. 
              Svoju karijeru vožnje mladenaca započeo je već u Nizozemskoj gdje je bio dio kolekcije za najam vozila. 
            </p>
            <p>
              Svojim dizajnom podsjeća na predratne automobile, a bezvremenske linije i ogroman prostor na stražnjoj klupi osiguravaju veliku luksuznost tijekom vožnje.
            </p>
            <p class="lead">
              <strong>Broj mjesta: 4</strong>
            </p>
            <p class="lead">
              <strong>Godište: 1952.</strong>
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <div id="tractionAvant" class="carousel slide shadow-lg p-3 mb-5 bg-body rounded">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#tractionAvant" data-bs-slide-to="7" aria-label="Slide 8"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/src/assets/images/version2/cta/ver2_800x563/event_front.jpg" class="d-block img-fluid"
                    alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cta/ver2_800x563/wedding_decorated_side.jpg"
                    class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cta/ver2_800x563/front.jpg" class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cta/ver2_800x563/wedding_decorated_back.jpg"
                    class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cta/ver2_800x563/wedding_decorated_front_2.jpg"
                    class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cta/ver2_800x563/wedding_decorated_front.jpg"
                    class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cta/ver2_800x563/wedding_decorated_side_2.jpg"
                    class="d-block img-fluid" alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/cta/ver2_800x563/wedding_decorated_side_3.jpg"
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
          <div class="col-md-7">
            <h1 class="featurette-heading">Volkswagen T1</h1>
            <p>Volkswagen T1 kombi je svima poznat svojom pojavom – takozvani hippie van iz 60-ih godina.
               U našoj je obitelji od 2009. godine i s njime smo napravili preko 15 000 km. 
            </p>
            <p>
              Odličan je za mladence koji se žele voziti s kumovima ili prijateljima i imati malu zabavu tijekom vožnje i prije dolaska u prostor za slavlje.
            </p>
            <p class="lead">
              <strong>Broj mjesta: 9</strong>
            </p>
            <p class="lead">
              <strong>Godište: 1963.</strong>
            </p>
          </div>
          <div class="col-md-5">

            <div id="VT1" class="carousel slide shadow-lg p-3 mb-5 bg-body rounded">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="0" class="active" aria-current="true"
                  aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#VT1" data-bs-slide-to="8" aria-label="Slide 9"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/src/assets/images/version2/t1/ver2_800x563/decorated_wedding_2.jpg" class="d-block img-fluid"
                    alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/t1/ver2_800x563/decorated_wedding_3.jpg" class="d-block img-fluid"
                    alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/t1/ver2_800x563/decorated_wedding_couple_2.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/t1/ver2_800x563/decorated_wedding_couple.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/t1/ver2_800x563/decorated_wedding_front_dark.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/t1/ver2_800x563/decorated_wedding_inside.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/t1/ver2_800x563/decorated_wedding_logo.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/t1/ver2_800x563/decorated_wedding_side.jpg"
                    class="d-block img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/t1/ver2_800x563/decorated_wedding.jpg" class="d-block img-fluid"
                    alt="...">
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
          <div class="col-md-7 order-md-2">
            <h1 class="featurette-heading">Wolkswagen Buba</h1>
            <p>Volkswagen model 1200, puno poznatiji pod nazivom buba, jedan je od ikona automobilizma po svojoj prepoznatljivosti.
            </p>
            <p>
              Naša u potpunosti preuređena i obnovljena plava buba je iz 1963 godine, a veliki krovni otvor kao stvoren je za mladence i njihov veliki dan.
            </p>
            <p class="lead">
              <strong>Broj mjesta: 4</strong>
            </p>
            <p class="lead">
              <strong>Godište: 1968.</strong>
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <div id="buba" class="carousel slide shadow-lg p-3 mb-5 bg-body rounded">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#buba" data-bs-slide-to="0" class="active" aria-current="true"
                  aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#buba" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#buba" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#buba" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/src/assets/images/version2/buba/decorated_wedding_front.jpg" class="d-block img-fluid"
                    alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/buba/decorated_wedding_front_2.jpg" class="d-block img-fluid"
                    alt="...">

                </div>
                <div class="carousel-item">
                  <img src="/src/assets/images/version2/buba/decorated_wedding_front_3.jpg" class="d-block img-fluid"
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
          {{ alertMessage }}
        </div>
        <div class="alert alert-danger" v-if="showAlertFail" id="emailAlertFail" role="alert">
          {{ alertMessage }}
        </div>
      </div>

      <footer class="text-center text-white" style="background-color: #f1f1f1;">
        <div class="container pt-4">
          <div class="row align-items-center">
          
            <section class="mb-4 col text-dark">
              <form ref="form" style="margin: auto">
                <h2>Kontaktirajte nas:</h2>
                <!-- Name input -->
                <div class="">
                  <input type="text" id="name" name="name" v-model="name" class="form-control" required />
                  <label class="form-label" for="name">Ime <span v-if="v$.name.$error"> ne može biti prazno.</span></label>
                </div>

                <!-- Email input -->
                <div class="row">
                  <div class="col">
                    <input type="email" id="email" name="email" v-model="email" class="form-control" required />
                    <label class="form-label" for="name">Email <span v-if="v$.email.$error"> ne može biti prazan.</span></label>
                  </div>
                  <div class="col">
                    <input type="text" id="phone" name="phone" v-model="phone" class="form-control" required />
                    <label class="form-label" for="phone">Broj</label>
                  </div>
                </div>

                <!-- Message input -->
                <div class="">
                  <textarea class="form-control" id="message" v-model="message" name="message" rows="4" required></textarea>
                  <label class="form-label" for="message">Poruka <span v-if="v$.message.$error"> ne može biti prazna.</span></label>
                </div>
                <!-- Submit button -->
                <button type="button" @click="sendEmail()" data-dismiss="alert" class="form-control btn btn-lg btn-block sendButton">Pošalji</button>
              </form>
              
            </section>
            <section class="mb-4 col-sm">
              <div class="col">
                <h1 class="h1Name navText">Vintage Garage Vinkovic</h1>
                <a class="btn btn-link btn-floating btn-lg navText" href="#!" role="button"
                data-mdb-ripple-color="dark"><i class="bi bi-facebook"></i></a>
                <a class="btn btn-link btn-floating btn-lg navText" href="#!" role="button"
                data-mdb-ripple-color="dark"><i class="bi bi-instagram"></i></a>
                <div class="row">
                  <a class="btn btn-floating btn-lg navText contact" href="#!" role="button"
                  data-mdb-ripple-color="dark"><i class="bi bi-phone"></i>Robert: +385912227332</a>
                  <a class="btn btn-floating btn-lg navText contact" href="#!" role="button"
                  data-mdb-ripple-color="dark"><i class="bi bi-phone"></i>Ivan: +385917620501</a>
                  <a class="btn btn-floating btn-lg navText contact" href="#!" role="button"
                  data-mdb-ripple-color="dark"><i class="bi bi-mailbox"></i>vintage.garage.vinkovic@gmail.com</a>
                </div>
              </div>  
            </section> 
          </div>
        </div>

        <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          <div class="container">
            <div class="row">
              <div class="col">
                Created By: 
                <a class="text-dark" href="#">MB</a>
              </div>
              <div class="col-md-auto">
                <select class="form-select form-select-sm" aria-label="Default select example" v-model="$i18n.locale" id="locale">
                    <option v-for="locale in $i18n.availableLocales" :value="locale">{{ locale }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
        alertMessage: '',
        showAlertSuccess: false,
        showAlertFail: false
      }
    },
    validations () {
      return {
        name: { required },
        email: { required},
        message: {required}
      }
    },
    methods: {
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
            this.alertMessage = "Email uspjesno poslan. Javit cemo se u najkracem mogucem vremenu"
            this.showAlertSuccess = true;
          }, (error) => {
            this.alertMessage = "fail"
            this.showAlertFail = true;
          });

            this.alertMessage = '';
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

.featurette-divider {
  color: #82786e !important;
}

.navText, .containerHeading, .offers,  .featurette > div > p, .sendButton, h2, label, input, textarea {
  color: #82786e !important;
}

.featurette-heading {
  color: #82786e !important;
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
.h1Name{
  font-weight: bold;
  font-size: 45px;
}
p, h1, h2, h3, a, input, label{
  font-family: didot, serif;
}

.navbar, .sendButton{
  background-color: #d5dad6;
}
.aboutUs{
  font-weight: 500;
}
.contact{
  padding: 2%;
}
.contact > i {
  padding-right: 1%;
}
@media only screen and (max-width: 750px) {

  .nav{
    margin-top: 5%;
  }
  .h1Name{
    font-weight: bold;
    font-size: xx-large;
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
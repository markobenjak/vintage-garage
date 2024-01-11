<template>
  <body>
    <main>
      <nav class="navbar navbar-expand-lg shadow p-3 mb-5">
        <div class="container">
          <div class="col align-self-start">
            <h1 class="h1Name navText">Vintage Garage Vinkovic</h1>
          </div>          
        </div>
      </nav>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 offers">
            <img src="/src/assets/images/version2/offers/t1Wedding.jpg"
              class="shadow-lg p-3 mb-5 bg-body rounded imageOffers" alt="">

            <h2 class="containerHeading">{{ $t("offers.weddings.name") }}</h2>
            <p>{{ $t("offers.weddings.content") }}</p>
          </div>
          <div class="col-lg-4 offers">
            <img src="/src/assets/images/version2/offers/event.jpg"
              class="shadow-lg p-3 mb-5 bg-body rounded imageOffers" alt="">

            <h2 class="containerHeading">{{ $t("offers.rental.name") }}</h2>
            <p>{{ $t("offers.rental.content") }}</p>
          </div>
          <div class="col-lg-4 offers">
            <img src="/src/assets/images/version2/offers/buba.jpg"
              class="shadow-lg p-3 mb-5 bg-body rounded imageOffers" alt="">

            <h2 class="containerHeading">{{ $t("offers.events.name") }}</h2>
            <p>{{ $t("offers.events.content") }}</p>
          </div>
        </div>

        <hr class="featurette-divider">
        
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h1 class="featurette-heading">Jaguar Mk2</h1>
            <p>{{ $t("jaguar.jaguar_part1") }}
            </p>
            <p>
              {{ $t("jaguar.jaguar_part2") }}
            </p>
            <p class="lead">
              <strong>{{ $t("seats") }} 4</strong>
            </p>
            <p class="lead">
              <strong>{{ $t("year") }} 1968.</strong>
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
            <h1 class="featurette-heading">Citroën DS19</h1>
            <p>{{ $t("citroenDS.citroenDS_part1") }}
            </p>
            <p>
              {{ $t("citroenDS.citroenDS_part2") }}
            </p>
            <p class="lead">
              <strong>{{ $t("seats") }} 4</strong>
            </p>
            <p class="lead">
              <strong>{{ $t("year") }} 1973.</strong>
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
            <p>{{ $t("cta.cta_part1") }}
            </p>
            <p>
              {{ $t("cta.cta_part2") }}
            </p>
            <p class="lead">
              <strong>{{ $t("seats") }} 4</strong>
            </p>
            <p class="lead">
              <strong>{{ $t("year") }} 1952.</strong>
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
            <p>
              {{ $t("t1.t1_part1") }}
            </p>
            <p>
              {{ $t("t1.t1_part2") }}            
            </p>
            <p class="lead">
              <strong>{{ $t("seats") }} 9</strong>
            </p>
            <p class="lead">
              <strong>{{ $t("year") }} 1963.</strong>
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
            <p>
              {{ $t("buba.buba_part1") }}
            </p>
            <p>
              {{ $t("buba.buba_part2") }}
            </p>
            <p class="lead">
              <strong>{{ $t("seats") }} 4</strong>
            </p>
            <p class="lead">
              <strong>{{ $t("year") }} 1968.</strong>
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
                <h2>{{ $t("form.contactUs") }}</h2>
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

p, .contact{
  text-align: justify;
}

.navbar, .sendButton{
  background-color: #d5dad6;
}
.aboutUs{
  font-weight: 500;
  text-align: justify;

}

.contact > i {
  padding-right: 1%;
  padding-left: 2%;
}

@media only screen and (min-width: 249px) and (max-width: 575px) {
  .form{
    margin-top: 15px;
    border-top: 1px solid #82786e;
  }
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
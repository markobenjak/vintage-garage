<template>
  <nav class="navbar navbar-expand-lg shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="#/">Pocetna</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#/CitroenTractionAvant">Citroën Traction Avant</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#/VolkswagenT1">Volkswagen T 1</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#/CitroenDS19">Citroën DS 19</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">O nama</a>
              </li>
          </ul>
      </div>
  </nav>
  <component class="mainComponent shadow-sm p-3 mb-5 bg-body-tertiary rounded" :is="currentView" />

  <section class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">


  </section>
  
  <footer class="text-center text-lg-start bg-body-tertiary text-muted footer">
        <!-- Section: Links  -->
        <section class="">
            <div class="container text-md-start">
            <!-- Grid row -->
                <div class="row">
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <!-- Content -->
                    <h6 class="text-uppercase fw-bold mb-4">
                        <i class="fas fa-gem me-3"></i>Vintage Vinovic garage
                    </h6>
                    </div>

                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">
                        Socials
                    </h6>
                    <p>
                        <a href="#!" class="text-reset"><i class="bi bi-facebook"></i>Facebook</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset"><i class="bi bi-twitter"></i>Twitter</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset"><i class="bi bi-instagram"></i>Instagram</a>
                    </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                    <p><i class="bi bi-house"></i> New York, NY 10012, US</p>
                    <p>
                        <i class="bi bi-mailbox"></i>
                        info@example.com
                    </p>
                    <p><i class="bi bi-phone"></i> + 01 234 567 88</p>
                    </div>
                    <!-- Grid column -->
                </div>
            <!-- Grid row -->
            </div>
        </section>
        <!-- Section: Links  -->

    </footer>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import CTA from './components/CTA.vue'
  import VT1 from './components/VT1.vue'
  import CDS19 from './components/CDS19.vue'
  import HOME from './components/Home.vue'

  const routes = {
      '/': HOME,
      '/CitroenTractionAvant': CTA,
      '/VolkswagenT1': VT1,
      '/CitroenDS19': CDS19
  }

  const currentPath = ref(window.location.hash)

  window.addEventListener('hashchange', () => {
      currentPath.value = window.location.hash
  })

  const currentView = computed(() => {
      return routes[currentPath.value.slice(1) || '/']
  })
</script>

<style scoped>


.mainComponent{
    background-color: rgba(33, 37, 44, 0.26);
}
.footer{
    margin-bottom: 0;
    padding-bottom:0;   

}
li{
  margin-right: 10px;
}
</style>
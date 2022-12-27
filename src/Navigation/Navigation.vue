<template>
  <div id="Navigation">
    <div class="container-fluid">
      <div class="backNav" :class="{ backFon: store.color2 }"></div>
      <div class="header">
        <!-- Navbar -->
        <nav
          class="navbar navbar-expand-lg navbar-light text-light shadow-0"
          :class="{ active: store.color, active2: store.color2 }"
        >
          <!-- Container wrapper -->
          <div class="container-fluid">
            <!-- Toggle button -->
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>

            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <!-- Navbar brand -->
              <a class="navbar-brand mt-2 mt-lg-0" href="#">
                <img
                  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                  height="15"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
              <!-- Left links -->
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <span>Home</span>
                </li>
               
              </ul>
              <!-- Left links -->
            </div>
            <!-- Collapsible wrapper -->

            <!-- Right elements -->
            <div class="d-flex align-items-center gap-3">
        
              <div class="dropdown">
                <a
                  class="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-bell"></i>
                  <span class="badge rounded-pill badge-notification bg-danger"
                    >1</span
                  >
                </a>
              </div>
              <!-- Avatar -->
              <div class="dropdown">
                <a
                  class="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="../assets/men.jpg"
                    class="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <!-- Right elements -->
          </div>
          <!-- Container wrapper -->
        </nav>
        <!-- Navbar -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "../../store/store";
let selectedItem = ref();
let isActive = ref();

let store = useStore();
</script>
<style lang="scss">
#Navigation {
  .header {
    width: 98%;
    margin: auto;
    height: auto;
    background: rgb(194, 93, 237);
    background: linear-gradient(
      276deg,
      rgba(194, 93, 237, 1) 0%,
      rgba(123, 135, 252, 1) 100%
    );
    background: #164e63 !important;
    border-radius: 10px;
    position: fixed;
    z-index: 122221;
    top: 2%;
    right: 1%;
    border-radius: 10px;
  }

  .backFon {
    // background: #AFC2CB !important;
    background: rgb(194, 93, 237);
    background: linear-gradient(
      276deg,
      rgba(194, 93, 237, 0.8) 0%,
      rgba(30, 77, 104, 0.942) 100%
    );
    background: #AFC2CB !important;
  }

  .backNav {
    width: 95%;
    border-radius: 10px;
    height: 5%;
    background: #AFC2CB !important;
    background: rgb(194, 93, 237);
    background: linear-gradient(
      276deg,
      rgba(194, 93, 237, 0.8) 0%,
      rgba(30, 77, 104, 0.942) 100%
    );

    margin: auto;
    top: 1%;
    left: 2.5%;
    position: fixed;
    z-index: 211;
  }

  .active {
    background: rgb(194, 93, 237);
    background: linear-gradient(
      276deg,
      rgba(194, 93, 237, 1) 0%,
      rgba(123, 135, 252, 1) 100%
    );
    border-radius: 10px;
  }

  .active2 {
    background: #164e63 !important;
    box-shadow: 0 5px 3px rgba(192, 197, 204, 0.099) !important;

    border-radius: 10px;
  }
}
</style>
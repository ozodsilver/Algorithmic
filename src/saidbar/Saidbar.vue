<template >
  <div id="saidbar">
    <div class="position-relative pt-3">
      <router-link
        to="/"
        type="button"
        class="
          btn 
          shadow-0
          rounded-5
          w-100
          py-4
          d-flex
          align-items-center
          gap-4
        "
        id="but"
        ><i class="fas fa-home fa-2x"></i>Home  
        
            </router-link
      >

      <router-link
        to="/Users"
        type="button"
        class="
          btn 
          shadow-0
          
          rounded-5
          w-100
          py-4
          d-flex
          align-items-center
          gap-4
        "
        ><i class="fas fa-users fa-2x"></i>Foydalanuvchilar</router-link
      >


      <router-link
        to="/Problems"
        type="button"
        class="
          btn 
          shadow-0
          
          rounded-5
          w-100
          py-4
          d-flex
          align-items-center
          gap-4
        "
        ><i class="fab fa-asymmetrik fa-2x"></i>Problems</router-link
      >


    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
#saidbar {
  height: 100vh;
  padding-top: 40%;
  padding: 7% 6%;
  padding-right: 0;
  background: rgb(226,232,240);
background: linear-gradient(63deg, rgba(226,232,240,1) 0%, rgba(22,95,99,0.09007352941176472) 94%);
  margin-top: 70px;
  position: relative;
  z-index:1111 ;

}
#but {
  position: relative;
 
}

#but:before {
  content: "";
  width: 8%;
  height: 150%;
  right: -9%;
  position: absolute;
  
  background-repeat: no-repeat;
  background-position: 60%;
  background-size: contain;
}

i{
  color: #164E63;
}

#saidbar a{
background-position: top right;
color: #164E63;
text-transform: capitalize;
font-size: 13px;
}



#saidbar a.router-link-exact-active {
  color: #1ebc7f !important;
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='80'%20viewBox='0%200%2020%20122.1'%3E%3Cpath%20data-name='Union%201'%20d='M16.038%20122H16v-2.213a95.805%2095.805%200%2000-2.886-20.735%2094.894%2094.894%200%2000-7.783-20.434A39.039%2039.039%200%20010%2061.051a39.035%2039.035%200%20015.331-17.567%2094.9%2094.9%200%20007.783-20.435A95.746%2095.746%200%200016%202.314V0h4v122h-3.961v.1l-.001-.1z'%20fill='%23f1f5f8'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 102%;
  background-size: contain;
}

</style>
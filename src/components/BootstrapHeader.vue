<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Repairment Depot</a>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/home" class="nav-link active">Home</router-link>
        <router-link to="/services" class="nav-link">Services</router-link>
        <!--<a class="nav-link" href="#">Services</a>-->
        <router-link to="/maintenance" class="nav-link">Maintenance</router-link>
        <a class="nav-link" href="#">Operations</a>
      </div>
    </div>

    
<!--Dropdown list with posibilities-->
<div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Action to do</a>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><router-link to="/sign-up" class="nav-link">Sign up</router-link></li>
        <li><a class="dropdown-item" href="#">Request for repairment</a></li>
        <li><a class="dropdown-item" href="#">About</a></li>
    </ul>
</div>

<select class="form-select" aria-label="Default select example">
  <option selected>Select company to get info about</option>
  <option value="1">BBL Technik GmbH</option>
  <option value="2">Bücker & Essing GmbH</option>
  <option value="3">Ostmecklenburgische Bahnwerk GmbH</option>
</select>


<!--
  <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>  
-->



</div>



</nav>
</template>

<script>

export default{
    name:"BootstrapHeader"
}
</script>
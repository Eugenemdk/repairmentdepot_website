<template>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" >
    <div class="carousel-item active">
      <img src="@/assets/db_train_01.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>BBL Technik GmbH</h5>
        <p style="text-align: left;">To ensure that all vehicles are always ready for use, the latest diagnostic, maintenance and repair 
          technology is available in our workshop. Our competent workshop employees take care of your rolling 
          stock.
          To ensure that all vehicles are always ready for use, the latest diagnostic,
          maintenance and repair technology is available in our workshop.
          Our competent workshop employees take care of your rolling stock.
          BBL Technik GmbH is the third pillar of BBL Group and responsible for the maintenance of rail
           vehicles and infrastructure.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/db_train_04.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Bücker & Essing GmbH</h5>
        <p>Bücker & Essing GmbH is an international specialist for diesel engine 
          overhauls and power pack services, based in Germany since 1963.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/db_train_05.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Ostmecklenburgische Bahnwerk GmbH</h5>
        <p>Ostmecklenburgische Bahnwerke GmbH offers a wide range of services for the
           maintenance, restoration, modernization and repowering of rail vehicles.</p>
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

</template>

<script>
export default{
    name:"BootstrapContent",

}
</script>

<style>
.carousel-item{
  height: 32erm;
  background:#777;
  color:white;
  position:absolute;
}
.container{
  position: relative;
  bottom: 0;
  right:0;
  left:0;
  padding-bottom: 50 px;
}
</style>
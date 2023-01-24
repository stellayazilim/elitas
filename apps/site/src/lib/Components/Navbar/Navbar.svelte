<script lang="ts">
import Sidemenu from "$lib/Components/Sidemenu/Sidemenu.svelte";

import Carousel from "$lib/Components/Navbar/Carousel.svelte";
import DropdownBar from "../DropdownBar/DropdownBar.svelte";


/* Dropdown variable */
 let width: any;

/* Dropdown variable */


/* Owl Carousel */



let options = {
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
};

/* var owl = new OwlCarousel(carousel, options); */

/* Owl Carousel */

</script>
<svelte:window bind:innerWidth={width}/>

 
<div class="container-fluid mb-5">
    <div class="row border-top px-xl-5">
        <Sidemenu/>
        <div class="col-lg-9" >
            <DropdownBar {width}/>



            <Carousel/><!-- 
            <div id="header-carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <!-- svelte-ignore missing-declaration -->

       
 <!--                    <OwlCarousel {options}>
                        <div class="carousel-item active" style="height: 410px;">
                            <img class="img-fluid" src="img/carousel-1.jpg" alt="Image1">
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style="max-width: 700px;">
                                    <h4 class="text-light text-uppercase font-weight-medium mb-3">Bilgi için iletişime geçin</h4>
                                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> 
                  
                    <div class="carousel-item" style="height: 410px;">
                        <img class="img-fluid" src="img/carousel-2.jpg" alt="Image2">
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style="max-width: 700px;">
                                <h4 class="text-light text-uppercase font-weight-medium mb-3">Detaylı bilgi için iletişime geçin</h4>
                                <h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="/#2header-carousel" data-slide="prev">
                    <div class="btn btn-dark" style="width: 45px; height: 45px;">
                        <span class="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a class="carousel-control-next" href="/#2header-carousel" data-slide="next">
                    <div class="btn btn-dark" style="width: 45px; height: 45px;">
                        <span class="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div> -->
        </div>
    </div>
</div>
<script lang="ts">
/* import Glide from '@glidejs/glide'
import "@glidejs/glide/dist/css/glide.core.min.css"
import { onMount } from 'svelte';

let glide: HTMLDivElement          //YOU CAN USE IF EVERY ITEM HAS SO MANY IMAGES
onMount ( () => {
    new Glide (glide,
    {
        type: "carousel",
        gap: 0,
        autoplay:5000,
        animationDuration:900,
        animationTimingFunc: "ease"
    })
    .mount()
}) */
</script>

  
  <!-- Shop Detail Start -->
   <div class="container-fluid py-5">
    <div class="row px-xl-5">
        <div class="col-lg-5 pb-5">
            <div class="carousel slide">
                <div class="carousel-inner border">
                    <div class="carousel-item active">
                        <img class="w-100 h-100" src="img/product-1.jpg" alt="Image">
                    </div>
                </div>
                <!--    <div class="glide__arrows" data-glide-el="controls">       //GLIDE ARROWS IF YOU NEED
                                <div class="glide__arrow glide__arrow--left" data-glide-dir="<">
                                    <div class="carousel-control-prev">
                                    <div class="btn btn-dark" style="width: 45px; height: 45px;">
                                            <span class="carousel-control-prev-icon mb-n2"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="glide__arrow glide__arrow--right" data-glide-dir=">">
                                    <div class="carousel-control-next">
                                        <div class="btn btn-dark" style="width: 45px; height: 45px;">
                                            <span class="carousel-control-next-icon mb-n2"></span>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div> -->
            </div>
        </div>

        <div class="col-lg-7 pb-5">
            <h3 class="font-weight-semi-bold ml-4"><!-- item.name gelecek -->item.name gelecek </h3>
         
            <h3 class="font-weight-semi-bold mb-4 ml-4"><!--  item.description gelecek  --> item.description gelecek </h3>
            <p class="mb-4 ml-4"> <!-- item.explanation gelecek -->item.explanation gelecek</p>

        <!--     <div class="d-flex mb-3">              //BURADA SİZES VARDI YORUMDA 
                <p class="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                <form>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="size-1" name="size">
                        <label class="custom-control-label" for="size-1">XS</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="size-2" name="size">
                        <label class="custom-control-label" for="size-2">S</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="size-3" name="size">
                        <label class="custom-control-label" for="size-3">M</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="size-4" name="size">
                        <label class="custom-control-label" for="size-4">L</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="size-5" name="size">
                        <label class="custom-control-label" for="size-5">XL</label>
                    </div>
                </form>
            </div> -->
    <!--             <div class="d-flex mb-4">
                <p class="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
                <form>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="color-1" name="color">
                        <label class="custom-control-label" for="color-1">Black</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="color-2" name="color">
                        <label class="custom-control-label" for="color-2">White</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="color-3" name="color">
                        <label class="custom-control-label" for="color-3">Red</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="color-4" name="color">
                        <label class="custom-control-label" for="color-4">Blue</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="color-5" name="color">
                        <label class="custom-control-label" for="color-5">Green</label>
                    </div>
                </form>
            </div>
            <div class="d-flex align-items-center mb-4 pt-2">
                <div class="input-group quantity mr-3" style="width: 130px;">
                    <div class="input-group-btn">
                        <button class="btn btn-primary btn-minus" >
                        <i class="fa fa-minus"></i>
                        </button>
                    </div>
                    <input type="text" class="form-control bg-secondary text-center" value="1">
                    <div class="input-group-btn">
                        <button class="btn btn-primary btn-plus">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="btn btn-primary px-3"><i class="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
            </div>
            <div class="d-flex pt-2">
                <p class="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                <div class="d-inline-flex">
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-pinterest"></i>
                    </a>
                </div>
            </div> -->
        </div>
    </div>
    <div class="row px-xl-5 ml-3">
        <div class="col">
                <div class="tab-pane fade show active">
                    <h4 class="mb-3">Long Description</h4>
                    <p>Long Description</p>
                    <!-- <p> Long description if we need </p> -->
                </div>
        </div>
    </div>
</div>
<!-- Shop Detail End -->
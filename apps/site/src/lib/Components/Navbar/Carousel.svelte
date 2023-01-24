<script lang="ts">
import Glide from '@glidejs/glide'
import "@glidejs/glide/dist/css/glide.core.min.css"
import { onMount } from 'svelte';

let glide: HTMLDivElement 
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
}

)
</script>

<div bind:this={glide} class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide"><div class="carousel-item active" style="height: 410px;">
            <img class="img-fluid" src="img/carousel-1.jpg" alt="Image1">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style="max-width: 700px;">
                    <h4 class="text-light text-uppercase font-weight-medium mb-3">Bilgi için iletişime geçin</h4>
                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
                </div>
            </div>
        </div></li>
        <li class="glide__slide"><div class="carousel-item active" style="height: 410px;">
            <img class="img-fluid" src="img/carousel-1.jpg" alt="Image1">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style="max-width: 700px;">
                    <h4 class="text-light text-uppercase font-weight-medium mb-3">Bilgi için iletişime geçin</h4>
                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
                </div>
            </div>
        </div></li>
        <li class="glide__slide"><div class="carousel-item active" style="height: 410px;">
            <img class="img-fluid" src="img/carousel-1.jpg" alt="Image1">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style="max-width: 700px;">
                    <h4 class="text-light text-uppercase font-weight-medium mb-3">Bilgi için iletişime geçin</h4>
                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
                </div>
            </div>
        </div></li>
      </ul>
    </div>

    <div class="glide__arrows" data-glide-el="controls">
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
  </div>


<script lang="ts">
    export let items:number ;
    export let productOrCategoryName : string ;
    export let image : {
        src: string ,
        alt: string 
    } = {
        src : "img/cat-1.jpg",
        alt: "catiamge"
    }
</script>





<div class="col-lg-4 col-md-6 pb-1">
    <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
        <p class="text-right">{items && `${items} ürün`}</p>
        <a href="/#2" class="cat-img position-relative overflow-hidden mb-3">
            <img class="img-fluid" src="{image.src}" alt="{image.alt}">
        </a>
        <h5 class="font-weight-semi-bold m-0">{productOrCategoryName || ""}</h5>
    </div>
</div>

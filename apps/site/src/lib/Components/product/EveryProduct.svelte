<script context="module" lang="ts" >

import { products } from "$lib/components/product/productsWithCategories";


</script>


    
   

    
    {#each products as product}
        <div class="col-12 mb-3">
            <h3 class="font-weight-semi-bold ml-5" id="{product?.slug}">{product.category}</h3>
        </div>
            {#each product.items as item}
            <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-100" src="img/product-1.jpg" alt="Ürün Resmi">
                    </div>
                    <div class="card-body border-left border-right border text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">{item.name}</h6>
                    </div>
                    
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="{item.url}" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-info mr-1"></i>Detayları Gör</a>
                    </div>
                </div>
            </div>
            {/each}
    {/each}


<script context="module" lang="ts" >
/*  import {products} from "$lib/components/product/productWithCategories"; */

import { products } from "../../lib/components/product/productsWithCategories";
// "$lib/components/product/productWithCategories" Şeklinde import edemedim 


/* 

 //Creating DATABASE

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES categories(id),
    name VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    explanation VARCHAR(255) NOT NULL
); 

*/


/* 
            //inserting Database 

INSERT INTO categories (name) VALUES ('Buhar Kazanları');

INSERT INTO items (category_id, name, url, description, explanation)
VALUES 
(1, '4 Çıkışlı', '/#', 'Buhar Kazanı', ''),
(1, '3 Çıkışlı', '/#', 'Buhar Kazanı', ''),
(1, '2 Çıkışlı', '/#', 'Buhar Kazanı', ''),
(1, 'Doğalgazlı CE Belgeli İgdaş Onaylı', '/#', 'Buhar Jeneratörü', ''),
(1, '60KW', '/#', 'Buhar Jeneratörü', ''),
(1, '30KW', '/#', 'Buhar Jeneratörü', '');
.... 


*/
</script>

{#each products as product}
    <div class="col-12 mb-3 ">
        <h3 class="font-weight-semi-bold ml-5">{product.category}</h3>
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

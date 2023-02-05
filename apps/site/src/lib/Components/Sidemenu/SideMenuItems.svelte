<script>
   import { slide  } from 'svelte/transition'
   import { products } from "$lib/components/product/productsWithCategories";   
   
   </script>
   
   <div class="navbar-nav w-100 overflow-hidden bgWhite position-absolute" style="height: 450px" in:slide ={{duration: 900}} out:slide={{duration: 500}}>
    {#each products as item}
   <a href="/products#{item.slug}" class="nav-item nav-link" >{item.category}</a>
   {/each}
</div>
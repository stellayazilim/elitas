<script>
    import { slide  } from 'svelte/transition'
    import {page} from "$app/stores"

          const navs = [
         {   text: "Anasayfa",
            url: "/"},
         {   text: "Ürünler",
            url: "/products"},
         {   text: "Ürün",
            url: "/product"},
         {   text:"İletişim",
            url: "/contact"}           
        ]
    
     
    
    </script>
    
   
    <div class="navbar-nav mr-auto py-0" in:slide ={{duration: 600}} out:slide={{duration: 500}}>
     {#each navs as navItem}
    <a href="{navItem.url}" class="nav-item nav-link" class:active="{$page.url.pathname == navItem.url}"   >{navItem.text}</a>
    {/each}
    </div>  
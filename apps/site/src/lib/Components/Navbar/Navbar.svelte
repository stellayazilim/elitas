<script lang="ts">
import Sidemenu from "$lib/Components/Sidemenu/Sidemenu.svelte";
import Carousel from "$lib/Components/home/Carousel.svelte";
import DropdownBar from "$lib/Components/DropdownBar/DropdownBar.svelte";
import {page} from "$app/stores"


</script>

<div class="container-fluid mb-5">
    <div class="row border-top px-xl-5">
        <Sidemenu/>
        <div class="col-lg-9" >
            <DropdownBar/>
            {#if $page.url.pathname == "/"}
                <Carousel/>

            {/if}
            
    
        </div>
    </div>
</div>
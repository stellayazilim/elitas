<script lang="ts">
	import DropdownItems from "$lib/Components/DropdownBar/DropdownItems.svelte";

/* Dropdown start */
  
let width: number;
let isOpen = true;


$:  if (width <= 992) 
        isOpen = false
    else isOpen = true

/* Dropdown end */

</script>
<svelte:window bind:innerWidth={width}/>

 
    <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0" >
        <a href="/#2" class="text-decoration-none d-block d-lg-none">
            <h1 class="m-0 display-5 font-weight-semi-bold" >
                <span class="text-primary font-weight-bold border px-3 mr-1">E</span>
                Elitaş
            </h1>
        </a>
       <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="/navbarCollapse" on:click={()=> isOpen = !isOpen}>
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse justify-content-between " 
             id="navbarCollapse" 
             class:show={isOpen} >
             {#if isOpen}     
                <DropdownItems/>  
             {/if}
        </div>       
   
    </nav>
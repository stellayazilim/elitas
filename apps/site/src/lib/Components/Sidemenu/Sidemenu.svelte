<script  lang="ts">

	import SideMenuItems from "$lib/Components/Sidemenu/SideMenuItems.svelte";
    import {page} from "$app/stores"
    $: showMenu = $page.url.pathname == "/";

function toggleMenu() {
  showMenu = !showMenu;
}
   

 
</script>


<div class="col-lg-3 d-none d-lg-block" >
    
    <div class="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" 
        on:click={toggleMenu} on:keypress={toggleMenu} data-toggle="collapse"  style="height: 65px; margin-top: -1px; padding: 0 30px;">
        <h6 class="m-0">Kategoriler</h6>
        <i class="fa fa-angle-down text-dark"></i>
    </div>
    <nav class="collapse show navbar position-absolut bgWhite navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
        
           
         <!--    <div class="nav-item dropdown">
                <a href="#" class="nav-link" data-toggle="dropdown">Dresses <i class="fa fa-angle-down float-right mt-1"></i></a>
                <div class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <a href="" class="dropdown-item">Men's Dresses</a>
                    <a href="" class="dropdown-item">Women's Dresses</a>
                    <a href="" class="dropdown-item">Baby's Dresses</a>
                </div>
            </div> -->
            {#if showMenu} 
           <SideMenuItems/>
           {/if}
        
    </nav>
</div>



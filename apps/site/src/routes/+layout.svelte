<script lang="ts">
    import Footer from "./Footer.svelte";
    import Topbar from "$lib/Components/Topbar.svelte";
    import Navbar from "../lib/Components/Navbar/Navbar.svelte";
	import Header from "$lib/Components/common/Navbar/Header.svelte";
    import {page} from "$app/stores"
</script>
   <!-- Topbar Start -->
   <Topbar/>
   <!-- Topbar End -->
   
   
   <!-- Navbar Start -->
   <Navbar/>
   {#if $page.url.pathname != "/"}
    <Header/>
    {/if}
   <!-- Navbar End -->
<main>
    <slot />
</main>

<Footer/>
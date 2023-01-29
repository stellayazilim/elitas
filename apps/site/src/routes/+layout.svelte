<script lang="ts">
    import Footer from "./Footer.svelte";
    import Topbar from "$lib/components/Topbar.svelte";
    import Navbar from "../lib/components/Navbar/Navbar.svelte";
	import Header from "$lib/components/common/Navbar/Header.svelte";
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
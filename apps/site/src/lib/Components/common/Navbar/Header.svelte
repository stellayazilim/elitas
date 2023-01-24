<script lang="ts">
    import {page} from "$app/stores"
	import {navs} from "$lib/Components/DropdownBar/DropdownItems.svelte";
    

        $: filteredNavs = navs.find(nav => nav.url == $page.url.pathname)
    
</script>


<div class="container-fluid bg-secondary mb-5" style="margin-top: -47px;">
    <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 300px">
        <h1 class="font-weight-semi-bold text-uppercase mb-3">{$page.data.pageName || filteredNavs?.text}</h1>
        <div class="d-inline-flex">
            <p class="m-0"><a href="/">Anasayfa</a></p>
            <p class="m-0 px-2">-</p>
            <p class="m-0">{$page.data.pageName || filteredNavs?.text}</p>
        </div>
    </div>
</div>



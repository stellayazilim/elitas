<script lang="ts">
	import Contactform from "$lib/components/contact/Contactform.svelte";
	import Contacttitle from "$lib/components/contact/Contacttitle.svelte";
	import Seeonmap from "$lib/components/contact/Seeonmap.svelte";
	import Contactinvite from "$lib/components/contact/Contactinvite.svelte";


</script>   
        <!-- Contact Start -->
        <div class="container-fluid pt-5">
           <Contacttitle/>
           <Contactinvite/>
            <div class="row px-xl-5">

                <Contactform/>

                <Seeonmap/>
           
            </div>
        </div>
        <!-- Contact End -->
      
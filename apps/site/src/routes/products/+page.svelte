
<script lang="ts">
	import EveryProduct from "$lib/components/product/EveryProduct.svelte";
	import ShopSidebar from "$lib/components/product/ShopSidebar.svelte";


</script>    

    <!-- Shop Start -->
    <div class="container-fluid pt-5">
        <div class="row px-xl-5">
            <!-- Shop Sidebar Start -->
             <ShopSidebar/>
            <!-- Shop Sidebar End -->


            <!-- Shop Product Start -->
            
            <div class="col-lg-9 col-md-12">
                <div class="row pb-3">
                    <div class="col-12 pb-1">
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <form action="">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search by name">
                                    <div class="input-group-append">
                                        <span class="input-group-text bg-transparent text-primary">
                                            <i class="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <!-- <div class="dropdown ml-4">
                                <button class="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                            Sort by
                                        </button>                         //Maybe in Another Project
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                    <a class="dropdown-item" href="#">Latest</a>
                                    <a class="dropdown-item" href="#">Popularity</a>
                                    <a class="dropdown-item" href="#">Best Rating</a>
                                </div> 
                            </div> -->
                        </div>
                    </div>
                    <!-- Products Start-->

                    <EveryProduct/>
                      <!-- Products End-->
                       
                </div>
                
            </div>          
            <!-- Shop Product End -->
        </div>
    </div>
    <!-- Shop End -->



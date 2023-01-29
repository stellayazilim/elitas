
<script lang="ts">
	import EveryProduct from "./EveryProduct.svelte";


</script>    

    <!-- Shop Start -->
    <div class="container-fluid pt-5">
        <div class="row px-xl-5">
            <!-- Shop Sidebar Start -->
            <div class="col-lg-3 col-md-12 position-static">
                <!-- CategoriNav Start -->
                <div class="border-bottom mb-4 pb-4 mt-5">
                    <h5 class="font-weight-semi-bold mb-4">Kategori Seçenekleri</h5>
                    <form>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                             
                            <label class="custom-control-label" for="Buhar Kazanları">Buhar Kazanları</label>
                             
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                             
                            <label class="custom-control-label" for="Paskaralar">Paskaralar</label>
                             
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                             
                            <label class="custom-control-label" for="Transfer Baskı Presleri">Transfer Baskı Presleri</label>
                             
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                             
                            <label class="custom-control-label" for="Çakım Makinaları">Çakım Makinaları</label>
                             
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                             
                            <label class="custom-control-label" for="Leke Temizleme Makinaları">Leke Temizleme Makinaları</label>
                             
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                             
                            <label class="custom-control-label" for="Silter Ütü Grubu">Silter Ütü Grubu</label>
                             
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                             
                            <label class="custom-control-label" for="Mal Taşıma Arabaları">Mal Taşıma Arabaları</label>
                             
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                             
                            <label class="custom-control-label" for="Kalite Kontrol Masaları">Kalite Kontrol Masaları</label>
                             
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                             
                            <label class="custom-control-label" for="Diğer Ürünler">Diğer Ürünler</label>
                             
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                             
                            <label class="custom-control-label" for="Yedek Parça">Yedek Parça</label>
                             
                        </div>

                    </form>
                </div>
                <!-- CategoriNav End -->

            </div>
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



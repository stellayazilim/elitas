<script lang="ts">
    import { products } from "$lib/components/product/productsWithCategories";
</script>



<div class="col-lg-3 col-md-12 position-static">
    <!-- CategoriNav Start -->
    <div class="border-bottom mb-4 pb-4 mt-5">
        <h5 class="font-weight-semi-bold mb-4">Kategori Seçenekleri</h5>
        <form>
            {#each products.map(x => ({ text: x?.category,slug:x?.slug})) as product}
                   <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                 
                <a class="custom-control-label" href="#{product.slug}">{product.text}</a>
                 
                </div>
            {/each}
         
            <!-- <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                 
                <label class="custom-control-label" for="Paskaralar">Paskaralar</label>
                 
            </div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                 
                <label class="custom-control-label" for="Transfer Baskı Presleri">Transfer Baskı Presleri</label>
                 
            </div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                 
                <a class="custom-control-label" href="#cakim">Çakım Makinaları</a>
                 
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
                 
            </div> -->

        </form>
    </div>
    <!-- CategoriNav End -->

</div>
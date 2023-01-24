<script>
   import { slide  } from 'svelte/transition'
   
       /*  let sideMenuItems: {
           text: string,                   //Bunu nasıl kullanacağız çözemedim. +page.svelte'nin içinde kalabalık 
           url: string                     //olmasın diye items'i burada yazdım
       }[] = [] */
   
         const items = [
        {   text: "Buhar Kazanları",
           url: "https://www.google.com"},
        {   text: "Paskaralar",
           url: "/"},
        {   text: "Transfer Baskı Presleri",
           url: "/"},
        {   text: "Çakım Makinaları",
           url: "/"},
        {   text: "Leke Temizleme ",
           url: "/"}    ,   
        {   text: "Silter Ütü Grubu",
           url: "/"}  ,      
        {   text: "Diğer Ürünler",
           url: "/"}   ,    
        {   text: "Mal Taşıma Arabaları",
           url: "/"}  ,     
        {   text: "Kalite Kontrol Masaları",
           url: "/"}  ,     
        {   text: "Yedek Parça",
           url: "/"}           
       ]
   
    
   
   </script>
   
   <div class="navbar-nav w-100 overflow-hidden" style="height: 450px" in:slide ={{duration: 900}} out:slide={{duration: 500}}>
    {#each items as item}
   <a href="{item.url}" class="nav-item nav-link" >{item.text}</a>
   {/each}
</div>
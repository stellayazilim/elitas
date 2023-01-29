import { products } from "$lib/components/product/productsWithCategories";


/*     export const categories = [
         {   text: "Buhar Kazanları",
            url: "#buhar"},
         {   text: "Paskaralar",
            url: "#paska"},
        ] */
        
       

        // Category names converting to English   ( for product page sidebar navigator classnames)
        function convertToEnglish(str: string): string {
         // Turkish characters and their English equivalents
         const mapping: { [key: string]: string } = {
           'ç': 'c',
           'Ç': 'C',
           'ğ': 'g',
           'Ğ': 'G',
           'ı': 'i',
           'İ': 'I',
           'ö': 'o',
           'Ö': 'O',
           'ş': 's',
           'Ş': 'S',
           'ü': 'u',
           'Ü': 'U',
           " ": ""
         };
       
         // newStr create
         let newStr: string = str.replace(/[çÇğĞıİöÖşŞüÜ]/g, (match: string) => mapping[match]);
               
         // delete spaces and tolowercase
         newStr = newStr.replace(/\s/g, "").toLowerCase();
       
         return newStr;
       }
       
      export let categories = products.map((product) => {
         return {
            category: product.category,
            url: ("#" + convertToEnglish(product.category).slice(0,5))
         }
       })



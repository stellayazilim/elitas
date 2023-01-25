import { PrismaClient, Prisma, Product, Image, Category, Document} from ".prisma/client"


export class Database extends PrismaClient {


    /**
     * @description find many products based on given input
     * @param { Prisma.ProductFindManyArgs } input 
     * @returns { Promise<Product[]> } products
     */
    async getProducts(input: Prisma.ProductFindManyArgs): Promise<Product[]> {
        return await this.product.findMany(input)
    }


    /**
     * @description creates new product based on Product data
     * @param { Prisma.ProductCreateInput} input 
     * @returns { Promise<Product> } newly created product
     */
    async addProduct(input: Prisma.ProductCreateInput): Promise<Product> {
        return await this.product.create({
            data: input
        })
    }


    /**
     * @description find prodcut by id, if no product found, throws NotFoundExeption error
     * @param { string } id
     * @returns {Promise<Product>} product
     * @throws {Prisma.NotfoundExection} 
     */
    async getProductById(id: string): Promise<Product> {
        return await this.product.findFirstOrThrow({
            where: {
                id
            }
        })
    }

    /**
     * @description create new image on database with given args
     * @param {Prisma.ImageCreateInput} input Image 
     * @returns { Image }
     */
    async addImage(input: Prisma.ImageCreateInput): Promise<Image> {
        return await this.image.create({
            data: input
        })
    }


    /**
     * @description find image by id
     * @param { string } id cuid() 
     * @throws {NotFoundExeption } throws if images not found
     * @returns {Promise<Image>} image
     */
    async findImageById(id: string): Promise<Image> {
        return await this.image.findFirstOrThrow({
            where: { id }
        })
    }

    /**
     * @description get many image based on input
     * @param { Prisma.ImageFindManyArgs } input  
     * @returns {Promise<Image>} image
     */
    async getImages(input: Prisma.ImageFindManyArgs): Promise<Image[]> {
        return await this.image.findMany(input)
    }


    /**
     * @description create category on given input
     * @param {Prisma.CategoryCreateInput} input 
     * @returns { Promise<Category> }
     */
    async addCategory(input: Prisma.CategoryCreateInput) : Promise<Category> {
        return await this.category.create({
            data: input
        })
    }

    /**
     * 
     * @param { Prisma.CategoryFindManyArgs } input 
     * @returns { Promise<Category[]> }
     */
    async getAllCategories(input: Prisma.CategoryFindManyArgs): Promise<Category[]> {
        return await this.category.findMany(input)
    }

    async findCategoryById(input: Prisma.CategoryFindFirstOrThrowArgs): Promise<Category> {
        return await this.category.findFirstOrThrow( input )
    }


    async addDocument(input: Prisma.DocumentCreateInput): Promise<Document> {
        return await this.document.create({data: input})
    }

    async getDocuments(input: Prisma.DocumentFindManyArgs): Promise<Document[]> {
        return await this.document.findMany(input)
    }
}
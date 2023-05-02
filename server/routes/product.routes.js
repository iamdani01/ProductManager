const ProductController = require("../controllers/product.controller")

module.exports = (app) =>{
    app.get("/api/testing",ProductController.apiTest)
    app.get("/api/product",ProductController.allProducts)
    app.get("/api/product/:id",ProductController.oneProduct)
    app.post("/api/product",ProductController.createProduct)
    app.put("/api/product/:id",ProductController.updateProduct)
    app.delete("/api/product/:id",ProductController.deleteProduct)
}
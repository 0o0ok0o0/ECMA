import instance from "./config"
const getCategorys = ()=>{
    return instance.get('/categorys')
    }
    const deleteCategory = (id)=>{
    return instance.delete(`/categorys/${id}`)
    }
    const getCategory =(id)=>{
    return instance.get(`/categorys/${id}`)
    }
    const updateCategory =(category)=>{
    return instance.put(`/categorys/${category.id}`, category)
    }
    const addCategory =(category)=>{
    return instance.post(`/categorys`, category)
    }
    const CategorysDetail = (id)=>{
    return instance.get(`/categorys:${id}?_embed=projects`)
    }
    export {getCategorys,deleteCategory,getCategory,updateCategory, addCategory, CategorysDetail}
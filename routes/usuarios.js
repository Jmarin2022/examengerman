const { Router } = require('express')
const router = Router()


router.get("/",(req,res)=>{
    const{id, nombre, apellido,productos,total} = req.query
    res.json({
        msg: "get api Ventas",
        id,
        nombre,
        apellido,
        productos,
        total
    })
})


router.post("/",(req,res)=>{
    const {id, nombre, apellido,productos,total} = req.body
    res.json({
        msg: "post api Ventas",
        id,
        nombre,
        apellido,
        productos,
        total
    })
})

router.put("/",(req,res)=>{
    res.json({
        msg: "put api Ventas"
    })
})

router.patch("/",(req,res)=>{
    res.json({
        msg: "patch api ventas"
    })
})

router.delete("/",(req,res)=>{
    res.json({
        msg:"delete api ventas"
    })
})


module.exports = router;
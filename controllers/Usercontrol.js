//=====================================================geting Data

const GetData = (req,res,next)=>{
    res.status(200).json({
        message: "Backend Development"
    })
}
//=====================================================post Data

const postData = (req,res,next)=>{
    res.status(200).json({
        message: "Backend Development"
    })
}
//=====================================================update Data

const updatedata = (req,res,next)=>{
    res.status(200).json({
        message: "Backend Development"
    })
}
//=====================================================geting Data

const DeleteData = (req,res,next)=>{
    res.status(200).json({
        message: "Backend Development"
    })
}



module.exports={
    GetData,
    postData,
    updatedata,
    DeleteData
}
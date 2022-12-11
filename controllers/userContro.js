
//==============================================================================Create  User=========================================>>
const PostData = (req, res,) => {
    res.json({
        Message: "Create Users"
    })
}
//==============================================================================Updata User=========================================>>
const UPdataData = (req, res,) => {
    res.json({ Message: `update user ${req.params.id}` })
}
//==============================================================================Delete User=========================================>>
const DeleteData = (req, res,) => {
    res.json({ Message: `delete user ${req.params.id}` })
}


//==============================================================================geting  User=========================================>>
const GetingData = (req, res,) => {
    res.json({
        Message: "Geting Users"
    })
}
module.exports = {
    GetingData,
    PostData,
    UPdataData,
    DeleteData
}
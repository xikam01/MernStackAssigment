//

const GetData = (req, res, next) => {
    res.status(200).json({ message: "Backend Development" })
}

const PostData = (req, res, next) => {
    res.status(200).json({ message: "saved users " })
}
const UpdateData = (req, res, next) => {
    res.status(200).json({ message: `Update  user ${req.params.id}` })
}

const DeleteData = (req, res, next) => {
    res.status(200).json({ message: `Delete user ${req.params.id}` })
}


module.exports = {
    GetData,
    PostData,
    UpdateData,
    DeleteData
}

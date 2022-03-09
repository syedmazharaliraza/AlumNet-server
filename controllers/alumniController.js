const registerAlumni = (req,res) => {
    res.status(200).json({message: 'Alumni registered'})
}

const loginAlumni = (req,res) => {
    res.status(200).json({message: 'Alumni logged in'})
}

const getAlumni = (req,res) => {
    res.status(200).json({message: 'Alumni Info'})
}

module.exports = {getAlumni, registerAlumni}
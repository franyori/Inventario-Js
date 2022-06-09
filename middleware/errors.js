const response = (res, error) => {
    res.status(400).send(error)
}

module.exports = {
    response
};
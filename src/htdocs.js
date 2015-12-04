function docRoot(req, res) {
    res.send('Hello World');
}

module.exports = {
    '/': docRoot
};


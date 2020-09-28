function getErr(err = "server internal error", errCode = 500) {
    return {
        code: errCode,
        msg: err
    }
}

function getData(result) {
    return {
        code: 0,
        msg: "",
        data: result
    }
}

function asyncHandel(handel) {
    return async (req, res, next) => {
        try {
            const result = await handel(req, res, next);
            res.send(getData(result));
        } catch (err) {
            next(err);
        }
    }
}

module.exports = {
    getErr,
    getData,
    asyncHandel
}
module.exports = function byteToMegabyte(valor: BigInteger) {
    return Math.round(valor/1024/1024);
}


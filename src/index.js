module.exports = function check(str, bracketsConfig) {

    var splitStr = str.split('');

    for (let i = 0; i <= splitStr.length; i++) {
        for (let k = 0; k < splitStr.length; k++) {
            var el1 = splitStr[k];
            var el2 = splitStr[k + 1];
            for (let j = 0; j < bracketsConfig.length; j++) {
                if ((el1 === bracketsConfig[j][0]) && (el2 === bracketsConfig[j][1])) {
                    splitStr.splice(k, 2);
                    break;
                }
            }
        }
    }

    return splitStr.length === 0;
};
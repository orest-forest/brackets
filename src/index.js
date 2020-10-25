module.exports = function check(str, bracketsConfig) {
    let config = {};

    for (let i = 0; i < bracketsConfig.length; i++) {
        config[bracketsConfig[i][0]] = bracketsConfig[i][1]
    }


    let stack = [];
    let ret = '';

    for (let i = 0; i < str.length; i++) {
        let c = str[i];

        if (config[c]) {
            stack.push(c);
        } else {
            if (stack.length === 0) {
                return false;
            }

            let bracket = stack.pop();

            c = config[bracket];
        }

        ret += c;
    }
    if (stack.length > 0) {
        return false;
    }
    return true
}

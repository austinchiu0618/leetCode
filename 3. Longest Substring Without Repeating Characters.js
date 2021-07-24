
// 失敗，Time Limit Exceeded
var lengthOfLongestSubstring = function (s) {

    let strLen = "";

    for (let i = 0; i < s.length; i++) {

        for (let j = 0; j < s.length; j++) {

            let testStr = s.substring(i, j + 1)
            // console.log(testStr);
            let isStr = true;
            for (let z = 0; z < testStr.length; z++) {
                let x = testStr.substr(z, 1)
                if (testStr.indexOf(`${x}`) != z) {
                    isStr = false
                    break
                }
            }
            if (isStr && testStr.length > strLen.length) {
                strLen = testStr
            }
        }
    }

    console.log(strLen.length);
    return strLen.length

};

lengthOfLongestSubstring("abcabcbb")



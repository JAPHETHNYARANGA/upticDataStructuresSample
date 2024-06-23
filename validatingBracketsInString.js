function isValidString(input) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of input) {
        if (char in map) {
            stack.push(char);
        } else {
            let top = stack.pop();
            if (char !== map[top]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
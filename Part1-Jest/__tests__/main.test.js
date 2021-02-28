const format = require('../assets/scripts/main');

describe('first conditional', () => {
    test('displays 3 bars for 67', () => {
        expect(format(67)).toBe("./assets/media/icons/volume-level-3.svg");
    });
    
    test('displays 2 bars for 66', () => {
        expect(format(66)).toBe("./assets/media/icons/volume-level-2.svg");
    });
});

describe('first conditional', () => {
    test('displays 2 bars for 34', () => {
        expect(format(34)).toBe("./assets/media/icons/volume-level-2.svg");
    });
    
    test('displays 1 bar for 33', () => {
        expect(format(33)).toBe("./assets/media/icons/volume-level-1.svg");
    });
});

describe('first conditional', () => {
    test('displays 1 bar for 1', () => {
        expect(format(1)).toBe("./assets/media/icons/volume-level-1.svg");
    });
    
    test('displays 0 bars for 0', () => {
        expect(format(0)).toBe("./assets/media/icons/volume-level-0.svg");
    });
});


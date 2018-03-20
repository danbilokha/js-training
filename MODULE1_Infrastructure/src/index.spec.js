let checkCreatorName = require('./index.js').checkCreatorName;

describe('checkCreatorName', () => {

    it('should pass creator name successfully', () => {
        expect(checkCreatorName())
            .toBe('Danylo Bilokha');
    });

    
    it('should pass creator name failure', () => {
        expect(checkCreatorName())
            .toBe('Danylo ne Bilokha');
    });
});

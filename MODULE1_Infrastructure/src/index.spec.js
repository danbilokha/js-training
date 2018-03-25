import {checkCreatorName} from './index.js';

describe('checkCreatorName', () => {

    it('should pass creator name successfully', () => {
        expect(checkCreatorName('Danylo Bilokha'))
            .toBe('Danylo Bilokha');
    });

    
    it('should pass creator name failure', () => {
        expect(checkCreatorName('Danylo ne Bilokha'))
            .not.toBe('Danylo Bilokha');
    });
});

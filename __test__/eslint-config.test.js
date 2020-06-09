const { config } = require('../config');

describe('The configuration file should not change', () => {
    test('It should response with custom configuration', () => {
        expect(config).toMatchSnapshot();
    });
});

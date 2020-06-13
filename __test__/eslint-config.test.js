const eslintConfig = require('../index');

describe('The configuration file should not change', () => {
  test('It should response with custom configuration', () => {
    expect(eslintConfig).toMatchSnapshot();
  });
});

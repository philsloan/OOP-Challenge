const { Triangle, Circle, Square } = require('./shapes');

// Mocking console.log to suppress output during tests
jest.spyOn(console, 'log').mockImplementation(() => {});

// Shape Test Suite
describe('Shape Classes', () => {
  afterEach(() => {
    console.log("Restore after each"); // Restore the original console.log after each test
  });
// Takes a snapshot and saves a correctly rendering app
  const testShapeRendering = (shape, expectedOutput) => {
    test('renders correctly', () => {
      expect(shape.render()).toMatchSnapshot();
    });
  };

  // Triangle Shape
  describe('Triangle', () => {
    testShapeRendering(new Triangle('ABC', 'red', 'white'));
  });

  // Circle Shape
  describe('Circle', () => {
    testShapeRendering(new Circle('123', 'blue', 'black'));
  });

  // Square Shape
  describe('Square', () => {
    testShapeRendering(new Square('XYZ', 'green', 'yellow'));
  });
});

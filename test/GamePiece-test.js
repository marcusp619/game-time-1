const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js')

describe('GamePiece', () => {
  let gamepiece;

  beforeEach(() => {
    gamepiece = new GamePiece(30, 30, 10, 10, 'green', 1, 1, 'black')
  })

  it('should take properties', () => {
    // Assertion
    assert.deepEqual(gamepiece, {
      x: 30,
      y: 30,
      height: 10,
      width: 10,
      color: 'green',
      borderColor: 'black',
      snakeBody: [[30, 30], [40, 30], [30, 30]],
      dx: 1,
      dy: 0,
      dxv: 1,
      dyv: 1
    })
    // Teardown
  })

  it('should collide with a second gamepiece that occupies the same space', () => {
    const gamepiece2 = new GamePiece(30, 30, 10, 10, 'green');

    // Execution
    const colliding = gamepiece.isCollidingWith(gamepiece2);

    // Assertion
    assert.isTrue(colliding);
  })

  it('should not collide with a second gamepiece that does not occupy the same space', () => {
    const gamepiece2 = new GamePiece(130, 130, 10, 10, 'green');

    // Execution
    const colliding = gamepiece.isCollidingWith(gamepiece2);

    // Assertion
    assert.isFalse(colliding);
  })

})
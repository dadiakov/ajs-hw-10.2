import GameSaving from '../app';

test('gamesaving create object', () => {
  const save = new GameSaving();
  setTimeout(() => expect(save.save).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  }), 2000);
});

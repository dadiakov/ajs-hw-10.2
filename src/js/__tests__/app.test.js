import GameSaving from '../app';
import json from '../parser';
import read from '../reader';

test('gamesaving create object', async () => {
  const response = await read();
  const data = await json(response);
  const obj = new GameSaving(JSON.parse(data));
  expect(obj.save).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});

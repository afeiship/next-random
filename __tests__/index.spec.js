(function () {
  require('../src');

  require('@jswork/next-unique');

  describe('api.basic test', () => {
    test('nx.random target should be number && >=min && < max', function () {
      for (let i = 0; i < 300; i++) {
        var target = nx.random(0, 1000);
        expect(typeof target).toBe('number');
        expect(target < 1000).toBe(true);
        expect(target >= 0).toBe(true);
      }
    });

    test('nx.random should get a list no duplicates', () => {
      var list = nx.random(0, 100, 20);
      console.log(list);
      expect(list.length).toBe(20);
      expect(nx.unique(list).length === list.length).toBe(true);
    });
  });
})();

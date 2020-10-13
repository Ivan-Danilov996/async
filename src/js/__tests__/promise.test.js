import GameSavingLoader, {GameSavingLoaderClear} from '../GameSavingLoader'

test('async/await', async () => {
    const saving = await GameSavingLoader.load()
    expect(saving).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
});

test('clear promise', (done) => {
    GameSavingLoaderClear.load().then(saving => {
        expect(saving).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
        done(); 
    })
});
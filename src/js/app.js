// TODO: write your code here
import GameSavingLoader, {GameSavingLoaderClear} from './GameSavingLoader'

(async () => {
    try {
        const saving = await GameSavingLoader.load()
        console.log(saving)
    } catch(e) {
        console.log(e)
    }
  })();
  

GameSavingLoaderClear.load().then(saving => {
    console.log(saving)
}, error => {
    console.log(error)
})
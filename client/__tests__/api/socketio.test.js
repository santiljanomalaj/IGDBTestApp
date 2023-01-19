import { COINMARKETCAP_API } from '../../pages/api/socketio'
import CRYPTO_API_TOKEN_COUNT from '../../utils/constants'

describe('socketio api', () => {
    it('pro-api.coinmarketcap.com v1/cryptocurrency/categories', async () => {
        const ret = await COINMARKETCAP_API.cryptocurrencyCategories();
        expect(ret.data?.length).toBeGreaterThan(0);
    })

    it('pro-api.coinmarketcap.com v1/cryptocurrency/listings/latest', async () => {
        const ret = await COINMARKETCAP_API.cryptocurrencyListingsLatest();
        expect(ret.data?.length).toBe(CRYPTO_API_TOKEN_COUNT);
    })
})
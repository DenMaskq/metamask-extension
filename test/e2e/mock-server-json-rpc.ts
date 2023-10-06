import { mockJsonRpcResult } from '../mocks/json-rpc-result';

type RequestConfig = [
  method: string,
  options?: {
    /** optional arbitrary method variant name to return various result values */
    methodResultVariant?: string;
    /** optional params value for withJsonBodyIncluding() */
    params?: any;
    /** optional result */
    result?: any;
  },
];

const DEFAULT_VARIANT = 'default';

/**
 * Helper function to assist with mocking JSON-RPC post requests
 *
 * @param mockServer
 * @param listOfRequestConfigs
 * @example
 * ```
 *  await mockServerJsonRpc(mockServer, [
 *    ['eth_call', {
 *      methodResultVariant: 'balanceChecker',
 *      params: [{to :'0x52cbe0f49ccdd4dc6e9c13bab024eabd2842045b'}],
 *    }],
 *    ['eth_call', {
 *      params: ['0x52cbe0f49ccdd4dc6e9c13bab024eabd2842045b'],
 *      result: '0x0000000000000000000000000000000000000000000000000ddfe4d79cbd3de5',
 *    }],
 *    ['eth_getBalance', {
 *      result: '0x27d17a5b79f77509541',
 *    }],
 *    ['eth_gasPrice],
 *    ['eth_getBlockByNumber']
 *  ]);
 * ```
 */
async function mockServerJsonRpc(
  mockServer: any, // MockttpServer
  listOfRequestConfigs: RequestConfig[],
) {
  for (const [method, options] of listOfRequestConfigs) {
    const { methodResultVariant, params, result: _result } = options || {};

    const result =
      _result ||
      mockJsonRpcResult[method][methodResultVariant || DEFAULT_VARIANT];

    await mockServer
      .forPost()
      .withJsonBodyIncluding(params ? { method, params } : { method })
      .thenCallback((req: any) => {
        return {
          statusCode: 200,
          json: {
            jsonrpc: '2.0',
            id: req.body.json.id,
            result,
          },
        };
      });
  }
}

module.exports = { mockServerJsonRpc };

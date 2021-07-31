import { Context } from "aws-lambda";
export default {
  callbackWaitsForEmptyEventLoop: true,
  functionName: "",
  functionVersion: "",
  invokedFunctionArn: "",
  memoryLimitInMB: "",
  awsRequestId: "", //UUID.v1
  logGroupName: "",
  logStreamName: "",
  identity: undefined,
  clientContext: undefined,

  getRemainingTimeInMillis: () => {
    return 0;
  },

  // Functions for compatibility with earlier Node.js Runtime v0.10.42
  // No longer documented, so they are deprecated, but they still work
  // as of the 12.x runtime, so they are not removed from the types.

  /** @deprecated Use handler callback or promise result */
  done: (_error?: Error, _result?: any) => {},
  /** @deprecated Use handler callback with first argument or reject a promise result */
  fail: (_error: Error | string) => {},
  /** @deprecated Use handler callback with second argument or resolve a promise result */
  // succeed: (messageOrObject: any) => {},
  // Unclear what behavior this is supposed to have, I couldn't find any still extant reference,
  // and it behaves like the above, ignoring the object parameter.
  /** @deprecated Use handler callback or promise result */
  succeed: (_message: string, _object: any) => {},
} as Context;

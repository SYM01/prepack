// flow-typed signature: ff9ff3b60b305a3308b20c3420f15c37
// flow-typed version: <<STUB>>/babel-template_v^6.9.0/flow_v0.38.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'babel-template'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

 import { BabelNodeStatement } from "@babel/types";

declare module 'babel-template' {
  declare module.exports: (code: string, opts?: Object) => Object => BabelNodeStatement;
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'babel-template/lib/index' {
  declare module.exports: any;
}

// Filename aliases
declare module 'babel-template/lib/index.js' {
  declare module.exports: $Exports<'babel-template/lib/index'>;
}

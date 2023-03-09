export * as clothing from './clothing';
export * as config from './config';
export * as crafting from './crafting';
export * as drops from './drops';
export * as effects from './effects';
export * as factory from './factory';
export * as manager from './manager';
export * as slot from './slot';
export * as weight from './weight';
export * as weapons from './weapons';

import('./slot').then((res) => {
    console.log(res);
});

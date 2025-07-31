import {createModuleFederationConfig} from '@module-federation/enhanced/rspack';

const isProd = process.env.NODE_ENV === 'production';

export default createModuleFederationConfig({
    name: 'product',
    exposes: {
        './App': './src/bootstrap.ts',
    },
    remotes: {
        global_store: `global_store@${isProd ? 'https://mfe-vue-global-store.vercel.app' : 'http://localhost:3000'}/mf-manifest.json`,
    },
    shared: {
        vue: {singleton: true, eager: true, requiredVersion: '^3.5.17'},
        rxjs: {singleton: true},
        'mfe-ui-kit': {singleton: true, eager: true, requiredVersion: false},
    },
    dts: false,
});
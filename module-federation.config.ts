import { createModuleFederationConfig } from '@module-federation/enhanced/rspack';

export default createModuleFederationConfig({
  name: 'product',
  exposes: {
    './HelloWorld': './src/components/main.ts',
  },
  shared: {
    vue: { singleton: true, eager: true, requiredVersion: '^3.5.17' },
    'mfe-ui-kit': { singleton: true, eager: true, requiredVersion: false },
  },
  dts: false,
});
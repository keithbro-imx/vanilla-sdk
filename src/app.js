import { config, passport } from "@imtbl/sdk";

const baseConfig = { environment: config.Environment.SANDBOX };
new passport.Passport({ baseConfig, clientId: 'x', redirectUri: 'x' });

console.log('Hello world!');

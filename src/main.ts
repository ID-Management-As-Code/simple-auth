import { serve } from './depts.ts';
import { serverHandler } from "./server/serverHandler.ts";

const enableSecurity = false;
const hostname = 'localhost';
const port = 4000;
const protocol = enableSecurity ? 'https' : 'http';

serve(serverHandler, { hostname, port });

console.log(`Running server on ${protocol}://${hostname}:${port}`)

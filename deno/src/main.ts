import { serve } from './depts.ts';
import { startup } from './server/startup.ts';

const enableSecurity = false;
const hostname = 'localhost';
const port = 4000;
const protocol = enableSecurity ? 'https' : 'http';

startup()
    .then((serverHandler) => {
        serve(serverHandler, { hostname, port });

        console.log(`Running server on ${protocol}://${hostname}:${port}`);
    });

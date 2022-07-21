/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { InnerRenderFunction, RenderContext, start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { setupSettings } from "@utilities/site.ts";

await setupSettings();

function render(context: RenderContext, render: InnerRenderFunction) {
    render();
}

await start(manifest, { render });

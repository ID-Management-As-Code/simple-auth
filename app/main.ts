/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import "https://deno.land/std@0.149.0/dotenv/load.ts";
import { InnerRenderFunction, RenderContext, start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { createDefaultAdministrator, setupSettings } from "@utilities/site.ts";

await setupSettings();
await createDefaultAdministrator();

function render(_: RenderContext, render: InnerRenderFunction) {
    render();
}

await start(manifest, { render });

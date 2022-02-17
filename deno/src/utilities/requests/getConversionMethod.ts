import { blobMappings, convertToBlob } from './conversion-methods/convertToBlob.ts';
import { convertToFormData, formDataMappings } from './conversion-methods/convertToFormData.ts';
import { convertToJson, jsonMappings } from './conversion-methods/convertToJson.ts';
import { convertToText, textMappings } from './conversion-methods/convertToText.ts';

function isContentType(contentType: string, mappings: string[]): boolean {
    for (const mapping of mappings) {
        if (contentType.includes(mapping)) return true;
    }

    return false;
}

export function getConversionMethod(contentType: string): (request: Request) => Promise<unknown> {
    if (isContentType(contentType, blobMappings)) return convertToBlob;
    if (isContentType(contentType, formDataMappings)) return convertToFormData;
    if (isContentType(contentType, jsonMappings)) return convertToJson;
    if (isContentType(contentType, textMappings)) return convertToText;

    throw new Error(`Unable to convert content of type '${contentType}'.`);
}

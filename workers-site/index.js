import { getAssetFromKV, serveSinglePageApp } from '@cloudflare/kv-asset-handler';

async function handleEvent(event) {
   const asset = await getAssetFromKV(event, { mapRequestToAsset: serveSinglePageApp });
    return asset;
}

const DEBUG = false

// eslint-disable-next-line no-restricted-globals
addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})
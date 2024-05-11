import { getAlbumById, getAlbumTracks } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (({params}) => {
    const albumId = parseInt(params.albumId);

    const album = getAlbumById(albumId);
    const tracks = getAlbumTracks(albumId);

    return {
        album,
        tracks,
    };

}) satisfies PageServerLoad;
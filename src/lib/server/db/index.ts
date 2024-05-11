import Database from 'better-sqlite3';
import { DB_PATH } from '$env/static/private';
import type { Track } from './types.ts';

const db = new Database(DB_PATH, { verbose: console.log });

export function getInitialTracks(limit = 50): Track[] {
    const sql = `
        SELECT t.TrackId AS trackId,
        t.Name AS trackName,
        a.AlbumId AS albumId,
        a.Title AS albumTitle,
        at.ArtistId AS artistId,
        at.Name AS artistName,
        g.Name AS genre
        FROM tracks t
        JOIN albums a
        ON t.AlbumId = a.AlbumId
        JOIN artists at
        ON a.ArtistId = at.ArtistId
        JOIN genres g
        ON t.GenreId = g.GenreId
        LIMIT $limit
    `;
    const stmnt = db.prepare(sql);
    const rows = stmnt.all({ limit });
    return rows as Track[];
}

/*

select c.content_title, t.tag_name
from content c
join content_tags ct
on c.content_id = ct.content_id
join tags t
on ct.tag_id = t.tag_id
where c.content_id = 4

*/
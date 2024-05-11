import Database from 'better-sqlite3';
import { DB_PATH } from '$env/static/private';
import type { Track } from './types.ts';
import type { AlbumTrack } from './types.ts';
import type { Album } from './types.ts';

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

// Query to show the album data in album/[albumId] file
export function getAlbumById(albumId: number): Album {
    const sql = `
        SELECT a.AlbumId AS albumId,
        a.Title AS albumTitle,
        at.ArtistId AS artistId,
        at.Name AS artistName
        FROM albums a
        JOIN artists at
        ON a.ArtistId = at.ArtistId
        WHERE a.AlbumId = $albumId
    `;
    const stmnt = db.prepare(sql);
    const row = stmnt.get({ albumId });
    return row as Album;
}

// Query to show the album tracks in the album/[albumId] file

export function getAlbumTracks(albumId: number): AlbumTrack[] {
    const sql = `
        SELECT t.TrackId AS trackId,
        t.Name AS trackName,
        t.Milliseconds AS trackMs
        FROM tracks t
        JOIN genres g
        WHERE t.AlbumId = $albumId
        ORDER BY t.TrackId
    `;
    const stmnt = db.prepare(sql);
    const rows = stmnt.all({ albumId });
    return rows as AlbumTrack[];
}
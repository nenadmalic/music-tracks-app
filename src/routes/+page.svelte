<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<h1 class="is-size-1">Music app</h1>

<table class="table">
    <thead>
        <tr>
            <th>Track</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
        </tr>
    </thead>
    <tbody>
        {#each data.tracks as track}
            <tr>
                <td>{track.trackName}</td>
                <td>{track.artistName}</td>
                <td><a href="./album/{track.albumId}">{track.albumTitle}</a></td>
                <td>{track.genre}</td>
            </tr>
        {/each}
    </tbody>
</table>
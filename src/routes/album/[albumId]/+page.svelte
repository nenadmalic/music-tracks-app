<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<h1 class="is-size-1">{data.album.albumTitle}</h1>
<p>{data.album.artistName}</p>

<table class="table mt-6">
    <thead>
        <tr>
            <th>#</th>
            <th>Track</th>
            <th>Duration</th>
        </tr>
    </thead>
    <tbody>
        {#each data.tracks as track, i}
            <tr>
                <td>{i + 1}</td>
                <td>{track.trackName}</td>
                <td>{Math.floor(track.trackMs / 1000)} s</td>
            </tr>
        {/each}
    </tbody>
</table>
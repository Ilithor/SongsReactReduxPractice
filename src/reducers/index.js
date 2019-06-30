import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'Forever Flame', duration: '4:14' },
        { title: 'Boom', duration: '2:17' },
        { title: 'Midnight Grow', duration: '3:24' },
        { title: '20/20', duration: '3:19' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})

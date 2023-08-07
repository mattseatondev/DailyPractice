
def song_decoder(song):
    return ' '.join(s for s in song.replace('WUB', ' ').split(' ') if len(s))
    
print(song_decoder('AWUBWUBWUBBWUBWUBWUBC'))
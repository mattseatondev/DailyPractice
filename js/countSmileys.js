const countSmileys = arr => {

    const eyes = [';', ':'];
    const noses = ['-', '~'];
    const mouths = [')', 'D'];

    return arr.reduce((validSmileys, smiley) => {
        if (eyes.includes(smiley[0])) {
            if (mouths.includes(smiley[smiley.length - 1])) {
                if (smiley.length == 2 || noses.includes(smiley[1])) validSmileys ++;
            }
        }
        return validSmileys;
    }, 0);

}
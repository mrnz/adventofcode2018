'use strict';

module.exports = data => {
    const matrix = new Set([0]),
        preparedDate = data.trim().split('\n');
        
    let i = 0,
        fre = 0;
    
    while (true) {
        fre += Number(preparedDate[i]);
        
        if (matrix.has(fre)) {
            break;
        }
        
        matrix.add(fre);
        i = (i === preparedDate.length - 1) ? 0 : i + 1;
    }

    return fre;
}

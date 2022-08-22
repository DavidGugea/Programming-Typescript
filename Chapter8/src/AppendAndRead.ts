import * as fs from 'fs';

function appendAndRead(
    path: string,
    data: string,
    cb : (err: Error | null, result: string | null) => void
) {
    fs.appendFile(path, data, error => {
        if(error) {
            return cb(error, null);
        }

        /*
        readFile(path, (error, result) => {
            if(error) {
                return cb(error, null);
            }

            cb(null, result);
        })
        */
    })
};
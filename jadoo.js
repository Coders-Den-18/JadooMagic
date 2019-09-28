const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');

const FILE_PATH = './data.json';

// const makeCommit = n => {

//     if (n === 0 ) return simpleGit().push();

//     const x = random.int(0,54);
//     const y = random.int(0,6);

//     const DATE = moment().subtract(1, 'y').add(1, 'd')
//                     .add(x,'w').add(y,'d')
//                     .format()

//     const data = {
//         date: DATE
//     }

//     jsonfile.writeFile(FILE_PATH, data, () => {
//         simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makeCommit(this, --n));
//     });
// };

// makeCommit(1000);

const writeName = () => {
    for (let i = 0; i < 7; i++) {

        // Inner for loop for logic execution 
        for (let j = 0; j <= 7 / 2; j++) {

            // prints two column lines 
            if ((j == 0 || j == 7 / 2) && i != 0 ||

                // print first line of alphabet 
                i == 0 && j != 0 && j != 7 / 2 ||

                // prints middle line 
                i == 7 / 2) {

                const DATE = moment().subtract(2, 'y').add(i, 'w').add(j, 'd')
                    .format()

                const data = {
                    date: DATE
                }

                jsonfile.writeFile(FILE_PATH, data, () => {
                    simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE });
                });
            }
        }
    }
    simpleGit().push();
};

writeName();
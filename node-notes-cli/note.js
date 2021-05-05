const dataFile = require('./data.json');
const fs = require('fs');
const processArgv = process.argv;

if (processArgv[2] === 'read') {
for (const [key, value] of Object.entries(dataFile.notes)) {
  console.log(`${key}: ${value}`);
}
} else if (processArgv[2] === 'create') {
  dataFile.notes[dataFile.nextId] = processArgv[3];
  dataFile.nextId++
  console.log('A New Note Has Been Created!',dataFile)
} else if (processArgv[2] === 'delete') {
  delete dataFile.notes[processArgv[3]];
  console.log('A Note Has Been Deleted!', dataFile)
} else if (processArgv[2] === 'update') {
  dataFile.notes[processArgv[3]] = processArgv[4]
  console.log('A Note Has Been Updated!', dataFile)
} else {
  console.log('THIS COMMAND DOES NOT EXIST: Please Use read, create, delete, or update')
}

const jsonData = JSON.stringify(dataFile, null, 2);
fs.writeFile('./data.json', jsonData, (err) => {
  if (err) {
    console.log('Uh Oh', err)
  }
})

function graduate (credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`
  }
}

let medicalSchool = graduate('M.D.')
let lawSchool = graduate('Esq.')

let henry = medicalSchool('Henry Nichols')
let rufus = lawSchool('Rufus the Dog')

console.log(henry)
console.log(rufus)

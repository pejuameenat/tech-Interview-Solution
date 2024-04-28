//~1
const str = 'ricky-i-am-the-best@gmail.com' //write a function that turns dash to lamda
const changeStr = (str) => {
  const myStr = str.split('-').join('~')
  console.log(myStr)
}
changeStr(str)

//2
const str2 = 'xyz_controller_method.js' // camelCase
const newStr = str2
  .split('_')
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join('')
console.log(newStr)

//3 add enw table row every 5 seconds using the below headers
const table = document.querySelector('#box')
const headings = document.querySelector('.headers')

const headers1 = ['ID', 'Name', 'User', 'Status']
const userStatus = ['Active', 'Inactive', 'Suspended']
const arrayOfInfo = [
  { id: 1, name: 'mary', user: 'female' },
  { id: 2, name: 'maria', user: 'female' },
  { id: 3, name: 'fredrick', user: 'male' },
  { id: 4, name: 'Isiah', user: 'male' },
  { id: 5, name: 'joe', user: 'male' },
]

const headers2 = () => {
  let html = ''
  headers1.forEach((head) => (html += `<th>${head}</th>`))
  return (headings.innerHTML += html)
}
headers2()
let intervalID = setInterval(createTable, 5000)
function createTable() {
  const randomUser1 = Math.floor(Math.random() * userStatus.length)
  const randomUser2 = Math.floor(Math.random() * arrayOfInfo.length)
  const test = document.querySelectorAll('.cellRows')
  let elem = ''
  const { id, name, user } = arrayOfInfo[randomUser2]
  elem += `<tr class='cellRows'>
        <td>${id}</td>
         <td>${name}</td>
         <td>${user}</td>
         <td>${userStatus[randomUser1]}</td>
     </tr>`
  if (test.length === 9) {
    clearInterval(intervalID)
  }
  return (table.innerHTML += elem)
}

// console.log(typeof intervalID) //weird

//api call
const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]

async function galleryPhoto(url) {
  const date = new Date()
  const now = days[date.getDay()]
  try {
    const resp = await fetch(url)
    const data = resp.json()
    console.log(data)

    // data.map(item => {
    //  if (
    //    now === 'sunday' ||
    //    now === 'tuesday' ||
    //    now === 'thursday' ||
    //    now === 'saturday'
    //  ) {
    //    console.log(item.albumId % 2 !== 0)
    // return
    //  }
    // })
    // data.map((item) =>
    //   item.albumId + (item.id % 2) === 0 ? document.createElement('img') : ''
    // )
  } catch (error) {
    console.log(error.message)
  }
}
galleryPhoto('https://jsonplaceholder.typicode.com/photos')

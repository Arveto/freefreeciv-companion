
const socket = io.connect('http://192.168.0.189');  //enable connection with the server

socket.on('oiu', (data) => {
  console.log('data :' + data);
})

$('button').on('click', ()=> {
  socket.emit('slt', 'edzs')
})

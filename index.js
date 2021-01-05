const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use('/api', (req, res) => {
  res.send([
    {
      id: '001',
      name:'Cuba',
      image: 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      desc: 'lorem Lorem Ipsum comes  ',
      activities: ['simply dummy', 'the printing and'],
      price: '2.500'
    },
    {
      id: '002',
      name:'Colombia',
      image: 'https://images.unsplash.com/photo-1576018753502-1a55b66cc44a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
      desc: 'lorem Lorem Ipsum comes from  ',
      activities: ['simply dummy', 'the printing and'],
      price: '3.500'
    },
    {
      id: '003',
      name:'Japon',
      image: 'https://images.unsplash.com/photo-1575862842202-3508884f4686?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      desc: 'lorem Lorem Ipsum comes from ',
      activities: ['simply dummy', 'the printing and'],
      price: '4.500'
    },
])
})

const port = 3030

app.listen( process.env.PORT || port, () => {
  console.log(`servidor corriendo en http://localhost:3000`)
})
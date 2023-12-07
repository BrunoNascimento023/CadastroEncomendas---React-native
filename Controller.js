const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');


const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user=models.User;
let tracking = models.Tracking;


// app.get('/create',async (req,res)=>{
//     let create=await user.create({
//         name: "thais",
//         email: "thaisbritao@gmail.com",
//         password: "0210",
//         createdAt: new Date(),
//         updatedAt: new Date()
//     });
//     res.send('Usuário criado com sucesso!');
// });

app.post('/create', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const createUser = await user.create({
      name,
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.send('Usuário criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).send('Erro ao criar usuário');
  }
});

app.post('/createEnc', async (req, res) => {
  const { nome, codigo, remetente } = req.body;

  try {
    const cadastrarEncomenda = await tracking.create({
      nome,
      codigo,
      remetente,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.send('Encomenda cadastrada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar encomenda:', error);
    res.status(500).send('Erro ao criar encomenda');
  }
});

// app.get('/cadastrarUser',async (req,res)=>{
//   let create=await user.create({
//       name: "thais",
//       email: "thaisbritao@gmail.com",
//       password: "0210",
//       createdAt: new Date(),
//       updatedAt: new Date()
//   });
//   res.send('Usuário criado com sucesso!');
// });


app.post('/cadastrarUser', async (req, res) => {
    try {
      const novoCadastro = await Cadastro.create({
        nome: 'Nome Teste',
        email: 'teste@email.com',
        senha: 'senha123'
      });
  
      res.status(201).json({ message: 'Cadastro criado com sucesso', cadastro: novoCadastro });
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      res.status(500).json({ error: 'Erro ao criar cadastro', message: error.message });
    }
  });
  




app.get('/',(req,res)=>{
    res.send('Meu servidor backend já está rodando!');
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});
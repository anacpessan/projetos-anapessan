let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Joana Silva",
    email: "joana.silva@example.com",
    dataInscricao: new Date(2024, 2, 23, 10, 45),
    dataCheckin: null
  },
  {
    nome: "Pedro Alves",
    email: "pedro.alves@example.com",
    dataInscricao: new Date(2024, 2, 24, 15, 10),
    dataCheckin: new Date(2024, 2, 26, 9, 15)
  },
  {
    nome: "Ana Souza",
    email: "ana.souza@example.com",
    dataInscricao: new Date(2024, 2, 25, 8, 30),
    dataCheckin: new Date(2024, 2, 27, 14, 20)
  },
  {
    nome: "Carlos Santos",
    email: "carlos.santos@example.com",
    dataInscricao: new Date(2024, 2, 26, 14, 15),
    dataCheckin: new Date(2024, 2, 28, 18, 45)
  },
  {
    nome: "Laura Ferreira",
    email: "laura.ferreira@example.com",
    dataInscricao: new Date(2024, 2, 27, 11, 20),
    dataCheckin: null
  },
  {
    nome: "Fernando Oliveira",
    email: "fernando.oliveira@example.com",
    dataInscricao: new Date(2024, 2, 28, 9, 40),
    dataCheckin: null
  },
  {
    nome: "Mariana Rodrigues",
    email: "mariana.rodrigues@example.com",
    dataInscricao: new Date(2024, 2, 29, 16, 55),
    dataCheckin: new Date(2024, 3, 1, 12, 20)
  },
  {
    nome: "Rafaela Nunes",
    email: "rafaela.nunes@example.com",
    dataInscricao: new Date(2024, 2, 30, 12, 10),
    dataCheckin: new Date(2024, 3, 2, 8, 45)
  },
  {
    nome: "Daniel Costa",
    email: "daniel.costa@example.com",
    dataInscricao: new Date(2024, 2, 31, 17, 30),
    dataCheckin: new Date(2024, 3, 3, 16, 15)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao) 
  
  let dataCheckin= dayjs(Date.now())
  .to(participante.dataCheckin)

  if(participante.dataCheckin == null) {
   dataCheckin = `
    <button
      data-email="${participante.email}"
      onclick="fazerCheckin(event)">
      Confirmar check-in
    </button>
    `
  }
  return `
  <tr>
    <td>
      <strong>
          ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
      <td>${dataInscricao}</td>
    <td>${dataCheckin}</td>
  </tr>
  ` 
}
const atualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante)
  }
  //substituir info do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}
atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()
  
  const dadosDoFormulario = new FormData(event.target)
  
  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckin: null
  }

  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )
  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}
  
  const fazerCheckIn = (event) => {
    const mensagemConfirmacao = 'Tem certeza que deseja realizar o check-in?'

    if(confirm(mensagemConfirmacao) == false) {
      return 
    }
    //encontrar participante dentro da lista
    const participante = participantes.find(
      (p) => p.email = event.target.dataset.email
    )
    //atualizar check-in do participante
    participante.dataCheckin = new Date()
    atualizarLista(participantes)
    }







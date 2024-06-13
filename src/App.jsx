import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container, Centro, Input, Button, ItemLista, Item, Foguete, Lixo, Texto3 } from './style.js';

function App() {
  const [lista, setLista] = useState([])
  const [inputTarefa, setTarefa] = useState("");

  function input_mudou(event) {
    setTarefa(event.target.value);
  }

  function botao_clicado() {
    if(inputTarefa){
      setLista([...lista, { id: uuidv4(), tarefa: inputTarefa, tarefaFinalizada: false }]);
    }
  }

  function finalizarTarefa(id){
    const novaLista = lista.map(function(item){
      if(item.id === id){
        return {...item, tarefaFinalizada: !item.tarefaFinalizada}
      }
      else{
        return item
      }
    })

    setLista(novaLista)
  }

  function excluirTarefa(id){
    const novaLista = lista.filter(function(item){
      return item.id !== id
    })
    
    setLista(novaLista)

  }

  return (
    <Container>
      <Centro>
        <Input onChange={input_mudou} placeholder="O que tenho para fazer..." />
        <Button onClick={botao_clicado}>Adicionar</Button>
        <ItemLista>
        {
          lista.length > 0 ? (
              lista.map(function(item){
              return (
                <Item key={item.id} $Finalizada={item.tarefaFinalizada}> <Foguete onClick={function (){
                  finalizarTarefa(item.id)}} /> {item.tarefa} <Lixo onClick={function(){
                    excluirTarefa(item.id)}} /></Item>
                  );
            })
          ) : (
            <Texto3>Não há itens na lista</Texto3>
          )
        }
          
        </ItemLista>
      </Centro>
    </Container>
  );
}

export default App;
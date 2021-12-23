import { useState } from 'react'
import type { NextPage } from 'next'

import { Layout } from 'components'

export const Cadastro: NextPage = () => {
  const [sku, setSku] = useState('')
  const [preco, setPreco] = useState('')
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')

  const handleSubmit = () => {
    const produto = {
      sku,
      preco,
      nome,
      descricao,
    }

    console.log(produto)
  }

  return (
    <Layout titulo="Produtos">
      <div className="columns">
        <div className="column  field">
          <label className="label" htmlFor="inputSku">
            SKU: *
          </label>
          <div className="control">
            <input
              id="inputSku"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              type="text"
              className="input"
              placeholder="Digite o SKU do produto"
            />
          </div>
        </div>
        <div className="column field">
          <label className="label" htmlFor="inputPreco">
            Preço: *
          </label>
          <div className="control">
            <input
              id="inputPreco"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              type="text"
              className="input"
              placeholder="Digite o Preço do produto"
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="field column">
          <label className="label" htmlFor="inputNome">
            Nome: *
          </label>
          <div className="control">
            <input
              id="inputNome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              type="text"
              className="input"
              placeholder="Digite o Nome do produto"
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="field column">
          <label htmlFor="textareaDescricao" className="label">
            Descrição: *
          </label>
          <div className="control">
            <textarea
              id="textareaDescricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="textarea"
              placeholder="Digite a Descrição detalhada do produto"
            />
          </div>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={handleSubmit}>
            Salvar
          </button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Voltar</button>
        </div>
      </div>
    </Layout>
  )
}

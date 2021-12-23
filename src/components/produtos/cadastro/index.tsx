import { useState } from 'react'
import type { NextPage } from 'next'

import { Layout, Input } from 'components'

export const Cadastro: NextPage = () => {
  const [sku, setSku] = useState<string>('')
  const [preco, setPreco] = useState<string>('')
  const [nome, setNome] = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')

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
        <Input
          label="SKU"
          id="inputSku"
          value={sku}
          onChange={setSku}
          placeholder="Digite o SKU do produto"
          columnClasses="is-half"
        />
        <Input
          label="Preço"
          id="inputPreco"
          value={preco}
          onChange={setPreco}
          placeholder="Digite o Preço do produto"
          columnClasses="is-half"
        />
      </div>

      <div className="columns">
        <Input
          label="Nome"
          id="inputNome"
          value={nome}
          onChange={setNome}
          placeholder="Digite o Nome do produto"
          columnClasses="is-full"
        />
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

import type { NextPage } from 'next'

import { Layout } from 'components'

export const Cadastro: NextPage = () => {
  return (
    <Layout titulo="Produtos">
      <div className="field">
        <label className="label" htmlFor="inputSku">
          SKU: *
        </label>
        <div className="control">
          <input
            id="inputSku"
            type="text"
            className="input"
            placeholder="Digite o SKU do produto"
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="inputPreco">
          Preço: *
        </label>
        <div className="control">
          <input
            id="inputPreco"
            type="text"
            className="input"
            placeholder="Digite o Preço do produto"
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="inputNome">
          Nome: *
        </label>
        <div className="control">
          <input
            id="inputNome"
            type="text"
            className="input"
            placeholder="Digite o Nome do produto"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="textareaDescricao" className="label">
          Descrição: *
        </label>
        <div className="control">
          <textarea
            id="textareaDescricao"
            className="textarea"
            placeholder="Digite a Descrição detalhada do produto"
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Salvar</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Voltar</button>
        </div>
      </div>
    </Layout>
  )
}

import { Table } from "react-bootstrap";
import "./consultas.css";

function TabelaMusica({ vetor, selecionar }) {
  return (
    <>
      <section className="tabelaMusicas">
        <table className="tabela">
          <h3>Musicas</h3>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>lançamento</th>
              <th>idCantor</th>
              <th>selecionar</th>
            </tr>
          </thead>

          <tbody>
            {vetor.map((obj, indices) => (
              <tr key={indices}>
                <td>{indices + 1}</td>
                <td>{obj.nome_musica}</td>
                <td>{obj.lancamento}</td>
                <td>{obj.id_cantor}</td>
                <td>
                  <button
                    className="btnSelecionar"
                    onClick={() => {
                        selecionar(indices);
                    }}
                  >
                    Selecionar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default TabelaMusica;

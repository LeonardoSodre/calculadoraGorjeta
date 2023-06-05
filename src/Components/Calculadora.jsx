
import cifrão from "../images/cifrao.png"
import pessoa from "../images/pessoa.png"
import "./Calculadora.css"



export function Calculadora(){
  /*  const [conta, setConta] = useState(0)
    const [pessoas, setPessoas] = useState(0)
    const [porcentagem, setPorcentagem] = useState(0)

    function handleAlterarConta(event){
        setConta(event.target.valueAsNumber)
        }

    function handleAlterarPessoas(event){
        setPessoas(event.target.valueAsNumber)
    }   
  
*/
    return(
        <main>
           <form action="">
                <div className="bill">
                   <label htmlFor=""> Conta</label>
                   <div className="input-box">
                        <img src={cifrão} alt="imagem do cifrão" />
                        <input type="number" id='bill' placeholder="0" />
                    
                    </div>
                </div>
                <div className="tip-percentage">
                    <label htmlFor="custom">Selecione a porcentagem %</label> <br></br>
                    <input type="button" value="5%" onClick={() =>setPorcentagem(5)}/>
                    <input type="button" value="10%" onClick={() =>setPorcentagem(10)} />
                    <input type="button" value="15%"  onClick={() =>setPorcentagem(15)}/>
                    <input type="button" value="25%" onClick={() =>setPorcentagem(25)}/>
                    <input type="button" value="50%" onClick={() =>setPorcentagem(50)}/>
                    <input type="number" id="custom" placeholder="Outra" />
                </div>

                <div className="people">
                    <label htmlFor="">Numero de pessoas</label>
                    <div className="input-box">
                        <img src={pessoa} alt="imagem do cifrão" />
                        <input type="number" id="people-number" placeholder="0" />
                    </div>
                </div>
           </form>
           <section className="results">
               <div>
                <div className="tip-amount">
                    <p> Gorjeta <br />
                    <span> / Pessoa</span>
                    </p>
                    <p>R$ 0.00</p>
                </div>
                <div className="total">
                    <p>Total <br />
                    <span> / Pessoa</span>
                    </p>
                    <p>R$ 0.00</p>
                </div>
            </div>
                <button> Limpar</button>
           </section>

        </main>
    )
}
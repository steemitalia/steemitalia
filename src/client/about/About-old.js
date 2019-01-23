import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Footer from '../components/Footer/Footer';
import '../faq/Faq.less';

class About extends React.Component {
  render() {
    const { location } = this.props;
    const robots = location.pathname === '/' ? 'index,follow' : 'noindex,follow';
    return (
      <div>
        <Helmet>
          <title>Steem Italia</title>
          <meta name="robots" content={robots} />
        </Helmet>
        <div className="container faq-container">
          <h3 className="sub-title"> {'Che cos’è Steemitalia?'} </h3>
          <p>
            {' '}
            Steemitalia è la prima piattaforma di blogging italiana basata su blockchain Steem.{' '}
          </p>
          <p>
            {`Il progetto nasce dall’esigenza di creare uno strumento su misura in grado di soddisfare tutte le esigenze della crescente comunità italiana su Steem. Con una piattaforma graficamente accattivante e un utilizzo intuitivo, Steemitalia si propone come una valida alternativa tutta italiana a Steemit e Busy, attualmente i frontend più avanzati su blockchain Steem di cui tecnicamente Steemitalia è un fork.`}
          </p>
          <h3 className="sub-title"> {'L’ecosistema Steem'} </h3>
          <p>
            {`L’idea di fondo della blockchain Steem è realizzare un ecosistema efficace per la creazione di community che stimolino le interazioni social, attraverso un sistema premiale basato sulla criptovaluta Steem. Steem combina concetti presi dal mondo del blogging, dei social media e delle community online, oltre che dal campo delle criptovalute e della community che le circonda. In qualsiasi tipo di community online e offline, un concetto chiave per incentivare le persone a partecipare è un equo sistema di retribuzione/riconoscimento del lavoro svolto, che rifletta in modo giusto il contributo che il singolo dà alla community. Steem è la prima criptovaluta che prova a retribuire in modo accurato e trasparente un illimitato numero di persone che attraverso i propri contenuti personali e originali partecipano allo sviluppo della community.  `}
          </p>
          <p>
            {' '}
            {`Creata sulla base di programmi open source e di una blockchain pubblicamente accessibile per permettere la costruzione di community e le interazioni tra utenti grazie ai pagamenti in cryptovaluta, Steem permette di creare applicazioni e servizi che accedono direttamente alla blockchain.`}
          </p>
          <p
          >{`La piattaforma Steem è creata usando Graphene, la stessa tecnologia che alimenta Bitshares (un altro network basato su blockchain creato da Dan Larimer, il co-fondatore di Steem e Steemit insieme a Ned Scott). `}</p>

          <h3 className="sub-title"> {'Come creare un account Steem?'} </h3>
          <p>
            {' '}
            Per accedere a Steemitalia avrete bisogno di un account Steem, per crearlo basta
            completare la procedura di iscrizione elencati in questa pagina:{' '}
            <a href={`https://signup.steemit.com/`} rel="noopener noreferrer" target="_blank">
              https://signup.steemit.com/{' '}
            </a>{' '}
          </p>
          <br />
          <p>
            {`Per completare l’iscrizione a Steem tramite il sito Steemit sono necessari diversi giorni di attesa, ma ci sono altri modi per creare un account:`}
          </p>
          <ul className="bullet-true">
            <li>Sul sito Steemconnect</li>
            <li>Sul sito blocktrades </li>
            <li>Sul sito Get on steem!</li>
          </ul>
          <h3 className="sub-title"> {'Il profilo utente: Reputazione e VP'} </h3>
          <p>La Reputazione Utente ha fondamentalmente due funzioni.</p>
          <ul>
            <li> Indica quanto un utente è "fidato o apprezzato dalla comunità".</li>
            <li> Impedisce agli utenti con scarsa reputazione di danneggiare gli altri utenti.</li>
          </ul>
          <p>
            Tuttavia con l’avvento dei bot di autovoto la reputazione risulta spesso falsata e poco
            attendibile sul grado reale di affidabilità di un utente.
          </p>
          <br />
          <p>Steem, Steem Power, SBD</p>
          <p>Su Steem coesistono 3 monete:</p>
          <ul type="number">
            <li>1. STEEM </li>
            <li>2. STEEM DOLLARS </li>
            <li>3. STEEM POWER: il potere di voto che ogni utente guadagna sulla piattaforma</li>
          </ul>
          <h3 className="sub-title"> {'STEEM'} </h3>
          <p>
            Gli STEEM permettono il funzionamento dell'intero sistema Steem. La criptovaluta Steem
            ha un valore determinato dal mercato, è altamente volatile (quindi fortemente soggetta
            alle fluttuazioni di mercato), non è destinata all’uso per fini commerciali (per
            acquisti di beni o servizi) ma per essere scambiato sul mercato con altre monete a fini
            speculativi.
          </p>
          <p>
            Gli STEEM possono essere scambiati infatti, sia nel mercato interno a Steemit che sui
            vari exchange come blocktrades, bittrex, ecc.
          </p>
          <h3 className="sub-title"> {'STEEM DOLLARS'} </h3>
          <p>Gli STEEM DOLLARS sono la moneta principale dell'ecosistema Steem.</p>
          <p>
            In linea teorica gli STEEM DOLLAR dovrebbero essere ancorati al dollaro, e assumere lo
            stesso valore di quest’ultimo. Non importa quanto si apprezza o deprezza STEEM, grazie a
            STEEM DOLLAR si potrà sempre scambiare 1 STEEM DOLLAR per almeno 1 Dollaro USA. Tuttavia
            nella pratica si è visto che gli STEEM DOLLAR (chiamati anche SD o SBD - steem backed
            dollars) possono assumere valori ben più alti. Quello che è importante capire è che lo
            STEEM DOLLAR è una valuta stabile, o per meglio dire "protetta", la sua valutazione
            infatti non dovrebbe mai sfondare al ribasso il prezzo minimo (pavimento) di 1$.
          </p>
          <p>Nota bene: Le ricompense dei post su Steemit sono quantificate in STEEM DOLLAR.</p>
          <p>
            Anche gli STEEM DOLLARS possono essere scambiati sia sul mercato interno o sui
            variexchange come blocktrades, bittrex, ecc.
          </p>
          <h3 className="sub-title"> {'STEEM POWER'} </h3>
          <p>
            {' '}
            Lo STEEM POWER è un investimento a lungo termine. Il valore di ogni unità di STEEM POWER
            equivale a quella di uno STEEM. Maggiore è la quantità di STEEM POWER che si possiede
            maggiore sarà il valore del vostro voto.
          </p>
          <p>
            Lo STEEM POWER è vincolato, non è possibile utilizzarlo per transazioni in uscita o per
            scambi. Il prelevamento è consentito con una procedura chiamata Power Down per mezzo
            della quale sarà possibile prelevare 1/13 (un tredicesimo) dell'intero importo a
            settimana per 13 settimane.
          </p>
          <p>
            Grazie a questa procedura, STEEM POWER rappresenta il modo migliore e sicuro per
            accumulare fondi, visto che anche in caso di account hackerato, ci sarebbe più tempo per
            porre riparo.
          </p>
          <h3 className="sub-title"> {'Scrivere un post'} </h3>
          <p>
            Il concetto alla base di Steemit è semplice: remunerare gli autori per i contenuti che
            producono tramite i voti che ricevono ai loro post.{' '}
          </p>
          <p>
            Più il post sarà apprezzato dagli utenti, più voti riceverà e più guadagnerà. Questo
            perché a differenza degli altri social network, il voto che un utente dà ad un altro ha
            valore.
          </p>
          <h3 className="sub-title"> {'Votare un post'} </h3>
          <p>
            Votare un post o fare Upvote, vuol dire apprezzare il contenuto di un post e tramite il
            proprio voto retribuirlo. Il valore del voto dipende dalla quantità di Steem Power
            accumulato. Maggiore lo Steem Power, maggiore il valore del voto del singolo utente.{' '}
          </p>
          <h3 className="sub-title"> {'Quanto valgono i voi?'} </h3>
          <p>
            Il valore del voto del singolo utente è determinato da diversi fattori, tra cui lo
            **SteemPower** (il potere di voto che ogni utente guadagna sulla piattaforma), la
            reputazione, l’andamento del mercato delle crypto, ecc.{' '}
          </p>
          <p>
            Scrivere commenti e ricercare contenuti validi “paga”: infatti su Steemit anche
            l’attività di curation viene retribuita. La curation è l’attività di voto dei contenuti
            di valore da parte dei lettori. Anche i lettori, quindi leggendo e valutando
            positivamente un contenuto ricevono un tornaconto economico.{' '}
          </p>
          <h3 className="sub-title"> {'Commentare un post'} </h3>
          <p>
            Scrivere commenti e ricercare contenuti validi “paga”: infatti su Steemit anche
            l’attività di curation viene retribuita. La curation è l’attività di voto dei contenuti
            di valore da parte dei lettori. Anche i lettori, quindi leggendo e valutando
            positivamente un contenuto ricevono un tornaconto economico.{' '}
          </p>
          <h3 className="sub-title"> {'Quanto vale un post?'} </h3>
          <p>
            <a
              href={`https://steemitalia.com/ita/@thenightflier/ricompense-calcolo-manuale-ed-automatizzato`}
              rel="noopener noreferrer"
              target="_blank"
            >
              https://steemitalia.com/ita/@thenightflier/ricompense-calcolo-manuale-ed-automatizzato{' '}
            </a>
          </p>
          <p>
            Il valore accumulato da un post nell’arco dei 7 giorni necessari per poter riscuotere il
            ricavato, corrisponde a una cifra ben precisa di STEEM, SBD e STEEM POWER.{' '}
          </p>
          <p>
            Le ricompense effettive dei post che pubblicate, si calcolano moltiplicando l'ammontare
            che vedete sotto il vostro post per ~75% e dividendo per 2. La cifra ottenuta sarà la
            quantità di SBD che incasserete, invece dividendo la stessa per il cambio attuale di
            Steem contro USD (dollari americani) otterrete la quantità di SP (Steem Power) che
            incasserete.
          </p>
          <h3 className="sub-title"> {'Riscuotere i premi'} </h3>
          <p>
            Dopo una settimana dalla pubblicazione del post è possibile riscuotere i premi derivati
            dal post nell’apposita sezione del profilo utente.{' '}
          </p>
          <h3 className="sub-title"> {'Reinvestire nel sistema'} </h3>
          <p>
            Il valore del singolo utente e quello dei voti dei membri della community sono
            fondamentali per la crescita del singolo e del gruppo. È per questo che è fondamentale
            reinvestire nel sistema Steemit gli STEEM e gli SBD guadagnati tramite i propri post
            tramite la funzione del POWER UP.
          </p>
          <h3 className="sub-title"> {'Le Communities'} </h3>
          <p>
            Le community sono la linfa vitale di Steem. Creare gruppi di persone che condividano un
            certo tipo di interessi, che sia per vicinanza geografica, linguistica, culturale o
            sociale, è fondamentale per incentivare l’interazione e produrre contenuti di reale
            interesse per gli utenti.{' '}
          </p>
          <h3 className="sub-title"> {'Steempostitalia'} </h3>
          <p>
            “SPI è nato principalmente come punto di ritrovo per gli utenti di Steemit di lingua
            italiana. Nasce con l'obiettivo di creare una comunità italiana dove chiedere, trovare e
            dare aiuto, dove condividere idee, proposte, progetti, dove trovare una moltitudine di
            persone così diverse tra loro, ma tutte, in fondo, accomunate da quello spirito e quella
            necessità che li ha portati, in un modo o nell'altro, ad avvicinarsi e ad entrare in
            questo "nuovo mondo, sconosciuto ai più “ @bhuz
          </p>
          <p>
            @Steempostitalia è la community italiana di Steem, nata per orientarsi nel mare magnum
            dell’universo virtuale della piattaforma.{' '}
          </p>

          <p>
            <strong>Steempostitalia è tante cose: </strong>
          </p>
          <ul className="bullet-true margin-20">
            <li>
              @Steempostitalia è uno **spazio virtuale di incontro** per gli utenti italiani
              iscritti sulla piattaforma Steemit.
            </li>
            <li>
              È un **hub di idee e progetti** (come ad esempio **@spi-postit**, la rubrica
              quotidiana deimigliori contenuti della community), che cerca nella tecnologia della
              blockchain un motore di innovazione e propositività.{' '}
            </li>
            <li>
              È soprattutto uno **strumento di supporto per i nuovi entrati nel mondo Steemit**:
              risponde alle domande che tutti si sono fatti quando si sono confrontati per la prima
              volta con il sito e aiuta gli utenti a inserirsi nel sistema, a confrontarsi con la
              piattaforma e a crescere tramite diverse iniziative (ad es. contest, progetti di
              gruppo).
            </li>
          </ul>
          <p>
            L’account Steem di @steempostitalia è un account privato di proprietà di @thenightflier.
          </p>
          <p>
            L’account è messo a disposizione del gruppo di @steempostitalia per finanziare progetti,
            contest, daily digest e ogni tipo di iniziativa atta alla crescita individuale e
            comunitaria.
          </p>
          <p>
            L’account @steempostitalia dunque viene gestito oltre che dal proprietario anche del
            team di coordinamento.
          </p>
          <h3 className="sub-title"> {'Le regole di SPI'} </h3>

          <p>
            <a
              href={`https://www.steemitalia.com/regole`}
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.steemitalia.com/regole
            </a>
          </p>

          <h3 className="sub-title"> {'Gruppo SteempostIT su discord'} </h3>
          <p>
            Discord è un servizio di messaggistica evoluto che integra sia le funzionalità del
            messaging puro proprie di altre applicazioni come Telegram, Messenger, ecc a quelle
            vocali proprie di Skype, Teamspeak, ecc il tutto con un'interfaccia intuitiva e con una
            qualità audio eccellente. Discord gira su PC, MAC, Android e iOS quindi potrete
            scaricare l'app e usarla da mobile come fate con Telegram.
          </p>
          <p>
            Per unirsi al gruppo, basta seguire questo link:{' '}
            <a href={`discordapp.com/invite/QDKPzSp`} rel="noopener noreferrer" target="_blank">
              discordapp.com/invite/QDKPzSp
            </a>{' '}
          </p>
          <p>I contest di Steempostitalia</p>
          <p>
            SteemPostItalia organizza contest dedicati ai membri della community e supporta i
            contest indetti dagli stessi membri, a patto che rispettino uno o più di questi
            obiettivi:
          </p>
          <ul className="bullet-true">
            <li>Utilità sociale</li>
            <li>Crescita della comunità</li>
            <li>Promozione della comunità</li>
            <li>Sviluppo di conoscenze specifiche</li>
            <li>Sviluppo di abilità creative e intellettuali</li>
            <li>Raccolta fondi per iniziative benefiche (documentabili)</li>
          </ul>
          <p>
            I contest che comunque NON potranno essere presi in considerazione sono quelli che
            trattano di:
          </p>
          <ul className="bullet-true">
            <li>Scommesse</li>
            <li>Lotterie</li>
            <li>Politica</li>
            <li>Religione</li>
            <li>Offese</li>
            <li>Volgarità</li>
          </ul>
          <p>
            <strong>
              Più in generale, verranno supportati i contest che necessitano di una certa
              applicazione di tempo e di impegno da parte dei partecipanti.
            </strong>
          </p>
          <br />
          <p>
            Chiaramente non tutti i contest possono essere supportati, come sapete la quantità di VP
            di @steempostitalia è limitata, quindi anche se vengono rispettate le linee guida
            qualora l'ammontare di VP residuo non fosse sufficiente il vostro contest potrebbe non
            essere supportato.{' '}
          </p>
          <h3 className="sub-title">I progetti SPI</h3>
          <p>
            SPI è anche un incubatore di progetti proposti dagli utenti della community. Sul server
            Discord di SteempostIT è stato aperto il nuovo canale SPI-PROJECTS che a sua volta
            ospita le stanze dei progetti, moderate e gestite dai singoli Project-Manager. Per
            sottoporre la propria idea, basta compilare questo form di presentazione dei progetti,
            che verrà fissato anche nella stanza Discord nuove-proposte, liberamente utilizzabile da
            chiunque per presentare a SPI la sua proposta, che sia essa in fase embrionale, o
            decisamente più strutturata.
          </p>
          <p>
            Oltre al nome del proponente e al titolo della proposta progettuale, viene richiesto di
            identificare principalmente:
          </p>
          <p>
            <strong>- l'ambito in cui si colloca il progetto; </strong>
          </p>
          <p>
            <strong>
              - una descrizione del progetto in cui si prevedano i destinatari, gli obiettivi, i
              risultati attesi;{' '}
            </strong>
          </p>
          <p>
            <strong>
              - il tipo di supporto ritenuto necessario (dalla progettazione nel suo complesso, alla
              richiesta di sostegno economico, alla ricerca di collaboratori, alla
              pubblicizzazione);{' '}
            </strong>
          </p>
          <p>
            <strong>
              - il tipo di competenze richieste per costruire un eventuale team di collaboratori;{' '}
            </strong>
          </p>
          <p>
            <strong>- una previsione di tempistica e di fasi del progetto;</strong>
          </p>
          <p>
            <strong>- l'identificazione di eventuali costi (e di chi li sosterrà);</strong>
          </p>
          <p>
            <strong>
              - la previsione dei benefici (economici o altro) derivanti dalla realizzazione.
            </strong>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

About.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default About;

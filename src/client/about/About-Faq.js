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
          <h2 className="sub-title">Che cos?&egrave; Steemitalia?</h2>
          <p>
          Steemitalia &egrave; la prima piattaforma di blogging italiana basata su blockchain Steem.
          </p>
          <p>
          Il progetto nasce dall?esigenza di creare uno strumento su misura in grado di soddisfare tutte le esigenze degli utenti italiani su Steem. Con una piattaforma graficamente accattivante e un utilizzo intuitivo, Steemitalia si propone come una valida alternativa tutta italiana a Steemit e Busy, attualmente i frontend pi&ugrave; avanzati su blockchain Steem di cui tecnicamente Steemitalia &egrave; un fork.
          </p>
          <br />
          <h2 className="sub-title">Steemitalia beta</h2>
          <p>
          Steemitalia come del resto altri frontend &egrave; in fase beta, ovvero una versione non definitiva, gi&agrave; testata ma non per questo priva di difetti.
          Steemitalia inoltre fruisce della blockchain Steem, tecnologia in continuo divenire, e dipende da API, nodi e server di propriet&agrave; di terzi, dunque fuori dal nostro controllo, pertanto ci scusiamo  in anticipo per il possibile verificarsi di disservizi e periodi pi&ugrave; o meno brevi di blackout in cui il sito potrebbe risultare offline, lento o irraggiungibile.
          </p>
          <br />
          <h2 className="sub-title">L?ecosistema Steem</h2>
          <p>
          L?idea di fondo della blockchain Steem &egrave; realizzare un ecosistema efficace per la creazione di community che stimolino le interazioni social, attraverso un sistema premiale basato sulla criptovaluta Steem. Steem combina concetti presi dal mondo del blogging, dei social media e delle community online, oltre che dal campo delle criptovalute e della community che le circonda. In qualsiasi tipo di community online e offline, un concetto chiave per incentivare le persone a partecipare &egrave; un equo sistema di retribuzione/riconoscimento del lavoro svolto, che rifletta in modo giusto il contributo che il singolo d&agrave; alla community. Steem &egrave; la prima criptovaluta che prova a retribuire in modo accurato e trasparente un illimitato numero di persone che attraverso i propri contenuti personali e originali partecipano allo sviluppo della community.
          </p>
          <p>
          Creata sulla base di programmi open source e di una blockchain pubblicamente accessibile per permettere la costruzione di community e le interazioni tra utenti grazie ai pagamenti in cryptovaluta, Steem permette di creare applicazioni e servizi che accedono direttamente alla blockchain.
          </p>
          <br />
          <h2 className="sub-title">Come creare un account Steem?</h2>
          <p>
          Per accedere a Steemitalia avrete bisogno di un account Steem, per crearlo basta completare la procedura di iscrizione elencata in questa pagina: https://signup.steemit.com/
          </p>
          <p>
            Per completare l?iscrizione a Steem tramite il sito Steemit sono necessari diversi giorni di attesa, ma ci sono altri modi per creare un account se ne avete gi&agrave; un altro o avete un amico che pu&ograve; farlo per voi:
            <ul>
              <li>Sul sito <a href="https://steemconnect.com/accounts/create">Steemconnect</a></li>
              <li>Sul sito <a href="https://blocktrades.us/create-steem-account"Blocktrades</a></li>
              <li>Sul sito <a href="https://getonsteem.com/"Get on Steem!"</a></li>
            </ul>
          </p>
          <br />
          <h2 className="sub-title">Il profilo utente: Reputazione e VP</h2>
          <p>
          La Reputazione Utente &egrave; una sorta di indice di attivit&agrave; della piattaforma che aumenta quanto pi&ugrave; gli altri utenti votano sui tuoi contenuti. Quanto pi&ugrave; si ottengono upvotes aumenta, e viceversa diminuisce con i downvotes.
          </p>
          <p>
          Occorre specificare che a causa della presenza dei bid bot di voto, con cui &egrave; possibile comprare voti dietro pagamento di STEEM o SBD, la reputazione risulta talvolta falsata e poco attendibile sul grado reale di affidabilit&agrave; di un utente.
          </p>
          <br />
          <h2 className="sub-title">STEEM, STEEM POWER, SBD</h2>
          <p>
            Su Steem coesistono 3 monete:
            <ol>
              <li>STEEM</li>
              <li>STEEM POWER (o SP): il potere di voto che ogni utente guadagna sulla piattaforma</li>
              <li>STEEM DOLLARS (o SBD)</li>
            </ol>
          </p>
          <br />
          <h2 className="sub-title">STEEM</h2>
          <p>
          Gli STEEM permettono il funzionamento dell'intero sistema Steem. La criptovaluta Steem ha un valore determinato dal mercato, &egrave; altamente volatile (quindi fortemente soggetta alle fluttuazioni di mercato), non &egrave; destinata all?uso per fini commerciali (per acquisti di beni o servizi) ma per essere scambiato sul mercato con altre monete a fini speculativi.
          </p>
          <p>
          Gli STEEM possono essere scambiati infatti, sia nel mercato interno a Steemit che sui vari exchange come Blocktrades, bittrex, ecc.
          </p>
          <br />
          <h2 className="sub-title">STEEM POWER (o SP)</h2>
          <p>
          Lo STEEM POWER &egrave; un investimento a lungo termine. Il valore di ogni unit&agrave; di STEEM POWER equivale a quella di uno STEEM. Maggiore &egrave; la quantit&agrave; di STEEM POWER che si possiede maggiore sar&agrave; il valore del vostro voto.
          </p>
          <p>
          Lo STEEM POWER &egrave; vincolato, non &egrave; possibile utilizzarlo per transazioni in uscita o per scambi. Il prelevamento &egrave; consentito con una procedura chiamata Power Down per mezzo della quale sar&agrave; possibile prelevare 1/13 (un tredicesimo) dell'intero importo a settimana per 13 settimane.
          </p>
          <p>
          Grazie a questa procedura, STEEM POWER rappresenta il modo migliore e sicuro per accumulare fondi, visto che anche in caso di account hackerato, ci sarebbe pi&ugrave; tempo per porre riparo.
          </p>
          <br />
          <h2 className="sub-title">STEEM DOLLARS (o SBD)</h2>
          <p>
          In linea teorica gli STEEM DOLLAR dovrebbero essere ancorati al dollaro, e assumere lo stesso valore di quest?ultimo. Tuttavia nella pratica si &egrave; visto che gli STEEM DOLLAR (chiamati anche SD o SBD - steem backed dollars) possono assumere valori differenti (decisamente pi&ugrave; alti e pi&ugrave; bassi). 
          </p>
          <p>
          Anche gli STEEM DOLLARS possono essere scambiati sia sul mercato interno o sui vari exchange come Blocktrades, bittrex, ecc.
          </p>
          <br />
          <h2 className="sub-title">Scrivere un post</h2>
          <p>
          Il concetto alla base di Steemit &egrave; semplice: remunerare gli autori per i contenuti che producono tramite i voti che ricevono ai loro post.
          </p>
          <p>
          Pi&ugrave; il post sar&agrave; apprezzato dagli utenti, pi&ugrave; voti ricever&agrave; e pi&ugrave; guadagner&agrave;. Questo perch&eacute; a differenza degli altri social network, il voto che un utente d&agrave; ad un altro ha valore.
          </p>
          <br />
          <h2 className="sub-title">Votare un post</h2>
          <p>
          Votare un post o fare Upvote, vuol dire apprezzare il contenuto di un post e tramite il proprio voto retribuirlo. Il valore del voto dipende dalla quantit&agrave; di Steem Power accumulato. Maggiore lo Steem Power, maggiore il valore del voto del singolo utente.
          </p>
          <br />
          <h2 className="sub-title">Quanto valgono i voti?</h2>
          <p>
          Il valore del voto del singolo utente &egrave; determinato da diversi fattori, tra cui lo **SteemPower** (il potere di voto che ogni utente guadagna sulla piattaforma), la reputazione, l?andamento del mercato delle crypto, ecc.
          </p>
          <p>
          Scrivere commenti e ricercare contenuti validi ?paga?: infatti su Steemit anche l?attivit&agrave; di curation viene retribuita. La curation &egrave; l?attivit&agrave; di voto dei contenuti di valore da parte dei lettori. Anche i lettori, quindi leggendo e valutando positivamente un contenuto ricevono un tornaconto economico.
          </p>
          <br />
          <h2 className="sub-title">Commentare un post</h2>
          <p>
          Scrivere commenti e ricercare contenuti validi ?paga?: infatti su Steemit anche l?attivit&agrave; di curation viene retribuita. La curation &egrave; l?attivit&agrave; di voto dei contenuti di valore da parte dei lettori. Anche i lettori, quindi leggendo e valutando positivamente un contenuto ricevono un tornaconto economico.
          </p>
          <br />
          <h2 className="sub-title">Quanto vale un post?</h2>
          <p>
          Il valore del post &egrave; indicato dal simbolo "$" visualizzato di default vicino ai rewards. Attenzione per&ograve;: questo "$" non sta a significare il valore in dollari americani, e neppure in SBD. Si tratta di STU, un'unit&agrave; di misura interna alla blockchain di Steem che potrebbe inglomerare STEEM, SP (steem power) e/o SBD. In ogni caso, dopo 7 giorni di tempo, il valore del post accumulato in questo arco di tempo viene riscosso dall'utente, sotto forma di SP, SBD e Steem, in proporzione variabile a seconda della situazione del mercato interno di quel momento. Vi consigliamo di visitare questo sito per ottenere ulteriori delucidazioni a riguardo e calcolare pi&ugrave; accuratamente il valore delle reward.
          </p>
          <br />
          <h2 className="sub-title">Riscuotere i premi</h2>
          <p>
          Dopo una settimana dalla pubblicazione del post &egrave; possibile riscuotere i premi derivati dal post nell?apposita sezione del profilo utente.
          </p>
          <br />
          <h2 className="sub-title">Reinvestire nel sistema</h2>
          <p>
          Il valore del singolo utente e quello dei voti dei membri della community sono fondamentali per la crescita del singolo e del gruppo. &egrave; per questo che &egrave; fondamentale reinvestire nel sistema Steemit gli STEEM e gli SBD guadagnati tramite i propri post tramite la funzione del POWER UP.
          </p>
          <br />
          <h2 className="sub-title">Le Communities</h2>
          <p>
          Le community sono la linfa vitale di Steem. Creare gruppi di persone che condividano un certo tipo di interessi, che sia per vicinanza geografica, linguistica, culturale o sociale, &egrave; fondamentale per incentivare l?interazione e produrre contenuti di reale interesse per gli utenti.
          </p>
          <p>
          Esistono numerose community pi&ugrave; o meno attive e pi&ugrave; o meno popolate, per trovarle basta semplicemente cercarle su Steem. 
          </p>
          <br />
          <h2 className="sub-title">Steempostitalia (o SPI)</h2>
          </p>
          ?SPI &egrave; nato principalmente come punto di ritrovo per gli utenti di Steemit di lingua italiana. Nasce con l'obiettivo di creare una comunit&agrave; italiana dove chiedere, trovare e dare aiuto, dove condividere idee, proposte, progetti, dove trovare una moltitudine di persone cos&igrave; diverse tra loro, ma tutte, in fondo, accomunate da quello spirito e quella necessit&agrave; che li ha portati, in un modo o nell'altro, ad avvicinarsi e ad entrare in questo "nuovo mondo, sconosciuto ai pi&ugrave; ? @bhuz
          </p>
          <p>
          @Steempostitalia &egrave;  la prima e maggiore comunit&agrave; italiana su Steem, nata per orientarsi nel mare magnum dell?universo virtuale della piattaforma.
          </p>
          <p>
          Ma cos'&egrave; Steempostitalia?
            <ul>
              <li>@Steempostitalia &egrave; uno <b>spazio virtuale di incontro</b> per gli utenti italiani iscritti sulla piattaforma Steemit.</li>
              <li>&egrave; <b>un hub di idee e progetti</b> (come ad esempio <a href="https://steemitalia.com/@spi-postit">@spi-postit</a>, la rubrica quotidiana dei migliori contenuti della community), che cerca nella tecnologia della blockchain un motore di innovazione e propositivit&agrave;.</li>
              <li>&egrave; soprattutto uno <b>strumento di supporto per i nuovi entrati</b> nel mondo Steemit: risponde alle domande che tutti si sono fatti quando si sono confrontati per la prima volta con il sito e aiuta gli utenti a inserirsi nel sistema, a confrontarsi con la piattaforma e a crescere tramite diverse iniziative (ad es. contest, progetti di gruppo).</li>
            </ul>
          </p>
          <p>
          L?account Steem di @steempostitalia &egrave; un account privato di propriet&agrave; di @thenightflier.
          </p>
          <p>
          L?account e il trail associato &egrave; messo a disposizione del gruppo di @steempostitalia per finanziare progetti, contest, daily digest e ogni tipo di iniziativa atta alla crescita individuale e comunitaria.
          </p>
          <p>
          L?account @steempostitalia dunque viene gestito oltre che dal proprietario anche del team di coordinamento.
          </p>
          <br />
          <h2 className="sub-title">Gruppo SteempostIT su Discord</h2>
          </p>
          <p>
          <a href="https://discordapp.com">Discord</a> &egrave; un servizio di messaggistica evoluto che integra sia le funzionalit&agrave; del messaging puro proprie di altre applicazioni come Telegram, Messenger, ecc a quelle vocali proprie di Skype, Teamspeak, ecc il tutto con un'interfaccia intuitiva e con una qualit&agrave; audio eccellente. Discord gira su PC, MAC, Android e iOS quindi potrete scaricare l'app e usarla da mobile come fate con Telegram.
          </p>
          <p>
          Per unirsi al gruppo, basta seguire questo link: discordapp.com/invite/QDKPzSp
          </p>
          <br />
          <h2 className="sub-title">I contest di Steempostitalia</h2>
          </p>
          <p>
          SteemPostItalia organizza contest dedicati ai membri della community e supporta i contest indetti dagli stessi membri, a patto che rispettino uno o pi&ugrave; di questi obiettivi:
            <ul>
              <li>Utilit&agrave; sociale</li>
              <li>Crescita della comunit&agrave;</li>
              <li>Promozione della comunit&agrave;</li>
              <li>Sviluppo di conoscenze specifiche</li>
              <li>Sviluppo di abilit&agrave; creative e intellettuali</li>
              <li>Raccolta fondi per iniziative benefiche (documentabili)</li>
            </ul>
          </p>
          <p>
          I contest che comunque NON potranno essere presi in considerazione sono quelli che trattano di:
            <ul>
              <li>Scommesse</li>
              <li>Lotterie</li>
              <li>Politica</li>
              <li>Religione</li>
              <li>Offese</li>
              <li>Volgarit</li>
            </ul>
          Pi&ugrave; in generale, verranno supportati i contest che necessitano di una certa applicazione di tempo e di impegno da parte dei partecipanti.
          </p>
          <p>
          Chiaramente non tutti i contest possono essere supportati, come sapete la quantit&agrave; di VP di @steempostitalia &egrave; limitata, quindi anche se vengono rispettate le linee guida qualora l'ammontare di VP residuo non fosse sufficiente il vostro contest potrebbe non essere supportato.
          </p>
          <br />
          <h2 className="sub-title">I progetti SPI</h2>
          </p>
          <p>
          SPI &egrave; anche un incubatore di progetti proposti dagli utenti della community. Sul server Discord di SteempostIT &egrave; stato aperto il nuovo canale SPI-PROJECTS che a sua volta ospita le stanze dei progetti, moderate e gestite dai singoli Project-Manager. Per sottoporre la propria idea, basta compilare questo form di presentazione dei progetti, che verr&agrave; fissato anche nella stanza Discord nuove-proposte, liberamente utilizzabile da chiunque per presentare a SPI la sua proposta, che sia essa in fase embrionale, o decisamente pi&ugrave; strutturata.
          </p>
          <p>
          Oltre al nome del proponente e al titolo della proposta progettuale, viene richiesto di identificare principalmente:
            <ul>
              <li>l'ambito in cui si colloca il progetto;</li>
              <li>una descrizione del progetto in cui si prevedano i destinatari, gli obiettivi, i risultati attesi;</li>
              <li>il tipo di supporto ritenuto necessario (dalla progettazione nel suo complesso, alla richiesta di sostegno economico, alla ricerca di collaboratori, alla pubblicizzazione);</li>
              <li>il tipo di competenze richieste per costruire un eventuale team di collaboratori;</li>
              <li>una previsione di tempistica e di fasi del progetto;</li>
              <li>l'identificazione di eventuali costi (e di chi li sosterr&agrave;);</li>
              <li>la previsione dei benefici (economici o altro) derivanti dalla realizzazione.</li>
            </ul>
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


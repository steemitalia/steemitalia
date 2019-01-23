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
          <h1 className="title">{'Termini e Condizioni'}</h1>
          <br />
          <p>
            Di seguito sono descritti i termini e le condizioni alle quali Steemitalia offre agli utenti l'accesso ai propri servizi disponibili sul sito web Steemitalia.
          </p>
          <br />
          <h2 className="sub-title">{'1. Definizioni'}</h2>
          <p>
            Per consentire una completa comprensione e accettazione dei presenti termini e condizioni, i seguenti termini, al singolare e al plurale, avranno il significato di seguito indicato:
          </p>
          <p>
            <b>Applicazione:</b> il sito web Steemitalia &egrave; un servizio fornito da Steempostitalia, la prima e maggiore comunit&agrave; su Steem per tutti gli utenti italiani della piattaforma. Steemitalia &egrave; un front-end sulla blockchain di Steem, ovvero un'applicazione web studiata per leggere i contenuti che gli utenti pubblicano su tale blockchain. Su Steemitalia &egrave; possibile vedere dati, testo, fotografie, immagini, video, audio, grafica, articoli, commenti, software, codice, script e altri contenuti presenti sulla blockchain di Steem. Per visionare i contenuti del sito Steemitalia non &egrave; necessario avere un account. Se si desidera utilizzare tutti i servizi, ovvero <b>pubblicare post, votare e commentare</b>, &egrave; necessario creare un account su blockchain Steem. La procedura di creazione dell'account &egrave; esterna al sito di Steemitalia;
          </p>
          <p>
            <b>Servizi:</b> i prodotti e/o servizi offerti tramite l'Applicazione;
          </p>
          <p>
            <b>Utente:</b> il soggetto che accede all'Applicazione, senza distinzione di natura giuridica e finalit&agrave; perseguita, interessato ai Servizi offerti tramite l'Applicazione;
          </p>
          <p>
            <b>Condizioni:</b> il presente contratto che disciplina i rapporti tra Steemitalia e gli Utenti.
          </p>
          <br />
          <h2 className="sub-title">{'2. Registrazione'}</h2>
          <p>
            Per poter utilizzare alcune funzionalit&agrave; dell'Applicazione, gli Utenti devono registrarsi alla blockchain di Steem, estranea a Steemitalia fornendo, in maniera veritiera e completa, tutti i dati richiesti. L'Utente ha l'onere di custodire le proprie credenziali di accesso.
          </p>
          <p>
            Quando si crea un account, si consiglia vivamente di adottare le seguenti precauzioni, in quanto il mancato rispetto di tali consigli potrebbe comportare la perdita di accesso e / o controllo sul proprio Wallet: <br />
            (a) Creare una password unica e complessa; <br />
            (b) Fornire informazioni accurate e veritiere; <br />
            (c) Mantenere e aggiornare tempestivamente le informazioni del proprio Account; <br />
            (d) mantenere la sicurezza del proprio account proteggendo la password del proprio account e l'accesso al proprio computer e al proprio account; <br />
            (e) Informarci tempestivamente se scoprite o sospettate violazioni della sicurezza relative al vostro Account, fermo restando che i soli responsabili del vostro account e che Steemitalia potr&agrave; solo fornirvi indicazioni generiche sulla procedura da seguire in questi casi.
          </p>
          <p>
            L'Utente ha l'onere di custodire le proprie credenziali di accesso.
          </p>
          <p>
            Resta inteso che in nessun caso Steemitalia potr&agrave; essere ritenuto responsabile in caso di smarrimento, diffusione,furto o utilizzo non consentito da parte di terzi,a qualsivoglia titolo, delle credenziali di accesso degli Utenti.
          </p>
          <h2 className="sub-title">{'3. Contenuti inviati dagli Utenti'}</h2>
          <p>
            L'Utente pu&ograve; caricare sulla blockchain di Steem tramite l'Applicazione materiale, contenuti, informazioni, annunci o inserzioni (di seguito i "Contenuti" o singolarmente il "Contenuto"), purch&eacute; il Contenuto non sia illecito (ovvero osceno, intimidatorio, diffamatorio, pornografico, abusivo, o a qualsiasi titolo illegale, o violi la privacy, i diritti di propriet&agrave; intellettuale e/o industriale di Steemitalia e/o di terzi) o non sia in altro modo lesivo nei confronti del Titolare e/o terzi o deplorevole e non contenga virus, propaganda politica, sollecitazione commerciale, e-mail di massa o qualunque altra forma di spamming.
          </p>
          <p>
            L'Utente &egrave; totalmente ed esclusivamente responsabile dell'uso dell'Applicazione (da intendersi con riguardo alle funzioni di pubblicazione, di consultazione, di gestione dei Contenuti e di contatto tra Utenti) ed &egrave; pertanto l'unico garante e responsabile dei beni e dei servizi offerti nonch&eacute; della correttezza, completezza e liceit&agrave; dei Contenuti e del proprio comportamento nell'ambito del contatto tra Utenti.
          </p>
          <p>
            L'Utente garantisce altres&igrave; che i propri post non violino alcun diritto d'autore n&eacute; diritto di propriet&agrave; industriale n&eacute; altro diritto di terzi. In caso di contestazione da parte di terzi riguardo a qualsiasi post condotta ad esso legata, l'Utente se ne assume la piena responsabilit&agrave; e si impegna a tenere manlevata e indenne Steemitalia da qualsiasi danno, perdita o spesa.
          </p>
          <p>
            Steemitalia, pur non essendo in grado di assicurare un controllo puntuale sui Contenuti visualizzati, si riserva il diritto di fare quanto in sua facolt&agrave; (segnalare, flaggare, oscurare alla lettura) quelli che, a sua discrezionale giudizio, appaiono illeciti, abusivi, diffamatori, osceni o lesivi del diritto d'autore e dei marchi o in ogni caso inaccettabili.
          </p>
          <p>
          &Egrave; vietato utilizzare un account che non sia di titolarit&agrave; dell'Utente, utilizzare i dati personali e le credenziali di altro Utente al fine di appropriarsi della sua identit&agrave;, o in altro modo dichiarare il falso sull'origine dei Contenuti.
          </p>
          <p>
            L'Utente prende atto e accetta che i Contenuti pubblicati sulla blockchain Steem attraverso l'Applicazione (a titolo esemplificativo e non esaustivo, per inviare commenti, esprimere opinioni, partecipare a contest ed iniziative, inviare immagini o file video e audio) non possono essere modificati, rimossi o pubblicati da Steemitalia.
          </p>
          <p>
            Eventuale materiale protetto da copyright di terzi pu&ograve; essere utilizzato solo qualora l'Utente abbia acquisito, dal titolare del diritto d'autore, i connessi diritti di utilizzazione, quindi solo con l'autorizzazione scritta del titolare del diritto e con l'obbligo di citare la fonte e l'esistenza di tale autorizzazione. Il materiale fotografico o video di terzi o riproducente il ritratto di terzi pu&ograve; essere utilizzato solo qualora l'Utente abbia acquisito il consenso dell'autore e/o del soggetto ritratto. In relazione alla disponibilit&agrave; di tali diritti e consensi l'Utente si assume ogni responsabilit&agrave; esonerando completamente Steemitalia.
          </p>
          <p>
          L'Utente si assume, inoltre, la piena responsabilit&agrave; circa l'esattezza e veridicit&agrave; dei Contenuti pubblicati attraverso il suo account , in nome e/o per conto di terzi, e assicura che lo stesso &egrave; nella sua legittima disponibilit&agrave;, non &egrave; contrario a norme imperative e non viola alcun segno distintivo, diritto di propriet&agrave; intellettuale, industriale, diritto di immagine o altro diritto di terzi derivante dalle norme giuridiche vigenti o dalle consuetudini o dagli usi.
          </p>
          <p>
            L'Utente si impegna a non utilizzare i Servizi in maniera impropria o in violazione di qualsivoglia norma di legge o di regolamento. In ogni caso il Contenuto immesso non deve mai presentare forme e/o contenuti a carattere pedo-pornografico, osceno, diffamatorio, offensivo, che promuova o induca ad attivit&agrave; illegali o che contenga virus o altri programmi danneggianti la funzionalit&agrave; di sistemi informatici altrui.
          </p>
          <br />
          <h2 className="sub-title">4. Diritti di Propriet&agrave; Industriale e Intellettuale</h2>
          <p>
            Steemitalia.com trae il suo contenuto dalla blockchain di Steem, e quindi tutti i contenuti sono sono offerti a solo scopo informativo. Il sito web SteemItalia.com non &egrave; in alcun modo responsabile dell'accuratezza o dell'affidabilit&agrave; di tali contenuti.
            SteemItalia.com non &egrave; responsabile per i contenuti che possono apparire su questo sito. Tutto il contenuto &egrave; derivato dalla blockchain di Steem. 
            Steemitalia.com, tuttavia, riporta i Contenuti di una piccola area della blockchain di Steem, evidenziando principalmente contenuti che gli Utenti hanno contrassegnato con il tag #ITA..
            SteemItalia.com non possiede alcun contenuto presente su questo sito Web, ad eccezione dei contenuti degli account degli utenti: @steempostitalia, @spi-postit e @spi-blog. Tutti gli altri contenuti appartengono esclusivamente agli autori originali, che hanno la responsabilit&agrave; esclusiva di quanto pubblicato sulla blockchain di Steem.
            Tutto il contenuto che appare su SteemItalia.com &egrave; completamente visibile al pubblico e indicizzato sui motori di ricerca.
            L'Utente dichiara di assumersi la piena e totale responsabilit&agrave; giuridica nei confronti di quanto pubblicato sul proprio blog e di tutti i Contenuti, manlevando e tenendo indenne Steemitalia da qualsiasi rivendicazione o pretesa derivante dall'uso o abuso dei Servizi offerti.
          </p>
          <p>
            Le presenti Condizioni non concedono all'Utente alcuna licenza d'uso relativa all'Applicazione e/o a singoli Contenuti e/o materiali ivi disponibili, se non diversamente disciplinato.
          </p>
          <br />
          <h2 className="sub-title">{'5. Esclusione della Garanzia'}</h2>
          <p>
            L'Applicazione viene fornita "cos&igrave; come &egrave;" e "come &egrave; disponibile" e Steemitalia non fornisce alcuna garanzia esplicita o implicita in relazione all'Applicazione, n&eacute; fornisce alcuna garanzia che l'Applicazione potr&agrave; soddisfare le esigenze degli Utenti o che non avr&agrave; mai interruzioni o sar&agrave; priva di errori o che sar&agrave; priva di virus o bug.
            Steemitalia si adoperer&agrave; per assicurare che l'Applicazione sia disponibile ininterrottamente 24 ore al giorno, ma non potr&agrave; in alcun modo essere ritenuto responsabile se, per qualsiasi motivo, l'Applicazione non fosse accessibile e/o operativa in qualsiasi momento o per qualsiasi periodo. 
            L'accesso all'Applicazione pu&ograve; essere sospeso temporaneamente e senza preavviso in caso di guasto del sistema, manutenzione,riparazioni o per ragioni del tutto estranee alla volont&agrave; di Steemitalia o per eventi di forza maggiore.
          </p>
          <br />
          <h2 className="sub-title">6. Limitazione della Responsabilit&agrave;</h2>
          <p>
            Steemitalia non sar&agrave; responsabile in merito a danni, perdite e costi subiti dall'Utente.
          </p>
          <p>
            L'Utente si impegna a mantenere indenne e a manlevare Steemitalia da qualsiasi obbligo o responsabilit&agrave;, incluse le eventuali spese legali sostenute per difendersi in giudizio, che dovessero sorgere a fronte di danni provocati ad altri Utenti o a terzi, in relazione ai Contenuti caricati o alla violazione dei termini di legge o dei termini delle presenti Condizioni.
          </p>
          <p>
            Pertanto, Steemitalia non sar&agrave; responsabile per: <br />
            1. eventuali perdite <br />
            2. Ogni perdita di opportunit&agrave; commerciale e qualsiasi altra perdita, anche indiretta, eventualmente subita dall'Utente (quali,a titolo esemplificativo e non esaustivo, perdite commerciali, perdita di ricavi, introiti,profitti o risparmi presunti, perdita di contratti o di relazioni commerciali,perdita della reputazione o del valore di avviamento, etc.); <br />
            3. errato o inidoneo utilizzo dell'Applicazione da parte degli Utenti o di terzi. <br />
          </p>
          <br />
          <h2 className="sub-title">{'7. Forza maggiore'}</h2>
          <p>
            Steemitalia non potr&agrave; essere considerato responsabile per eventi imprevisti ed imprevedibili e, comunque, indipendenti dalla volont&agrave; quali, a titolo esemplificativo e non esaustivo, guasti o interruzioni alle linee telefoniche o elettriche, alla rete internet e/o comunque ad altri strumenti di trasmissione, indisponibilit&agrave; di siti web, scioperi,eventi naturali, virus ed attacchi informatici, interruzioni nell'erogazione di prodotti,servizi o applicazioni di terze parti.
          </p>
          <br />
          <h2 className="sub-title">{'8. Collegamento a siti di terzi'}</h2>
          <p>
            L'Applicazione potrebbe contenere collegamenti a siti di terzi. Steemitalia non esercita alcun controllo su di essi e, pertanto, non &egrave; in alcun modo responsabile per i contenuti di questi siti.
          </p>
          <br />
          <h2 className="sub-title">9. Invalidit&agrave; di singole clausole</h2>
          <p>
            Qualora una qualsiasi disposizione delle presenti Condizioni risultasse illegale o non valida, essa non verr&agrave; considerata come parte delle Condizioni e questo non influir&agrave; sulle disposizioni rimanenti che continueranno ad essere valide nella misura massima consentita dalla legge.
          </p>
          <br />
          <h2 className="sub-title">{'10. Privacy'}</h2>
          <p>
            SteemItalia.com non conserva alcuna informazione personale; tutte le chiavi e password private funzioneranno attraverso il servizio Steemconnect (https://steemconnect.com/) che gli utenti devono accettare per poter accedere ai servizi di Steemitalia.com
          </p>
          <br />
          <br />
          <br />
          <p>
            Data 17/12/2018
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

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Footer from '../components/Footer/Footer';
import './Faq.less';

class Faq extends React.Component {
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
          <h1 className="title"> {'REGOLAMENTO COMMUNITY'} </h1>

          <h3 className="sub-title">{'REGOLE BASE'}</h3>
          <p>
            Nel rispetto dell'intera comunità di Steemit, dei singoli membri appartenenti al gruppo,
            delle iniziative interne ed esterne, e degli eventuali trail associati a queste ultime,
            è richiesta non solo l'esclusiva produzione di contenuti originali che denotino una
            certa applicazione di tempo e di impegno, ma anche e soprattutto l'ottemperanza delle
            regole e buone norme attive all'interno del gruppo SteemPostIT e della relativa
            comunità.
          </p>
          <br />
          <p>
            Inoltre, al fine di scongiurare qualsiasi problematica legale relativa all'uso di
            materiale coperto da copyright e connessa ad una eventuale attività di flag/downvote
            orientata a pubblicazioni non osservanti le buone norme richieste dalla comunità di
            Steemit:
          </p>

          <p>
            È particolarmente incentivata la creazione di contenuti propri e originali, la loro
            valorizzazione legata anche ad una buona cura estetica del post. Tali contenuti, per
            loro natura, non saranno infatti soggetti alle problematiche sopra descritte.
          </p>

          <p>
            Al contrario, in caso di post dal contenuto non originale in toto o in parte - sia per
            testi, immagini e video, è d'obbligo prendere attenta visione e rispettare la politica
            antiplagio in vigore.
          </p>
          <h3 className="sub-title">{'BUONE NORME'}</h3>
          <p>
            Per una corretta convivenza in chat e nella community presente su Discord, è necessario
            seguire delle norme comportamentali basate sul rispetto reciproco. Lo staff
          </p>
          <p>
            Rispetta il ruolo degli amministratori, dei curatori e dei moderatori. Queste figure
            hanno il compito di mantenere il rispetto e la serenità all’interno della chat Discord
            SteempostIT. Ogni loro decisione va seguita e accettata di conseguenza. In caso di
            disaccordo, ogni richiesta e critica va fatta nelle sede opportuna. Rispetta il ruolo
            dei curatori. Il loro compito è quello di valorizzare i contenuti dei post scritti e di
            dettare le linee guida sullo standard di qualità richiesto per la selezione all’interno
            del PostIt quotidiano. Rispetta il ruolo del maestro d’asilo. La sua figura rappresenta
            un pilastro per tutti i nuovi arrivati e il suo compito è formare i nuovi utenti che
            entrato a far parte del gruppo. Lo staff si riserva di scrivere commenti sui post
            scritti dagli utenti. Questi commenti non vogliono in nessun modo offendere e denigrare
            l’operato dell’utente, ma sono consigli su come valorizzare i contenuti del post in base
            alle linee di indirizzo prefissate L’operato dei moderatori è insindacabile e può essere
            giudicato solo dagli amministratori. È possibile richiedere spiegazione utilizzando un
            messaggio privato. Sarà esclusivo ed insindacabile compito dei moderatori stabilire
            quando i limiti del rispetto reciproco e della convivenza civile vengano oltrepassati e
            su come intervenire di conseguenza. lo staff di steempostitalia potrà ricevere
            ricompense aggiuntive per lo svolgimento delle proprie mansioni Un utente bannato dal
            canale Discord SteempostIT non può più riscriversi con altro nickname.
          </p>
          <h3 className="sub-title">{'Linguaggio'}</h3>
          <p>
            Utilizzare un linguaggio consono e rispettoso. Il turpiloquio non è necessario per
            esprimere un concetto o un giudizio. Non sono consentiti gli insulti personali tra gli
            utenti, le offese alle istituzioni e/o alla religione di qualunque fede. Sono vietati il
            razzismo, il sessismo, commenti e proselitismo legato alla sfera politica, apologia
            dell’inferiorità o superiorità di una razza rispetto alle altre. Non sono tollerati gli
            atteggiamenti e le prese di posizione di contestazione ostile, a titolo gratuito, nei
            confronti dello staff di SteempostIT e nei confronti degli altri utenti del canale
            Discord. Qualsiasi contenuto scritto - post, messaggi o commenti - deve ottemperare le
            disposizioni di legge dello Stato italiano. La suddetta regola vale anche per firme e
            avatar. Gli amministratori e/o moderatori si riservano la possibilità di richiedere
            all’utente una modifica.
          </p>
          <h3 className="sub-title">{'Netiquette'}</h3>
          <p>
            La libertà di espressione è importante. Rispettare sempre le opinioni altrui cercando di
            rendere costruttivo il discorso e non offensivo. Ogni canale creato su Discord ha il suo
            scopo e va utilizzato nel modo più consono.
          </p>
          <p>
            I canali tematici sono destinati ad attività ricreative e di discussione, non per
            postare i link del proprio articolo, anche se sono inerenti alla materia del canale.
            Eventuali link saranno rimossi a discrezione degli amministratori e/o moderatori. I
            canali #post e #primi-post sono utilizzati solo per linkare i propri post una sola volta
            per articolo pubblicato e non per fare conversazione. Eventuali conversazioni saranno
            rimosse a discrezione degli amministratori e/o moderatori.
          </p>
          <h3 className="sub-title">{'Contestazioni '}</h3>

          <p>
            L'operato dello staff è insindacabile e può essere giudicato solo dagli amministratori.{' '}
          </p>
          <p>Lo spazio pubblico è uno spazio di servizio e non di polemica</p>
          <p>
            Spiegazioni, contestazioni, osservazioni e domande dovranno quindi essere richieste e
            avanzate attraverso messaggi privati rivolti allo staff di pertinenza.
          </p>
          <p>
            Chi dovesse insistere in atteggiamenti polemici, verrà immediatamente allontanato dal
            forum secondo l'insindacabile giudizio dei moderatori.{' '}
          </p>
          <p>
            Lo staff svolge un lavoro per la crescita della comunità e dei suoi strumenti. Gli
            eventuali compensi percepiti dallo staff, che saranno visibili e trasparenti, non
            potranno essere oggetto di discussione nè di rimostranze o di polemiche.
          </p>
          <br />
          <p>Per quale motivo si chiede di esporre le proprie contestazioni in forma privata?</p>
          <p>
            ragioni di ordine pubblico. gli argomenti polemici non aiutano nè a risolvere le
            questioni vere che chiunque ha diritto di sollevare, nè a mantenere costruttivo il clima
            della comunità.
          </p>
          <p>
            D'altro canto, nella comunicazione privata tra utente e
            curatore-moderatore-amministratore diviene più semplice poter chiarire le posizioni
            divergenti e, se possibile, cercare punti d'incontro costruttivi.{' '}
          </p>
          <p>
            Da parte dello staff e dell'amministrazione del forum vi è sempre piena disponibilità al
            dialogo, in forma privata per cercare di appianare possibili rimostranze.{' '}
          </p>
          <p>
            In secondo luogo, cercare il dialogo è in ogni caso la strada preferibile per appianare
            discordie o, quantomeno, meglio capire il perché di interventi da parte dei moderatori
            e/o degli amministratori.
          </p>
          <h3 className="sub-title">{'DIVIETI '}</h3>
          <p>
            Non utilizzare il tag @everyone o @here in nessuna stanza. Chiedere eventualmente ad un
            amministratore o ad un moderatore se la notizia è di rilevante importanza. Non è
            permesso pubblicare e/o richiedere codici seriali di software commerciali né richiedere
            link a siti terzi contenenti materiale che violi le leggi sul copyright e sul diritto
            d’autore. È vietato lo SPAM, il FLOODING, SCAM e qualunque tipo di REFERAL LINK.
          </p>
          <p>
            È vietato pubblicare materiale esplicito, nudità o qualsiasi altro materiale che possa
            violare le leggi in vigore. Insulti personali e/o liti tra utenti.{' '}
          </p>
          <p>
            offese alle istituzioni o alla religione di qualunque fede. A prescindere dall'ampia
            facoltà e diritto di discutere di tali argomenti, devono essere evitati commenti in
            chiave sarcastica, sacrilega e/o denigratoria. Sono inoltre vietati il razzismo ed ogni
            apologia dell'inferiorità o superiorità di una razza rispetto alle altre. atteggiamenti
            e/o posizioni di contestazione palesemente ostili nei confronti degli amministratori,
            curatori, moderatori e degli altri utenti del forum e incitamento al mancato rispetto
            delle presenti regole, a scopo di destabilizzazione della normale e serena
            partecipazione attiva al forum utilizzare toni provocatori o polemici, in quanto sicura
            causa di liti e/o polemiche personali tra utenti sul forum è esplicitamente vietata ogni
            tipo di pubblicità, sia in forma esplicita (es: link) che implicita (es: "contattami che
            ti faccio avere uno sconto"). Per i casi ritenuti dubbi, si prega di contattare gli
            admin prima di postare.
          </p>
          <h3 className="sub-title">{'Non è tollerato:'}</h3>
          <p>
            Incitare all’odio reciproco e usare atteggiamenti sovversivi all’interno, sia della
            community, sia della piattaforma Steemit.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

Faq.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default Faq;

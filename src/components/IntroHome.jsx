import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

function IntroHome() {
  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    const offset = targetElement.offsetTop - window.innerHeight / 5;

    window.scrollTo({
      top: offset,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container-intro">
      <div className="intro-text">
        <h3 className="text-1">Rent a delivery car !</h3>
        <h1 className="text-2">Bine ai venit pe SmartDelivery</h1>
        <h3 className="text-3">
          Nu ezita sa ne contactezi la <a href="#">0213114</a>
        </h3>
        <p className="text-ih">
          Aici, experiența ta de închiriere auto în România devine simplă și
          plăcută.
        </p>
      </div>
      <div className="title-scroll">
        <img
          className="background-gif"
          // src="https://i.gifer.com/79VY.gif"
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa24wZm40bzR2Z2F4Z3I0NDI1eHZzbzJid2RpNXhpZWo0bXIwZjYwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cmCHuk53AiTmOwBXlw/giphy.gif"
        />
        <div className="scroll">
          <a onClick={() => scrollToSection("misiunea-afacerii")}>
            🡂 Viziunea și Misiunea Afacerii
          </a>
          <a onClick={() => scrollToSection("flota-diversificata")}>
            🡂 Flota Diversificată
          </a>
          <a onClick={() => scrollToSection("inchiriere-online")}>
            🡂 Platformă de Închiriere Online
          </a>
          <a onClick={() => scrollToSection("servicii-livrare")}>
            🡂 Servicii de Livrare și Sharing
          </a>
          <a onClick={() => scrollToSection("infrastructura")}>
            🡂 Infrastructură de Încărcare
          </a>
          <a onClick={() => scrollToSection("program-loialitate")}>
            🡂 Program de Loialitate și Asigurare
          </a>
          <a onClick={() => scrollToSection("responsabilitate-sociala")}>
            🡂 Responsabilitate Socială și Mediu
          </a>
          <a onClick={() => scrollToSection("extinderea")}>
            🡂 Extinderea și Globalizarea
          </a>
        </div>
      </div>
      <div className="midle-text">
        <p>
          În era modernă, aglomerările urbane, programul agitat al vieții
          cotidiene și preocupările privind mediu înconjurător împing
          întreprinzătorii să caute soluții inovatoare pentru a satisface
          nevoile de transport eficient și sustenabil. O afacere care împletește
          aceste două elemente cheie este cea de închirieri mașini și scutere
          specializate pentru delivery și sharing. În acest context, vom explora
          cum o astfel de afacere poate transforma modul în care oamenii se
          deplasează și își livrează bunurile în mediul urban.
        </p>
        <div class="section-a">
          <section id="misiunea-afacerii">
            <h2> Viziunea și Misiunea Afacerii </h2>{" "}
            <p>
              Viziunea acestei afaceri este de a crea un mediu urban mai puțin
              aglomerat, contribuind la reducerea emisiilor de carbon și la
              îmbunătățirea mobilității. Misiunea principală este de a oferi
              servicii de închiriere flexibile și accesibile pentru mașini și
              scutere adaptate nevoilor de livrare și sharing.
            </p>
          </section>
        </div>
        <div class="section-b">
          <section id="flota-diversificata">
            <h2> Flota Diversificată </h2>
            <p>
              {" "}
              O componentă crucială a acestei afaceri este flota diversificată
              de mașini și scutere. Mașinile electrice și scuterele cu motor
              electric vor fi preferate, având un impact redus asupra mediului.
              Flota va include și mașini mai mari, echipate special pentru
              transportul de mărfuri, cu spații de depozitare inteligente pentru
              a asigura siguranța coletelor.
            </p>
          </section>
        </div>
        <div class="section-a">
          <section id="inchiriere-online">
            <h2> Platformă de Închiriere Online </h2>
            <p>
              {" "}
              O platformă online ușor de utilizat va fi dezvoltată pentru a
              permite clienților să închirieze mașini sau scutere în mod
              convenabil. Prin intermediul aplicației, utilizatorii pot verifica
              disponibilitatea vehiculelor, să le rezerve și să le plătească în
              avans. De asemenea, vor avea acces la informații detaliate despre
              rutele recomandate, opțiuni de încărcare și instrucțiuni de
              utilizare.
            </p>
          </section>
        </div>
        <div class="section-b">
          <section id="servicii-livrare">
            <h2> Servicii de Livrare și Sharing</h2>{" "}
            <p>
              {" "}
              Serviciile de livrare vor fi oferite partenerilor din industria
              alimentară, comerț online și logistică. Prin intermediul
              parteneriatelor strategice, se va asigura un flux continuu de
              comenzi pentru mașini și scutere. De asemenea, se va implementa un
              sistem de sharing, unde utilizatorii pot închiria mașinile sau
              scuterele pentru deplasări de scurtă durată, contribuind astfel la
              o mai mare eficiență în utilizarea resurselor.
            </p>
          </section>
        </div>
        <div class="section-a">
          <section id="infrastructura">
            <h2>Infrastructură de Încărcare </h2>{" "}
            <p>
              {" "}
              Pentru a asigura autonomie vehiculelor electrice, se va investi
              într-o infrastructură solidă de încărcare. Stații de încărcare
              rapide vor fi amplasate strategic în zonele urbane pentru a
              permite utilizatorilor să își încarce vehiculele rapid și
              eficient.{" "}
            </p>
          </section>
        </div>
        <div class="section-b">
          <section id="program-loialitate">
            <h2>Program de Loialitate și Asigurare</h2>{" "}
            <p>
              {" "}
              Pentru a fideliza clienții, se va implementa un program de
              loialitate cu beneficii exclusive, precum tarife reduse, kilometri
              gratuiți sau oferte speciale la partenerii locali. De asemenea, se
              va oferi un pachet de asigurare cuprinzător, asigurându-le
              clienților o experiență sigură și protejată.
            </p>
          </section>
        </div>
        <div class="section-a">
          <section id="responsabilitate-sociala">
            <h2>Responsabilitate Socială și Mediu</h2>
            <p>
              {" "}
              Afacerea va îmbrățișa principii de responsabilitate socială și de
              protejare a mediului înconjurător. Se vor desfășura campanii de
              conștientizare pentru promovarea unui stil de viață sustenabil,
              iar o parte din profituri vor fi donate către organizații
              non-guvernamentale care susțin cauzele sociale și ecologice.
            </p>
          </section>
        </div>
        <div class="section-b">
          <section id="extinderea">
            <h2>Extinderea și Globalizarea </h2>
            <p>
              Pe măsură ce afacerea se dezvoltă și devine un succes într-un oraș
              sau regiune, planul de extindere la nivel național și
              internațional va fi pus în aplicare. Adaptarea la specificitățile
              fiecărei piețe și colaborarea cu autoritățile locale vor juca un
              rol crucial în această etapă. Prin această afacere de închirieri
              mașini și scutere pentru delivery și sharing, se poate oferi o
              soluție inovatoare pentru mobilitatea urbană, promovând în același
              timp principii de sustenabilitate și responsabilitate socială.
              Prin adaptabilitate și angajament față de nevoile clienților și
              ale comunității, această afacere poate deveni un jucător important
              în transformarea peisajului urban și a modului în care oamenii
              interacționează cu transportul și livrarea în mediul lor cotidian.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default IntroHome;

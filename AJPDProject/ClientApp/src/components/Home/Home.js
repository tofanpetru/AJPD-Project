import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1 className="display-1 text-primary text-center">Bun venit pe Asist Acces</h1>
            <div className="row text-center">
                <div className="col-12 section">
                    <h3>Acces la drepturi fără bariere.</h3>
                    <a href="none" class="btn btn-warning btn-lg">Solicită ajutor</a>
                </div>
            </div>
            <div className="row justify-content-md-center section">
                <div className="col-sm section">
                    <div class="icon-block">
                        <h2 class="text-primary text-center"><i class="material-icons">flash_on</i></h2>
                    </div>
                    
                    <h3 className="text-center">Ce face?</h3>
                    <p>
                        Platforma este adaptată nevoilor speciale ale persoanelor nevăzătoare,
                        slab văzătoare și cu deficiențe de auz, care te ajută: să accesezi direct servicii juridice, să raportezi direct problemele cu care te confrunți către
                        autorități/servicii care acordă asistență juridică garantată de stat, să afli informații despre activitatea autorităților publice din domeniul
                        juridic, social și educație, să interacționezi direct cu instituțiile publice sau organizații
                        specializate, să fii sigur că îți sunt respectate drepturile în deplinătatea lor, să fii încrezut în accesul liber și individual la justiție;
                        Folosind platforma te asiguri că decizia este a ta.
                    </p>
                </div>
                <div className="col-sm section">
                    <div class="icon-block">
                        <h2 class="text-primary text-center"><i class="material-icons">group</i></h2>
                    </div>
                    <h3 className="text-center">Care este scopul platformei?</h3>
                    <p>
                        Această pagină a fost creată pentru a răspunde necesității de educație juridică în rândul populației Republicii Moldova.
                        Acesta este conceput pentru oricine caută răspuns la o întrebare de natură juridică, dorește să se informeze despre drepturile și obligațiile sale, despre prevederile legislației într-un anumit domeniu sau despre posibilitățile existente de a obține asistență juridică garantată de stat.
                    </p>
                </div>
                <div className="col-sm section">
                    <div class="icon-block">
                        <h2 class="text-primary text-center"><i class="material-icons">settings</i></h2>
                    </div>
                    <h3 className="text-center">Pentru cine este destinat?</h3>
                    <p>
                        Site-ul se adresează publicului larg, fără restricții, fiind adaptat pentru persoanele cu dezabilităţi.
                    </p>
                </div>
            </div>
      </div>
    );
  }
}

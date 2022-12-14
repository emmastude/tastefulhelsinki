import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import * as SQLite from 'expo-sqlite';


export default function Home() {

    //open database
    const db = SQLite.openDatabase('favouritesdb.db');
    const [title, setTitle] = useState('');

    //creating database in useEffect, execute sql method
    useEffect(() => {
          db.transaction(tx => {    
              tx.executeSql('create table if not exists favourite (id integer primary key not null, title text);');  
            }, null, null);}, []);
    
    //saving favourites
    const saveItem = (title) => {
        db.transaction(tx => {
            tx.executeSql('insert into favourite (title) values (?);',
                [title]);
        }, null, null)
    
    }


    //BASBAS 1
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    //BARDOT 2
    const [visible2, setVisible2] = useState(false); // 

    const toggleOverlay2 = () => {
        setVisible2(!visible2);
    };

    //EMO 3
    const [visible3, setVisible3] = useState(false);

    const toggleOverlay3 = () => {
        setVisible3(!visible3);
    };

    //FARANG 4
    const [visible4, setVisible4] = useState(false);

    const toggleOverlay4 = () => {
        setVisible4(!visible4);
    };

    //GAIJIN 5
    const [visible5, setVisible5] = useState(false);

    const toggleOverlay5 = () => {
        setVisible5(!visible5);
    };

    //KUURNA 6
    const [visible6, setVisible6] = useState(false);

    const toggleOverlay6 = () => {
        setVisible6(!visible6);
    };

    //LILY LEE 7
    const [visible7, setVisible7] = useState(false);

    const toggleOverlay7 = () => {
        setVisible7(!visible7);
    };

    //NATURA 8
    const [visible8, setVisible8] = useState(false);

    const toggleOverlay8 = () => {
        setVisible8(!visible8);
    };

    //NOKKA 9
    const [visible9, setVisible9] = useState(false);

    const toggleOverlay9 = () => {
        setVisible9(!visible9);
    };

    //OLO 10
    const [visible10, setVisible10] = useState(false);

    const toggleOverlay10 = () => {
        setVisible10(!visible10);
    };

    //PALACE 11
    const [visible11, setVisible11] = useState(false);

    const toggleOverlay11 = () => {
        setVisible11(!visible11);
    };
    //SANCHOME 12
    const [visible12, setVisible12] = useState(false);

    const toggleOverlay12 = () => {
        setVisible12(!visible12);
    };

    //SAVOY 13
    const [visible13, setVisible13] = useState(false);

    const toggleOverlay13 = () => {
        setVisible13(!visible13);
    };

    const pressHandler = (id) => {
        console.log(id);
    }

    return (

        //Image background
      
        <View>
              <ImageBackground
        source={require('./img/pexels-marina-leonova-7630179.jpg')} 
        //uploading front page photo
        style={{
            backgroundColor: 'black',
            width: '100%',
            height: '100%',
        }}
        imageStyle={{
            resizeMode: 'contain'
        }}
        >
         
            <Button title="BasBas" onPress={toggleOverlay} />
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Text>
                    Inspiroidumme Pariisin kodikkaista bistroista,
                    San Franciscon rennoista kuppiloista ja Italian maaseudun
                    pienist?? osterioista. Meill?? on iloa ja intohimoa vaikka
                    muille jakaa, mahtavat soittolistat, pakolliset poskipusut
                    ja valinnaiset v??litanssit. Niist?? syntyy kaupungin paras tunnelma.
                </Text>
                <Button onPress={() => saveItem('BasBas')}  title="favourite" /> 

            </Overlay>


            <Button title="Bardot" onPress={toggleOverlay2} />
            <Overlay isVisible={visible2} onBackdropPress={toggleOverlay2}>
                <Text>
                    Bardot, yst??vien kesken BB, on rento
                    bistro-brasserie Helsingin ytimess??.
                    Esikuvansa mukaisesti Bardotissa on monta puolta.
                    Bardot on kupliva ja luonteikas, moderni ja perinteist??
                    ranskalaista ruokakulttuuria syleilev??.
                    Sesonkeja mukailevan keitti??n syd??n on raw-baarin
                    merenel??v??t, kasviksia, lintuja ja laadukasta lihaa
                    unohtamatta.
                    Bisous, tervetuloa Bardotiin.
                </Text>
                <Button onPress={() => saveItem('Bardot')}  title="favourite" /> 
            </Overlay>


            <Button title="Emo" onPress={toggleOverlay3} />
            <Overlay isVisible={visible3} onBackdropPress={toggleOverlay3}>
                <Text>
                    Moderni eurooppalainen bistro. Emo tarjoaa
                    el??myksi??, jotka joka p??iv??isen arjen
                    hektisyydess?? p????sev??t helposti unohtumaan:
                    l??sn??olo, huolenpito ja intohimoista tekemist??.
                    Ruokalista el???? sesonkien mukaisesti,
                    kotimaisia sek?? pohjoismaisia pientuottajia
                    kunnioittaen. Menu suunnitellaan aina vuodenaikaa
                    ja sen makuja seuraten.
                </Text>
                <Button onPress={() => saveItem('Emo')}  title="favourite" /> 
            </Overlay>


            <Button title="Farang" onPress={toggleOverlay4} />
            <Overlay isVisible={visible4} onBackdropPress={toggleOverlay4}>
                <Text>
                    Makumatka Kaakkois-Aasiaan! Ravintola tarjoaa
                    autenttisia aasialaisia makuja sellaisina, kuin ne ovat.
                    T??m?? tarkoittaa hidasta hauduttelua, aromien harmoniaa
                    ja intensiivisyytt??, parhaita raaka-aineita ja moderneja
                    ruuanvalmistustekniikoita hy??dynt??en. Farang yhdistelee
                    rohkeasti eri kokonaisuuksia, jotka ovat takuuvarma menestys.
                </Text>
                <Button onPress={() => saveItem('Farang')}  title="favourite" /> 
            </Overlay>


            <Button title="Gaijin" onPress={toggleOverlay5} />
            <Overlay isVisible={visible5} onBackdropPress={toggleOverlay5}>
                <Text>
                    Upealla paikalla Bulevardin ja Yrj??nkadun kulmassa
                    sijaitsevassa ravintolassa modernit maut yhdistyv??t rohkeasti
                    Japanin, Korean ja Pohjois-Kiinan perinteisiin aromeihin.
                    Ruokailu Gaijinissa perustuu sosiaaliseen sy??miseen ja
                    suurin osa annoksista onkin tarkoitettu jaettaviksi
                    p??yt??seurueen kesken. Irasshaimase, eli japaniksi tervetuloa!
                </Text>
                <Button onPress={() => saveItem('Gaijin')}  title="favourite" /> 
            </Overlay>

            <Button title="Kuurna" onPress={toggleOverlay6} />
            <Overlay isVisible={visible6} onBackdropPress={toggleOverlay6}>
                <Text>
                    Ravintola Kuurna on Kruununhaan k??tketty
                    bistrohelmi. Tarjoilemme p??ivitt??in vaihtuvia
                    erikoisannoksia sek?? tuttuja klassikkoannoksiamme.
                    Erikoisannokset n??et ravintolan liitutaululta.
                    Raaka-aineet tulevat meille rakkailta pientuottajilta,
                    keiden kanssa jaamme yhteiset arvot ja ammattiylpeyden.
                </Text>
                <Button onPress={() => saveItem('Kuurna')}  title="favourite" /> 
            </Overlay>

            <Button title="Lily Lee" onPress={toggleOverlay7} />
            <Overlay isVisible={visible7} onBackdropPress={toggleOverlay7}>
                <Text>
                    Lily Leen keitti?? hy??dynt???? makuaarteita mets??st??,
                    maalta ja merelt??, muodostaen ainutlaatuisen vivahteikkaan
                    kokonaisuuden. Taiwanilaisesta ruokakulttuurista
                    inspiroitunut Lily Lee on tarjonnaltaan rikas ja uniikki.
                    Lilyn menu tarjoaa makujen harmoniaa suolaisen,
                    makean, happaman ja kirpe??n v??lill?? tuottaen n??in
                    luonnollisen syv??n umamin.
                </Text>
                <Button onPress={() => saveItem('Lily Lee')}  title="favourite" /> 
            </Overlay>

            <Button title="Natura" onPress={toggleOverlay8} />
            <Overlay isVisible={visible8} onBackdropPress={toggleOverlay8}>
                <Text>
                    Rento, perheomisteinen ravintola Helsingin Iso Roobertinkadulla.
                    Ruokamme on modernia ja raikasta, p????paino kotimaisessa
                    riistassa, pientilojen lihassa, vihanneksissa ja kest??v??n
                    kalastuksen merenel??viss??. Hankimme lihan ainoastaan tiloilta,
                    jotka tunnemme henkil??kohtaisesti. N??ill?? maatiloilla el??inten
                    elinolot ja ruokavalio ovat parhaat mahdolliset.
                    K??ytt??m??mme kalat ovat kest??v??n kehityksen mukaisia lajeja.
                    Lis??ksi saamme kalaonnen mukaan omilta kalastajiltamme
                    saaliita. Suosimme aina kotimaisia pientuottajia ja luomua.
                    Suuren panoksen ruokaan antavatkin lukuisat sienten,
                    marjojen ja villiyrttien ker????j??t, kalastajat
                    ja pientuottajat, joista osa toimittaa raaka-aineitaan
                    ainoastaan meille Naturaan.
                </Text>
                <Button onPress={() => saveItem('Natura')}  title="favourite" /> 
            </Overlay>

            <Button title="Nokka" onPress={toggleOverlay9} />
            <Overlay isVisible={visible9} onBackdropPress={toggleOverlay9}>
                <Text>
                    Villin?? kasvaneet kalat ja riista. Sienet ja marjat.
                    Vastuullisesti kasvatetut luomuraaka-aineet.
                    Innovatiivinen keitti??.
                    Vastuullisien ja villin?? kasvaneen ruoan edell??k??vij??.
                    Ruoan keski??ss?? puhtaat maut.
                </Text>
                <Button onPress={() => saveItem('Nokka')}  title="favourite" /> 
            </Overlay>

            <Button title="Olo" onPress={toggleOverlay10} />
            <Overlay isVisible={visible10} onBackdropPress={toggleOverlay10}>
                <Text>
                    Eleganttia ilman turhaa j??ykistely?? ??? se on Olo.
                    T??m?? ravintola taikoo upeista pohjoisista
                    raaka-aineista toinen toistaan kauniimpia annoksia.
                    Michelin ravintola.
                </Text>
                <Button onPress={() => saveItem('Olo')}  title="favourite" /> 
            </Overlay>

            <Button title="Palace" onPress={toggleOverlay11} />
            <Overlay isVisible={visible11} onBackdropPress={toggleOverlay11}>
                <Text>
                    Vuonna 1952 perustettu Palace on aina ollut suomalaisen gastronomian edell??k??vij??.
                    Se oli ensimm??inen suomalainen ravintola, joka sai Michelin-t??hden vuonna 1987.
                    Palacessa tarjotaan innovatiivista, mutta hienostunutta pohjoismaista ruokaa.
                    Ravintolasta on hulppeat n??kym??t kaupunkiin ja sen merimaisemaan.
                </Text>
                <Button onPress={() => saveItem('Palace')}  title="favourite" /> 
            </Overlay>

            <Button title="Sanchome" onPress={toggleOverlay12} />
            <Overlay isVisible={visible12} onBackdropPress={toggleOverlay12}>
                <Text>
                    Upean ylellisen helsinkil??isen Hotel K??mpin pohjakerrokseen,
                    historialliseen milj????seen toukokuussa 2022 avautunut ravintola
                    Sanchome houkuttelee puhtaalla, aidon hienostuneella japanilaisella
                    ruoalla. Ravintola tarjoaa umamin syv???? maanl??heisyytt?? ja mison py??reytt??
                    yhdistelev??n harmonisen makuel??myksen.
                    J??nnitt??v??n intensiivinen sukellus on t??ynn?? viimeisteltyj?? yksityiskohtia.
                    Luvassa on japanilaisten sushimestareiden
                    sushi- ja sashimitaidetta sek?? robata-, otsumami- ja tempura-annoksia,
                    japanilaisen keitti??n parhaita paloja.
                    Japanin puhtaat ja laadukkaat raaka-aineet,
                    rikas umamin maku ja monipuolinen gastronomia ovat t??m??n ravintolan ydin.
                </Text>
                <Button onPress={() => saveItem('Sanchome')}  title="favourite" /> 
            </Overlay>

            <Button title="Savoy" onPress={toggleOverlay13} />
            <Overlay isVisible={visible13} onBackdropPress={toggleOverlay13}>
                <Text>
                    Helsingin kattojen yll?? Esplanadin puiston laidalla sijaitseva
                    ravintola on palvellut asiakkaita jo yli 80 vuoden ajan.
                    Savoy tarjoaa el??myksi??, jotka kunnioittavat ravintolan historiaa,
                    mutta ovat kiinni t??ss?? p??iv??ss??. Savoyn ruoka on suomalais-ranskalaista,
                    pienin ven??l??isin vivahtein.
                </Text>
                <Button onPress={() => saveItem('Savoy')}  title="favourite" /> 
            </Overlay>
           
            </ImageBackground>
        </View>
        
    );
};

  

import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground} from 'react-native';
import { Button, IconButton, Overlay } from 'react-native-elements';
import * as SQLite from 'expo-sqlite';


export default function Home() {

    //open database
    const db = SQLite.openDatabase('favouritesdb.db');
    
    const [title, setTitle] = useState('');


    //creating database in useEffect, execute sql method
    useEffect(() => {
          db.transaction(tx => {    
              tx.executeSql('create table if not exists favourite (id integer primary key    not null, credits int, title text);');  
            }, null, updateList);}, []);
    
    //saving favourites
    const saveItem = (title) => {
        db.transaction(tx => {
            tx.executeSql('insert into favourite (title) values (?);',
                [title]);
        }, null, updateList)
    
    }

    //updating favourites
    const updateList =() => {
        db.transaction(tx => {
            tx.executeSql('select * from favourites;', [], (_, { rows }) =>
            setFavourite(rows._array)
            );
        });
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
                    pienistä osterioista. Meillä on iloa ja intohimoa vaikka
                    muille jakaa, mahtavat soittolistat, pakolliset poskipusut
                    ja valinnaiset välitanssit. Niistä syntyy kaupungin paras tunnelma.
                </Text>
                <IconButton onPress={() => saveItem('BasBas')} name ="heart" title="favourite" /> 

            </Overlay>


            <Button title="Bardot" onPress={toggleOverlay2} />
            <Overlay isVisible={visible2} onBackdropPress={toggleOverlay2}>
                <Text>
                    Bardot, ystävien kesken BB, on rento
                    bistro-brasserie Helsingin ytimessä.
                    Esikuvansa mukaisesti Bardotissa on monta puolta.
                    Bardot on kupliva ja luonteikas, moderni ja perinteistä
                    ranskalaista ruokakulttuuria syleilevä.
                    Sesonkeja mukailevan keittiön sydän on raw-baarin
                    merenelävät, kasviksia, lintuja ja laadukasta lihaa
                    unohtamatta.
                    Bisous, tervetuloa Bardotiin.
                </Text>
            </Overlay>


            <Button title="Emo" onPress={toggleOverlay3} />
            <Overlay isVisible={visible3} onBackdropPress={toggleOverlay3}>
                <Text>
                    Moderni eurooppalainen bistro. Emo tarjoaa
                    elämyksiä, jotka joka päiväisen arjen
                    hektisyydessä pääsevät helposti unohtumaan:
                    läsnäolo, huolenpito ja intohimoista tekemistä.
                    Ruokalista elää sesonkien mukaisesti,
                    kotimaisia sekä pohjoismaisia pientuottajia
                    kunnioittaen. Menu suunnitellaan aina vuodenaikaa
                    ja sen makuja seuraten.
                </Text>
            </Overlay>


            <Button title="Farang" onPress={toggleOverlay4} />
            <Overlay isVisible={visible4} onBackdropPress={toggleOverlay4}>
                <Text>
                    Makumatka Kaakkois-Aasiaan! Ravintola tarjoaa
                    autenttisia aasialaisia makuja sellaisina, kuin ne ovat.
                    Tämä tarkoittaa hidasta hauduttelua, aromien harmoniaa
                    ja intensiivisyyttä, parhaita raaka-aineita ja moderneja
                    ruuanvalmistustekniikoita hyödyntäen. Farang yhdistelee
                    rohkeasti eri kokonaisuuksia, jotka ovat takuuvarma menestys.
                </Text>
            </Overlay>


            <Button title="Gaijin" onPress={toggleOverlay5} />
            <Overlay isVisible={visible5} onBackdropPress={toggleOverlay5}>
                <Text>
                    Upealla paikalla Bulevardin ja Yrjönkadun kulmassa
                    sijaitsevassa ravintolassa modernit maut yhdistyvät rohkeasti
                    Japanin, Korean ja Pohjois-Kiinan perinteisiin aromeihin.
                    Ruokailu Gaijinissa perustuu sosiaaliseen syömiseen ja
                    suurin osa annoksista onkin tarkoitettu jaettaviksi
                    pöytäseurueen kesken. Irasshaimase, eli japaniksi tervetuloa!
                </Text>
            </Overlay>

            <Button title="Kuurna" onPress={toggleOverlay6} />
            <Overlay isVisible={visible6} onBackdropPress={toggleOverlay6}>
                <Text>
                    Ravintola Kuurna on Kruununhaan kätketty
                    bistrohelmi. Tarjoilemme päivittäin vaihtuvia
                    erikoisannoksia sekä tuttuja klassikkoannoksiamme.
                    Erikoisannokset näet ravintolan liitutaululta.
                    Raaka-aineet tulevat meille rakkailta pientuottajilta,
                    keiden kanssa jaamme yhteiset arvot ja ammattiylpeyden.
                </Text>
            </Overlay>

            <Button title="Lily Lee" onPress={toggleOverlay7} />
            <Overlay isVisible={visible7} onBackdropPress={toggleOverlay7}>
                <Text>
                    Lily Leen keittiö hyödyntää makuaarteita metsästä,
                    maalta ja mereltä, muodostaen ainutlaatuisen vivahteikkaan
                    kokonaisuuden. Taiwanilaisesta ruokakulttuurista
                    inspiroitunut Lily Lee on tarjonnaltaan rikas ja uniikki.
                    Lilyn menu tarjoaa makujen harmoniaa suolaisen,
                    makean, happaman ja kirpeän välillä tuottaen näin
                    luonnollisen syvän umamin.
                </Text>
            </Overlay>

            <Button title="Natura" onPress={toggleOverlay8} />
            <Overlay isVisible={visible8} onBackdropPress={toggleOverlay8}>
                <Text>
                    Rento, perheomisteinen ravintola Helsingin Iso Roobertinkadulla.
                    Ruokamme on modernia ja raikasta, pääpaino kotimaisessa
                    riistassa, pientilojen lihassa, vihanneksissa ja kestävän
                    kalastuksen merenelävissä. Hankimme lihan ainoastaan tiloilta,
                    jotka tunnemme henkilökohtaisesti. Näillä maatiloilla eläinten
                    elinolot ja ruokavalio ovat parhaat mahdolliset.
                    Käyttämämme kalat ovat kestävän kehityksen mukaisia lajeja.
                    Lisäksi saamme kalaonnen mukaan omilta kalastajiltamme
                    saaliita. Suosimme aina kotimaisia pientuottajia ja luomua.
                    Suuren panoksen ruokaan antavatkin lukuisat sienten,
                    marjojen ja villiyrttien kerääjät, kalastajat
                    ja pientuottajat, joista osa toimittaa raaka-aineitaan
                    ainoastaan meille Naturaan.
                </Text>
            </Overlay>

            <Button title="Nokka" onPress={toggleOverlay9} />
            <Overlay isVisible={visible9} onBackdropPress={toggleOverlay9}>
                <Text>
                    Villinä kasvaneet kalat ja riista. Sienet ja marjat.
                    Vastuullisesti kasvatetut luomuraaka-aineet.
                    Innovatiivinen keittiö.
                    Vastuullisien ja villinä kasvaneen ruoan edelläkävijä.
                    Ruoan keskiössä puhtaat maut.
                </Text>
            </Overlay>

            <Button title="Olo" onPress={toggleOverlay10} />
            <Overlay isVisible={visible10} onBackdropPress={toggleOverlay10}>
                <Text>
                    Eleganttia ilman turhaa jäykistelyä – se on Olo.
                    Tämä ravintola taikoo upeista pohjoisista
                    raaka-aineista toinen toistaan kauniimpia annoksia.
                    Michelin ravintola.
                </Text>
            </Overlay>

            <Button title="Palace" onPress={toggleOverlay11} />
            <Overlay isVisible={visible11} onBackdropPress={toggleOverlay11}>
                <Text>
                    Vuonna 1952 perustettu Palace on aina ollut suomalaisen gastronomian edelläkävijä.
                    Se oli ensimmäinen suomalainen ravintola, joka sai Michelin-tähden vuonna 1987.
                    Palacessa tarjotaan innovatiivista, mutta hienostunutta pohjoismaista ruokaa.
                    Ravintolasta on hulppeat näkymät kaupunkiin ja sen merimaisemaan.
                </Text>
            </Overlay>

            <Button title="Sanchome" onPress={toggleOverlay12} />
            <Overlay isVisible={visible12} onBackdropPress={toggleOverlay12}>
                <Text>
                    Upean ylellisen helsinkiläisen Hotel Kämpin pohjakerrokseen,
                    historialliseen miljööseen toukokuussa 2022 avautunut ravintola
                    Sanchome houkuttelee puhtaalla, aidon hienostuneella japanilaisella
                    ruoalla. Ravintola tarjoaa umamin syvää maanläheisyyttä ja mison pyöreyttä
                    yhdistelevän harmonisen makuelämyksen.
                    Jännittävän intensiivinen sukellus on täynnä viimeisteltyjä yksityiskohtia.
                    Luvassa on japanilaisten sushimestareiden
                    sushi- ja sashimitaidetta sekä robata-, otsumami- ja tempura-annoksia,
                    japanilaisen keittiön parhaita paloja.
                    Japanin puhtaat ja laadukkaat raaka-aineet,
                    rikas umamin maku ja monipuolinen gastronomia ovat tämän ravintolan ydin.
                </Text>
            </Overlay>

            <Button title="Savoy" onPress={toggleOverlay13} />
            <Overlay isVisible={visible13} onBackdropPress={toggleOverlay13}>
                <Text>
                    Helsingin kattojen yllä Esplanadin puiston laidalla sijaitseva
                    ravintola on palvellut asiakkaita jo yli 80 vuoden ajan.
                    Savoy tarjoaa elämyksiä, jotka kunnioittavat ravintolan historiaa,
                    mutta ovat kiinni tässä päivässä. Savoyn ruoka on suomalais-ranskalaista,
                    pienin venäläisin vivahtein.
                </Text>
            </Overlay>
           
            </ImageBackground>
        </View>
        
    );
};

  

import { Calendar } from './Calendar';

export const mock: Calendar = {
  events: [
    {
      kind: 'calendar#event',
      etag: '"3198415146697000"',
      id: '6crj0opi61hj0b9n74sjgb9k74o64b9pcgqj8bb5ccojeo9j68p32p1jcg_20210713',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=NmNyajBvcGk2MWhqMGI5bjc0c2pnYjlrNzRvNjRiOXBjZ3FqOGJiNWNjb2plbzlqNjhwMzJwMWpjZ18yMDIxMDcxMyBjaHJpc3RpYW4ud29pemlzY2hrZUBnb29nbGVtYWlsLmNvbQ',
      created: '2020-09-04T08:19:33.000Z',
      updated: '2020-09-04T08:19:33.385Z',
      summary: 'Mama Geburtstag',
      creator: { email: 'christian.woizischke@googlemail.com', self: true },
      organizer: { email: 'christian.woizischke@googlemail.com', self: true },
      start: { date: '2021-07-13' },
      end: { date: '2021-07-14' },
      recurringEventId:
        '6crj0opi61hj0b9n74sjgb9k74o64b9pcgqj8bb5ccojeo9j68p32p1jcg',
      originalStartTime: { date: '2021-07-13' },
      transparency: 'transparent',
      iCalUID:
        '6crj0opi61hj0b9n74sjgb9k74o64b9pcgqj8bb5ccojeo9j68p32p1jcg@google.com',
      sequence: 0,
      extendedProperties: { private: { eventAttendeeList: '[]' } },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 10 },
          { method: 'email', minutes: 430 },
        ],
      },
      eventType: 'default',
    },
    {
      kind: 'calendar#event',
      etag: '"3234050872579000"',
      id: '65h78dpq1jvna64i0p3f75q6ee_20210713T170000Z',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=NjVoNzhkcHExanZuYTY0aTBwM2Y3NXE2ZWVfMjAyMTA3MTNUMTcwMDAwWiBjaHJpc3RpYW4ud29pemlzY2hrZUBnb29nbGVtYWlsLmNvbQ',
      created: '2018-04-05T19:08:22.000Z',
      updated: '2021-06-20T09:19:13.227Z',
      summary: 'Lindy Hop',
      location:
        'Braunschweiger Tanz-Sport-Club e.V., Böcklerstraße 219, 38102 Braunschweig, Deutschland',
      creator: {
        email: 'christian.woizischke@googlemail.com',
        displayName: 'Christian Woizischke',
        self: true,
      },
      organizer: {
        email: 'christian.woizischke@googlemail.com',
        displayName: 'Christian Woizischke',
        self: true,
      },
      start: { dateTime: '2021-07-13T19:00:00+02:00', timeZone: 'Europe/Rome' },
      end: { dateTime: '2021-07-13T22:00:00+02:00', timeZone: 'Europe/Rome' },
      recurringEventId: '65h78dpq1jvna64i0p3f75q6ee',
      originalStartTime: {
        dateTime: '2021-07-13T19:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      iCalUID: '65h78dpq1jvna64i0p3f75q6ee@google.com',
      sequence: 2,
      extendedProperties: { private: { eventAttendeeList: '[]' } },
      reminders: { useDefault: false },
      eventType: 'default',
      directions: {
        geocoded_waypoints: [
          {
            geocoder_status: 'OK',
            place_id: 'ChIJ1wyQHwUbsEcRExDq6ZSPO3w',
            types: ['street_address'],
          },
          {
            geocoder_status: 'OK',
            place_id: 'ChIJO2YAitX1r0cRsDqslG2sJQQ',
            types: ['locality', 'political'],
          },
        ],
        routes: [
          {
            bounds: {
              northeast: { lat: 52.48021319999999, lng: 10.5266042 },
              southwest: { lat: 52.2676654, lng: 10.0895661 },
            },
            copyrights: 'Map data ©2021 GeoBasis-DE/BKG (©2009)',
            legs: [
              {
                distance: { text: '52,1 km', value: 52117 },
                duration: { text: '44 Minuten', value: 2640 },
                duration_in_traffic: { text: '42 Minuten', value: 2515 },
                end_address: 'Braunschweig, Deutschland',
                end_location: { lat: 52.26896499999999, lng: 10.5266042 },
                start_address: 'Im Zumpe 7, 31311 Uetze, Deutschland',
                start_location: { lat: 52.4771402, lng: 10.0900783 },
                steps: [
                  {
                    distance: { text: '75 m', value: 75 },
                    duration: { text: '1 Minute', value: 15 },
                    end_location: { lat: 52.4777413, lng: 10.0895661 },
                    html_instructions:
                      'Auf <b>Im Zumpe</b> nach <b>Nordwesten</b> Richtung <b>Zur Seebecke</b> starten',
                    polyline: { points: 'cmh_I_vq|@wBdB' },
                    start_location: { lat: 52.4771402, lng: 10.0900783 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,2 km', value: 155 },
                    duration: { text: '1 Minute', value: 46 },
                    end_location: { lat: 52.4783851, lng: 10.0916019 },
                    html_instructions:
                      '<b>Rechts</b> abbiegen auf <b>Zur Seebecke</b>',
                    maneuver: 'turn-right',
                    polyline: { points: '{ph_Iyrq|@{@yDaAkECO' },
                    start_location: { lat: 52.4777413, lng: 10.0895661 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '72 m', value: 72 },
                    duration: { text: '1 Minute', value: 18 },
                    end_location: { lat: 52.47902819999999, lng: 10.0914992 },
                    html_instructions:
                      '<b>Links</b> abbiegen auf <b>Richtweg</b>',
                    maneuver: 'turn-left',
                    polyline: { points: '}th_Io_r|@_CR' },
                    start_location: { lat: 52.4783851, lng: 10.0916019 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,2 km', value: 224 },
                    duration: { text: '1 Minute', value: 37 },
                    end_location: { lat: 52.4799376, lng: 10.0944365 },
                    html_instructions:
                      '<b>Rechts</b> abbiegen auf <b>Böschansweg</b>',
                    maneuver: 'turn-right',
                    polyline: { points: '}xh_I{~q|@k@cCc@gB_@gBy@yDEYAMCU' },
                    start_location: { lat: 52.47902819999999, lng: 10.0914992 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,3 km', value: 341 },
                    duration: { text: '1 Minute', value: 49 },
                    end_location: { lat: 52.48021319999999, lng: 10.0994568 },
                    html_instructions: 'Weiter auf <b>Sägemühlenstraße</b>',
                    polyline: { points: 's~h_Igqr|@GuCCcBMcGCcAWiL' },
                    start_location: { lat: 52.4799376, lng: 10.0944365 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '1,1 km', value: 1112 },
                    duration: { text: '1 Minute', value: 60 },
                    end_location: { lat: 52.470261, lng: 10.1010915 },
                    html_instructions:
                      '<b>Rechts</b> abbiegen auf <b>Rälingser Str.</b>',
                    maneuver: 'turn-right',
                    polyline: {
                      points:
                        'i`i_Isps|@RA~BU|AMnAKPCpAMHAbAIr@GFAr@IXCZC`AKl@Gd@EhCWhBQb@EnCWjAK^G|D[fDYb@EVC^CHAtD]',
                    },
                    start_location: { lat: 52.48021319999999, lng: 10.0994568 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '5,9 km', value: 5916 },
                    duration: { text: '5 Minuten', value: 280 },
                    end_location: { lat: 52.4236041, lng: 10.127889 },
                    html_instructions: 'Weiter auf <b>K125</b>',
                    polyline: {
                      points:
                        'cbg_Iyzs|@fBQ\\CfCWbKaAtAMjHu@nCUtBQXC`@EJAp@GdAMHAnCUNA~BUbFc@fCYtEa@fD_@PAb@Gb@@XC@?PAPA?B@B?@@B@@?@@B@@@@@?@@@@@@@?B@@?B?@A@?@A@?@A@C@?@C@A?A@A@C?A@C?A@C?ERGh@Ip@IHCn@IbD]HAZEhBSdAK`Fk@XA?Ab@ChE]jBQx@IxAOrAQNA~ASf@GhAMZE`@EXAzBOVEnD]d@GJARC~Gq@F?t@IxCYlAG~@IbCQvCMpBKZEXGrBSxAOHA`@Eb@Ep@GTCjBOv@Ib@El@Gl@EhBQhBOpAOXGD?JGBAFI@APUjByBd@i@RWHIxAeBtCeDpCiDhByBpFiGfEcF~CqDpAwAVc@N[@EJYDa@F]ToAP_AZ}BPaBZiCNoANeAPuAX}BVkBXuBLeABSL}@RyAL_AHi@D]PmAh@aEJ]^u@dFyGrE_GtAmB',
                    },
                    start_location: { lat: 52.470261, lng: 10.1010915 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '1,6 km', value: 1633 },
                    duration: { text: '2 Minuten', value: 97 },
                    end_location: { lat: 52.4108502, lng: 10.1347221 },
                    html_instructions:
                      'Weiter auf <b>Beerbuschstraße</b>/<wbr/><b>K125</b>',
                    polyline: {
                      points:
                        'o~}~Hiby|@LOPYRUlA_BpCoD`@i@dAwAh@s@hDmExCwDz@oAbBuB~BwCNQbB{BzB}C|@gAVYVQN?THF@VL@?RHhBt@rB|@bAb@JDNFf@TXJ`A`@d@R`@PrClAl@Vb@PL@N@HCLCf@Qx@Wd@QZKXM^KXKRE',
                    },
                    start_location: { lat: 52.4236041, lng: 10.127889 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,6 km', value: 569 },
                    duration: { text: '1 Minute', value: 35 },
                    end_location: { lat: 52.40593879999999, lng: 10.1326487 },
                    html_instructions: 'Weiter auf <b>Arpker Str.</b>',
                    polyline: {
                      points:
                        'yn{~H_mz|@\\@d@LvA^LDp@PfFlAb@Hn@NnBb@~A`@B@vA`@b@RRL@@RLVXRVV^',
                    },
                    start_location: { lat: 52.4108502, lng: 10.1347221 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '1,6 km', value: 1558 },
                    duration: { text: '1 Minute', value: 77 },
                    end_location: { lat: 52.3924756, lng: 10.1289329 },
                    html_instructions: 'Weiter auf <b>K125</b>',
                    polyline: {
                      points:
                        'cpz~Ha`z|@Vd@^v@NVFLXb@TXXXXR\\RLFXJb@H\\DZ?TCD?NADA@?RGF?@ABAFCBALIRKd@Wf@a@TKHCVKFC`@C\\@D@h@?TF`@Hz@RdAVTFD@ZFlBb@lBb@ZHfATzBf@dB`@z@X~AZjCj@fEbApGzA|@R|Cr@XDN@T@l@ChAG',
                    },
                    start_location: { lat: 52.40593879999999, lng: 10.1326487 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '2,1 km', value: 2062 },
                    duration: { text: '2 Minuten', value: 100 },
                    end_location: { lat: 52.3741079, lng: 10.1317059 },
                    html_instructions:
                      'Weiter auf <b>Zum Krähenfeld</b>/<wbr/><b>K125</b>',
                    polyline: {
                      points:
                        '_|w~Hyhy|@pAIhBKjBIrNw@fJe@fAGvDSXAVCxFYbKc@bFUfAIb@CtEW|Ls@|BIPAb@C|@E\\Ar@GRCPCNGLGJG^Ub@]XY`@_@^c@LK',
                    },
                    start_location: { lat: 52.3924756, lng: 10.1289329 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,5 km', value: 497 },
                    duration: { text: '1 Minute', value: 67 },
                    end_location: { lat: 52.3719293, lng: 10.1254511 },
                    html_instructions:
                      '<b>Rechts</b> abbiegen auf <b>Oelerser Str.</b>',
                    maneuver: 'turn-right',
                    polyline: {
                      points:
                        'eit~Hezy|@JVLVNZ@BJRLZL\\Lb@Ll@Hh@Hv@DrA?NBv@Fp@@LDTLl@Px@Nd@tCxI^fADLNd@Xz@',
                    },
                    start_location: { lat: 52.3741079, lng: 10.1317059 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,2 km', value: 250 },
                    duration: { text: '1 Minute', value: 28 },
                    end_location: { lat: 52.3706121, lng: 10.1224725 },
                    html_instructions: 'Weiter auf <b>Kleegarten</b>',
                    polyline: { points: 'q{s~Hasx|@HXJX|AhFx@fCd@nAN`@P^FLHL' },
                    start_location: { lat: 52.3719293, lng: 10.1254511 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '1,0 km', value: 1019 },
                    duration: { text: '2 Minuten', value: 92 },
                    end_location: { lat: 52.36168499999999, lng: 10.1201872 },
                    html_instructions: 'Weiter auf <b>L413</b>',
                    polyline: {
                      points:
                        'iss~Hm`x|@Vb@X^LPNP\\^`@XPLVNNHRH`@LTFRBN@H@D?T@P@|BBT?vABP@x@B^@J?h@F`BNf@DpAJl@D|@J\\DJ@\\BV@PFL?`BJlALD@fAJXB~@HL@tAPh@LjAV',
                    },
                    start_location: { lat: 52.3706121, lng: 10.1224725 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '27,7 km', value: 27715 },
                    duration: { text: '16 Minuten', value: 959 },
                    end_location: { lat: 52.3169788, lng: 10.5063185 },
                    html_instructions:
                      'Auf <b>A2</b> über die Auffahrt <b>Berlin</b>',
                    maneuver: 'ramp-right',
                    polyline: {
                      points:
                        'o{q~Herw|@HNBBHDDDBDBF@F@B?F@F?JARGVMLIDKDIBMBK?aBCq@?]AA?W?I?IACAEAGAGCECCAEEECEGCGCEEKEKCMAGACAIAKAQ?K?K?q@@y@?eA@E@_C?{@@y@?{@?O@i@?y@?c@AWGw@DuDDiCDyCDiB@i@DaCFoCBuAF_CFiBFgB@q@By@@GLwDH}BJmCDgALuCLaDLiCFmADo@JsBPmDzA{Z`@qI`@iI@[^qHV}ERaEj@gLFwA@OBi@Be@H{A@I?IH{APeDFyA?CVgFDy@HgBZeG?AN{CJiBBg@b@}IJsBDy@VkFLmC@MN{CL{BHcBDeAJoBDs@Dy@@YDy@TkFVaG?G@WTwFL_DBo@LyBPqDHyAJgBJ_BTeDf@mGNyAPcBTaCh@oEHm@Fe@^yCd@gDTwAN{@TyALw@@CVwAX{AZeBd@}B\\aB\\aB`@aBZuAj@aCd@gBb@_B?ARq@La@^uA`@sAb@uATs@^kA\\eANc@b@kAt@wBl@_B`@gAJUTo@~@gCz@yBr@qBRi@Vq@BGt@qBx@{BpAiDlAcD|AeE^cAn@cBn@cBl@}A@Cp@cBt@oBd@kAl@_BTm@Na@h@sAjAgDPk@L]DI`AiCBEj@}A@Eh@{AfA}Ct@yBBKNe@To@Pk@@CRo@f@aBlCsIRo@?Ah@_BRo@Rq@f@_BRo@t@_C~DeMLa@@CTu@^gAp@yB^gA\\iARo@Ro@BIbAaDr@aC`@yA?APo@DKLg@d@aB?ALe@T}@?APq@Pw@XgALg@XqAPu@Nu@Pu@Nw@Nu@Nw@Nw@Nu@Hc@Hc@Hc@Fc@Hc@Fc@He@Fc@@CBM?C@CN{@xAqKl@aFXcCH}@R{B^sEd@wGPiCBo@B_@DcA@SBa@ToF?OD{@?AL_EBaAFeCJsF?_ABgH@u@AsD?k@A{DEsJCuG?{@?y@A}@?y@QoUCoJ@gEA_CDeF?A?w@?C?m@@KFmHRaMDkB?CBaAFgCFwC@e@JuDXsMBy@@{@FyBXaMJaEFuBTaIBm@P}F@e@B{@HeEBaA@K@y@B{@`@oRDuBN_HFmCB}ALcFHkE@q@?SBsA?q@@kA?O@cFA_C?}CEoDG{DGcD?M?ACi@?[IcCWsG]qHUkDYcFo@}K[sFEy@O_C}AuXy@oNMqBu@mMIcB?AC[Ey@AS_@kGAWe@wH}@ePw@yMy@iNq@gLu@oMAKAM?CCg@AMAGg@iJa@iIGeACo@Eu@E{@GcBGyAEeBCw@Aa@G_CCgAAi@Aw@E_CEiBAyACeECsCA_B?_B?_C@wE@o@@_CB}CPsP@[@eBB_B`@i`@J{J?c@J_J?k@@M?EBgDDgDDyDJsH@m@@}@?Q@w@@qA?A@g@?]?UFuE@g@?u@@w@@W?]?i@B{B@w@BmB?K@qA@OLaK?O@e@@o@FaEDwADkBBy@@k@@ILcEFyA?KBq@By@@MDgA^gKDy@x@{TBy@\\}I?KBm@D{@LmDBy@L_DHcCHsBv@aS@a@Bm@Bi@@_@@Yd@sLHyBBk@@W?EDgADoAF_BDy@?KBm@?IR}EB{@f@{M@[@]@YB_@Bi@?I\\}IHyBFeBJ}BBy@Bw@Du@n@_QTsF?MX{Gd@aJH{A`@wGb@sGP_CBW\\gEJ}@JwAHeA@SVqC`B_Qb@cFHw@^cEr@sHn@cH\\iDDe@BS\\iDl@aGF[b@eEp@oFl@iF@IFm@Hw@?A^gD@MFi@Hw@RkBH}@ViCt@{HHw@ZiDHw@Hy@@IDm@r@gIP{BP{Bf@mG~@yMd@yFXsC?CRoBFm@\\sCPuAHw@LcAv@sFfAmHVeBn@eEdAeHn@eEx@qF@E|@kGLw@~AuKFc@PaAfBuL|Eg[ZsBHe@L_Ah@mD~@oGZsBVgB|@cGlA_Iz@yFdAeHZuBh@oD@Gv@kFPcAl@aE\\wBZmBXmBzFo_@Jw@bDeTlEuYjBeM',
                    },
                    start_location: { lat: 52.36168499999999, lng: 10.1201872 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,3 km', value: 299 },
                    duration: { text: '1 Minute', value: 13 },
                    end_location: { lat: 52.3159263, lng: 10.510366 },
                    html_instructions:
                      'Bei Ausfahrt <b>55-Kreuz BS-Nord</b> Richtung <b>A391</b> fahren',
                    maneuver: 'ramp-right',
                    polyline: { points: 'cdi~Ho_c_Ad@iBz@wFTsAl@aEj@qD' },
                    start_location: { lat: 52.3169788, lng: 10.5063185 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '4,3 km', value: 4287 },
                    duration: { text: '3 Minuten', value: 192 },
                    end_location: { lat: 52.2833604, lng: 10.4905802 },
                    html_instructions:
                      'An der Gabelung <b>rechts</b> halten und weiter auf <b>A391</b>',
                    maneuver: 'fork-right',
                    polyline: {
                      points:
                        'q}h~Hyxc_ALe@p@wD`BeKHo@F[DMDMFSHQDGDGJOHIDCLIJEDCd@M|EoANCTAL@JBJDHDB@LHPLPJVNDDPP?@VXzA|At@l@^ZdAz@|@p@`@Xx@h@PDLFTFbBfANJ^TbAl@`Ah@`@T`@R\\R^P`Ah@fAj@|@d@jB`AdB|@jAl@~@h@tC~AzBpAjAt@r@d@x@h@^Xv@h@rAdAr@h@@BvAlAhBdBPR`AbAnAvAz@dALLV^Z`@X^V^X^X`@Xb@V`@V^n@dAn@fAXd@FLRZt@vAb@z@l@lAl@fAr@zANZXl@NXTd@Xl@t@zALVVf@`@z@Zj@j@hAl@hAb@x@^l@^n@R^Zf@h@z@V`@X`@X`@v@fAZ^X`@dAlAXZZ\\XX\\\\\\Z@@VT\\\\r@l@d@^nA|@\\T^V^Vf@ZZNZP`Bv@hAf@|Bx@h@Nt@RHBXFVFf@HbAP|AT@?ZB^Dn@DL@^@\\B`A@f@?\\?^?^Az@CnAGd@Cf@C',
                    },
                    start_location: { lat: 52.3159263, lng: 10.510366 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '2,2 km', value: 2240 },
                    duration: { text: '2 Minuten', value: 126 },
                    end_location: { lat: 52.28134300000001, lng: 10.5175302 },
                    html_instructions:
                      'Bei Ausfahrt <b>A392</b> Richtung <b>Celler Straße</b>/<wbr/><b>Braunschweig</b>/<wbr/><b>Zentrum</b>/<wbr/><b>Hamburger Straße</b> fahren',
                    maneuver: 'ramp-right',
                    polyline: {
                      points:
                        '_rb~Hc}__AXHF?L?J@H@FBFBD@FDDFBBDFFJBDBFBLBJBL@L@L?L?L?NAJAHAFENCHENGLIJIHEBGDE@GBM?K?ICGCGEIIGEEICECGGOCKAKAEAQAM?O?O@]FkA^uCJcALkA?Y@QBYDg@TqDF}@HyAP}CBe@@OHqBDm@JqAF_AHu@?IDe@H_AH}@De@?AFg@@M@KHm@L{@Fe@Jg@H]Lc@DOBKBEBKFOHSVk@?ALUTg@LULYNYJ[L[H[F_@FY@KF_@D]B]@C@[Ba@@c@?a@Aa@?AAg@AYA]AUGs@I{@?AIu@COCUGc@AKACAIGg@Ko@QiAKy@Ku@Gs@Ei@Gs@GaAAUCcAAs@AkA?{B?aC@g@@gB?qAByC@wA?C?yA?i@@q@@UDwA?gA?_@F{BFoBBe@JsB@MBk@PsC@_@?KAU?O?W',
                    },
                    start_location: { lat: 52.2833604, lng: 10.4905802 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,7 km', value: 742 },
                    duration: { text: '2 Minuten', value: 114 },
                    end_location: { lat: 52.2752594, lng: 10.5212429 },
                    html_instructions:
                      '<b>Rechts</b> abbiegen auf <b>Hamburger Str.</b>/<wbr/><b>B4</b>',
                    maneuver: 'turn-right',
                    polyline: {
                      points:
                        'keb~Hqee_ADUD{@@I@EFMBERGTGPCLGHCHEHGFIHIPSJMFEFGDCHE\\Q`@QbAe@v@_@VMd@UVOJEHAHANAXCJAH?LCJCXODCRId@YB?`@QXMXMRGTKh@UDCj@Qz@Yr@UDAVM|@_@xAu@',
                    },
                    start_location: { lat: 52.28134300000001, lng: 10.5175302 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,2 km', value: 218 },
                    duration: { text: '1 Minute', value: 44 },
                    end_location: { lat: 52.2751961, lng: 10.5242532 },
                    html_instructions:
                      '<b>Links</b> abbiegen auf <b>B1</b>/<wbr/><b>B4</b>',
                    maneuver: 'turn-left',
                    polyline: {
                      points: 'k_a~Hw|e_AJGVQAK?SCs@A[Ay@CkBEuCA}AAa@?S',
                    },
                    start_location: { lat: 52.2752594, lng: 10.5212429 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,4 km', value: 359 },
                    duration: { text: '1 Minute', value: 50 },
                    end_location: { lat: 52.2720289, lng: 10.5244414 },
                    html_instructions:
                      '<b>Rechts</b> abbiegen auf <b>Mühlenpfordtstraße</b>',
                    maneuver: 'turn-right',
                    polyline: {
                      points:
                        '__a~Hqof_AfBYd@Iz@GPCLENELGz@IJC^GfAOXAD?L?L?PDF@JDFBXNB@PHf@V',
                    },
                    start_location: { lat: 52.2751961, lng: 10.5242532 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '67 m', value: 67 },
                    duration: { text: '1 Minute', value: 7 },
                    end_location: { lat: 52.2715, lng: 10.5239995 },
                    html_instructions: 'Weiter auf <b>Am Wendentor</b>',
                    polyline: { points: 'ek`~Hwpf_AtAx@@DFJHJ' },
                    start_location: { lat: 52.2720289, lng: 10.5244414 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,5 km', value: 456 },
                    duration: { text: '1 Minute', value: 73 },
                    end_location: { lat: 52.26763330000001, lng: 10.5245765 },
                    html_instructions:
                      'Weiter auf <b>Wendenstraße</b>/<wbr/><b>Wilhelmstraße</b>',
                    polyline: {
                      points:
                        '{g`~H_nf_AXVRRrA|@b@Rv@TTBJ@L?JANAJCJCLGJGNIt@[n@WTKNIZQTMt@c@l@Yf@YPKHELGDADABA@?HC@?FA',
                    },
                    start_location: { lat: 52.2715, lng: 10.5239995 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,2 km', value: 151 },
                    duration: { text: '1 Minute', value: 34 },
                    end_location: { lat: 52.2683003, lng: 10.5265067 },
                    html_instructions:
                      '<b>Links</b> abbiegen auf <b>Fallersleber Str.</b>',
                    maneuver: 'turn-left',
                    polyline: {
                      points: 'uo_~Hsqf_AIQAEACCGCIIWACIYIWGOWoAISAI[cBGc@',
                    },
                    start_location: { lat: 52.26763330000001, lng: 10.5245765 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '63 m', value: 63 },
                    duration: { text: '1 Minute', value: 18 },
                    end_location: { lat: 52.2688128, lng: 10.5261275 },
                    html_instructions:
                      '<b>Links</b> abbiegen auf <b>Wilhelmstraße</b>',
                    maneuver: 'turn-left',
                    polyline: { points: '{s_~Hu}f_AGFEBy@f@]V' },
                    start_location: { lat: 52.2683003, lng: 10.5265067 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '37 m', value: 37 },
                    duration: { text: '1 Minute', value: 9 },
                    end_location: { lat: 52.26896499999999, lng: 10.5266042 },
                    html_instructions: '<b>Rechts</b> abbiegen',
                    maneuver: 'turn-right',
                    polyline: { points: 'aw_~Hi{f_AI]EUGSCOAE' },
                    start_location: { lat: 52.2688128, lng: 10.5261275 },
                    travel_mode: 'DRIVING',
                  },
                ],
                traffic_speed_entry: [],
                via_waypoint: [],
              },
            ],
            overview_polyline: {
              points:
                'cmh_I_vq|@wBdB{@yDeA{E_CRk@cCcAoEeAwF]aQWiLRA|Ec@|D_@xIy@`i@{Ene@oEpSkBvO}AbBIb@C@FBHLLRAJOBK@I|@QnGu@tEg@nSmBjLsAdMiAvNuAhLq@dMkAtMkAzEg@XUbQqSbUyWhB{BPa@n@iDzAiLnCeTfCmQdGoIhHmJ`C_DfWq\\nJcMtAaBf@Qv@XtH`DzJdEpAh@\\BxBq@zBw@l@QbAN~JdCbH~AzAb@v@`@`A`A~AtCpAdB~Az@`ANp@C\\C`@Kl@[lBiA^O~@An@@v@P|Ct@rGxAdJxBdUfFdGnA~ESbj@uCh\\}AtXyApCMhBW|AcAhBiB`B`EVvANjCLfCt@bDjEtMlCxI`CxGbA~A|A|AlAp@zAZtHNnCLhGf@dCVxCTtD^lAJ~B^jAVHNLHNZB^Ij@WRo@LsDEo@C[KUSSe@MyAFiN@wCIoAJ_IRoLZoMx@gVvJgrBlC}i@tD_v@|Ao_@t@mNxAmRzAcNbB_MhDiRxB{JtBkIzEyO|Rei@lK{XvHsSpDwJzDiLnRqm@zD}LhEuNhBcHvCsMpCwOhBmMfAeJbBeTd@sIZ}Hd@{RBqQKqZAmFU_a@?gIDcH\\iX`Aac@tAyi@jC}lADeF?qOYeRa@wKs@}MkBo\\yFgbAsJgbBqBya@a@iRO}O?wObAmcA|@g{@\\w\\h@g\\b@yM~Fw~A~A_c@vCaw@~A}a@tBi^nBaVvHgy@|Eec@pDo^`AkK~Fyt@jAgKvC}SdIsi@~[qwBxFe_@dM{y@xH{g@d@iBz@wFbAuGx@wEdDiS\\aA`@i@d@WrGaBn@Bf@V`An@dCjCxEvDzBpAnHhEtLlGfKtFtHvE~ErDtEjEzEnFdB`CvFzItGjMvErJhG~KtB`DrDvEbEbEfE`DbCzA|BhAfE`BbCn@`Fx@lBNlCHdCAxESz@J^JVXRf@Jt@Av@Mj@a@r@[Nk@G_@_@Si@Gq@HiCx@_IhAaRt@gLn@uGj@gDZeA~AqDv@kBZaBR_BFcCEeBUcD]qCmAyJUoEC}JH{QHgFRqHb@aI?qALsBHSVM~@Wd@a@l@o@nAm@xDiBv@Y~@Gx@[|DeBfHkCdB}@T]G}CMaK?SfBY`BQ|@WnDe@z@Al@PvAr@vA~@PVl@j@vBpAlAXX@f@Gt@]jCiAtC}AbBy@JCASK[kAkEc@gCMJwA~@Os@Mi@',
            },
            summary: 'A2',
            warnings: [],
            waypoint_order: [],
          },
        ],
        status: 'OK',
      },
    },
    {
      kind: 'calendar#event',
      etag: '"3248365281520000"',
      id: 'c8pjec9hc8q62b9j75i38b9k6opm8b9pcgq32bb1clgj8ob164r38eb36o',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=YzhwamVjOWhjOHE2MmI5ajc1aTM4YjlrNm9wbThiOXBjZ3EzMmJiMWNsZ2o4b2IxNjRyMzhlYjM2byBjaHJpc3RpYW4ud29pemlzY2hrZUBnb29nbGVtYWlsLmNvbQ',
      created: '2021-06-20T09:50:40.000Z',
      updated: '2021-06-20T09:50:40.783Z',
      summary: 'Bieni Zahnarzt',
      creator: { email: 'christian.woizischke@googlemail.com', self: true },
      organizer: { email: 'christian.woizischke@googlemail.com', self: true },
      start: { dateTime: '2021-07-14T10:00:00+02:00', timeZone: 'Europe/Rome' },
      end: { dateTime: '2021-07-14T11:30:00+02:00', timeZone: 'Europe/Rome' },
      iCalUID:
        'c8pjec9hc8q62b9j75i38b9k6opm8b9pcgq32bb1clgj8ob164r38eb36o@google.com',
      sequence: 0,
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 840 },
          { method: 'email', minutes: 840 },
          { method: 'popup', minutes: 10 },
        ],
      },
      eventType: 'default',
    },
    {
      kind: 'calendar#event',
      etag: '"3251626874732000"',
      id: '_60q30c1g60o30e1i60o4ac1g60rj8gpl88rj2c1h84s34h9g60s30c1g60o30c1g70o3ighg8cs4cea26sq48dpg64o30c1g60o30c1g60o30c1g60o32c1g60o30c1g6ko3ed9m8oq46e1g6d0j4dhk8gs32g9p70p4cc1m6p14cchl6h30_20210714T083000Z',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=XzYwcTMwYzFnNjBvMzBlMWk2MG80YWMxZzYwcmo4Z3BsODhyajJjMWg4NHMzNGg5ZzYwczMwYzFnNjBvMzBjMWc3MG8zaWdoZzhjczRjZWEyNnNxNDhkcGc2NG8zMGMxZzYwbzMwYzFnNjBvMzBjMWc2MG8zMmMxZzYwbzMwYzFnNmtvM2VkOW04b3E0NmUxZzZkMGo0ZGhrOGdzMzJnOXA3MHA0Y2MxbTZwMTRjY2hsNmgzMF8yMDIxMDcxNFQwODMwMDBaIGNocmlzdGlhbi53b2l6aXNjaGtlQGdvb2dsZW1haWwuY29t',
      created: '2021-07-09T06:22:29.000Z',
      updated: '2021-07-09T06:50:37.366Z',
      summary: 'Refinement Serie I',
      description:
        '\n\nVolkswagen Bank GmbH\nSitz/Registered seat: Braunschweig\nRegistergericht/Registration court: Amtsgericht Braunschweig\nHRB Nr./Commercial Register No.: 1819\nVorsitzender des Aufsichtsrats/Chairman of the Supervisory Board: Dr. Jörg Boche\nGeschäftsführer/Executive Director: Dr. Michael Reinhart (Sprecher/Spokesman), Christian Löbke, Oliver Roes, Dr. Volker Stadler\n\nWichtiger Hinweis: Die vorgenannten Angaben werden jeder E-Mail automatisch hinzugefügt und lassen keine Rückschlüsse auf den Rechtscharakter der E-Mail zu.\nImportant note: The above information is automatically added to this e-mail. This addition does not constitute a representation that the content of this e-mail is legally relevant and/or is intended to be legally binding upon Volkswagen Bank GmbH.\n',
      location: 'Teams Murmeltier',
      creator: { email: 'christian.woizischke@googlemail.com', self: true },
      organizer: {
        email: 'florian.ungar@vwfs.com',
        displayName: 'Ungar, Florian',
      },
      start: {
        dateTime: '2021-07-14T10:30:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      end: {
        dateTime: '2021-07-14T12:00:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      recurringEventId:
        '_60q30c1g60o30e1i60o4ac1g60rj8gpl88rj2c1h84s34h9g60s30c1g60o30c1g70o3ighg8cs4cea26sq48dpg64o30c1g60o30c1g60o30c1g60o32c1g60o30c1g6ko3ed9m8oq46e1g6d0j4dhk8gs32g9p70p4cc1m6p14cchl6h30',
      originalStartTime: {
        dateTime: '2021-07-14T10:30:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      iCalUID:
        '040000008200E00074C5B7101A82E00800000000809B0C8F9B74D70100000000000000001000000050756F4C803A264D81A982F066BF254F',
      sequence: 0,
      attendees: [
        {
          email: 'christian.woizischke@googlemail.com',
          self: true,
          responseStatus: 'accepted',
        },
        {
          email: 'birte.baumgart@vwfs.com',
          displayName: 'Baumgart, Birte',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.christian.woizischke@vwfs.com',
          displayName: 'Woizischke, Christian (extern)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.florian.maetschke@vwfs.io',
          displayName: 'Maetschke, Florian',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.jens.stephani@vwfs.com',
          displayName: 'Stephani, Jens (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.johannes.bader@vwfs.com',
          displayName: 'Bader, Johannes (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.joscha.pelster@vwfs.com',
          displayName: 'Pelster, Joscha (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.mario.hauschild@vwfs.com',
          displayName: 'Hauschild, Mario (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.tuan.dang-schulz@vwfs.io',
          displayName: "'extern.tuan.dang-schulz@vwfs.io'",
          responseStatus: 'needsAction',
        },
        {
          email: 'fabian.freiter@vwfs.io',
          displayName: 'Freiter, Fabian',
          responseStatus: 'needsAction',
        },
        {
          email: 'jasper.stoob@vwfs.com',
          displayName: 'Stoob, Jasper',
          responseStatus: 'needsAction',
        },
        { email: 'jens.stephani@msg-david.de', responseStatus: 'needsAction' },
        {
          email: 'johannes.bader@leitwerk-consulting.com',
          displayName: "'johannes.bader@leitwerk-consulting.com'",
          responseStatus: 'needsAction',
        },
        {
          email: 'joscha.pelster@expleogroup.com',
          displayName: "'joscha.pelster@expleogroup.com'",
          responseStatus: 'needsAction',
        },
        {
          email: 'matthias.lueck@vwfs.com',
          displayName: 'Lueck, Matthias',
          responseStatus: 'needsAction',
        },
        {
          email: 'tuan.dang-schulz@vwfs.io',
          displayName: 'Dang-Schulz, Tuan',
          responseStatus: 'needsAction',
        },
      ],
      guestsCanInviteOthers: false,
      privateCopy: true,
      reminders: { useDefault: true },
      eventType: 'default',
      directions: {
        geocoded_waypoints: [
          {
            geocoder_status: 'OK',
            place_id: 'ChIJ1wyQHwUbsEcRExDq6ZSPO3w',
            types: ['street_address'],
          },
          {
            geocoder_status: 'OK',
            place_id: 'ChIJO2YAitX1r0cRsDqslG2sJQQ',
            types: ['locality', 'political'],
          },
        ],
        routes: [
          {
            bounds: {
              northeast: { lat: 52.48021319999999, lng: 10.5266042 },
              southwest: { lat: 52.2676654, lng: 10.0895661 },
            },
            copyrights: 'Map data ©2021 GeoBasis-DE/BKG (©2009)',
            legs: [
              {
                distance: { text: '52,1 km', value: 52117 },
                duration: { text: '44 Minuten', value: 2640 },
                duration_in_traffic: { text: '42 Minuten', value: 2515 },
                end_address: 'Braunschweig, Deutschland',
                end_location: { lat: 52.26896499999999, lng: 10.5266042 },
                start_address: 'Im Zumpe 7, 31311 Uetze, Deutschland',
                start_location: { lat: 52.4771402, lng: 10.0900783 },
                steps: [
                  {
                    distance: { text: '75 m', value: 75 },
                    duration: { text: '1 Minute', value: 15 },
                    end_location: { lat: 52.4777413, lng: 10.0895661 },
                    html_instructions:
                      'Auf <b>Im Zumpe</b> nach <b>Nordwesten</b> Richtung <b>Zur Seebecke</b> starten',
                    polyline: { points: 'cmh_I_vq|@wBdB' },
                    start_location: { lat: 52.4771402, lng: 10.0900783 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,2 km', value: 155 },
                    duration: { text: '1 Minute', value: 46 },
                    end_location: { lat: 52.4783851, lng: 10.0916019 },
                    html_instructions:
                      '<b>Rechts</b> abbiegen auf <b>Zur Seebecke</b>',
                    maneuver: 'turn-right',
                    polyline: { points: '{ph_Iyrq|@{@yDaAkECO' },
                    start_location: { lat: 52.4777413, lng: 10.0895661 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '72 m', value: 72 },
                    duration: { text: '1 Minute', value: 18 },
                    end_location: { lat: 52.47902819999999, lng: 10.0914992 },
                    html_instructions:
                      '<b>Links</b> abbiegen auf <b>Richtweg</b>',
                    maneuver: 'turn-left',
                    polyline: { points: '}th_Io_r|@_CR' },
                    start_location: { lat: 52.4783851, lng: 10.0916019 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,2 km', value: 224 },
                    duration: { text: '1 Minute', value: 37 },
                    end_location: { lat: 52.4799376, lng: 10.0944365 },
                    html_instructions:
                      '<b>Rechts</b> abbiegen auf <b>Böschansweg</b>',
                    maneuver: 'turn-right',
                    polyline: { points: '}xh_I{~q|@k@cCc@gB_@gBy@yDEYAMCU' },
                    start_location: { lat: 52.47902819999999, lng: 10.0914992 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,3 km', value: 341 },
                    duration: { text: '1 Minute', value: 49 },
                    end_location: { lat: 52.48021319999999, lng: 10.0994568 },
                    html_instructions: 'Weiter auf <b>Sägemühlenstraße</b>',
                    polyline: { points: 's~h_Igqr|@GuCCcBMcGCcAWiL' },
                    start_location: { lat: 52.4799376, lng: 10.0944365 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '1,1 km', value: 1112 },
                    duration: { text: '1 Minute', value: 60 },
                    end_location: { lat: 52.470261, lng: 10.1010915 },
                    html_instructions:
                      '<b>Rechts</b> abbiegen auf <b>Rälingser Str.</b>',
                    maneuver: 'turn-right',
                    polyline: {
                      points:
                        'i`i_Isps|@RA~BU|AMnAKPCpAMHAbAIr@GFAr@IXCZC`AKl@Gd@EhCWhBQb@EnCWjAK^G|D[fDYb@EVC^CHAtD]',
                    },
                    start_location: { lat: 52.48021319999999, lng: 10.0994568 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '5,9 km', value: 5916 },
                    duration: { text: '5 Minuten', value: 280 },
                    end_location: { lat: 52.4236041, lng: 10.127889 },
                    html_instructions: 'Weiter auf <b>K125</b>',
                    polyline: {
                      points:
                        'cbg_Iyzs|@fBQ\\CfCWbKaAtAMjHu@nCUtBQXC`@EJAp@GdAMHAnCUNA~BUbFc@fCYtEa@fD_@PAb@Gb@@XC@?PAPA?B@B?@@B@@?@@B@@@@@?@@@@@@@?B@@?B?@A@?@A@?@A@C@?@C@A?A@A@C?A@C?A@C?ERGh@Ip@IHCn@IbD]HAZEhBSdAK`Fk@XA?Ab@ChE]jBQx@IxAOrAQNA~ASf@GhAMZE`@EXAzBOVEnD]d@GJARC~Gq@F?t@IxCYlAG~@IbCQvCMpBKZEXGrBSxAOHA`@Eb@Ep@GTCjBOv@Ib@El@Gl@EhBQhBOpAOXGD?JGBAFI@APUjByBd@i@RWHIxAeBtCeDpCiDhByBpFiGfEcF~CqDpAwAVc@N[@EJYDa@F]ToAP_AZ}BPaBZiCNoANeAPuAX}BVkBXuBLeABSL}@RyAL_AHi@D]PmAh@aEJ]^u@dFyGrE_GtAmB',
                    },
                    start_location: { lat: 52.470261, lng: 10.1010915 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '1,6 km', value: 1633 },
                    duration: { text: '2 Minuten', value: 97 },
                    end_location: { lat: 52.4108502, lng: 10.1347221 },
                    html_instructions:
                      'Weiter auf <b>Beerbuschstraße</b>/<wbr/><b>K125</b>',
                    polyline: {
                      points:
                        'o~}~Hiby|@LOPYRUlA_BpCoD`@i@dAwAh@s@hDmExCwDz@oAbBuB~BwCNQbB{BzB}C|@gAVYVQN?THF@VL@?RHhBt@rB|@bAb@JDNFf@TXJ`A`@d@R`@PrClAl@Vb@PL@N@HCLCf@Qx@Wd@QZKXM^KXKRE',
                    },
                    start_location: { lat: 52.4236041, lng: 10.127889 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,6 km', value: 569 },
                    duration: { text: '1 Minute', value: 35 },
                    end_location: { lat: 52.40593879999999, lng: 10.1326487 },
                    html_instructions: 'Weiter auf <b>Arpker Str.</b>',
                    polyline: {
                      points:
                        'yn{~H_mz|@\\@d@LvA^LDp@PfFlAb@Hn@NnBb@~A`@B@vA`@b@RRL@@RLVXRVV^',
                    },
                    start_location: { lat: 52.4108502, lng: 10.1347221 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '1,6 km', value: 1558 },
                    duration: { text: '1 Minute', value: 77 },
                    end_location: { lat: 52.3924756, lng: 10.1289329 },
                    html_instructions: 'Weiter auf <b>K125</b>',
                    polyline: {
                      points:
                        'cpz~Ha`z|@Vd@^v@NVFLXb@TXXXXR\\RLFXJb@H\\DZ?TCD?NADA@?RGF?@ABAFCBALIRKd@Wf@a@TKHCVKFC`@C\\@D@h@?TF`@Hz@RdAVTFD@ZFlBb@lBb@ZHfATzBf@dB`@z@X~AZjCj@fEbApGzA|@R|Cr@XDN@T@l@ChAG',
                    },
                    start_location: { lat: 52.40593879999999, lng: 10.1326487 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '2,1 km', value: 2062 },
                    duration: { text: '2 Minuten', value: 100 },
                    end_location: { lat: 52.3741079, lng: 10.1317059 },
                    html_instructions:
                      'Weiter auf <b>Zum Krähenfeld</b>/<wbr/><b>K125</b>',
                    polyline: {
                      points:
                        '_|w~Hyhy|@pAIhBKjBIrNw@fJe@fAGvDSXAVCxFYbKc@bFUfAIb@CtEW|Ls@|BIPAb@C|@E\\Ar@GRCPCNGLGJG^Ub@]XY`@_@^c@LK',
                    },
                    start_location: { lat: 52.3924756, lng: 10.1289329 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,5 km', value: 497 },
                    duration: { text: '1 Minute', value: 67 },
                    end_location: { lat: 52.3719293, lng: 10.1254511 },
                    html_instructions:
                      '<b>Rechts</b> abbiegen auf <b>Oelerser Str.</b>',
                    maneuver: 'turn-right',
                    polyline: {
                      points:
                        'eit~Hezy|@JVLVNZ@BJRLZL\\Lb@Ll@Hh@Hv@DrA?NBv@Fp@@LDTLl@Px@Nd@tCxI^fADLNd@Xz@',
                    },
                    start_location: { lat: 52.3741079, lng: 10.1317059 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,2 km', value: 250 },
                    duration: { text: '1 Minute', value: 28 },
                    end_location: { lat: 52.3706121, lng: 10.1224725 },
                    html_instructions: 'Weiter auf <b>Kleegarten</b>',
                    polyline: { points: 'q{s~Hasx|@HXJX|AhFx@fCd@nAN`@P^FLHL' },
                    start_location: { lat: 52.3719293, lng: 10.1254511 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '1,0 km', value: 1019 },
                    duration: { text: '2 Minuten', value: 92 },
                    end_location: { lat: 52.36168499999999, lng: 10.1201872 },
                    html_instructions: 'Weiter auf <b>L413</b>',
                    polyline: {
                      points:
                        'iss~Hm`x|@Vb@X^LPNP\\^`@XPLVNNHRH`@LTFRBN@H@D?T@P@|BBT?vABP@x@B^@J?h@F`BNf@DpAJl@D|@J\\DJ@\\BV@PFL?`BJlALD@fAJXB~@HL@tAPh@LjAV',
                    },
                    start_location: { lat: 52.3706121, lng: 10.1224725 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '27,7 km', value: 27715 },
                    duration: { text: '16 Minuten', value: 959 },
                    end_location: { lat: 52.3169788, lng: 10.5063185 },
                    html_instructions:
                      'Auf <b>A2</b> über die Auffahrt <b>Berlin</b>',
                    maneuver: 'ramp-right',
                    polyline: {
                      points:
                        'o{q~Herw|@HNBBHDDDBDBF@F@B?F@F?JARGVMLIDKDIBMBK?aBCq@?]AA?W?I?IACAEAGAGCECCAEEECEGCGCEEKEKCMAGACAIAKAQ?K?K?q@@y@?eA@E@_C?{@@y@?{@?O@i@?y@?c@AWGw@DuDDiCDyCDiB@i@DaCFoCBuAF_CFiBFgB@q@By@@GLwDH}BJmCDgALuCLaDLiCFmADo@JsBPmDzA{Z`@qI`@iI@[^qHV}ERaEj@gLFwA@OBi@Be@H{A@I?IH{APeDFyA?CVgFDy@HgBZeG?AN{CJiBBg@b@}IJsBDy@VkFLmC@MN{CL{BHcBDeAJoBDs@Dy@@YDy@TkFVaG?G@WTwFL_DBo@LyBPqDHyAJgBJ_BTeDf@mGNyAPcBTaCh@oEHm@Fe@^yCd@gDTwAN{@TyALw@@CVwAX{AZeBd@}B\\aB\\aB`@aBZuAj@aCd@gBb@_B?ARq@La@^uA`@sAb@uATs@^kA\\eANc@b@kAt@wBl@_B`@gAJUTo@~@gCz@yBr@qBRi@Vq@BGt@qBx@{BpAiDlAcD|AeE^cAn@cBn@cBl@}A@Cp@cBt@oBd@kAl@_BTm@Na@h@sAjAgDPk@L]DI`AiCBEj@}A@Eh@{AfA}Ct@yBBKNe@To@Pk@@CRo@f@aBlCsIRo@?Ah@_BRo@Rq@f@_BRo@t@_C~DeMLa@@CTu@^gAp@yB^gA\\iARo@Ro@BIbAaDr@aC`@yA?APo@DKLg@d@aB?ALe@T}@?APq@Pw@XgALg@XqAPu@Nu@Pu@Nw@Nu@Nw@Nw@Nu@Hc@Hc@Hc@Fc@Hc@Fc@He@Fc@@CBM?C@CN{@xAqKl@aFXcCH}@R{B^sEd@wGPiCBo@B_@DcA@SBa@ToF?OD{@?AL_EBaAFeCJsF?_ABgH@u@AsD?k@A{DEsJCuG?{@?y@A}@?y@QoUCoJ@gEA_CDeF?A?w@?C?m@@KFmHRaMDkB?CBaAFgCFwC@e@JuDXsMBy@@{@FyBXaMJaEFuBTaIBm@P}F@e@B{@HeEBaA@K@y@B{@`@oRDuBN_HFmCB}ALcFHkE@q@?SBsA?q@@kA?O@cFA_C?}CEoDG{DGcD?M?ACi@?[IcCWsG]qHUkDYcFo@}K[sFEy@O_C}AuXy@oNMqBu@mMIcB?AC[Ey@AS_@kGAWe@wH}@ePw@yMy@iNq@gLu@oMAKAM?CCg@AMAGg@iJa@iIGeACo@Eu@E{@GcBGyAEeBCw@Aa@G_CCgAAi@Aw@E_CEiBAyACeECsCA_B?_B?_C@wE@o@@_CB}CPsP@[@eBB_B`@i`@J{J?c@J_J?k@@M?EBgDDgDDyDJsH@m@@}@?Q@w@@qA?A@g@?]?UFuE@g@?u@@w@@W?]?i@B{B@w@BmB?K@qA@OLaK?O@e@@o@FaEDwADkBBy@@k@@ILcEFyA?KBq@By@@MDgA^gKDy@x@{TBy@\\}I?KBm@D{@LmDBy@L_DHcCHsBv@aS@a@Bm@Bi@@_@@Yd@sLHyBBk@@W?EDgADoAF_BDy@?KBm@?IR}EB{@f@{M@[@]@YB_@Bi@?I\\}IHyBFeBJ}BBy@Bw@Du@n@_QTsF?MX{Gd@aJH{A`@wGb@sGP_CBW\\gEJ}@JwAHeA@SVqC`B_Qb@cFHw@^cEr@sHn@cH\\iDDe@BS\\iDl@aGF[b@eEp@oFl@iF@IFm@Hw@?A^gD@MFi@Hw@RkBH}@ViCt@{HHw@ZiDHw@Hy@@IDm@r@gIP{BP{Bf@mG~@yMd@yFXsC?CRoBFm@\\sCPuAHw@LcAv@sFfAmHVeBn@eEdAeHn@eEx@qF@E|@kGLw@~AuKFc@PaAfBuL|Eg[ZsBHe@L_Ah@mD~@oGZsBVgB|@cGlA_Iz@yFdAeHZuBh@oD@Gv@kFPcAl@aE\\wBZmBXmBzFo_@Jw@bDeTlEuYjBeM',
                    },
                    start_location: { lat: 52.36168499999999, lng: 10.1201872 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,3 km', value: 299 },
                    duration: { text: '1 Minute', value: 13 },
                    end_location: { lat: 52.3159263, lng: 10.510366 },
                    html_instructions:
                      'Bei Ausfahrt <b>55-Kreuz BS-Nord</b> Richtung <b>A391</b> fahren',
                    maneuver: 'ramp-right',
                    polyline: { points: 'cdi~Ho_c_Ad@iBz@wFTsAl@aEj@qD' },
                    start_location: { lat: 52.3169788, lng: 10.5063185 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '4,3 km', value: 4287 },
                    duration: { text: '3 Minuten', value: 192 },
                    end_location: { lat: 52.2833604, lng: 10.4905802 },
                    html_instructions:
                      'An der Gabelung <b>rechts</b> halten und weiter auf <b>A391</b>',
                    maneuver: 'fork-right',
                    polyline: {
                      points:
                        'q}h~Hyxc_ALe@p@wD`BeKHo@F[DMDMFSHQDGDGJOHIDCLIJEDCd@M|EoANCTAL@JBJDHDB@LHPLPJVNDDPP?@VXzA|At@l@^ZdAz@|@p@`@Xx@h@PDLFTFbBfANJ^TbAl@`Ah@`@T`@R\\R^P`Ah@fAj@|@d@jB`AdB|@jAl@~@h@tC~AzBpAjAt@r@d@x@h@^Xv@h@rAdAr@h@@BvAlAhBdBPR`AbAnAvAz@dALLV^Z`@X^V^X^X`@Xb@V`@V^n@dAn@fAXd@FLRZt@vAb@z@l@lAl@fAr@zANZXl@NXTd@Xl@t@zALVVf@`@z@Zj@j@hAl@hAb@x@^l@^n@R^Zf@h@z@V`@X`@X`@v@fAZ^X`@dAlAXZZ\\XX\\\\\\Z@@VT\\\\r@l@d@^nA|@\\T^V^Vf@ZZNZP`Bv@hAf@|Bx@h@Nt@RHBXFVFf@HbAP|AT@?ZB^Dn@DL@^@\\B`A@f@?\\?^?^Az@CnAGd@Cf@C',
                    },
                    start_location: { lat: 52.3159263, lng: 10.510366 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '2,2 km', value: 2240 },
                    duration: { text: '2 Minuten', value: 126 },
                    end_location: { lat: 52.28134300000001, lng: 10.5175302 },
                    html_instructions:
                      'Bei Ausfahrt <b>A392</b> Richtung <b>Celler Straße</b>/<wbr/><b>Braunschweig</b>/<wbr/><b>Zentrum</b>/<wbr/><b>Hamburger Straße</b> fahren',
                    maneuver: 'ramp-right',
                    polyline: {
                      points:
                        '_rb~Hc}__AXHF?L?J@H@FBFBD@FDDFBBDFFJBDBFBLBJBL@L@L?L?L?NAJAHAFENCHENGLIJIHEBGDE@GBM?K?ICGCGEIIGEEICECGGOCKAKAEAQAM?O?O@]FkA^uCJcALkA?Y@QBYDg@TqDF}@HyAP}CBe@@OHqBDm@JqAF_AHu@?IDe@H_AH}@De@?AFg@@M@KHm@L{@Fe@Jg@H]Lc@DOBKBEBKFOHSVk@?ALUTg@LULYNYJ[L[H[F_@FY@KF_@D]B]@C@[Ba@@c@?a@Aa@?AAg@AYA]AUGs@I{@?AIu@COCUGc@AKACAIGg@Ko@QiAKy@Ku@Gs@Ei@Gs@GaAAUCcAAs@AkA?{B?aC@g@@gB?qAByC@wA?C?yA?i@@q@@UDwA?gA?_@F{BFoBBe@JsB@MBk@PsC@_@?KAU?O?W',
                    },
                    start_location: { lat: 52.2833604, lng: 10.4905802 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,7 km', value: 742 },
                    duration: { text: '2 Minuten', value: 114 },
                    end_location: { lat: 52.2752594, lng: 10.5212429 },
                    html_instructions:
                      '<b>Rechts</b> abbiegen auf <b>Hamburger Str.</b>/<wbr/><b>B4</b>',
                    maneuver: 'turn-right',
                    polyline: {
                      points:
                        'keb~Hqee_ADUD{@@I@EFMBERGTGPCLGHCHEHGFIHIPSJMFEFGDCHE\\Q`@QbAe@v@_@VMd@UVOJEHAHANAXCJAH?LCJCXODCRId@YB?`@QXMXMRGTKh@UDCj@Qz@Yr@UDAVM|@_@xAu@',
                    },
                    start_location: { lat: 52.28134300000001, lng: 10.5175302 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,2 km', value: 218 },
                    duration: { text: '1 Minute', value: 44 },
                    end_location: { lat: 52.2751961, lng: 10.5242532 },
                    html_instructions:
                      '<b>Links</b> abbiegen auf <b>B1</b>/<wbr/><b>B4</b>',
                    maneuver: 'turn-left',
                    polyline: {
                      points: 'k_a~Hw|e_AJGVQAK?SCs@A[Ay@CkBEuCA}AAa@?S',
                    },
                    start_location: { lat: 52.2752594, lng: 10.5212429 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,4 km', value: 359 },
                    duration: { text: '1 Minute', value: 50 },
                    end_location: { lat: 52.2720289, lng: 10.5244414 },
                    html_instructions:
                      '<b>Rechts</b> abbiegen auf <b>Mühlenpfordtstraße</b>',
                    maneuver: 'turn-right',
                    polyline: {
                      points:
                        '__a~Hqof_AfBYd@Iz@GPCLENELGz@IJC^GfAOXAD?L?L?PDF@JDFBXNB@PHf@V',
                    },
                    start_location: { lat: 52.2751961, lng: 10.5242532 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '67 m', value: 67 },
                    duration: { text: '1 Minute', value: 7 },
                    end_location: { lat: 52.2715, lng: 10.5239995 },
                    html_instructions: 'Weiter auf <b>Am Wendentor</b>',
                    polyline: { points: 'ek`~Hwpf_AtAx@@DFJHJ' },
                    start_location: { lat: 52.2720289, lng: 10.5244414 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,5 km', value: 456 },
                    duration: { text: '1 Minute', value: 73 },
                    end_location: { lat: 52.26763330000001, lng: 10.5245765 },
                    html_instructions:
                      'Weiter auf <b>Wendenstraße</b>/<wbr/><b>Wilhelmstraße</b>',
                    polyline: {
                      points:
                        '{g`~H_nf_AXVRRrA|@b@Rv@TTBJ@L?JANAJCJCLGJGNIt@[n@WTKNIZQTMt@c@l@Yf@YPKHELGDADABA@?HC@?FA',
                    },
                    start_location: { lat: 52.2715, lng: 10.5239995 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '0,2 km', value: 151 },
                    duration: { text: '1 Minute', value: 34 },
                    end_location: { lat: 52.2683003, lng: 10.5265067 },
                    html_instructions:
                      '<b>Links</b> abbiegen auf <b>Fallersleber Str.</b>',
                    maneuver: 'turn-left',
                    polyline: {
                      points: 'uo_~Hsqf_AIQAEACCGCIIWACIYIWGOWoAISAI[cBGc@',
                    },
                    start_location: { lat: 52.26763330000001, lng: 10.5245765 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '63 m', value: 63 },
                    duration: { text: '1 Minute', value: 18 },
                    end_location: { lat: 52.2688128, lng: 10.5261275 },
                    html_instructions:
                      '<b>Links</b> abbiegen auf <b>Wilhelmstraße</b>',
                    maneuver: 'turn-left',
                    polyline: { points: '{s_~Hu}f_AGFEBy@f@]V' },
                    start_location: { lat: 52.2683003, lng: 10.5265067 },
                    travel_mode: 'DRIVING',
                  },
                  {
                    distance: { text: '37 m', value: 37 },
                    duration: { text: '1 Minute', value: 9 },
                    end_location: { lat: 52.26896499999999, lng: 10.5266042 },
                    html_instructions: '<b>Rechts</b> abbiegen',
                    maneuver: 'turn-right',
                    polyline: { points: 'aw_~Hi{f_AI]EUGSCOAE' },
                    start_location: { lat: 52.2688128, lng: 10.5261275 },
                    travel_mode: 'DRIVING',
                  },
                ],
                traffic_speed_entry: [],
                via_waypoint: [],
              },
            ],
            overview_polyline: {
              points:
                'cmh_I_vq|@wBdB{@yDeA{E_CRk@cCcAoEeAwF]aQWiLRA|Ec@|D_@xIy@`i@{Ene@oEpSkBvO}AbBIb@C@FBHLLRAJOBK@I|@QnGu@tEg@nSmBjLsAdMiAvNuAhLq@dMkAtMkAzEg@XUbQqSbUyWhB{BPa@n@iDzAiLnCeTfCmQdGoIhHmJ`C_DfWq\\nJcMtAaBf@Qv@XtH`DzJdEpAh@\\BxBq@zBw@l@QbAN~JdCbH~AzAb@v@`@`A`A~AtCpAdB~Az@`ANp@C\\C`@Kl@[lBiA^O~@An@@v@P|Ct@rGxAdJxBdUfFdGnA~ESbj@uCh\\}AtXyApCMhBW|AcAhBiB`B`EVvANjCLfCt@bDjEtMlCxI`CxGbA~A|A|AlAp@zAZtHNnCLhGf@dCVxCTtD^lAJ~B^jAVHNLHNZB^Ij@WRo@LsDEo@C[KUSSe@MyAFiN@wCIoAJ_IRoLZoMx@gVvJgrBlC}i@tD_v@|Ao_@t@mNxAmRzAcNbB_MhDiRxB{JtBkIzEyO|Rei@lK{XvHsSpDwJzDiLnRqm@zD}LhEuNhBcHvCsMpCwOhBmMfAeJbBeTd@sIZ}Hd@{RBqQKqZAmFU_a@?gIDcH\\iX`Aac@tAyi@jC}lADeF?qOYeRa@wKs@}MkBo\\yFgbAsJgbBqBya@a@iRO}O?wObAmcA|@g{@\\w\\h@g\\b@yM~Fw~A~A_c@vCaw@~A}a@tBi^nBaVvHgy@|Eec@pDo^`AkK~Fyt@jAgKvC}SdIsi@~[qwBxFe_@dM{y@xH{g@d@iBz@wFbAuGx@wEdDiS\\aA`@i@d@WrGaBn@Bf@V`An@dCjCxEvDzBpAnHhEtLlGfKtFtHvE~ErDtEjEzEnFdB`CvFzItGjMvErJhG~KtB`DrDvEbEbEfE`DbCzA|BhAfE`BbCn@`Fx@lBNlCHdCAxESz@J^JVXRf@Jt@Av@Mj@a@r@[Nk@G_@_@Si@Gq@HiCx@_IhAaRt@gLn@uGj@gDZeA~AqDv@kBZaBR_BFcCEeBUcD]qCmAyJUoEC}JH{QHgFRqHb@aI?qALsBHSVM~@Wd@a@l@o@nAm@xDiBv@Y~@Gx@[|DeBfHkCdB}@T]G}CMaK?SfBY`BQ|@WnDe@z@Al@PvAr@vA~@PVl@j@vBpAlAXX@f@Gt@]jCiAtC}AbBy@JCASK[kAkEc@gCMJwA~@Os@Mi@',
            },
            summary: 'A2',
            warnings: [],
            waypoint_order: [],
          },
        ],
        status: 'OK',
      },
    },
    {
      kind: 'calendar#event',
      etag: '"3252319638252000"',
      id: 'c9hmae9ic4sj4bb170p62b9kcgs6cb9occrm2b9ncgpj6d1jckq3adb1c8',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=YzlobWFlOWljNHNqNGJiMTcwcDYyYjlrY2dzNmNiOW9jY3JtMmI5bmNncGo2ZDFqY2txM2FkYjFjOCBjaHJpc3RpYW4ud29pemlzY2hrZUBnb29nbGVtYWlsLmNvbQ',
      created: '2021-07-13T07:03:39.000Z',
      updated: '2021-07-13T07:03:39.126Z',
      summary: 'Arzt Ergebnisse erfragen',
      creator: { email: 'christian.woizischke@googlemail.com', self: true },
      organizer: { email: 'christian.woizischke@googlemail.com', self: true },
      start: { dateTime: '2021-07-14T15:00:00+02:00', timeZone: 'Europe/Rome' },
      end: { dateTime: '2021-07-14T16:00:00+02:00', timeZone: 'Europe/Rome' },
      iCalUID:
        'c9hmae9ic4sj4bb170p62b9kcgs6cb9occrm2b9ncgpj6d1jckq3adb1c8@google.com',
      sequence: 0,
      reminders: { useDefault: true },
      eventType: 'default',
    },
    {
      kind: 'calendar#event',
      etag: '"3251894756186000"',
      id: '_60q30c1g60o30e1i60o4ac1g60rj8gpl88rj2c1h84s34h9g60s30c1g60o30c1g84skadhi74s3ig9l6osk8dhg64o30c1g60o30c1g60o30c1g60o32c1g60o30c1g74p3ch9m70s42e1l612k4dpk8ks32d2564s3gga275344c2364pg_20210714T133000Z',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=XzYwcTMwYzFnNjBvMzBlMWk2MG80YWMxZzYwcmo4Z3BsODhyajJjMWg4NHMzNGg5ZzYwczMwYzFnNjBvMzBjMWc4NHNrYWRoaTc0czNpZzlsNm9zazhkaGc2NG8zMGMxZzYwbzMwYzFnNjBvMzBjMWc2MG8zMmMxZzYwbzMwYzFnNzRwM2NoOW03MHM0MmUxbDYxMms0ZHBrOGtzMzJkMjU2NHMzZ2dhMjc1MzQ0YzIzNjRwZ18yMDIxMDcxNFQxMzMwMDBaIGNocmlzdGlhbi53b2l6aXNjaGtlQGdvb2dsZW1haWwuY29t',
      created: '2021-01-08T14:47:46.000Z',
      updated: '2021-07-10T20:02:58.093Z',
      summary: 'BUG-Management / Runde',
      description: 'Der wöchentliche Blick auf die Bugs. 😊\n',
      location: 'Und täglich grüßt das Murmeltier',
      creator: { email: 'christian.woizischke@googlemail.com', self: true },
      organizer: {
        email: 'fabian.freiter@vwfs.io',
        displayName: 'Fabian Freiter',
      },
      start: {
        dateTime: '2021-07-14T15:30:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      end: {
        dateTime: '2021-07-14T16:00:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      recurringEventId:
        '_60q30c1g60o30e1i60o4ac1g60rj8gpl88rj2c1h84s34h9g60s30c1g60o30c1g84skadhi74s3ig9l6osk8dhg64o30c1g60o30c1g60o30c1g60o32c1g60o30c1g74p3ch9m70s42e1l612k4dpk8ks32d2564s3gga275344c2364pg',
      originalStartTime: {
        dateTime: '2021-07-14T15:30:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      iCalUID:
        '040000008200E00074C5B7101A82E00800000000A9E62989A569D601000000000000000010000000926E688A850EB74E814E188AB9FB0C13',
      sequence: 11,
      attendees: [
        {
          email: 'christian.woizischke@googlemail.com',
          self: true,
          optional: true,
          responseStatus: 'accepted',
        },
        {
          email: 'bjoern.zumbeck@vwfs.io',
          displayName: 'Bjoern Zumbeck',
          responseStatus: 'needsAction',
        },
        {
          email: 'christian@woizischke.de',
          displayName: "'christian@woizischke.de'",
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.tuan.dang-schulz@vwfs.io',
          displayName: 'Tuan Dang-Schulz (extern)',
          responseStatus: 'needsAction',
        },
        {
          email: 'florian.ungar@vwfs.com',
          displayName: 'Ungar, Florian',
          responseStatus: 'needsAction',
        },
        {
          email: 'jasper.stoob@vwfs.com',
          displayName: 'Stoob, Jasper',
          responseStatus: 'needsAction',
        },
        {
          email: 'jens.stephani@msg-david.de',
          displayName: 'Jens Stephani',
          responseStatus: 'needsAction',
        },
        {
          email: 'johannes.bader@leitwerk-consulting.com',
          displayName: 'Johannes Bader',
          responseStatus: 'needsAction',
        },
        {
          email: 'philipp.brzosa@vwfs.io',
          displayName: 'Philipp Brzosa',
          responseStatus: 'needsAction',
        },
        {
          email: 'rk@rhetra.net',
          displayName: 'rk',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.florian.maetschke@vwfs.com',
          displayName: 'extern.Florian.Maetschke',
          optional: true,
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.florian.maetschke@vwfs.io',
          displayName: 'Florian Maetschke (extern)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.joscha.pelster@vwfs.com',
          displayName: 'Pelster, Joscha (EXTERN)',
          optional: true,
          responseStatus: 'needsAction',
        },
        {
          email: 'joscha.pelster@expleogroup.com',
          displayName: 'Joscha Pelster',
          optional: true,
          responseStatus: 'needsAction',
        },
        {
          email: 'tuan.dang-schulz@vwfs.io',
          displayName: 'Tuan Dang-Schulz',
          responseStatus: 'needsAction',
        },
      ],
      guestsCanInviteOthers: false,
      privateCopy: true,
      reminders: { useDefault: true },
      eventType: 'default',
    },
    {
      kind: 'calendar#event',
      etag: '"3251626865220000"',
      id: '_60q30c1g60o30e1i60o4ac1g60rj8gpl88rj2c1h84s34h9g60s30c1g60o30c1g8oo44gpm60qkaea26sq48dpg64o30c1g60o30c1g60o30c1g60o32c1g60o30c1g89334e9i8kr4cdhm74s42dpk890k6ca36gsjehi470pk8h1o6ksg_20210715T114500Z',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=XzYwcTMwYzFnNjBvMzBlMWk2MG80YWMxZzYwcmo4Z3BsODhyajJjMWg4NHMzNGg5ZzYwczMwYzFnNjBvMzBjMWc4b280NGdwbTYwcWthZWEyNnNxNDhkcGc2NG8zMGMxZzYwbzMwYzFnNjBvMzBjMWc2MG8zMmMxZzYwbzMwYzFnODkzMzRlOWk4a3I0Y2RobTc0czQyZHBrODkwazZjYTM2Z3NqZWhpNDcwcGs4aDFvNmtzZ18yMDIxMDcxNVQxMTQ1MDBaIGNocmlzdGlhbi53b2l6aXNjaGtlQGdvb2dsZW1haWwuY29t',
      created: '2021-07-09T06:21:08.000Z',
      updated: '2021-07-09T06:50:32.610Z',
      summary: 'Refinement Serie II',
      description:
        '\n\nVolkswagen Bank GmbH\nSitz/Registered seat: Braunschweig\nRegistergericht/Registration court: Amtsgericht Braunschweig\nHRB Nr./Commercial Register No.: 1819\nVorsitzender des Aufsichtsrats/Chairman of the Supervisory Board: Dr. Jörg Boche\nGeschäftsführer/Executive Director: Dr. Michael Reinhart (Sprecher/Spokesman), Christian Löbke, Oliver Roes, Dr. Volker Stadler\n\nWichtiger Hinweis: Die vorgenannten Angaben werden jeder E-Mail automatisch hinzugefügt und lassen keine Rückschlüsse auf den Rechtscharakter der E-Mail zu.\nImportant note: The above information is automatically added to this e-mail. This addition does not constitute a representation that the content of this e-mail is legally relevant and/or is intended to be legally binding upon Volkswagen Bank GmbH.\n',
      location: 'Teams Murmeltier',
      creator: { email: 'christian.woizischke@googlemail.com', self: true },
      organizer: {
        email: 'florian.ungar@vwfs.com',
        displayName: 'Ungar, Florian',
      },
      start: {
        dateTime: '2021-07-15T13:45:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      end: {
        dateTime: '2021-07-15T15:00:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      recurringEventId:
        '_60q30c1g60o30e1i60o4ac1g60rj8gpl88rj2c1h84s34h9g60s30c1g60o30c1g8oo44gpm60qkaea26sq48dpg64o30c1g60o30c1g60o30c1g60o32c1g60o30c1g89334e9i8kr4cdhm74s42dpk890k6ca36gsjehi470pk8h1o6ksg',
      originalStartTime: {
        dateTime: '2021-07-15T13:45:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      iCalUID:
        '040000008200E00074C5B7101A82E00800000000F0BC605E9B74D701000000000000000010000000BF292E6F6698A74BAC1C497FD83DD859',
      sequence: 0,
      attendees: [
        {
          email: 'christian.woizischke@googlemail.com',
          self: true,
          responseStatus: 'accepted',
        },
        {
          email: 'birte.baumgart@vwfs.com',
          displayName: 'Baumgart, Birte',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.christian.woizischke@vwfs.com',
          displayName: 'Woizischke, Christian (extern)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.florian.maetschke@vwfs.io',
          displayName: 'Maetschke, Florian',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.jens.stephani@vwfs.com',
          displayName: 'Stephani, Jens (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.johannes.bader@vwfs.com',
          displayName: 'Bader, Johannes (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.joscha.pelster@vwfs.com',
          displayName: 'Pelster, Joscha (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.mario.hauschild@vwfs.com',
          displayName: 'Hauschild, Mario (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.tuan.dang-schulz@vwfs.io',
          displayName: "'extern.tuan.dang-schulz@vwfs.io'",
          responseStatus: 'needsAction',
        },
        {
          email: 'fabian.freiter@vwfs.io',
          displayName: 'Freiter, Fabian',
          responseStatus: 'needsAction',
        },
        {
          email: 'jasper.stoob@vwfs.com',
          displayName: 'Stoob, Jasper',
          responseStatus: 'needsAction',
        },
        { email: 'jens.stephani@msg-david.de', responseStatus: 'needsAction' },
        {
          email: 'johannes.bader@leitwerk-consulting.com',
          displayName: "'johannes.bader@leitwerk-consulting.com'",
          responseStatus: 'needsAction',
        },
        {
          email: 'joscha.pelster@expleogroup.com',
          displayName: "'joscha.pelster@expleogroup.com'",
          responseStatus: 'needsAction',
        },
        {
          email: 'matthias.lueck@vwfs.com',
          displayName: 'Lueck, Matthias',
          responseStatus: 'needsAction',
        },
        {
          email: 'tuan.dang-schulz@vwfs.io',
          displayName: 'Dang-Schulz, Tuan',
          optional: true,
          responseStatus: 'needsAction',
        },
      ],
      guestsCanInviteOthers: false,
      privateCopy: true,
      reminders: { useDefault: true },
      eventType: 'default',
    },
    {
      kind: 'calendar#event',
      etag: '"3206161915321000"',
      id: '6crm4cr665j32b9l6sq3ib9k6ssjcb9o61hj8b9i6kr34o9mcpgjadpicc',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=NmNybTRjcjY2NWozMmI5bDZzcTNpYjlrNnNzamNiOW82MWhqOGI5aTZrcjM0bzltY3BnamFkcGljYyBjaHJpc3RpYW4ud29pemlzY2hrZUBnb29nbGVtYWlsLmNvbQ',
      created: '2020-08-01T09:03:01.000Z',
      updated: '2021-01-05T23:28:53.746Z',
      summary: 'Gas und Strom Anbieter wechseln',
      creator: { email: 'christian.woizischke@googlemail.com', self: true },
      organizer: { email: 'christian.woizischke@googlemail.com', self: true },
      start: { dateTime: '2021-07-17T12:00:00+02:00', timeZone: 'Europe/Rome' },
      end: { dateTime: '2021-07-17T23:00:00+02:00', timeZone: 'Europe/Rome' },
      iCalUID:
        '6crm4cr665j32b9l6sq3ib9k6ssjcb9o61hj8b9i6kr34o9mcpgjadpicc@google.com',
      sequence: 1,
      extendedProperties: { private: { eventAttendeeList: '[]' } },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 10 },
          { method: 'popup', minutes: 10 },
        ],
      },
      eventType: 'default',
    },
    {
      kind: 'calendar#event',
      etag: '"3234050872579000"',
      id: '65h78dpq1jvna64i0p3f75q6ee_20210720T170000Z',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=NjVoNzhkcHExanZuYTY0aTBwM2Y3NXE2ZWVfMjAyMTA3MjBUMTcwMDAwWiBjaHJpc3RpYW4ud29pemlzY2hrZUBnb29nbGVtYWlsLmNvbQ',
      created: '2018-04-05T19:08:22.000Z',
      updated: '2021-06-20T09:19:13.227Z',
      summary: 'Lindy Hop',
      location:
        'Braunschweiger Tanz-Sport-Club e.V., Böcklerstraße 219, 38102 Braunschweig, Deutschland',
      creator: {
        email: 'christian.woizischke@googlemail.com',
        displayName: 'Christian Woizischke',
        self: true,
      },
      organizer: {
        email: 'christian.woizischke@googlemail.com',
        displayName: 'Christian Woizischke',
        self: true,
      },
      start: { dateTime: '2021-07-20T19:00:00+02:00', timeZone: 'Europe/Rome' },
      end: { dateTime: '2021-07-20T22:00:00+02:00', timeZone: 'Europe/Rome' },
      recurringEventId: '65h78dpq1jvna64i0p3f75q6ee',
      originalStartTime: {
        dateTime: '2021-07-20T19:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      iCalUID: '65h78dpq1jvna64i0p3f75q6ee@google.com',
      sequence: 2,
      extendedProperties: { private: { eventAttendeeList: '[]' } },
      reminders: { useDefault: false },
      eventType: 'default',
    },
    {
      kind: 'calendar#event',
      etag: '"3251626874732000"',
      id: '_60q30c1g60o30e1i60o4ac1g60rj8gpl88rj2c1h84s34h9g60s30c1g60o30c1g70o3ighg8cs4cea26sq48dpg64o30c1g60o30c1g60o30c1g60o32c1g60o30c1g6ko3ed9m8oq46e1g6d0j4dhk8gs32g9p70p4cc1m6p14cchl6h30_20210721T083000Z',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=XzYwcTMwYzFnNjBvMzBlMWk2MG80YWMxZzYwcmo4Z3BsODhyajJjMWg4NHMzNGg5ZzYwczMwYzFnNjBvMzBjMWc3MG8zaWdoZzhjczRjZWEyNnNxNDhkcGc2NG8zMGMxZzYwbzMwYzFnNjBvMzBjMWc2MG8zMmMxZzYwbzMwYzFnNmtvM2VkOW04b3E0NmUxZzZkMGo0ZGhrOGdzMzJnOXA3MHA0Y2MxbTZwMTRjY2hsNmgzMF8yMDIxMDcyMVQwODMwMDBaIGNocmlzdGlhbi53b2l6aXNjaGtlQGdvb2dsZW1haWwuY29t',
      created: '2021-07-09T06:22:29.000Z',
      updated: '2021-07-09T06:50:37.366Z',
      summary: 'Refinement Serie I',
      description:
        '\n\nVolkswagen Bank GmbH\nSitz/Registered seat: Braunschweig\nRegistergericht/Registration court: Amtsgericht Braunschweig\nHRB Nr./Commercial Register No.: 1819\nVorsitzender des Aufsichtsrats/Chairman of the Supervisory Board: Dr. Jörg Boche\nGeschäftsführer/Executive Director: Dr. Michael Reinhart (Sprecher/Spokesman), Christian Löbke, Oliver Roes, Dr. Volker Stadler\n\nWichtiger Hinweis: Die vorgenannten Angaben werden jeder E-Mail automatisch hinzugefügt und lassen keine Rückschlüsse auf den Rechtscharakter der E-Mail zu.\nImportant note: The above information is automatically added to this e-mail. This addition does not constitute a representation that the content of this e-mail is legally relevant and/or is intended to be legally binding upon Volkswagen Bank GmbH.\n',
      location: 'Teams Murmeltier',
      creator: { email: 'christian.woizischke@googlemail.com', self: true },
      organizer: {
        email: 'florian.ungar@vwfs.com',
        displayName: 'Ungar, Florian',
      },
      start: {
        dateTime: '2021-07-21T10:30:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      end: {
        dateTime: '2021-07-21T12:00:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      recurringEventId:
        '_60q30c1g60o30e1i60o4ac1g60rj8gpl88rj2c1h84s34h9g60s30c1g60o30c1g70o3ighg8cs4cea26sq48dpg64o30c1g60o30c1g60o30c1g60o32c1g60o30c1g6ko3ed9m8oq46e1g6d0j4dhk8gs32g9p70p4cc1m6p14cchl6h30',
      originalStartTime: {
        dateTime: '2021-07-21T10:30:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      iCalUID:
        '040000008200E00074C5B7101A82E00800000000809B0C8F9B74D70100000000000000001000000050756F4C803A264D81A982F066BF254F',
      sequence: 0,
      attendees: [
        {
          email: 'christian.woizischke@googlemail.com',
          self: true,
          responseStatus: 'accepted',
        },
        {
          email: 'birte.baumgart@vwfs.com',
          displayName: 'Baumgart, Birte',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.christian.woizischke@vwfs.com',
          displayName: 'Woizischke, Christian (extern)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.florian.maetschke@vwfs.io',
          displayName: 'Maetschke, Florian',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.jens.stephani@vwfs.com',
          displayName: 'Stephani, Jens (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.johannes.bader@vwfs.com',
          displayName: 'Bader, Johannes (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.joscha.pelster@vwfs.com',
          displayName: 'Pelster, Joscha (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.mario.hauschild@vwfs.com',
          displayName: 'Hauschild, Mario (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.tuan.dang-schulz@vwfs.io',
          displayName: "'extern.tuan.dang-schulz@vwfs.io'",
          responseStatus: 'needsAction',
        },
        {
          email: 'fabian.freiter@vwfs.io',
          displayName: 'Freiter, Fabian',
          responseStatus: 'needsAction',
        },
        {
          email: 'jasper.stoob@vwfs.com',
          displayName: 'Stoob, Jasper',
          responseStatus: 'needsAction',
        },
        { email: 'jens.stephani@msg-david.de', responseStatus: 'needsAction' },
        {
          email: 'johannes.bader@leitwerk-consulting.com',
          displayName: "'johannes.bader@leitwerk-consulting.com'",
          responseStatus: 'needsAction',
        },
        {
          email: 'joscha.pelster@expleogroup.com',
          displayName: "'joscha.pelster@expleogroup.com'",
          responseStatus: 'needsAction',
        },
        {
          email: 'matthias.lueck@vwfs.com',
          displayName: 'Lueck, Matthias',
          responseStatus: 'needsAction',
        },
        {
          email: 'tuan.dang-schulz@vwfs.io',
          displayName: 'Dang-Schulz, Tuan',
          responseStatus: 'needsAction',
        },
      ],
      guestsCanInviteOthers: false,
      privateCopy: true,
      reminders: { useDefault: true },
      eventType: 'default',
    },
    {
      kind: 'calendar#event',
      etag: '"3251894756186000"',
      id: '_60q30c1g60o30e1i60o4ac1g60rj8gpl88rj2c1h84s34h9g60s30c1g60o30c1g84skadhi74s3ig9l6osk8dhg64o30c1g60o30c1g60o30c1g60o32c1g60o30c1g74p3ch9m70s42e1l612k4dpk8ks32d2564s3gga275344c2364pg_20210721T133000Z',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=XzYwcTMwYzFnNjBvMzBlMWk2MG80YWMxZzYwcmo4Z3BsODhyajJjMWg4NHMzNGg5ZzYwczMwYzFnNjBvMzBjMWc4NHNrYWRoaTc0czNpZzlsNm9zazhkaGc2NG8zMGMxZzYwbzMwYzFnNjBvMzBjMWc2MG8zMmMxZzYwbzMwYzFnNzRwM2NoOW03MHM0MmUxbDYxMms0ZHBrOGtzMzJkMjU2NHMzZ2dhMjc1MzQ0YzIzNjRwZ18yMDIxMDcyMVQxMzMwMDBaIGNocmlzdGlhbi53b2l6aXNjaGtlQGdvb2dsZW1haWwuY29t',
      created: '2021-01-08T14:47:46.000Z',
      updated: '2021-07-10T20:02:58.093Z',
      summary: 'BUG-Management / Runde',
      description: 'Der wöchentliche Blick auf die Bugs. 😊\n',
      location: 'Und täglich grüßt das Murmeltier',
      creator: { email: 'christian.woizischke@googlemail.com', self: true },
      organizer: {
        email: 'fabian.freiter@vwfs.io',
        displayName: 'Fabian Freiter',
      },
      start: {
        dateTime: '2021-07-21T15:30:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      end: {
        dateTime: '2021-07-21T16:00:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      recurringEventId:
        '_60q30c1g60o30e1i60o4ac1g60rj8gpl88rj2c1h84s34h9g60s30c1g60o30c1g84skadhi74s3ig9l6osk8dhg64o30c1g60o30c1g60o30c1g60o32c1g60o30c1g74p3ch9m70s42e1l612k4dpk8ks32d2564s3gga275344c2364pg',
      originalStartTime: {
        dateTime: '2021-07-21T15:30:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      iCalUID:
        '040000008200E00074C5B7101A82E00800000000A9E62989A569D601000000000000000010000000926E688A850EB74E814E188AB9FB0C13',
      sequence: 11,
      attendees: [
        {
          email: 'christian.woizischke@googlemail.com',
          self: true,
          optional: true,
          responseStatus: 'accepted',
        },
        {
          email: 'bjoern.zumbeck@vwfs.io',
          displayName: 'Bjoern Zumbeck',
          responseStatus: 'needsAction',
        },
        {
          email: 'christian@woizischke.de',
          displayName: "'christian@woizischke.de'",
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.tuan.dang-schulz@vwfs.io',
          displayName: 'Tuan Dang-Schulz (extern)',
          responseStatus: 'needsAction',
        },
        {
          email: 'florian.ungar@vwfs.com',
          displayName: 'Ungar, Florian',
          responseStatus: 'needsAction',
        },
        {
          email: 'jasper.stoob@vwfs.com',
          displayName: 'Stoob, Jasper',
          responseStatus: 'needsAction',
        },
        {
          email: 'jens.stephani@msg-david.de',
          displayName: 'Jens Stephani',
          responseStatus: 'needsAction',
        },
        {
          email: 'johannes.bader@leitwerk-consulting.com',
          displayName: 'Johannes Bader',
          responseStatus: 'needsAction',
        },
        {
          email: 'philipp.brzosa@vwfs.io',
          displayName: 'Philipp Brzosa',
          responseStatus: 'needsAction',
        },
        {
          email: 'rk@rhetra.net',
          displayName: 'rk',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.florian.maetschke@vwfs.com',
          displayName: 'extern.Florian.Maetschke',
          optional: true,
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.florian.maetschke@vwfs.io',
          displayName: 'Florian Maetschke (extern)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.joscha.pelster@vwfs.com',
          displayName: 'Pelster, Joscha (EXTERN)',
          optional: true,
          responseStatus: 'needsAction',
        },
        {
          email: 'joscha.pelster@expleogroup.com',
          displayName: 'Joscha Pelster',
          optional: true,
          responseStatus: 'needsAction',
        },
        {
          email: 'tuan.dang-schulz@vwfs.io',
          displayName: 'Tuan Dang-Schulz',
          responseStatus: 'needsAction',
        },
      ],
      guestsCanInviteOthers: false,
      privateCopy: true,
      reminders: { useDefault: true },
      eventType: 'default',
    },
    {
      kind: 'calendar#event',
      etag: '"3251626865220000"',
      id: '_60q30c1g60o30e1i60o4ac1g60rj8gpl88rj2c1h84s34h9g60s30c1g60o30c1g8oo44gpm60qkaea26sq48dpg64o30c1g60o30c1g60o30c1g60o32c1g60o30c1g89334e9i8kr4cdhm74s42dpk890k6ca36gsjehi470pk8h1o6ksg_20210722T114500Z',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=XzYwcTMwYzFnNjBvMzBlMWk2MG80YWMxZzYwcmo4Z3BsODhyajJjMWg4NHMzNGg5ZzYwczMwYzFnNjBvMzBjMWc4b280NGdwbTYwcWthZWEyNnNxNDhkcGc2NG8zMGMxZzYwbzMwYzFnNjBvMzBjMWc2MG8zMmMxZzYwbzMwYzFnODkzMzRlOWk4a3I0Y2RobTc0czQyZHBrODkwazZjYTM2Z3NqZWhpNDcwcGs4aDFvNmtzZ18yMDIxMDcyMlQxMTQ1MDBaIGNocmlzdGlhbi53b2l6aXNjaGtlQGdvb2dsZW1haWwuY29t',
      created: '2021-07-09T06:21:08.000Z',
      updated: '2021-07-09T06:50:32.610Z',
      summary: 'Refinement Serie II',
      description:
        '\n\nVolkswagen Bank GmbH\nSitz/Registered seat: Braunschweig\nRegistergericht/Registration court: Amtsgericht Braunschweig\nHRB Nr./Commercial Register No.: 1819\nVorsitzender des Aufsichtsrats/Chairman of the Supervisory Board: Dr. Jörg Boche\nGeschäftsführer/Executive Director: Dr. Michael Reinhart (Sprecher/Spokesman), Christian Löbke, Oliver Roes, Dr. Volker Stadler\n\nWichtiger Hinweis: Die vorgenannten Angaben werden jeder E-Mail automatisch hinzugefügt und lassen keine Rückschlüsse auf den Rechtscharakter der E-Mail zu.\nImportant note: The above information is automatically added to this e-mail. This addition does not constitute a representation that the content of this e-mail is legally relevant and/or is intended to be legally binding upon Volkswagen Bank GmbH.\n',
      location: 'Teams Murmeltier',
      creator: { email: 'christian.woizischke@googlemail.com', self: true },
      organizer: {
        email: 'florian.ungar@vwfs.com',
        displayName: 'Ungar, Florian',
      },
      start: {
        dateTime: '2021-07-22T13:45:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      end: {
        dateTime: '2021-07-22T15:00:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      recurringEventId:
        '_60q30c1g60o30e1i60o4ac1g60rj8gpl88rj2c1h84s34h9g60s30c1g60o30c1g8oo44gpm60qkaea26sq48dpg64o30c1g60o30c1g60o30c1g60o32c1g60o30c1g89334e9i8kr4cdhm74s42dpk890k6ca36gsjehi470pk8h1o6ksg',
      originalStartTime: {
        dateTime: '2021-07-22T13:45:00+02:00',
        timeZone: 'Europe/Amsterdam',
      },
      iCalUID:
        '040000008200E00074C5B7101A82E00800000000F0BC605E9B74D701000000000000000010000000BF292E6F6698A74BAC1C497FD83DD859',
      sequence: 0,
      attendees: [
        {
          email: 'christian.woizischke@googlemail.com',
          self: true,
          responseStatus: 'accepted',
        },
        {
          email: 'birte.baumgart@vwfs.com',
          displayName: 'Baumgart, Birte',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.christian.woizischke@vwfs.com',
          displayName: 'Woizischke, Christian (extern)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.florian.maetschke@vwfs.io',
          displayName: 'Maetschke, Florian',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.jens.stephani@vwfs.com',
          displayName: 'Stephani, Jens (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.johannes.bader@vwfs.com',
          displayName: 'Bader, Johannes (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.joscha.pelster@vwfs.com',
          displayName: 'Pelster, Joscha (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.mario.hauschild@vwfs.com',
          displayName: 'Hauschild, Mario (EXTERN)',
          responseStatus: 'needsAction',
        },
        {
          email: 'extern.tuan.dang-schulz@vwfs.io',
          displayName: "'extern.tuan.dang-schulz@vwfs.io'",
          responseStatus: 'needsAction',
        },
        {
          email: 'fabian.freiter@vwfs.io',
          displayName: 'Freiter, Fabian',
          responseStatus: 'needsAction',
        },
        {
          email: 'jasper.stoob@vwfs.com',
          displayName: 'Stoob, Jasper',
          responseStatus: 'needsAction',
        },
        { email: 'jens.stephani@msg-david.de', responseStatus: 'needsAction' },
        {
          email: 'johannes.bader@leitwerk-consulting.com',
          displayName: "'johannes.bader@leitwerk-consulting.com'",
          responseStatus: 'needsAction',
        },
        {
          email: 'joscha.pelster@expleogroup.com',
          displayName: "'joscha.pelster@expleogroup.com'",
          responseStatus: 'needsAction',
        },
        {
          email: 'matthias.lueck@vwfs.com',
          displayName: 'Lueck, Matthias',
          responseStatus: 'needsAction',
        },
        {
          email: 'tuan.dang-schulz@vwfs.io',
          displayName: 'Dang-Schulz, Tuan',
          optional: true,
          responseStatus: 'needsAction',
        },
      ],
      guestsCanInviteOthers: false,
      privateCopy: true,
      reminders: { useDefault: true },
      eventType: 'default',
    },
    {
      kind: 'calendar#event',
      etag: '"3251894640612000"',
      id: '74pjce3364r30bb46kqj6b9k6cpj8b9o70sj2bb6cpgjcdhp6tgjechn68',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=NzRwamNlMzM2NHIzMGJiNDZrcWo2YjlrNmNwajhiOW83MHNqMmJiNmNwZ2pjZGhwNnRnamVjaG42OCBjaHJpc3RpYW4ud29pemlzY2hrZUBnb29nbGVtYWlsLmNvbQ',
      created: '2021-04-23T15:44:22.000Z',
      updated: '2021-07-10T20:02:00.306Z',
      summary: 'Hausratversicherung Umzug',
      creator: { email: 'christian.woizischke@googlemail.com', self: true },
      organizer: { email: 'christian.woizischke@googlemail.com', self: true },
      start: { date: '2021-07-24' },
      end: { date: '2021-07-26' },
      transparency: 'transparent',
      iCalUID:
        '74pjce3364r30bb46kqj6b9k6cpj8b9o70sj2bb6cpgjcdhp6tgjechn68@google.com',
      sequence: 2,
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 10 },
          { method: 'email', minutes: 430 },
        ],
      },
      eventType: 'default',
    },
    {
      kind: 'calendar#event',
      etag: '"3251655830300000"',
      id: '77n56j6ljeqjnr7tggmddk1so6',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=NzduNTZqNmxqZXFqbnI3dGdnbWRkazFzbzYgY2hyaXN0aWFuLndvaXppc2Noa2VAZ29vZ2xlbWFpbC5jb20',
      created: '2021-05-25T15:52:59.000Z',
      updated: '2021-07-09T10:51:55.150Z',
      summary: 'Glasfaser?',
      creator: { email: 'christian.woizischke@googlemail.com', self: true },
      organizer: { email: 'christian.woizischke@googlemail.com', self: true },
      start: { date: '2021-07-24' },
      end: { date: '2021-07-25' },
      transparency: 'transparent',
      iCalUID: '77n56j6ljeqjnr7tggmddk1so6@google.com',
      sequence: 3,
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 10 },
          { method: 'email', minutes: 430 },
        ],
      },
      eventType: 'default',
    },
    {
      kind: 'calendar#event',
      etag: '"3246804937046000"',
      id: '11tvuq1ht3a5u2p405u0njj0e3',
      status: 'confirmed',
      htmlLink:
        'https://www.google.com/calendar/event?eid=MTF0dnVxMWh0M2E1dTJwNDA1dTBuamowZTMgY2hyaXN0aWFuLndvaXppc2Noa2VAZ29vZ2xlbWFpbC5jb20',
      created: '2021-06-11T09:07:48.000Z',
      updated: '2021-06-11T09:07:48.523Z',
      summary: 'Bieni Urlaub',
      creator: { email: 'christian.woizischke@googlemail.com', self: true },
      organizer: { email: 'christian.woizischke@googlemail.com', self: true },
      start: { date: '2021-07-26' },
      end: { date: '2021-07-31' },
      transparency: 'transparent',
      iCalUID: '11tvuq1ht3a5u2p405u0njj0e3@google.com',
      sequence: 0,
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 10 },
          { method: 'email', minutes: 430 },
        ],
      },
      eventType: 'default',
    },
  ],
};

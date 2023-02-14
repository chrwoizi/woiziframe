import { WorkDirection } from './WorkDirection';

export const mock: WorkDirection[] = [
  {
    query: {
      name: 'Christian',
      origin: 'Im Zumpe 7, 31311 Uetze',
      destination: 'Frankfurter Str. 288, Braunschweig',
      mode: 'driving',
      weekdays: [1, 2, 3, 4, 5],
      fromHours: 6,
      toHours: 9,
    },
    directions: {
      geocoded_waypoints: [
        {
          geocoder_status: 'OK',
          place_id: 'ChIJ1wyQHwUbsEcRExDq6ZSPO3w',
          types: ['street_address'],
        },
        {
          geocoder_status: 'OK',
          place_id: 'ChIJr_WjaXP2r0cRwuPDThUchiQ',
          types: ['premise'],
        },
      ],
      routes: [
        {
          bounds: {
            northeast: { lat: 52.48021319999999, lng: 10.5190317 },
            southwest: { lat: 52.2456758, lng: 10.0895661 },
          },
          copyrights: 'Map data ©2021 GeoBasis-DE/BKG (©2009)',
          legs: [
            {
              distance: { text: '54,8 km', value: 54800 },
              duration: { text: '44 Minuten', value: 2657 },
              duration_in_traffic: { text: '42 Minuten', value: 2545 },
              end_address:
                'Frankfurter Str. 288, 38122 Braunschweig, Deutschland',
              end_location: { lat: 52.2568678, lng: 10.5144041 },
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
                  distance: { text: '9,0 km', value: 8953 },
                  duration: { text: '6 Minuten', value: 389 },
                  end_location: { lat: 52.2475384, lng: 10.5057227 },
                  html_instructions:
                    'An der Gabelung <b>rechts</b> halten und weiter auf <b>A391</b>',
                  maneuver: 'fork-right',
                  polyline: {
                    points:
                      'q}h~Hyxc_ALe@p@wD`BeKHo@F[DMDMFSHQDGDGJOHIDCLIJEDCd@M|EoANCTAL@JBJDHDB@LHPLPJVNDDPP?@VXzA|At@l@^ZdAz@|@p@`@Xx@h@PDLFTFbBfANJ^TbAl@`Ah@`@T`@R\\R^P`Ah@fAj@|@d@jB`AdB|@jAl@~@h@tC~AzBpAjAt@r@d@x@h@^Xv@h@rAdAr@h@@BvAlAhBdBPR`AbAnAvAz@dALLV^Z`@X^V^X^X`@Xb@V`@V^n@dAn@fAXd@FLRZt@vAb@z@l@lAl@fAr@zANZXl@NXTd@Xl@t@zALVVf@`@z@Zj@j@hAl@hAb@x@^l@^n@R^Zf@h@z@V`@X`@X`@v@fAZ^X`@dAlAXZZ\\XX\\\\\\Z@@VT\\\\r@l@d@^nA|@\\T^V^Vf@ZZNZP`Bv@hAf@|Bx@h@Nt@RHBXFVFf@HbAP|AT@?ZB^Dn@DL@^@\\B`A@f@?\\?^?^Az@CnAGd@Cf@C`BQn@G`@ElAQnAOTC~@MBAhBUfBUjBWn@G`AM~@OvOqB|G{@bAM`AK~@IbAER?T@X?L@X@\\D\\DNBH@RDJB@?NBFB^J^J^PXL\\P\\RZT\\TTRB@\\Zn@n@\\`@f@l@FHHJNVl@`AV^Zd@jApB~@`Bl@bAdA`BV^V^RZB@p@|@VZl@n@`@`@TRb@^VP\\V\\R\\P\\P\\N\\L^J^HLBPD^D^D^B^@^?^?^A\\CNATEVE`@I`@K\\K\\M^O\\OXOXQRKh@_@HGTQv@m@v@q@v@u@BCp@q@b@e@Z]Z[r@w@tAwAh@k@XYr@s@`BaBPOPQJKLKNO`AaA|AwA`@a@RQdD}C|@y@d@e@LKPQPO\\[@Av@q@DE`@[t@o@\\[TSFGZURQh@e@^[HGv@o@@ADEDCFGHGt@o@j@g@p@o@x@y@p@s@t@}@PUd@o@T]Zc@l@eAj@cAXk@Vk@`@_Ad@iATo@To@Tq@Vy@@CPu@ZiAVeA@CP{@XyAJi@BILs@NaAN{@Lq@V{ANm@No@b@}ATy@Rm@JWDMLYTi@Tg@',
                  },
                  start_location: { lat: 52.3159263, lng: 10.510366 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '0,3 km', value: 302 },
                  duration: { text: '1 Minute', value: 24 },
                  end_location: { lat: 52.2457725, lng: 10.5074002 },
                  html_instructions:
                    'Bei Ausfahrt <b>7-BS-Gartenstadt</b> Richtung <b>BS-Gartenstadt</b>/<wbr/><b>Messegelände</b> fahren',
                  maneuver: 'ramp-right',
                  polyline: {
                    points:
                      'cr{}Hw{b_ATSLOJQJI@AJGHEHEHCHAFAH?J@D?D@FBFBLDFDBBDBJFHFJDHDPBD@F?DAFAFADCDCDCDEBCDGDEBIDIDI@GBK@IBK@K?K?K@KAM?OAMASAIAGEc@C[',
                  },
                  start_location: { lat: 52.2475384, lng: 10.5057227 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '1,8 km', value: 1751 },
                  duration: { text: '3 Minuten', value: 190 },
                  end_location: { lat: 52.2567208, lng: 10.5181034 },
                  html_instructions: 'Weiter auf <b>Theodor-Heuss-Straße</b>',
                  polyline: {
                    points:
                      'ag{}Hgfc_AESGo@Ea@C[Eg@AOASCu@AWA[?_@?U?U@q@@]@c@@[@U?GFgABc@@g@@Y@Q?[@Y?e@Aa@CwAEm@?KAMAUAOAME]Gk@Ea@G_@E_@I_@G_@I]I_@EOCMK]K]K[EMK[M[ISCGMYOYMWOWOUOWGGGKQWQQOSSSOQSSQOQOOKMKECUSMIIG]SGG]W]Ok@YaAg@c@QKEQI_Ac@GC_A_@wAc@sA[_AOKAq@GaACSAA?uACO?eBHmBFgAPuAROB_BZq@TMDo@N_AXi@L}@P',
                  },
                  start_location: { lat: 52.2457725, lng: 10.5074002 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '0,2 km', value: 154 },
                  duration: { text: '1 Minute', value: 30 },
                  end_location: { lat: 52.2565617, lng: 10.5158727 },
                  html_instructions: '<b>Links</b> abbiegen auf <b>Holzhof</b>',
                  maneuver: 'turn-left',
                  polyline: { points: 'ok}}Hcie_AEP?XB^`@pJ' },
                  start_location: { lat: 52.2567208, lng: 10.5181034 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '57 m', value: 57 },
                  duration: { text: '1 Minute', value: 26 },
                  end_location: { lat: 52.257043, lng: 10.5155844 },
                  html_instructions:
                    'Bei <b>Am Alten Bahnhof</b> <b>rechts</b> abbiegen',
                  maneuver: 'turn-right',
                  polyline: { points: 'oj}}He{d_AWLMDQDKFEDKHIF' },
                  start_location: { lat: 52.2565617, lng: 10.5158727 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '86 m', value: 86 },
                  duration: { text: '1 Minute', value: 25 },
                  end_location: { lat: 52.2568678, lng: 10.5144041 },
                  html_instructions:
                    '<b>Links</b> abbiegen auf <b>Frankfurter Str.</b><div style="font-size:0.9em">Das Ziel befindet sich auf der rechten Seite</div>',
                  maneuver: 'turn-left',
                  polyline: {
                    points: 'om}}Hkyd_ACFALAB?D?F?FAH?H@D?FBHHd@FRBJ@FBPHn@',
                  },
                  start_location: { lat: 52.257043, lng: 10.5155844 },
                  travel_mode: 'DRIVING',
                },
              ],
              traffic_speed_entry: [],
              via_waypoint: [],
            },
          ],
          overview_polyline: {
            points:
              'cmh_I_vq|@wBdB{@yDeA{E_CRk@cCcAoEeAwF]aQWiLRA|Ec@|D_@xIy@`i@{Ene@oEpSkBvO}AbBIb@C@FBHLLRAJOBK@I|@QnGu@tEg@nSmBjLsAdMiAvNuAhLq@dMkAtMkAzEg@XUbQqSbUyWhB{BPa@n@iDzAiLnCeTfCmQdGoIhHmJ`C_DfWq\\nJcMtAaBf@Qv@XtH`DzJdEpAh@\\BxBq@zBw@l@QbAN~JdCbH~AzAb@v@`@`A`A~AtCpAdB~Az@`ANp@C\\C`@Kl@[lBiA^O~@An@@v@P|Ct@rGxAdJxBdUfFdGnA~ESbj@uCh\\}AtXyApCMhBW|AcAhBiB`B`EVvANjCLfCt@bDjEtMlCxI`CxGbA~A|A|AlAp@zAZtHNnCLhGf@dCVxCTtD^lAJ~B^jAVHNLHNZB^Ij@WRo@LsDEo@C[KUSSe@MyAFiN@wCIoAJ_IRoLZoMx@gVvJgrBlC}i@tD_v@|Ao_@t@mNxAmRzAcNbB_MhDiRxB{JtBkIzEyO|Rei@lK{XvHsSpDwJzDiLnRqm@zD}LhEuNhBcHvCsMpCwOhBmMfAeJbBeTd@sIZ}Hd@{RBqQKqZAmFU_a@?gIDcH\\iX`Aac@tAyi@jC}lADeF?qOYeRa@wKs@}MkBo\\yFgbAsJgbBqBya@a@iRO}O?wObAmcA|@g{@\\w\\h@g\\b@yM~Fw~A~A_c@vCaw@~A}a@tBi^nBaVvHgy@|Eec@pDo^`AkK~Fyt@jAgKvC}SdIsi@~[qwBxFe_@dM{y@xH{g@d@iBz@wFbAuGx@wEdDiS\\aA`@i@d@WrGaBn@Bf@V`An@dCjCxEvDzBpAnHhEtLlGfKtFtHvE~ErDtEjEzEnFdB`CvFzItGjMvErJhG~KtB`DrDvEbEbEfE`DbCzA|BhAfE`BbCn@`Fx@lBNlCHdCAxES`Gq@vOoBv\\kEdCYbCOpABdBPbCj@tBdArA`ArCzCnAnBbJ~N`BvBhCdCpBnAxBz@~AX~BJlBGpBa@xBy@pBmAnCyBpCqCzKeL|R_RvKgJlAcAhEeEbCaDnCyEtBeFdA_DbCsKz@cFzAwGz@mCb@cAj@{@f@m@h@Wf@ARDhAl@h@JZIj@s@RwAMaCe@iFGiCB{BTkGBmBKsDc@mEaAyEsAuDoBcDmCkCeCiBuG{CwCcAsCk@sCOmEDuDXeBVoEfAiBf@}@PEPBx@`@pJWL_@JQLUPETAX?`@XnANhA',
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
    query: {
      name: 'Bianca',
      origin: 'Im Zumpe 7, 31311 Uetze',
      destination: 'Blumhardtstraße 2, 30625 Hannover',
      mode: 'transit',
      weekdays: [1, 2, 3, 4, 5],
      fromHours: 6,
      toHours: 9,
    },
    directions: {
      geocoded_waypoints: [
        {
          geocoder_status: 'OK',
          place_id: 'ChIJ1wyQHwUbsEcRExDq6ZSPO3w',
          types: ['street_address'],
        },
        {
          geocoder_status: 'OK',
          place_id: 'ChIJxWW7TXgLsEcRIPBagyg9sx0',
          types: ['premise'],
        },
      ],
      routes: [
        {
          bounds: {
            northeast: { lat: 52.4812009, lng: 10.0900783 },
            southwest: { lat: 52.3690443, lng: 9.8058394 },
          },
          copyrights: 'Map data ©2021 GeoBasis-DE/BKG (©2009)',
          legs: [
            {
              arrival_time: {
                text: '15:17',
                time_zone: 'Europe/Berlin',
                value: 1626182271,
              },
              departure_time: {
                text: '14:27',
                time_zone: 'Europe/Berlin',
                value: 1626179240,
              },
              distance: { text: '28,1 km', value: 28059 },
              duration: { text: '51 Minuten', value: 3031 },
              end_address: 'Blumhardtstraße 2, 30625 Hannover, Deutschland',
              end_location: { lat: 52.3727888, lng: 9.8060651 },
              start_address: 'Im Zumpe 7, 31311 Uetze, Deutschland',
              start_location: { lat: 52.4771402, lng: 10.0900783 },
              steps: [
                {
                  distance: { text: '0,7 km', value: 713 },
                  duration: { text: '9 Minuten', value: 520 },
                  end_location: { lat: 52.48113619999999, lng: 10.0867315 },
                  html_instructions: 'Gehen bis Hänigsen Dornbusch',
                  polyline: {
                    points:
                      'cmh_I_vq|@wBdBPv@\\`BBL|@vAa@bAm@nA]l@}BjBw@j@mIp@mAJKDIDUXm@eC',
                  },
                  start_location: { lat: 52.4771402, lng: 10.0900783 },
                  steps: [
                    {
                      distance: { text: '75 m', value: 75 },
                      duration: { text: '1 Minute', value: 55 },
                      end_location: { lat: 52.4777413, lng: 10.0895661 },
                      html_instructions:
                        'Auf <b>Im Zumpe</b> nach <b>Nordwesten</b> Richtung <b>Zur Seebecke</b>',
                      polyline: { points: 'cmh_I_vq|@wBdB' },
                      start_location: { lat: 52.4771402, lng: 10.0900783 },
                      travel_mode: 'WALKING',
                    },
                    {
                      distance: { text: '0,1 km', value: 109 },
                      duration: { text: '1 Minute', value: 80 },
                      end_location: { lat: 52.4771687, lng: 10.0882899 },
                      html_instructions:
                        '<b>Links</b> abbiegen auf <b>Zur Seebecke</b>',
                      maneuver: 'turn-left',
                      polyline: { points: '{ph_Iyrq|@Pv@\\`BBL|@vA' },
                      start_location: { lat: 52.4777413, lng: 10.0895661 },
                      travel_mode: 'WALKING',
                    },
                    {
                      distance: { text: '0,5 km', value: 462 },
                      duration: { text: '6 Minuten', value: 336 },
                      end_location: { lat: 52.480914, lng: 10.086062 },
                      html_instructions:
                        '<b>Rechts</b> abbiegen auf <b>Weißdornallee</b>',
                      maneuver: 'turn-right',
                      polyline: {
                        points: 'imh_Iyjq|@a@bAm@nA]l@}BjBw@j@mIp@mAJKDIDUX',
                      },
                      start_location: { lat: 52.4771687, lng: 10.0882899 },
                      travel_mode: 'WALKING',
                    },
                    {
                      distance: { text: '67 m', value: 67 },
                      duration: { text: '1 Minute', value: 49 },
                      end_location: { lat: 52.48113619999999, lng: 10.0867315 },
                      html_instructions:
                        '<b>Rechts</b> abbiegen auf <b>Burgdorfer Berg</b>',
                      maneuver: 'turn-right',
                      polyline: { points: 'udi_I{|p|@m@eC' },
                      start_location: { lat: 52.480914, lng: 10.086062 },
                      travel_mode: 'WALKING',
                    },
                  ],
                  travel_mode: 'WALKING',
                },
                {
                  distance: { text: '7,6 km', value: 7621 },
                  duration: { text: '14 Minuten', value: 840 },
                  end_location: { lat: 52.4494413, lng: 10.0037415 },
                  html_instructions:
                    'Bus in Richtung Burgdorf(Kreis Hannover) Bahnhof',
                  polyline: {
                    points:
                      'ofi_Ikbq|@Jh@l@dCNr@nAdGDPf@`CBHF\\Nn@v@nDTnAH\\pAdGBJLf@@JrBnJp@zCz@|Dr@dDvAnGDRb@jBb@bBL^H\\BDhBrGHTHXDPpBtGJ\\\\p@x@`Bd@~@~@dBHPj@|@^h@VZJJb@`@B@JFFDXNd@Nr@LN@dAJb@@b@@`ADD?v@Dr@Bb@FB?`@L\\R`@Rp@d@ZXPT\\b@b@z@Zt@^nABLZ`Bp@zDp@fE\\lBFj@N`AhAhHj@zDRrADn@B`@@PB~ABfE?dDAtJ@`F?`@AjA@f@@\\?TDlAAvA@x@?z@Dp@Hr@Nr@PVVTRJ^LB?|@T`@Hj@JLBb@Jn@L@?~@NRBD@Z@`@BJ?`ADh@@JDB?DBLJBDLLPRDJHRBJDLPbB?DLzARfCNlBLzA@JJfBBT@P@P@VBx@?hBCnBCfAArAAn@C`B?NAd@AXAtBAz@?nBBjAJ~AH~@D`@L`AJfAR`BNfAJ`Az@vH^`DVrBVxBXpCL`ABPF^RzARhBD\\j@bFBRL~@TfB?TP~BJxA@`@NdBHZN~@@@Pn@N\\\\n@Xb@b@X`@Rj@Rv@ZVJ`Bp@xAj@z@\\LD^PdBh@@?b@BP@ZC^EZG\\HZ?PDPHNLLPFNHZHRVh@DPNh@Zn@v@bB^t@lAbCpApCRRPZv@hB`AtBh@jA@Bv@hBfBm@dA_@z@YjCu@pBk@fBg@\\jEZxFBx@@n@BvB?`@DdC?h@BfB@t@?Z@t@@dCBr@BhAFtBHhCBpE@f@@n@BlA?PDhBFjCB~@@vABjA@R@z@@`@FfEAnBH^@FBD@BDFLFIf@',
                  },
                  start_location: { lat: 52.48120189999999, lng: 10.0869358 },
                  transit_details: {
                    arrival_stop: {
                      location: { lat: 52.4494413, lng: 10.0037415 },
                      name: 'Burgdorf(Kreis Hannover) Bahnhof',
                    },
                    arrival_time: {
                      text: '14:50',
                      time_zone: 'Europe/Berlin',
                      value: 1626180600,
                    },
                    departure_stop: {
                      location: { lat: 52.48120189999999, lng: 10.0869358 },
                      name: 'Hänigsen Dornbusch',
                    },
                    departure_time: {
                      text: '14:36',
                      time_zone: 'Europe/Berlin',
                      value: 1626179760,
                    },
                    headsign: 'Burgdorf(Kreis Hannover) Bahnhof',
                    line: {
                      agencies: [
                        {
                          name: 'RegioBus Hannover GmbH',
                          url: 'http://www.regiobus.de/',
                        },
                      ],
                      short_name: '920',
                      vehicle: {
                        icon: '//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png',
                        name: 'Bus',
                        type: 'BUS',
                      },
                    },
                    num_stops: 8,
                  },
                  travel_mode: 'TRANSIT',
                },
                {
                  distance: { text: '0,1 km', value: 98 },
                  duration: { text: '1 Minute', value: 68 },
                  end_location: { lat: 52.448586, lng: 10.0033548 },
                  html_instructions: 'Gehen bis Burgdorf(Han)',
                  polyline: { points: 'u_c_Is{`|@h@Zv@f@PNJF^X' },
                  start_location: { lat: 52.4493929, lng: 10.0039368 },
                  steps: [
                    {
                      distance: { text: '0,1 km', value: 98 },
                      duration: { text: '1 Minute', value: 68 },
                      end_location: { lat: 52.448586, lng: 10.0033548 },
                      html_instructions:
                        'Auf <b>Theodorstraße</b> nach <b>Süden</b><div style="font-size:0.9em">Das Ziel befindet sich auf der rechten Seite</div>',
                      polyline: { points: 'u_c_Is{`|@h@Zv@f@PNJF^X' },
                      start_location: { lat: 52.4493929, lng: 10.0039368 },
                      travel_mode: 'WALKING',
                    },
                  ],
                  travel_mode: 'WALKING',
                },
                {
                  distance: { text: '19,1 km', value: 19075 },
                  duration: { text: '14 Minuten', value: 840 },
                  end_location: { lat: 52.3744269, lng: 9.8085021 },
                  html_instructions: 'Zug in Richtung Hannover Hbf',
                  polyline: {
                    points:
                      'k{b_I{t`|@EN^TJHxCdBx@d@\\Px@f@VN~AbAl@^x@f@RLFDFB`FxChAr@`Aj@XPpAx@`@VNJ@@VPj@^nBbAnBjATLtErCl@^TNz@h@d@ZnBlAt@b@hBhARL\\XNJn@b@|BtAdAr@b@XxDxBNLt@d@HFhEfCDBlDtBRL`CvANHj@\\HD`@V|@f@|CjBf@ZpC~AxBpA`@Tl@\\`Ah@RLnBfA^RVN@?rAt@lDpBh@Tt@\\l@ZFB|@b@nDbBjBx@b@PTHdA^nEzAl@RfAZv@Rr@RfCl@VFlB^~A`@\\FHBnD|@l@NfEdAhBb@d@FbAPD@rB^RFPB\\HbDt@LDVFv@NpAZbCf@rBd@~@TrDx@nCl@|FrA~@R~HdB`@JVF^Ht@PLDdATrDx@t@PrAZxA\\ZF~@V\\Hb@JJBB@D@hCj@ZH`AVrA\\nA\\rAVb@JzBf@p@PxA\\pATjAVdATvD|@~EhAjCj@j@`@VJx@\\nAZd@LfB^`Bd@fATPDvB`@f@Np@RlARn@Nr@RtBb@DBb@H`@JHB~A\\TFLB`@Jb@JjAV^L^HdATjB\\b@HvDn@`@F`@H~A^VFdA`@XLb@Tl@\\n@j@h@h@pA~Af@z@Xf@@BpAdC~@zB|@jCXz@VdAH^XpAZbBVvBZxCNrALvA^tCHh@\\rCJn@H`@^nD`@zCF^b@vDd@fFTdFBt@J~CNvFNhFHtBFfBHlDJzBFrD@pC@~C@lB@~BB`F?d@BnF@jA?p@B|HHlEFbC@x@JjFBx@LfEBbAFhC?BN`GJrED|AXlINfIPvIRpHBdAXnKB~@@r@DtBFnDRbHLnD?LL|E@`@RrHRnGDvALxFNfGNpGN|FXpIPfHHjCHnC@^RfF?@Dx@@d@BR@JJfBJlB?DHv@Fx@Bb@JlABZZlC`AzIHj@N~@bBnLPlAF^r@xEL`AHh@@Bp@bFHl@fAfHtAnJlClRfEbZHr@ZtBZvBZzBlA|I|@lHLdAl@lHPbCRzDV~GFjDBz@XhMD|CDvAb@dSRfLDlBJvD@f@F`EDnD@d@HhHAfC?\\?`CAN?\\A\\CzA?DEx@A^C`@GlAATE`AGjAGdBCf@IjAAPU~BSdB[hC_AlHUfBg@tDs@zFyHbn@EV{AbLm@~EkAhJCNO`A_@pCe@zDUtBk@fFe@xFIpAUrDEr@IvAEr@C~@EvAAt@KnD?@MvF?`E?hAAxB?lA?zBBnD?lABzDB~B@|@BbD@fBBnDTrZ?BBnB?`ABtC@X?b@@x@?FB?',
                  },
                  start_location: { lat: 52.44870239999999, lng: 10.0028639 },
                  transit_details: {
                    arrival_stop: {
                      location: { lat: 52.3744269, lng: 9.8085021 },
                      name: 'Hannover Karl-Wiechert-Allee',
                    },
                    arrival_time: {
                      text: '15:11',
                      time_zone: 'Europe/Berlin',
                      value: 1626181860,
                    },
                    departure_stop: {
                      location: { lat: 52.44870239999999, lng: 10.0028639 },
                      name: 'Burgdorf(Han)',
                    },
                    departure_time: {
                      text: '14:56',
                      time_zone: 'Europe/Berlin',
                      value: 1626180960,
                    },
                    headsign: 'Hannover Hbf',
                    line: {
                      agencies: [
                        { name: 'DB Regio AG', url: 'http://www.bahn.de/' },
                      ],
                      short_name: 'S6',
                      vehicle: {
                        icon: '//maps.gstatic.com/mapfiles/transit/iw2/6/rail2.png',
                        local_icon:
                          '//maps.gstatic.com/mapfiles/transit/iw2/6/de-sbahn.png',
                        name: 'Zug',
                        type: 'HEAVY_RAIL',
                      },
                    },
                    num_stops: 2,
                  },
                  travel_mode: 'TRANSIT',
                },
                {
                  distance: { text: '0,6 km', value: 552 },
                  duration: { text: '7 Minuten', value: 411 },
                  end_location: { lat: 52.3727888, lng: 9.8060651 },
                  html_instructions:
                    'Gehen bis Blumhardtstraße 2, 30625 Hannover, Deutschland',
                  polyline: {
                    points:
                      '_lt~H_vzz@?D?fB?F?j@?D?z@GAAc@?O@IHB@E?E?E?E?M@MPDd@LXHZF^J^JXJB@THVJ\\PZN\\TTNRNTNHD~@|@TVNTKRCHY`AMOEKWC_@GWCWA',
                  },
                  start_location: { lat: 52.3745645, lng: 9.808475999999999 },
                  steps: [
                    {
                      distance: { text: '77 m', value: 77 },
                      duration: { text: '1 Minute', value: 58 },
                      end_location: { lat: 52.3745611, lng: 9.807341000000001 },
                      html_instructions: 'Nach <b>Westen</b>',
                      polyline: { points: '_lt~H_vzz@?D?fB?F?j@?D?z@' },
                      start_location: {
                        lat: 52.3745645,
                        lng: 9.808475999999999,
                      },
                      travel_mode: 'WALKING',
                    },
                    {
                      distance: { text: '5 m', value: 5 },
                      duration: { text: '1 Minute', value: 4 },
                      end_location: { lat: 52.3746028, lng: 9.8073514 },
                      html_instructions:
                        '<b>Rechts</b> Richtung <b>Karl-Wiechert-Allee</b> abbiegen',
                      maneuver: 'turn-right',
                      polyline: { points: '_lt~H{nzz@GA' },
                      start_location: {
                        lat: 52.3745611,
                        lng: 9.807341000000001,
                      },
                      travel_mode: 'WALKING',
                    },
                    {
                      distance: { text: '26 m', value: 26 },
                      duration: { text: '1 Minute', value: 32 },
                      end_location: { lat: 52.3745457, lng: 9.8076363 },
                      html_instructions:
                        '<b>Rechts</b> Richtung <b>Karl-Wiechert-Allee</b> abbiegen<div style="font-size:0.9em">Treppe nehmen</div>',
                      maneuver: 'turn-right',
                      polyline: { points: 'glt~H}nzz@Ac@?O@IHB' },
                      start_location: { lat: 52.3746028, lng: 9.8073514 },
                      travel_mode: 'WALKING',
                    },
                    {
                      distance: { text: '18 m', value: 18 },
                      duration: { text: '1 Minute', value: 16 },
                      end_location: { lat: 52.3745334, lng: 9.8079006 },
                      html_instructions:
                        'Leicht <b>links</b> abbiegen Richtung <b>Karl-Wiechert-Allee</b>',
                      maneuver: 'turn-slight-left',
                      polyline: { points: '}kt~Hwpzz@@E?E?E?E?M@M' },
                      start_location: { lat: 52.3745457, lng: 9.8076363 },
                      travel_mode: 'WALKING',
                    },
                    {
                      distance: { text: '0,3 km', value: 308 },
                      duration: { text: '3 Minuten', value: 208 },
                      end_location: { lat: 52.37196119999999, lng: 9.8063212 },
                      html_instructions:
                        '<b>Rechts</b> abbiegen auf <b>Karl-Wiechert-Allee</b>',
                      maneuver: 'turn-right',
                      polyline: {
                        points:
                          'ykt~Hkrzz@PDd@LXHZF^J^JXJB@THVJ\\PZN\\TTNRNTNHD~@|@TVNT',
                      },
                      start_location: { lat: 52.3745334, lng: 9.8079006 },
                      travel_mode: 'WALKING',
                    },
                    {
                      distance: { text: '40 m', value: 40 },
                      duration: { text: '1 Minute', value: 34 },
                      end_location: { lat: 52.3721673, lng: 9.8058394 },
                      html_instructions:
                        '<b>Rechts</b> abbiegen auf <b>Blumhardtstraße</b>',
                      maneuver: 'turn-right',
                      polyline: { points: 'w{s~Hohzz@KRCHY`A' },
                      start_location: {
                        lat: 52.37196119999999,
                        lng: 9.8063212,
                      },
                      travel_mode: 'WALKING',
                    },
                    {
                      distance: { text: '15 m', value: 15 },
                      duration: { text: '1 Minute', value: 12 },
                      end_location: { lat: 52.372271, lng: 9.8059835 },
                      html_instructions: '<b>Rechts</b> abbiegen',
                      maneuver: 'turn-right',
                      polyline: { points: 'a}s~Hoezz@MOEK' },
                      start_location: { lat: 52.3721673, lng: 9.8058394 },
                      travel_mode: 'WALKING',
                    },
                    {
                      distance: { text: '63 m', value: 63 },
                      duration: { text: '1 Minute', value: 47 },
                      end_location: { lat: 52.3727888, lng: 9.8060651 },
                      html_instructions:
                        'Leicht <b>links</b> abbiegen<div style="font-size:0.9em">Das Ziel befindet sich auf der linken Seite.</div>',
                      maneuver: 'turn-slight-left',
                      polyline: { points: 'u}s~Hkfzz@WC_@GWCWA' },
                      start_location: { lat: 52.372271, lng: 9.8059835 },
                      travel_mode: 'WALKING',
                    },
                  ],
                  travel_mode: 'WALKING',
                },
              ],
              traffic_speed_entry: [],
              via_waypoint: [],
            },
          ],
          overview_polyline: {
            points:
              'cmh_I_vq|@wBdBPv@`@nB|@vAa@bAkA|BuDvC{K|@UJUXm@eCKi@x@nDlClMhEfStD~PlEfSfAnEV|@`ChIvBfHh@nAhDxGjAfBb@f@f@b@RL~@^bANlCNrDNf@F~@`@`@Rp@d@l@n@\\b@b@z@Zt@^nA^nBbBbK~BdO~@nGHpADpBBlJAdUHhD?pCDlBHr@Nr@h@l@r@X`AT~Bd@dC`@nAFjBFNDd@b@V^L^VpBL`Br@|IR`DDpACxEKlHEdEAjDBjAJ~AN`BXhCjBbPhB`Pl@nEhA~Jb@fDPtCLzBNdBHZP`A`@lAv@rAdAl@|ElBbE`BfBh@t@Dz@IZG\\HZ?PD`@VT`@Rn@\\z@Nh@Zn@vAxC~CtGRRPZxB~Ej@nAv@hBfBm@`Cy@|FaBfBg@\\jE^rHJnILrMJ~DHhCBpE@f@D|BPfIHrFHhFAnBH^DLFJLFIf@Hg@h@ZhAv@j@`@[pBj@^jHdEdNlIvFjDjAv@j@^nBbAdCxAtIlFtHvEpBvAbEhC|ErCxGbEpLdHtKnGjGnDzDxBlH|DhD`BzG|Cx@ZtGzBtBn@jG|AlE`Af@JnOvDhBXxB`@fFjAzSvE|[jHfQ`E~HjBbDz@vBb@lDx@jDr@hPtDjCj@j@`@pAh@tBh@fB^`Bd@xAZ~Cp@p@RlARbBb@`E|@lCl@dAVjBd@dB^nCf@xEv@`Ch@|Ah@|@b@l@\\n@j@h@h@pA~A`AbBrAhC~@zB|@jCXz@VdAb@pBZbBVvBj@lFLvA^tCf@|DTpAlBbPd@fFTdFNtEp@~TThHHdIHnRDrKB|HHlEH|D`@pPb@bR^jL`@~St@fYFhDZrM\\|Lf@bQRpI^xOh@nQf@bRZhI\\tFTzCNhB|AhNnChRrAdJr@fFpAtItLtz@`DfUjArJ~@pLRzDV~GJfFhAdi@XtOL~EX`UCvHE|CShEWhGMrBWpCeCdS{Kl|@yE|^kBdOk@fFe@xF_@dGY~FS~HMvF?`EAbEBfML|Od@pn@@|A?FB?YB?D?nB?p@?z@GAAs@@IHB@K?K@[v@RtBh@jAb@x@`@r@d@h@^hAbAd@l@O\\Y`AMOEKWCw@KWA',
          },
          summary: '',
          warnings: [
            'Der Routenplaner für Fußgänger ist noch im Beta-Stadium. Sei vorsichtig! – Auf dieser Route gibt es eventuell keine Bürgersteige oder Fußwege.',
          ],
          waypoint_order: [],
        },
      ],
      status: 'OK',
    },
  },
];

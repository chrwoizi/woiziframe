import { WorkDirection } from './WorkDirection';

export const mock: WorkDirection[] = [
  {
    query: {
      name: 'Person A',
      origin: 'Bode-Ring 9, 31319 Sehnde',
      destination: 'Hildesheimer Str. 57, 38114 Braunschweig',
      mode: 'driving',
      weekdays: [1, 2, 3, 4, 5],
      fromHours: 6,
      toHours: 9,
    },
    directions: {
      geocoded_waypoints: [
        {
          geocoder_status: 'OK',
          place_id: 'ChIJb3s5DLQHsEcRJPErBZpphvA',
          types: ['street_address'],
        },
        {
          geocoder_status: 'OK',
          place_id: 'ChIJeaFS3F32r0cRVWyPeoHwJ3E',
          types: ['premise'],
        },
      ],
      routes: [
        {
          bounds: {
            northeast: { lat: 52.3812195, lng: 10.5149573 },
            southwest: { lat: 52.2710573, lng: 9.9987357 },
          },
          copyrights: 'Map data ©2021 GeoBasis-DE/BKG (©2009)',
          legs: [
            {
              distance: { text: '50,5 km', value: 50548 },
              duration: { text: '37 Minuten', value: 2249 },
              duration_in_traffic: { text: '36 Minuten', value: 2181 },
              end_address:
                'Hildesheimer Str. 57, 38114 Braunschweig, Deutschland',
              end_location: { lat: 52.2728973, lng: 10.4982001 },
              start_address: 'Bode-Ring 9, 31319 Sehnde, Deutschland',
              start_location: { lat: 52.3180187, lng: 9.9987357 },
              steps: [
                {
                  distance: { text: '64 m', value: 64 },
                  duration: { text: '1 Minute', value: 15 },
                  end_location: { lat: 52.3178455, lng: 9.9996303 },
                  html_instructions:
                    'Auf <b>Bode-Ring</b> nach <b>Osten</b> starten',
                  polyline: { points: 'sji~Hc{_|@@?@G@IZ_D' },
                  start_location: { lat: 52.3180187, lng: 9.9987357 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '10 m', value: 10 },
                  duration: { text: '1 Minute', value: 3 },
                  end_location: { lat: 52.31778449999999, lng: 9.9997127 },
                  html_instructions:
                    '<b>Rechts</b> Richtung <b>Bode-Ring</b> abbiegen',
                  maneuver: 'turn-right',
                  polyline: {
                    points: 'qii~Hu``|@@?@?@??A@??A@??A?A@??A?A?A@A',
                  },
                  start_location: { lat: 52.3178455, lng: 9.9996303 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '76 m', value: 76 },
                  duration: { text: '1 Minute', value: 24 },
                  end_location: { lat: 52.31712, lng: 9.999450099999999 },
                  html_instructions:
                    '<b>Rechts</b> abbiegen auf <b>Bode-Ring</b>',
                  maneuver: 'turn-right',
                  polyline: { points: 'cii~Hea`|@LBfAPl@\\' },
                  start_location: { lat: 52.31778449999999, lng: 9.9997127 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '1,8 km', value: 1810 },
                  duration: { text: '3 Minuten', value: 158 },
                  end_location: { lat: 52.3167736, lng: 10.0250605 },
                  html_instructions:
                    '<b>Links</b> abbiegen auf <b>Hauptstraße</b>/<wbr/><b>B65</b><div style="font-size:0.9em">Weiter auf B65</div>',
                  maneuver: 'turn-left',
                  polyline: {
                    points:
                      '_ei~Hq_`|@JDRaALq@p@gDJe@BY`@wBN{@NeAHu@V}BJu@TeBPaBFs@Da@@k@Bo@@c@DaALkEFaB@YDwA@a@B[?AFsBJoCDiB?e@?q@?e@AQ?YGkAQgCUcCYiDw@mJQcCCOKsAOeBMeBY}CAUMyAS{BKqAOoBIg@Ig@Oy@Ia@EUCUCm@A_@AM@Y@[RqDHkALwBFqAHmA',
                  },
                  start_location: { lat: 52.31712, lng: 9.999450099999999 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '0,2 km', value: 177 },
                  duration: { text: '1 Minute', value: 20 },
                  end_location: { lat: 52.3183357, lng: 10.0255567 },
                  html_instructions:
                    '<b>Links</b> abbiegen auf <b>Jägerstraße</b>',
                  maneuver: 'turn-left',
                  polyline: { points: 'ybi~Hs_e|@yA]sAY}@So@M]I' },
                  start_location: { lat: 52.3167736, lng: 10.0250605 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '0,5 km', value: 469 },
                  duration: { text: '1 Minute', value: 25 },
                  end_location: { lat: 52.3225426, lng: 10.0260683 },
                  html_instructions: 'Weiter auf <b>K135</b>',
                  polyline: { points: 'sli~Hwbe|@u@EEAkAGEAuCQ}CSoAIm@EgG]' },
                  start_location: { lat: 52.3183357, lng: 10.0255567 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '3,3 km', value: 3287 },
                  duration: { text: '2 Minuten', value: 128 },
                  end_location: { lat: 52.3519942, lng: 10.0277897 },
                  html_instructions:
                    'Weiter auf <b>Lehrter Str.</b>/<wbr/><b>K135</b>',
                  polyline: {
                    points:
                      '{fj~H}ee|@{EWkG_@uAMgAGe@CmMu@yToAUAeDS}Im@GAKAYAaF[gG_@iAGaBMOAyBMmJk@aOaAKA_DQm@CiAGqAIsAIs@Ey@Gg@Cs@@aAHK@I@_AHyAToANs@FWBiHr@c@DqANcCVu@Ja@DWDYHSFQF',
                  },
                  start_location: { lat: 52.3225426, lng: 10.0260683 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '0,7 km', value: 701 },
                  duration: { text: '1 Minute', value: 37 },
                  end_location: { lat: 52.3565829, lng: 10.0207711 },
                  html_instructions: 'Weiter auf <b>Everner Str.</b>',
                  polyline: {
                    points:
                      '}~o~Hupe|@OHKFMHUPWTUZ]d@a@n@]j@_@t@KRGJCDQ\\iHnNs@rAoA`CkAzBEJoBtDOZ',
                  },
                  start_location: { lat: 52.3519942, lng: 10.0277897 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '2,8 km', value: 2833 },
                  duration: { text: '4 Minuten', value: 226 },
                  end_location: { lat: 52.3795745, lng: 10.0197194 },
                  html_instructions:
                    '<b>Rechts</b> abbiegen auf <b>Steinwedeler Str.</b>',
                  maneuver: 'turn-right',
                  polyline: {
                    points:
                      's{p~Hydd|@a@OqA@_ADm@@cBDwAB[?c@B_@@c@?a@?S?MCKEgFyB{@_@q@Y}@_@e@SmD}AiBw@[OiAg@cAc@aAc@QEKAsBCyAA]?c@AI?c@AWCOCc@Ke@U[YUYg@{@aAaBKWaBqCcCeEOSGKQWg@c@]Ue@UWGQCMAWCS?[D[Fa@N]N_@Z[XY\\e@p@cBhCcA|AOTk@z@INIJqArB[r@Ul@KXY|@]`A_@x@S^ORc@b@SJMFu@Xo@To@V_AX]LC?c@JkAJ_@@K?g@PQFsBr@YJm@TsBp@kAd@k@L{@VWJQJc@VIDULGDID',
                  },
                  start_location: { lat: 52.3565829, lng: 10.0207711 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '34,7 km', value: 34667 },
                  duration: { text: '20 Minuten', value: 1182 },
                  end_location: { lat: 52.3169788, lng: 10.5063185 },
                  html_instructions:
                    '<b>Rechts</b> abbiegen auf <b>A2</b> Richtung <b>Berlin</b>',
                  maneuver: 'ramp-right',
                  polyline: {
                    points:
                      'iku~Hg~c|@UeAIQSoAG[CQGe@ACUwAKa@G[Qk@CIEMQ]EIS_@CISYACGGQSCICEIMOSIOGMEIGSESACCKAKEY?CAOAM?W?C?Y@AF}@Ny@Ha@BQTsA^qBDSPcARiABSRkA@MJw@Fa@BMNu@b@yBBMb@_CH]Jm@DU@IBIFWZgBHc@VwAHa@Hc@Nw@BMBQP}@Hg@DUBKBSDMZiBHa@PaA\\kBJg@N}@\\aB^sBZ_BJo@Lo@Lo@@C?ABMF[Lo@XaB~AoIh@oCd@cC?ALs@@A@KVsAZaBBQ@An@kD\\kBJe@?ABMFW@M@Ab@aC^mBf@mCLo@Jo@Lm@Z_BVuAJg@?ALs@@??ELq@BKVsALo@X}AVoALs@Ny@h@qCr@}Dv@}Df@mCf@mC@ALu@Jk@\\eBN{@Jm@Nq@RiA^mBjAoGj@yCFYF[~@{E|BsLv@}Dh@mCh@oCX_BLm@^uBNy@Je@@IJk@Nq@Ji@Lw@Z_BZaBX_Bp@aE`AgGh@yDb@gDPwAJaAFm@^mD\\oDFo@JoANmBLaB@SRyCLqB?A@S@Q@Q?A@SBc@?A@GBs@b@sJf@{KRiE?A@S@c@f@wKDy@?A@QBe@@U@c@Dy@JuBFyAHgBLyCDy@Dy@?ADw@@UNeDv@mQBe@@SPaEd@oKLyCJmBF_B@Sh@gLBs@?CFsAJuBJcCFqBFeBFyA@SDcB?E@g@BiA@k@By@@c@BkBBgBDaD@wB?[@wBBeC@qD?K?y@@oC@]@eF?E@{@?qA@oD?Q@gD@qB?G@mBB}B?G?y@@{@@mB?{@?O@i@@uBB_EDuDDiCDyCDiB@i@DaCFoCBuAF_CFiBFgB@q@By@@GLwDH}BJmCDgALuCLaDLiCFmADo@JsBPmDzA{Z`@qI`@iI@[^qHV}ERaEj@gLFwA@OBi@Be@H{A@I?IH{APeDFyA?CVgFDy@HgBZeG?AN{CJiBBg@b@}IJsBDy@VkFLmC@MN{CL{BHcBDeAJoBDs@Dy@@YDy@TkFVaG?G@WTwFL_DBo@LyBPqDHyAJgBJ_BTeDf@mGNyAPcBTaCh@oEHm@Fe@^yCd@gDTwAN{@TyALw@@CVwAX{AZeBd@}B\\aB\\aB`@aBZuAj@aCd@gBb@_B?ARq@La@^uA`@sAb@uATs@^kA\\eANc@b@kAt@wBl@_B`@gAJUTo@~@gCz@yBr@qBRi@Vq@BGt@qBx@{BpAiDlAcD|AeE^cAn@cBn@cBl@}A@Cp@cBt@oBd@kAl@_BTm@Na@h@sAjAgDPk@L]DI`AiCBEj@}A@Eh@{AfA}Ct@yBBKNe@To@Pk@@CRo@f@aBlCsIRo@?Ah@_BRo@Rq@f@_BRo@t@_C~DeMLa@@CTu@^gAp@yB^gA\\iARo@Ro@BIbAaDr@aC`@yA?APo@DKLg@d@aB?ALe@T}@?APq@Pw@XgALg@XqAPu@Nu@Pu@Nw@Nu@Nw@Nw@Nu@Hc@Hc@Hc@Fc@Hc@Fc@He@Fc@@CBM?C@CN{@xAqKl@aFXcCH}@R{B^sEd@wGPiCBo@B_@DcA@SBa@ToF?OD{@?AL_EBaAFeCJsF?_ABgH@u@AsD?k@A{DEsJCuG?{@?y@A}@?y@QoUCoJ@gEA_CDeF?A?w@?C?m@@KFmHRaMDkB?CBaAFgCFwC@e@JuDXsMBy@@{@FyBXaMJaEFuBTaIBm@P}F@e@B{@HeEBaA@K@y@B{@`@oRDuBN_HFmCB}ALcFHkE@q@?SBsA?q@@kA?O@cFA_C?}CEoDG{DGcD?M?ACi@?[IcCWsG]qHUkDYcFo@}K[sFEy@O_C}AuXy@oNMqBu@mMIcB?AC[Ey@AS_@kGAWe@wH}@ePw@yMy@iNq@gLu@oMAKAM?CCg@AMAGg@iJa@iIGeACo@Eu@E{@GcBGyAEeBCw@Aa@G_CCgAAi@Aw@E_CEiBAyACeECsCA_B?_B?_C@wE@o@@_CB}CPsP@[@eBB_B`@i`@J{J?c@J_J?k@@M?EBgDDgDDyDJsH@m@@}@?Q@w@@qA?A@g@?]?UFuE@g@?u@@w@@W?]?i@B{B@w@BmB?K@qA@OLaK?O@e@@o@FaEDwADkBBy@@k@@ILcEFyA?KBq@By@@MDgA^gKDy@x@{TBy@\\}I?KBm@D{@LmDBy@L_DHcCHsBv@aS@a@Bm@Bi@@_@@Yd@sLHyBBk@@W?EDgADoAF_BDy@?KBm@?IR}EB{@f@{M@[@]@YB_@Bi@?I\\}IHyBFeBJ}BBy@Bw@Du@n@_QTsF?MX{Gd@aJH{A`@wGb@sGP_CBW\\gEJ}@JwAHeA@SVqC`B_Qb@cFHw@^cEr@sHn@cH\\iDDe@BS\\iDl@aGF[b@eEp@oFl@iF@IFm@Hw@?A^gD@MFi@Hw@RkBH}@ViCt@{HHw@ZiDHw@Hy@@IDm@r@gIP{BP{Bf@mG~@yMd@yFXsC?CRoBFm@\\sCPuAHw@LcAv@sFfAmHVeBn@eEdAeHn@eEx@qF@E|@kGLw@~AuKFc@PaAfBuL|Eg[ZsBHe@L_Ah@mD~@oGZsBVgB|@cGlA_Iz@yFdAeHZuBh@oD@Gv@kFPcAl@aE\\wBZmBXmBzFo_@Jw@bDeTlEuYjBeM',
                  },
                  start_location: { lat: 52.3795745, lng: 10.0197194 },
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
                  distance: { text: '5,3 km', value: 5265 },
                  duration: { text: '4 Minuten', value: 233 },
                  end_location: { lat: 52.2746323, lng: 10.4924124 },
                  html_instructions:
                    'An der Gabelung <b>rechts</b> halten und weiter auf <b>A391</b>',
                  maneuver: 'fork-right',
                  polyline: {
                    points:
                      'q}h~Hyxc_ALe@p@wD`BeKHo@F[DMDMFSHQDGDGJOHIDCLIJEDCd@M|EoANCTAL@JBJDHDB@LHPLPJVNDDPP?@VXzA|At@l@^ZdAz@|@p@`@Xx@h@PDLFTFbBfANJ^TbAl@`Ah@`@T`@R\\R^P`Ah@fAj@|@d@jB`AdB|@jAl@~@h@tC~AzBpAjAt@r@d@x@h@^Xv@h@rAdAr@h@@BvAlAhBdBPR`AbAnAvAz@dALLV^Z`@X^V^X^X`@Xb@V`@V^n@dAn@fAXd@FLRZt@vAb@z@l@lAl@fAr@zANZXl@NXTd@Xl@t@zALVVf@`@z@Zj@j@hAl@hAb@x@^l@^n@R^Zf@h@z@V`@X`@X`@v@fAZ^X`@dAlAXZZ\\XX\\\\\\Z@@VT\\\\r@l@d@^nA|@\\T^V^Vf@ZZNZP`Bv@hAf@|Bx@h@Nt@RHBXFVFf@HbAP|AT@?ZB^Dn@DL@^@\\B`A@f@?\\?^?^Az@CnAGd@Cf@C`BQn@G`@ElAQnAOTC~@MBAhBUfBUjBWn@G`AM~@OvOqB|G{@',
                  },
                  start_location: { lat: 52.3159263, lng: 10.510366 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '0,2 km', value: 214 },
                  duration: { text: '1 Minute', value: 27 },
                  end_location: { lat: 52.2727175, lng: 10.4922826 },
                  html_instructions:
                    'Ausfahrt <b>B1</b> Richtung <b>Braunschweig-Lehndorf</b>/<wbr/><b>Zentrum</b>/<wbr/><b>Hildesheim</b>',
                  maneuver: 'ramp-right',
                  polyline: {
                    points:
                      'm{`~Hqh`_A^JF?`@?PAP?LAP@B?T?F?D?X@d@Bb@D`@BT@T?RA@?',
                  },
                  start_location: { lat: 52.2746323, lng: 10.4924124 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '36 m', value: 36 },
                  duration: { text: '1 Minute', value: 12 },
                  end_location: { lat: 52.2724136, lng: 10.4924693 },
                  html_instructions:
                    'An der Gabelung <b>links</b> halten, Beschilderung in Richtung <b>Zentrum</b>/<wbr/><b>U92</b> folgen',
                  maneuver: 'fork-left',
                  polyline: { points: 'oo`~Hwg`_ALKNIFCFENE' },
                  start_location: { lat: 52.2727175, lng: 10.4922826 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '0,4 km', value: 381 },
                  duration: { text: '1 Minute', value: 63 },
                  end_location: { lat: 52.2711828, lng: 10.4972673 },
                  html_instructions:
                    'Leicht <b>links</b> abbiegen auf <b>Hannoversche Str.</b>/<wbr/><b>B1</b><div style="font-size:0.9em">Weiter auf B1</div>',
                  maneuver: 'turn-slight-left',
                  polyline: {
                    points:
                      'qm`~H}h`_A`@T?KBs@?a@BgA?YBu@FeADe@?GFs@Hq@Fc@DUDYBKLg@BSD]Lc@Vw@Le@Ne@Lk@Ja@?ALg@Jg@',
                  },
                  start_location: { lat: 52.2724136, lng: 10.4924693 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '63 m', value: 63 },
                  duration: { text: '1 Minute', value: 27 },
                  end_location: { lat: 52.2713348, lng: 10.497645 },
                  html_instructions: '<b>Links</b> abbiegen',
                  maneuver: 'turn-left',
                  polyline: { points: '{e`~H}fa_A@GTkAu@H' },
                  start_location: { lat: 52.2711828, lng: 10.4972673 },
                  travel_mode: 'DRIVING',
                },
                {
                  distance: { text: '0,2 km', value: 196 },
                  duration: { text: '1 Minute', value: 56 },
                  end_location: { lat: 52.2728973, lng: 10.4982001 },
                  html_instructions:
                    '<b>Rechts</b> abbiegen<div style="font-size:0.9em">Das Ziel befindet sich auf der linken Seite.</div>',
                  maneuver: 'turn-right',
                  polyline: { points: 'yf`~Hgia_Ag@cAu@_AoAg@sARa@VUN' },
                  start_location: { lat: 52.2713348, lng: 10.497645 },
                  travel_mode: 'DRIVING',
                },
              ],
              traffic_speed_entry: [],
              via_waypoint: [],
            },
          ],
          overview_polyline: {
            points:
              'sji~Hc{_|@b@qD@?BCDKtATx@b@`@sB`AgFp@sDX{BjA{JLuAD{A\\sKLoDXoJAoCGeBg@kGgBkTsB{VYwCYaBOw@GcA?cBr@gMHmAyA]qCm@mAW{@GeKo@aReAaJm@mBKci@{CkKs@uSqA}g@}CsGa@{AAmAJsFp@yKdAmHx@wA^_Al@m@p@_AtAqA`CsJfRqG~LOZa@OqCFeGJiCDa@CsF_CqEmB}JmEeCgA]GoGGuAIiAa@q@s@iB}CmBiDmD}FeAy@}@]_@Ek@Cw@L_A^{@t@_AnAwD|FqCjEwAxD}@zBc@r@w@n@cA`@}DtAg@JkBLs@PeCz@gGxBgBd@i@VkAp@IDUeAIQSoAKm@Ii@a@yBYgAa@_Am@gAa@k@k@_AUu@Ku@Cy@@[VwBbAyFxAiJzEcWvEcWbQ}~@bRqbAjGe\\`Jme@zBqLjAaHjBaMhAoJpA}Mr@}JXeF|C}q@tCcp@fCik@z@wTTyJNmNFkMFmRJwUJoSVcQRqKv@{VtAi[hIccBtEw_AnAaWrAs[p@{Nv@gMv@gJf@eFzA}L`BuK`AoF|BgLnCaLdAuDzBsHpBaGpCuHjHyRdNy^lGgPpB{FpBmFhDyJh@aBpFeQxPii@j@iBxC_KnBmHfCwKtBqKz@kFjBuMfAeJ\\yDdAkNTyDHcBr@uRRyJBgJAqMI_WWwd@FeT`@_ZTgK`Bsr@`Ac^vAkq@NeJBqJA}GMkJGsDe@}Ms@}MiAaSoCcf@gCsc@qCmf@aFa{@mAiUWgFY{IOsGO{JIyODgOXsY~@i}@n@wm@LeMb@cZf@wPlCet@rDyaAhBig@fAiYnAa\\hAgVzAcU~@cLlH}w@dAmKjCsU`BcOxDs`@lA{N~C}a@t@uHfAeJfEmYpDcVrD}VrJsn@`Ici@`I_i@xX}iBd@iBz@wFbAuGlEuW\\gB\\u@h@g@tGgBr@C`@Nt@d@\\TPRrBvBtAhAbClBzAbA^LTFbBfANJ^ThE`CfEzBzIrEtEhCfEfCdErC`F`EzBxBpCzC|BtCdB`CxBjDdBvCtDhH`FfK`CxEpC`FpBdDfCjD~AnBt@x@vAtAnC`ClDbCbAj@|BhAfE`B~Ab@bB\\~Dj@|BNdDDjEM~Ea@jNgB|G}@tXmDf@JrACr@@hBJv@Dh@Af@YVK`@T?KBuABaBPiD^_DZaBRaAd@}Ah@uBp@cDu@Hg@cAu@_AoAg@sARa@VUN',
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
      name: 'Person B',
      origin: 'Sehnde',
      destination: 'Anderter Str. 140, 30559 Hannover',
      mode: 'transit',
      weekdays: [1, 2, 3, 4, 5],
      fromHours: 6,
      toHours: 9,
    },
    directions: {
      geocoded_waypoints: [
        {
          geocoder_status: 'OK',
          place_id: 'ChIJafdmKtQHsEcRsH6oFkEJF6Q',
          types: ['locality', 'political'],
        },
        {
          geocoder_status: 'OK',
          place_id: 'ChIJs1QkU_wLsEcR9L3fRdOiHjQ',
          types: ['premise'],
        },
      ],
      routes: [
        {
          bounds: {
            northeast: { lat: 52.3692219, lng: 9.8935518 },
            southwest: { lat: 52.35083909999999, lng: 9.857002699999999 },
          },
          copyrights: 'Map data ©2021 GeoBasis-DE/BKG (©2009)',
          legs: [
            {
              arrival_time: {
                text: '15:30',
                time_zone: 'Europe/Berlin',
                value: 1626183044,
              },
              departure_time: {
                text: '15:13',
                time_zone: 'Europe/Berlin',
                value: 1626181980,
              },
              distance: { text: '4,5 km', value: 4481 },
              duration: { text: '18 Minuten', value: 1064 },
              end_address: 'Anderter Str. 140, 30559 Hannover, Deutschland',
              end_location: { lat: 52.3692219, lng: 9.861847899999999 },
              start_address: 'Sehnde, Deutschland',
              start_location: { lat: 52.350925, lng: 9.893525 },
              steps: [
                {
                  distance: { text: '2,9 km', value: 2935 },
                  duration: { text: '7 Minuten', value: 420 },
                  end_location: { lat: 52.358467, lng: 9.858155 },
                  html_instructions: 'Bus in Richtung Hannover Anderten',
                  polyline: {
                    points:
                      'gxo~Hoik{@FE@HDf@?RAVATGb@Gl@EbAExBGr@EZI`@In@Cd@Iz@GzAEp@C`@Ej@Cl@g@zIATUvD[lFIjAEJAPSpAA?UfASv@gArDAN}@zC{@`D_@rAiA`ESr@?@ELEJCJWx@Ol@y@|Cw@pCW~@ABm@|BEPOh@Od@}AfFa@rAi@nBOj@St@g@`B}@dCu@rA{@|@YTC@OHQHu@Tg@JOEA?}@F_AJq@ZKL_Ab@s@^A@GBGDQNOLMLIHUT]h@MRRZR\\@?D@t@jB@B`@tA@FXjATjATzABTHj@@DDXNdALr@PfAZfBJj@Jj@F^^rCFh@B\\HlAF~@Dv@?@FpABbABr@B~AChBEhACn@Er@El@OrBAXPB',
                  },
                  start_location: { lat: 52.350925, lng: 9.893525 },
                  transit_details: {
                    arrival_stop: {
                      location: { lat: 52.358467, lng: 9.858155 },
                      name: 'Anderten - Hannover',
                    },
                    arrival_time: {
                      text: '15:20',
                      time_zone: 'Europe/Berlin',
                      value: 1626182400,
                    },
                    departure_stop: {
                      location: { lat: 52.350925, lng: 9.893525 },
                      name: 'Höver(Sehnde) Brunnenstraße',
                    },
                    departure_time: {
                      text: '15:13',
                      time_zone: 'Europe/Berlin',
                      value: 1626181980,
                    },
                    headsign: 'Hannover Anderten',
                    line: {
                      agencies: [
                        {
                          name: 'üstra Hannoversche Verkehrsbetriebe AG',
                          url: 'http://www.uestra.de/',
                        },
                      ],
                      short_name: '373',
                      vehicle: {
                        icon: '//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png',
                        name: 'Bus',
                        type: 'BUS',
                      },
                    },
                    num_stops: 5,
                  },
                  travel_mode: 'TRANSIT',
                },
                {
                  distance: { text: '1,4 km', value: 1419 },
                  duration: { text: '4 Minuten', value: 240 },
                  end_location: { lat: 52.368511, lng: 9.860992999999999 },
                  html_instructions: 'Bus in Richtung Hannover Meierwiesen',
                  polyline: {
                    points:
                      'mgq~Hold{@QCE`AGvAc@LGBG@M@EAICGAECc@Qw@_@w@s@o@k@s@m@a@]CCGEECMI]OCA]IMC]Em@Og@_@{@{@m@k@m@m@o@o@MKSIMBCBQLSRa@b@STSTmBpBqAvAQ\\MLKJQLy@`@UJwAj@wAl@mAh@MFs@VA@YHQFMIQOOSEKCECGM_@AACGWw@So@CE?AM]CGCMEMOk@Q_AWsAUsAi@iDG]Ia@?AID',
                  },
                  start_location: { lat: 52.358467, lng: 9.858155 },
                  transit_details: {
                    arrival_stop: {
                      location: { lat: 52.368511, lng: 9.860992999999999 },
                      name: 'Hannover Bahnhof Anderten-Misburg',
                    },
                    arrival_time: {
                      text: '15:29',
                      time_zone: 'Europe/Berlin',
                      value: 1626182940,
                    },
                    departure_stop: {
                      location: { lat: 52.358467, lng: 9.858155 },
                      name: 'Anderten - Hannover',
                    },
                    departure_time: {
                      text: '15:25',
                      time_zone: 'Europe/Berlin',
                      value: 1626182700,
                    },
                    headsign: 'Hannover Meierwiesen',
                    line: {
                      agencies: [
                        {
                          name: 'üstra Hannoversche Verkehrsbetriebe AG',
                          url: 'http://www.uestra.de/',
                        },
                      ],
                      short_name: '125',
                      vehicle: {
                        icon: '//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png',
                        name: 'Bus',
                        type: 'BUS',
                      },
                    },
                    num_stops: 4,
                  },
                  travel_mode: 'TRANSIT',
                },
                {
                  distance: { text: '0,1 km', value: 127 },
                  duration: { text: '2 Minuten', value: 103 },
                  end_location: { lat: 52.3692219, lng: 9.861847899999999 },
                  html_instructions:
                    'Gehen bis Anderter Str. 140, 30559 Hannover, Deutschland',
                  polyline: {
                    points: '{es~Hk~d{@E[EYAOCSAOAM?O?K?GOA_@Ag@Aa@AGA',
                  },
                  start_location: { lat: 52.3684606, lng: 9.861021299999999 },
                  steps: [
                    {
                      distance: { text: '55 m', value: 55 },
                      duration: { text: '1 Minute', value: 43 },
                      end_location: { lat: 52.3685748, lng: 9.8618013 },
                      html_instructions:
                        'Auf <b>Gollstraße</b> nach <b>Osten</b> Richtung <b>Anderter Str.</b>',
                      polyline: { points: '{es~Hk~d{@E[EYAOCSAOAM?O?K?G' },
                      start_location: {
                        lat: 52.3684606,
                        lng: 9.861021299999999,
                      },
                      travel_mode: 'WALKING',
                    },
                    {
                      distance: { text: '72 m', value: 72 },
                      duration: { text: '1 Minute', value: 60 },
                      end_location: { lat: 52.3692219, lng: 9.861847899999999 },
                      html_instructions:
                        '<b>Links</b> abbiegen auf <b>Anderter Str.</b><div style="font-size:0.9em">Das Ziel befindet sich auf der linken Seite.</div>',
                      maneuver: 'turn-left',
                      polyline: { points: 'qfs~Hgce{@OA_@Ag@Aa@AGA' },
                      start_location: { lat: 52.3685748, lng: 9.8618013 },
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
              'gxo~Hoik{@FE@HDz@Cl@OpAK|DMnASpAM`BWzEcAvQe@xHG\\UpAi@~BiAbEyB|H}BjIaE|NeA|DyDpMc@`BeBfFu@rA{@|@]Va@R}A`@QE}BRq@ZKLsBbAc@Z}@z@k@|@f@x@@?D@t@jBb@xAZrAj@fDL`Ad@xCdAfGf@rDJfAVfEJtCFrCIrDIbBU`DAXPBQCE`AGvAc@LODS?{@[w@_@w@s@cByAs@k@k@Ya@Kk@Im@Og@_@iBgB}A}Aa@UQFe@`@u@x@aCfCqAvAQ\\YXkAn@sGnC}Aj@QFMIa@c@[y@gA_Dk@gC_BoJIc@IDHEKu@Ec@Cy@?GOAgACi@C',
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

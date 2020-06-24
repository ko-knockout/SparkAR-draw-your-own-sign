
// Load the modules

const Scene = require('Scene');

const NativeUI = require('NativeUI');

const Textures = require('Textures');


// First, we create a Promise and load all the assets we need for our scene


Promise.all([

// Loading Textures for the buttons
    
    Textures.findFirst('texture0'),

    Textures.findFirst('texture1'),

    Textures.findFirst('texture2'),
    
    Textures.findFirst('texture3'),
    
    Textures.findFirst('texture4'),
    
    Textures.findFirst('texture5'),
    
    Textures.findFirst('texture6'),
    
    Textures.findFirst('texture7'),
    
    Textures.findFirst('texture8'),
    
    Textures.findFirst('texture9'),
    
    Textures.findFirst('texture10'),
    
    Textures.findFirst('texture11'),
    
    Textures.findFirst('texture12'),
    
    Textures.findFirst('texture13'),
    
    Textures.findFirst('texture14'),
    
    Textures.findFirst('texture15'),
    
    Textures.findFirst('texture16'),
    
    Textures.findFirst('texture17'),
    
    Textures.findFirst('texture18'),
    
    Textures.findFirst('texture19'),
    
    Textures.findFirst('texture20'),
    
    Textures.findFirst('texture21'),
    
    Textures.findFirst('texture22'),
    
    Textures.findFirst('texture23'),
    
    Textures.findFirst('texture24'),
    
    Textures.findFirst('texture25'),
    
    Textures.findFirst('texture26'),
    
    Textures.findFirst('texture27'),
    
    Textures.findFirst('texture28'),
    
    Textures.findFirst('texture29'),
    
    Textures.findFirst('texture30'),
    
    Textures.findFirst('texture31'),
    
    Textures.findFirst('texture32'),
    
    Textures.findFirst('texture33'),
    
    Textures.findFirst('texture34'),
    
    Textures.findFirst('texture35'),
    
    Textures.findFirst('texture36'),
    
    Textures.findFirst('texture37'),
    
    Textures.findFirst('texture38'),
    
    Textures.findFirst('texture39'),
    
    Textures.findFirst('texture40'),
    
    Textures.findFirst('texture41'),
    
    Textures.findFirst('texture42'),
    
    Textures.findFirst('texture43'),
    
    Textures.findFirst('texture44'),
    
    Textures.findFirst('texture45'),
    
    Textures.findFirst('texture46'),
    
    Textures.findFirst('texture47'),
    
    Textures.findFirst('texture48'),
    
    Textures.findFirst('texture49'),
    
    Textures.findFirst('texture50'),
    
    Textures.findFirst('texture51'),
    
    Textures.findFirst('texture52'),
    
    Textures.findFirst('texture53'),
    
    Textures.findFirst('texture54'),
    
    Textures.findFirst('texture55'),



    Scene.root.findFirst('nullObject0'),

    Scene.root.findFirst('nullObject1'),

    Scene.root.findFirst('nullObject2'),
    
    Scene.root.findFirst('nullObject3'),
    
    Scene.root.findFirst('nullObject4'),
    
    Scene.root.findFirst('nullObject5'),
    
    Scene.root.findFirst('nullObject6'),
    
    Scene.root.findFirst('nullObject7'),
    
    Scene.root.findFirst('nullObject8'),
    
    Scene.root.findFirst('nullObject9'),
    
    Scene.root.findFirst('nullObject10'),
    
    Scene.root.findFirst('nullObject11'),
    
    Scene.root.findFirst('nullObject12'),
    
    Scene.root.findFirst('nullObject13'),
    
    Scene.root.findFirst('nullObject14'),
    
    Scene.root.findFirst('nullObject15'),
    
    Scene.root.findFirst('nullObject16'),
    
    Scene.root.findFirst('nullObject17'),
    
    Scene.root.findFirst('nullObject18'),
    
    Scene.root.findFirst('nullObject19'),
    
    Scene.root.findFirst('nullObject20'),
    
    Scene.root.findFirst('nullObject21'),
    
    Scene.root.findFirst('nullObject22'),
    
    Scene.root.findFirst('nullObject23'),
    
    Scene.root.findFirst('nullObject24'),
    
    Scene.root.findFirst('nullObject25'),
    
    Scene.root.findFirst('nullObject26'),
    
    Scene.root.findFirst('nullObject27'),
    
    Scene.root.findFirst('nullObject28'),
    
    Scene.root.findFirst('nullObject29'),
    
    Scene.root.findFirst('nullObject30'),
    
    Scene.root.findFirst('nullObject31'),
    
    Scene.root.findFirst('nullObject32'),
    
    Scene.root.findFirst('nullObject33'),
    
    Scene.root.findFirst('nullObject34'),
    
    Scene.root.findFirst('nullObject35'),
    
    Scene.root.findFirst('nullObject36'),
    
    Scene.root.findFirst('nullObject37'),
    
    Scene.root.findFirst('nullObject38'),
    
    Scene.root.findFirst('nullObject39'),
    
    Scene.root.findFirst('nullObject40'),
    
    Scene.root.findFirst('nullObject41'),
    
    Scene.root.findFirst('nullObject42'),
    
    Scene.root.findFirst('nullObject43'),
    
    Scene.root.findFirst('nullObject44'),
    
    Scene.root.findFirst('nullObject45'),
    
    Scene.root.findFirst('nullObject46'),
    
    Scene.root.findFirst('nullObject47'),
    
    Scene.root.findFirst('nullObject48'),
    
    Scene.root.findFirst('nullObject49'),
    
    Scene.root.findFirst('nullObject50'),
    
    Scene.root.findFirst('nullObject51'),
    
    Scene.root.findFirst('nullObject52'),
    
    Scene.root.findFirst('nullObject53'),
    
    Scene.root.findFirst('nullObject54'),
    
    Scene.root.findFirst('nullObject55'),


// we can start using our assets and creating the NativeUI Picker    

]).then(function(results){

    
// First, we set the buttons for the NativeUI Picker

    const button1 = results[0];

    const button2 = results[1];

    const button3 = results[2];
    
    const button4 = results[3];
    
    const button5 = results[4];
    
    const button6 = results[5];
    
    const button7 = results[6];
    
    const button8 = results[7];
    
    const button9 = results[8];
    
    const button10 = results[9];
    
    const button11 = results[10];
    
    const button12 = results[11];
    
    const button13 = results[12];
    
    const button14 = results[13];
    
    const button15 = results[14];
    
    const button16 = results[15];
    
    const button17 = results[16];
    
    const button18 = results[17];
    
    const button19 = results[18];
    
    const button20 = results[19];
    
    const button21 = results[20];
    
    const button22 = results[21];
    
    const button23 = results[22];
    
    const button24 = results[23];
    
    const button25 = results[24];
    
    const button26 = results[25];
    
    const button27 = results[26];
    
    const button28 = results[27];
    
    const button29 = results[28];
    
    const button30 = results[29];
    
    const button31 = results[30];
    
    const button32 = results[31];
    
    const button33 = results[32];
    
    const button34 = results[33];
    
    const button35 = results[34];
    
    const button36 = results[35];
    
    const button37 = results[36];
    
    const button38 = results[37];
    
    const button39 = results[38];
    
    const button40 = results[39];
    
    const button41 = results[40];
    
    const button42 = results[41];
    
    const button43 = results[42];
    
    const button44 = results[43];
    
    const button45 = results[44];
    
    const button46 = results[45];
    
    const button47 = results[46];
    
    const button48 = results[47];
    
    const button49 = results[48];
    
    const button50 = results[49];
    
    const button51 = results[50];
    
    const button52 = results[51];
    
    const button53 = results[52];
    
    const button54 = results[53];
    
    const button55 = results[54];
    
    const button56 = results[55];


// Next, we set the Null Objacts for the switch

    const Obj0 = results[56];

    const Obj1 = results[57];

    const Obj2 = results[58];
    
    const Obj3 = results[59];
    
    const Obj4 = results[60];
    
    const Obj5 = results[61];
    
    const Obj6 = results[62];
    
    const Obj7 = results[63];
    
    const Obj8 = results[64];
    
    const Obj9 = results[65];
    
    const Obj10 = results[66];
    
    const Obj11 = results[67];
    
    const Obj12 = results[68];
    
    const Obj13 = results[69];
    
    const Obj14 = results[70];
    
    const Obj15 = results[71];
    
    const Obj16 = results[72];
    
    const Obj17 = results[73];
    
    const Obj18 = results[74];
    
    const Obj19 = results[75];
    
    const Obj20 = results[76];
    
    const Obj21 = results[77];
    
    const Obj22 = results[78];
    
    const Obj23 = results[79];
    
    const Obj24 = results[80];
    
    const Obj25 = results[81];
    
    const Obj26 = results[82];
    
    const Obj27 = results[83];
    
    const Obj28 = results[84];
    
    const Obj29 = results[85];
    
    const Obj30 = results[86];
    
    const Obj31 = results[87];
    
    const Obj32 = results[88];
    
    const Obj33 = results[89];
    
    const Obj34 = results[90];
    
    const Obj35 = results[91];
    
    const Obj36 = results[92];
    
    const Obj37 = results[93];
    
    const Obj38 = results[94];
    
    const Obj39 = results[95];
    
    const Obj40 = results[96];
    
    const Obj41 = results[97];
    
    const Obj42 = results[98];
    
    const Obj43 = results[99];
    
    const Obj44 = results[100];
    
    const Obj45 = results[101];
    
    const Obj46 = results[102];
    
    const Obj47 = results[103];
    
    const Obj48 = results[104];
    
    const Obj49 = results[105];
    
    const Obj50 = results[106];
    
    const Obj51 = results[107];
    
    const Obj52 = results[108];
    
    const Obj53 = results[109];
    
    const Obj54 = results[110];
    
    const Obj55 = results[111];


// Now, we can finally start building the NativeUI Picker
    
    const configuration = {

      selectedIndex: 0,

// These are the image textures to use as the buttons in the NativeUI Picker
        
      items: [

        {image_texture: button1},

        {image_texture: button2},

        {image_texture: button3},
        
        {image_texture: button4},
        
        {image_texture: button5},
        
        {image_texture: button6},
        
        {image_texture: button7},
        
        {image_texture: button8},
        
        {image_texture: button9},
        
        {image_texture: button10},
        
        {image_texture: button11},
        
        {image_texture: button12},
        
        {image_texture: button13},
        
        {image_texture: button14},
        
        {image_texture: button15},
        
        {image_texture: button16},
        
        {image_texture: button17},
        
        {image_texture: button18},
        
        {image_texture: button19},
        
        {image_texture: button20},
        
        {image_texture: button21},
        
        {image_texture: button22},
        
        {image_texture: button23},
        
        {image_texture: button24},
        
        {image_texture: button25},
        
        {image_texture: button26},
        
        {image_texture: button27},
        
        {image_texture: button28},
        
        {image_texture: button29},
        
        {image_texture: button30},
        
        {image_texture: button31},
        
        {image_texture: button32},
        
        {image_texture: button33},
        
        {image_texture: button34},
        
        {image_texture: button35},
        
        {image_texture: button36},
        
        {image_texture: button37},
        
        {image_texture: button38},
        
        {image_texture: button39},
        
        {image_texture: button40},
        
        {image_texture: button41},
        
        {image_texture: button42},
        
        {image_texture: button43},
        
        {image_texture: button44},
        
        {image_texture: button45},
        
        {image_texture: button46},
        
        {image_texture: button47},
        
        {image_texture: button48},
        
        {image_texture: button49},
        
        {image_texture: button50},
        
        {image_texture: button51},
        
        {image_texture: button52},
        
        {image_texture: button53},
        
        {image_texture: button54},
        
        {image_texture: button55},
        
        {image_texture: button56},

      ]

    };

// Create the NativeUI Picker

    const picker = NativeUI.picker;

    picker.configure(configuration);

    picker.visible = true;


 // This is a monitor that watches for the picker to be used.
    
    picker.selectedIndex.monitor().subscribe(function(val) {


      switch(val.newValue) {

        case 0: {

            Obj0.hidden = false;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }

        case 1: {

            Obj0.hidden = true;
            Obj1.hidden = false;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }

        case 2: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = false;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 3: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = false;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 4: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = false;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 5: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = false;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 6: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = false;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 7: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = false;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 8: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = false;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 9: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = false;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 10: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = false;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 11: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = false;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 12: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = false;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 13: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = false;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 14: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = false;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 15: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = false;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 16: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = false;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 17: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = false;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 18: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = false;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 19: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = false;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 20: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = false;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 21: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = false;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 22: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = false;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 23: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = false;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 24: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = false;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 25: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = false;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 26: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = false;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 27: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = false;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 28: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = false;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 29: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = false;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 30: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = false;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 31: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = false;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 32: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = false;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 33: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = false;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 34: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = false;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 35: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = false;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 36: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = false;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 37: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = false;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 38: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = false;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 39: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = false;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 40: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = false;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 41: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = false;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 42: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = false;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 43: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = false;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 44: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = false;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 45: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = false;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 46: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = false;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 47: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = false;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 48: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = false;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 49: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = false;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 50: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = false;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 51: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = false;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 52: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = false;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 53: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = false;
            Obj54.hidden = true;
            Obj55.hidden = true;

           break;

        }
        
        case 54: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = false;
            Obj55.hidden = true;

           break;

        }
        
        case 55: {

            Obj0.hidden = true;
            Obj1.hidden = true;
            Obj2.hidden = true;
            Obj3.hidden = true;
            Obj4.hidden = true;
            Obj5.hidden = true;
            Obj6.hidden = true;
            Obj7.hidden = true;
            Obj8.hidden = true;
            Obj9.hidden = true;
            Obj10.hidden = true;
            Obj11.hidden = true;
            Obj12.hidden = true;
            Obj13.hidden = true;
            Obj14.hidden = true;
            Obj15.hidden = true;
            Obj16.hidden = true;
            Obj17.hidden = true;
            Obj18.hidden = true;
            Obj19.hidden = true;
            Obj20.hidden = true;
            Obj21.hidden = true;
            Obj22.hidden = true;
            Obj23.hidden = true;
            Obj24.hidden = true;
            Obj25.hidden = true;
            Obj26.hidden = true;
            Obj27.hidden = true;
            Obj28.hidden = true;
            Obj29.hidden = true;
            Obj30.hidden = true;
            Obj31.hidden = true;
            Obj32.hidden = true;
            Obj33.hidden = true;
            Obj34.hidden = true;
            Obj35.hidden = true;
            Obj36.hidden = true;
            Obj37.hidden = true;
            Obj38.hidden = true;
            Obj39.hidden = true;
            Obj40.hidden = true;
            Obj41.hidden = true;
            Obj42.hidden = true;
            Obj43.hidden = true;
            Obj44.hidden = true;
            Obj45.hidden = true;
            Obj46.hidden = true;
            Obj47.hidden = true;
            Obj48.hidden = true;
            Obj49.hidden = true;
            Obj50.hidden = true;
            Obj51.hidden = true;
            Obj52.hidden = true;
            Obj53.hidden = true;
            Obj54.hidden = true;
            Obj55.hidden = false;

           break;

        }

      }


    });

    
});


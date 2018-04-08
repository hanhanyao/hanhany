function drawElements(name){
    //console.log(name);
    var n = abbrState(name,'name');
    console.log(n);
    drawHistogram(n);
    showImage(n);
    //drawHistogram(n);
}
var isFirst = 0;
var preimage;
function showImage(name) {
    console.log(name);
    if(isFirst === 1){
        
        preimage.style.display='none';
        
    }
    var img = document.getElementById(name);
    console.log(img);
    img.style.display='block';
    preimage = img;
    isFirst = 1;
    //console.log(img);
}

function drawHistogram(name){
   
   var states = {};
  states.Alabama = [
  {temp: 46, month: 'January'},
  {temp: 51, month: 'February'},
  {temp: 57, month: 'March'},
  {temp: 65, month: 'April'},
  {temp: 72, month: 'May'},
  {temp: 79, month: 'June'},
  {temp: 81, month: 'July'},
  {temp: 81, month: 'Auguest'},
  {temp: 44+33, month: 'September'},
  {temp: 39+26, month: 'October'},
  {temp: 35+22, month: 'November'},
  {temp: 30+18, month: 'December'}
];
  states.Alaska = [
  {temp: (23+11)/2, month: 'January'},
  {temp: (27+14)/2, month: 'February'},
  {temp: (34+19)/2, month: 'March'},
  {temp: (44+29)/2, month: 'April'},
  {temp: (56+40)/2, month: 'May'},
  {temp: (63+48)/2, month: 'June'},
  {temp: (65+52)/2, month: 'July'},
  {temp: (64+50)/2, month: 'Auguest'},
  {temp: (55+42)/2, month: 'September'},
  {temp: (40+29)/2, month: 'October'},
  {temp: (28+17)/2, month: 'November'},
  {temp: (25+13)/2, month: 'December'}
];
  states.Arizona = [
  {temp: (67+46)/2, month: 'January'},
  {temp: (71+49)/2, month: 'February'},
  {temp: (77+53)/2, month: 'March'},
  {temp: (85+60)/2, month: 'April'},
  {temp: (95+69)/2, month: 'May'},
  {temp: (104+78)/2, month: 'June'},
  {temp: (106+83)/2, month: 'July'},
  {temp: (104+83)/2, month: 'Auguest'},
  {temp: (100+77)/2, month: 'September'},
  {temp: (89+65)/2, month: 'October'},
  {temp: (76+53)/2, month: 'November'},
  {temp: (66+45)/2, month: 'December'}
];
  states.Arkansas = [
  {temp: (51+32)/2, month: 'January'},
  {temp: (55+35)/2, month: 'February'},
  {temp: (64+43)/2, month: 'March'},
  {temp: (73+51)/2, month: 'April'},
  {temp: (81+61)/2, month: 'May'},
  {temp: (89+69)/2, month: 'June'},
  {temp: (92+73)/2, month: 'July'},
  {temp: (93+72)/2, month: 'Auguest'},
  {temp: (86+65)/2, month: 'September'},
  {temp: (75+53)/2, month: 'October'},
  {temp: (63+42)/2, month: 'November'},
  {temp: (52+34)/2, month: 'December'}
];
  states.California = [
  {temp: (54+39)/2, month: 'January'},
  {temp: (60+41)/2, month: 'February'},
  {temp: (65+44)/2, month: 'March'},
  {temp: (71+46)/2, month: 'April'},
  {temp: (80+51)/2, month: 'May'},
  {temp: (87+56)/2, month: 'June'},
  {temp: (92+58)/2, month: 'July'},
  {temp: (91+58)/2, month: 'Auguest'},
  {temp: (87+56)/2, month: 'September'},
  {temp: (78+50)/2, month: 'October'},
  {temp: (64+43)/2, month: 'November'},
  {temp: (54+38)/2, month: 'December'}
];
  states.Colorado = [
  {temp: (45+18)/2, month: 'January'},
  {temp: (46+19)/2, month: 'February'},
  {temp: (54+27)/2, month: 'March'},
  {temp: (61+34)/2, month: 'April'},
  {temp: (72+43)/2, month: 'May'},
  {temp: (82+52)/2, month: 'June'},
  {temp: (90+59)/2, month: 'July'},
  {temp: (88+57)/2, month: 'Auguest'},
  {temp: (79+48)/2, month: 'September'},
  {temp: (66+37)/2, month: 'October'},
  {temp: (52+25)/2, month: 'November'},
  {temp: (45+18)/2, month: 'December'}
];
  states.Conneticut = [
  {temp: (37+23)/2, month: 'January'},
  {temp: (40+25)/2, month: 'February'},
  {temp: (47+31)/2, month: 'March'},
  {temp: (58+41)/2, month: 'April'},
  {temp: (68+51)/2, month: 'May'},
  {temp: (77+60)/2, month: 'June'},
  {temp: (82+66)/2, month: 'July'},
  {temp: (81+66)/2, month: 'Auguest'},
  {temp: (74+58)/2, month: 'September'},
  {temp: (63+47)/2, month: 'October'},
  {temp: (53+38)/2, month: 'November'},
  {temp: (42+28)/2, month: 'December'}
];
  states.Delaware = [
  {temp: (43+27)/2, month: 'January'},
  {temp: (47+29)/2, month: 'February'},
  {temp: (55+36)/2, month: 'March'},
  {temp: (66+44)/2, month: 'April'},
  {temp: (75+54)/2, month: 'May'},
  {temp: (83+63)/2, month: 'June'},
  {temp: (87+68)/2, month: 'July'},
  {temp: (85+67)/2, month: 'Auguest'},
  {temp: (79+60)/2, month: 'September'},
  {temp: (69+49)/2, month: 'October'},
  {temp: (58+40)/2, month: 'November'},
  {temp: (47+31)/2, month: 'December'}
];
  states.Conneticut = [
  {temp: (37+23)/2, month: 'January'},
  {temp: (40+25)/2, month: 'February'},
  {temp: (47+31)/2, month: 'March'},
  {temp: (58+41)/2, month: 'April'},
  {temp: (68+51)/2, month: 'May'},
  {temp: (77+60)/2, month: 'June'},
  {temp: (82+66)/2, month: 'July'},
  {temp: (81+66)/2, month: 'Auguest'},
  {temp: (74+58)/2, month: 'September'},
  {temp: (63+47)/2, month: 'October'},
  {temp: (53+38)/2, month: 'November'},
  {temp: (42+28)/2, month: 'December'}
];
  states.DC = [
  {temp: (42+27)/2, month: 'January'},
  {temp: (44+28)/2, month: 'February'},
  {temp: (53+35)/2, month: 'March'},
  {temp: (64+44)/2, month: 'April'},
  {temp: (75+54)/2, month: 'May'},
  {temp: (83+63)/2, month: 'June'},
  {temp: (87+68)/2, month: 'July'},
  {temp: (84+66)/2, month: 'Auguest'},
  {temp: (78+59)/2, month: 'September'},
  {temp: (67+48)/2, month: 'October'},
  {temp: (55+38)/2, month: 'November'},
  {temp: (45+29)/2, month: 'December'}
];
  states.DC = [
  {temp: (42+27)/2, month: 'January'},
  {temp: (44+28)/2, month: 'February'},
  {temp: (53+35)/2, month: 'March'},
  {temp: (64+44)/2, month: 'April'},
  {temp: (75+54)/2, month: 'May'},
  {temp: (83+63)/2, month: 'June'},
  {temp: (87+68)/2, month: 'July'},
  {temp: (84+66)/2, month: 'Auguest'},
  {temp: (78+59)/2, month: 'September'},
  {temp: (67+48)/2, month: 'October'},
  {temp: (55+38)/2, month: 'November'},
  {temp: (45+29)/2, month: 'December'}
];
  states.Florida = [
  {temp: (64+39)/2, month: 'January'},
  {temp: (67+42)/2, month: 'February'},
  {temp: (74+47)/2, month: 'March'},
  {temp: (80+52)/2, month: 'April'},
  {temp: (87+62)/2, month: 'May'},
  {temp: (91+69)/2, month: 'June'},
  {temp: (92+72)/2, month: 'July'},
  {temp: (92+72)/2, month: 'Auguest'},
  {temp: (88+68)/2, month: 'September'},
  {temp: (81+57)/2, month: 'October'},
  {temp: (73+47)/2, month: 'November'},
  {temp: (65+41)/2, month: 'December'}
];
  states.Georgia = [
  {temp: (52+34)/2, month: 'January'},
  {temp: (57+37)/2, month: 'February'},
  {temp: (64+45)/2, month: 'March'},
  {temp: (72+52)/2, month: 'April'},
  {temp: (81+61)/2, month: 'May'},
  {temp: (86+68)/2, month: 'June'},
  {temp: (90+72)/2, month: 'July'},
  {temp: (88+72)/2, month: 'Auguest'},
  {temp: (82+64)/2, month: 'September'},
  {temp: (73+53)/2, month: 'October'},
  {temp: (64+43)/2, month: 'November'},
  {temp: (54+36)/2, month: 'December'}
];
  states.Hawaii = [
  {temp: (80+66)/2, month: 'January'},
  {temp: (80+66)/2, month: 'February'},
  {temp: (81+68)/2, month: 'March'},
  {temp: (83+69)/2, month: 'April'},
  {temp: (85+71)/2, month: 'May'},
  {temp: (87+73)/2, month: 'June'},
  {temp: (88+74)/2, month: 'July'},
  {temp: (89+75)/2, month: 'Auguest'},
  {temp: (89+74)/2, month: 'September'},
  {temp: (87+73)/2, month: 'October'},
  {temp: (84+71)/2, month: 'November'},
  {temp: (81+68)/2, month: 'December'}
];
  states.Idaho = [
  {temp: (38+25)/2, month: 'January'},
  {temp: (45+28)/2, month: 'February'},
  {temp: (55+34)/2, month: 'March'},
  {temp: (62+39)/2, month: 'April'},
  {temp: (72+47)/2, month: 'May'},
  {temp: (81+54)/2, month: 'June'},
  {temp: (91+60)/2, month: 'July'},
  {temp: (90+60)/2, month: 'Auguest'},
  {temp: (79+51)/2, month: 'September'},
  {temp: (65+41)/2, month: 'October'},
  {temp: (48+32)/2, month: 'November'},
  {temp: (38+24)/2, month: 'December'}
];
  states.Illinois = [
  {temp: (32+18)/2, month: 'January'},
  {temp: (36+21)/2, month: 'February'},
  {temp: (46+30)/2, month: 'March'},
  {temp: (59+41)/2, month: 'April'},
  {temp: (70+52)/2, month: 'May'},
  {temp: (81+63)/2, month: 'June'},
  {temp: (84+68)/2, month: 'July'},
  {temp: (82+66)/2, month: 'Auguest'},
  {temp: (75+57)/2, month: 'September'},
  {temp: (63+46)/2, month: 'October'},
  {temp: (48+34)/2, month: 'November'},
  {temp: (36+23)/2, month: 'December'}
];
  states.Indiana = [
  {temp: (35+19)/2, month: 'January'},
  {temp: (40+22)/2, month: 'February'},
  {temp: (51+30)/2, month: 'March'},
  {temp: (63+40)/2, month: 'April'},
  {temp: (73+50)/2, month: 'May'},
  {temp: (82+59)/2, month: 'June'},
  {temp: (85+63)/2, month: 'July'},
  {temp: (83+61)/2, month: 'Auguest'},
  {temp: (77+53)/2, month: 'September'},
  {temp: (65+42)/2, month: 'October'},
  {temp: (52+33)/2, month: 'November'},
  {temp: (39+23)/2, month: 'December'}
];
  states.Iowa = [
  {temp: (31+14)/2, month: 'January'},
  {temp: (36+19)/2, month: 'February'},
  {temp: (49+30)/2, month: 'March'},
  {temp: (62+41)/2, month: 'April'},
  {temp: (72+52)/2, month: 'May'},
  {temp: (82+62)/2, month: 'June'},
  {temp: (86+67)/2, month: 'July'},
  {temp: (84+65)/2, month: 'Auguest'},
  {temp: (76+55)/2, month: 'September'},
  {temp: (63+43)/2, month: 'October'},
  {temp: (48+31)/2, month: 'November'},
  {temp: (34+18)/2, month: 'December'}
];
  states.Kansas = [
  {temp: (40+20)/2, month: 'January'},
  {temp: (45+24)/2, month: 'February'},
  {temp: (56+33)/2, month: 'March'},
  {temp: (67+44)/2, month: 'April'},
  {temp: (76+54)/2, month: 'May'},
  {temp: (85+64)/2, month: 'June'},
  {temp: (89+68)/2, month: 'July'},
  {temp: (89+66)/2, month: 'Auguest'},
  {temp: (80+56)/2, month: 'September'},
  {temp: (68+45)/2, month: 'October'},
  {temp: (55+33)/2, month: 'November'},
  {temp: (42+22)/2, month: 'December'}
];
  states.Kentucky = [
  {temp: (40+21)/2, month: 'January'},
  {temp: (45+23)/2, month: 'February'},
  {temp: (55+31)/2, month: 'March'},
  {temp: (66+39)/2, month: 'April'},
  {temp: (75+49)/2, month: 'May'},
  {temp: (83+59)/2, month: 'June'},
  {temp: (87+63)/2, month: 'July'},
  {temp: (86+62)/2, month: 'Auguest'},
  {temp: (79+55)/2, month: 'September'},
  {temp: (68+42)/2, month: 'October'},
  {temp: (55+34)/2, month: 'November'},
  {temp: (44+26)/2, month: 'December'}
];
  states.Louisiana = [
  {temp: (62+45)/2, month: 'January'},
  {temp: (65+48)/2, month: 'February'},
  {temp: (72+53)/2, month: 'March'},
  {temp: (78+60)/2, month: 'April'},
  {temp: (85+68)/2, month: 'May'},
  {temp: (89+74)/2, month: 'June'},
  {temp: (91+75)/2, month: 'July'},
  {temp: (91+75)/2, month: 'Auguest'},
  {temp: (87+72)/2, month: 'September'},
  {temp: (80+63)/2, month: 'October'},
  {temp: (72+53)/2, month: 'November'},
  {temp: (64+47)/2, month: 'December'}
];
  states.Maine = [
  {temp: (28+11)/2, month: 'January'},
  {temp: (32+15)/2, month: 'February'},
  {temp: (40+23)/2, month: 'March'},
  {temp: (53+35)/2, month: 'April'},
  {temp: (65+45)/2, month: 'May'},
  {temp: (74+54)/2, month: 'June'},
  {temp: (79+60)/2, month: 'July'},
  {temp: (78+58)/2, month: 'Auguest'},
  {temp: (70+51)/2, month: 'September'},
  {temp: (57+40)/2, month: 'October'},
  {temp: (45+31)/2, month: 'November'},
  {temp: (33+19)/2, month: 'December'}
];
  states.Maryland = [
  {temp: (42+29)/2, month: 'January'},
  {temp: (46+31)/2, month: 'February'},
  {temp: (54+39)/2, month: 'March'},
  {temp: (65+48)/2, month: 'April'},
  {temp: (75+57)/2, month: 'May'},
  {temp: (85+67)/2, month: 'June'},
  {temp: (89+73)/2, month: 'July'},
  {temp: (87+71)/2, month: 'Auguest'},
  {temp: (80+64)/2, month: 'September'},
  {temp: (68+52)/2, month: 'October'},
  {temp: (58+43)/2, month: 'November'},
  {temp: (46+33)/2, month: 'December'}
];
  states.Massachusetts = [
  {temp: (36+22)/2, month: 'January'},
  {temp: (39+25)/2, month: 'February'},
  {temp: (45+31)/2, month: 'March'},
  {temp: (56+41)/2, month: 'April'},
  {temp: (66+50)/2, month: 'May'},
  {temp: (76+60)/2, month: 'June'},
  {temp: (81+65)/2, month: 'July'},
  {temp: (80+65)/2, month: 'Auguest'},
  {temp: (72+57)/2, month: 'September'},
  {temp: (61+47)/2, month: 'October'},
  {temp: (51+38)/2, month: 'November'},
  {temp: (41+22)/2, month: 'December'}
];
  states.Michigan = [
  {temp: (30+17)/2, month: 'January'},
  {temp: (33+19)/2, month: 'February'},
  {temp: (44+26)/2, month: 'March'},
  {temp: (58+37)/2, month: 'April'},
  {temp: (69+47)/2, month: 'May'},
  {temp: (78+57)/2, month: 'June'},
  {temp: (82+61)/2, month: 'July'},
  {temp: (80+59)/2, month: 'Auguest'},
  {temp: (73+51)/2, month: 'September'},
  {temp: (60+41)/2, month: 'October'},
  {temp: (47+32)/2, month: 'November'},
  {temp: (34+22)/2, month: 'December'}
];
  states.Minnesota = [
  {temp: (26+7)/2, month: 'January'},
  {temp: (31+12)/2, month: 'February'},
  {temp: (43+24)/2, month: 'March'},
  {temp: (58+38)/2, month: 'April'},
  {temp: (71+50)/2, month: 'May'},
  {temp: (80+59)/2, month: 'June'},
  {temp: (85+64)/2, month: 'July'},
  {temp: (82+62)/2, month: 'Auguest'},
  {temp: (73+53)/2, month: 'September'},
  {temp: (59+41)/2, month: 'October'},
  {temp: (42+27)/2, month: 'November'},
  {temp: (29+13)/2, month: 'December'}
];
  states.Mississippi = [
  {temp: (56+35)/2, month: 'January'},
  {temp: (60+38)/2, month: 'February'},
  {temp: (69+45)/2, month: 'March'},
  {temp: (76+52)/2, month: 'April'},
  {temp: (83+62)/2, month: 'May'},
  {temp: (89+69)/2, month: 'June'},
  {temp: (92+72)/2, month: 'July'},
  {temp: (92+71)/2, month: 'Auguest'},
  {temp: (87+65)/2, month: 'September'},
  {temp: (77+53)/2, month: 'October'},
  {temp: (67+44)/2, month: 'November'},
  {temp: (58+37)/2, month: 'December'}
];
  states.Missouri = [
  {temp: (40+21)/2, month: 'January'},
  {temp: (45+25)/2, month: 'February'},
  {temp: (56+33)/2, month: 'March'},
  {temp: (67+44)/2, month: 'April'},
  {temp: (75+54)/2, month: 'May'},
  {temp: (83+63)/2, month: 'June'},
  {temp: (88+68)/2, month: 'July'},
  {temp: (88+66)/2, month: 'Auguest'},
  {temp: (80+57)/2, month: 'September'},
  {temp: (69+45)/2, month: 'October'},
  {temp: (56+35)/2, month: 'November'},
  {temp: (43+24)/2, month: 'December'}
];
  states.Montana = [
  {temp: (33+13)/2, month: 'January'},
  {temp: (39+17)/2, month: 'February'},
  {temp: (48+24)/2, month: 'March'},
  {temp: (58+32)/2, month: 'April'},
  {temp: (67+41)/2, month: 'May'},
  {temp: (76+49)/2, month: 'June'},
  {temp: (86+54)/2, month: 'July'},
  {temp: (85+52)/2, month: 'Auguest'},
  {temp: (73+43)/2, month: 'September'},
  {temp: (59+33)/2, month: 'October'},
  {temp: (43+22)/2, month: 'November'},
  {temp: (32+12)/2, month: 'December'}
];
  states.Nebraska = [
  {temp: (32+12)/2, month: 'January'},
  {temp: (37+18)/2, month: 'February'},
  {temp: (50+28)/2, month: 'March'},
  {temp: (63+39)/2, month: 'April'},
  {temp: (73+50)/2, month: 'May'},
  {temp: (84+61)/2, month: 'June'},
  {temp: (88+66)/2, month: 'July'},
  {temp: (86+64)/2, month: 'Auguest'},
  {temp: (77+54)/2, month: 'September'},
  {temp: (64+41)/2, month: 'October'},
  {temp: (48+28)/2, month: 'November'},
  {temp: (36+16)/2, month: 'December'}
];
  states.Nevada = [
  {temp: (45+22)/2, month: 'January'},
  {temp: (50+25)/2, month: 'February'},
  {temp: (57+30)/2, month: 'March'},
  {temp: (63+34)/2, month: 'April'},
  {temp: (71+41)/2, month: 'May'},
  {temp: (81+47)/2, month: 'June'},
  {temp: (90+52)/2, month: 'July'},
  {temp: (88+51)/2, month: 'Auguest'},
  {temp: (80+43)/2, month: 'September'},
  {temp: (68+35)/2, month: 'October'},
  {temp: (54+27)/2, month: 'November'},
  {temp: (45+22)/2, month: 'December'}
];
  states.NH = [
  {temp: (31+10)/2, month: 'January'},
  {temp: (35+14)/2, month: 'February'},
  {temp: (44+22)/2, month: 'March'},
  {temp: (57+33)/2, month: 'April'},
  {temp: (69+43)/2, month: 'May'},
  {temp: (77+53)/2, month: 'June'},
  {temp: (82+58)/2, month: 'July'},
  {temp: (81+56)/2, month: 'Auguest'},
  {temp: (73+47)/2, month: 'September'},
  {temp: (60+36)/2, month: 'October'},
  {temp: (48+28)/2, month: 'November'},
  {temp: (36+17)/2, month: 'December'}
];
  states.NJ = [
  {temp: (39+24)/2, month: 'January'},
  {temp: (42+27)/2, month: 'February'},
  {temp: (51+34)/2, month: 'March'},
  {temp: (62+44)/2, month: 'April'},
  {temp: (72+53)/2, month: 'May'},
  {temp: (82+63)/2, month: 'June'},
  {temp: (86+69)/2, month: 'July'},
  {temp: (84+67)/2, month: 'Auguest'},
  {temp: (77+60)/2, month: 'September'},
  {temp: (65+48)/2, month: 'October'},
  {temp: (55+39)/2, month: 'November'},
  {temp: (44+30)/2, month: 'December'}
];
  states.NM = [
  {temp: (44+17)/2, month: 'January'},
  {temp: (48+22)/2, month: 'February'},
  {temp: (56+26)/2, month: 'March'},
  {temp: (65+32)/2, month: 'April'},
  {temp: (74+41)/2, month: 'May'},
  {temp: (83+49)/2, month: 'June'},
  {temp: (86+54)/2, month: 'July'},
  {temp: (83+53)/2, month: 'Auguest'},
  {temp: (78+47)/2, month: 'September'},
  {temp: (67+35)/2, month: 'October'},
  {temp: (53+25)/2, month: 'November'},
  {temp: (43+17)/2, month: 'December'}
];
  states.NY = [
  {temp: (39+26)/2, month: 'January'},
  {temp: (42+29)/2, month: 'February'},
  {temp: (50+35)/2, month: 'March'},
  {temp: (60+44)/2, month: 'April'},
  {temp: (71+55)/2, month: 'May'},
  {temp: (79+64)/2, month: 'June'},
  {temp: (85+70)/2, month: 'July'},
  {temp: (83+69)/2, month: 'Auguest'},
  {temp: (76+61)/2, month: 'September'},
  {temp: (65+50)/2, month: 'October'},
  {temp: (54+41)/2, month: 'November'},
  {temp: (44+32)/2, month: 'December'}
];
  states.NC = [
  {temp: (51+30)/2, month: 'January'},
  {temp: (55+33)/2, month: 'February'},
  {temp: (63+39)/2, month: 'March'},
  {temp: (72+47)/2, month: 'April'},
  {temp: (79+56)/2, month: 'May'},
  {temp: (86+65)/2, month: 'June'},
  {temp: (89+68)/2, month: 'July'},
  {temp: (87+67)/2, month: 'Auguest'},
  {temp: (81+60)/2, month: 'September'},
  {temp: (72+49)/2, month: 'October'},
  {temp: (62+39)/2, month: 'November'},
  {temp: (53+32)/2, month: 'December'}
];
  states.ND = [
  {temp: (23+2)/2, month: 'January'},
  {temp: (28+8)/2, month: 'February'},
  {temp: (40+19)/2, month: 'March'},
  {temp: (57+31)/2, month: 'April'},
  {temp: (68+43)/2, month: 'May'},
  {temp: (77+52)/2, month: 'June'},
  {temp: (85+57)/2, month: 'July'},
  {temp: (83+56)/2, month: 'Auguest'},
  {temp: (72+45)/2, month: 'September'},
  {temp: (58+32)/2, month: 'October'},
  {temp: (40+19)/2, month: 'November'},
  {temp: (26+6)/2, month: 'December'}
];
  states.Ohio = [
  {temp: (36+20)/2, month: 'January'},
  {temp: (40+24)/2, month: 'February'},
  {temp: (52+32)/2, month: 'March'},
  {temp: (63+41)/2, month: 'April'},
  {temp: (73+52)/2, month: 'May'},
  {temp: (82+61)/2, month: 'June'},
  {temp: (85+65)/2, month: 'July'},
  {temp: (84+63)/2, month: 'Auguest'},
  {temp: (77+56)/2, month: 'September'},
  {temp: (65+4)/2, month: 'October'},
  {temp: (52+35)/2, month: 'November'},
  {temp: (41+26)/2, month: 'December'}
];
  states.Oklahoma = [
  {temp: (50+29)/2, month: 'January'},
  {temp: (55+33)/2, month: 'February'},
  {temp: (63+41)/2, month: 'March'},
  {temp: (72+50)/2, month: 'April'},
  {temp: (80+60)/2, month: 'May'},
  {temp: (88+68)/2, month: 'June'},
  {temp: (94+72)/2, month: 'July'},
  {temp: (93+71)/2, month: 'Auguest'},
  {temp: (85+63)/2, month: 'September'},
  {temp: (73+52)/2, month: 'October'},
  {temp: (62+40)/2, month: 'November'},
  {temp: (51+31)/2, month: 'December'}
];
  states.Oregon = [
  {temp: (48+35)/2, month: 'January'},
  {temp: (52+35)/2, month: 'February'},
  {temp: (56+37)/2, month: 'March'},
  {temp: (61+40)/2, month: 'April'},
  {temp: (68+45)/2, month: 'May'},
  {temp: (74+49)/2, month: 'June'},
  {temp: (82+53)/2, month: 'July'},
  {temp: (82+53)/2, month: 'Auguest'},
  {temp: (77+48)/2, month: 'September'},
  {temp: (64+42)/2, month: 'October'},
  {temp: (53+38)/2, month: 'November'},
  {temp: (46+34)/2, month: 'December'}
];
  states.Pennsylvania = [
  {temp: (40+26)/2, month: 'January'},
  {temp: (44+28)/2, month: 'February'},
  {temp: (53+34)/2, month: 'March'},
  {temp: (64+44)/2, month: 'April'},
  {temp: (74+54)/2, month: 'May'},
  {temp: (83+64)/2, month: 'June'},
  {temp: (87+69)/2, month: 'July'},
  {temp: (85+68)/2, month: 'Auguest'},
  {temp: (78+60)/2, month: 'September'},
  {temp: (67+48)/2, month: 'October'},
  {temp: (56+39)/2, month: 'November'},
  {temp: (45+30)/2, month: 'December'}
];
  states.RI = [
  {temp: (37+21)/2, month: 'January'},
  {temp: (40+24)/2, month: 'February'},
  {temp: (48+30)/2, month: 'March'},
  {temp: (59+40)/2, month: 'April'},
  {temp: (68+49)/2, month: 'May'},
  {temp: (78+58)/2, month: 'June'},
  {temp: (83+64)/2, month: 'July'},
  {temp: (81+63)/2, month: 'Auguest'},
  {temp: (74+55)/2, month: 'September'},
  {temp: (63+44)/2, month: 'October'},
  {temp: (53+36)/2, month: 'November'},
  {temp: (42+26)/2, month: 'December'}
];
  states.SC = [
  {temp: (56+34)/2, month: 'January'},
  {temp: (60+37)/2, month: 'February'},
  {temp: (68+43)/2, month: 'March'},
  {temp: (76+50)/2, month: 'April'},
  {temp: (84+60)/2, month: 'May'},
  {temp: (90+68)/2, month: 'June'},
  {temp: (93+72)/2, month: 'July'},
  {temp: (91+71)/2, month: 'Auguest'},
  {temp: (85+64)/2, month: 'September'},
  {temp: (76+52)/2, month: 'October'},
  {temp: (67+42)/2, month: 'November'},
  {temp: (58+35)/2, month: 'December'}
];
  states.SD = [
  {temp: (22)/2, month: 'January'},
  {temp: (27+5)/2, month: 'February'},
  {temp: (39+19)/2, month: 'March'},
  {temp: (57+32)/2, month: 'April'},
  {temp: (69+45)/2, month: 'May'},
  {temp: (78+55)/2, month: 'June'},
  {temp: (84+60)/2, month: 'July'},
  {temp: (82+57)/2, month: 'Auguest'},
  {temp: (72+46)/2, month: 'September'},
  {temp: (58+33)/2, month: 'October'},
  {temp: (39+19)/2, month: 'November'},
  {temp: (25+5)/2, month: 'December'}
];
  states.Tennessee = [
  {temp: (50+33)/2, month: 'January'},
  {temp: (55+36)/2, month: 'February'},
  {temp: (64+44)/2, month: 'March'},
  {temp: (73+53)/2, month: 'April'},
  {temp: (81+62)/2, month: 'May'},
  {temp: (89+70)/2, month: 'June'},
  {temp: (92+74)/2, month: 'July'},
  {temp: (91+73)/2, month: 'Auguest'},
  {temp: (85+65)/2, month: 'September'},
  {temp: (74+54)/2, month: 'October'},
  {temp: (63+44)/2, month: 'November'},
  {temp: (52+35)/2, month: 'December'}
];
  states.Texas = [
  {temp: (62+42)/2, month: 'January'},
  {temp: (65+45)/2, month: 'February'},
  {temp: (72+51)/2, month: 'March'},
  {temp: (80+59)/2, month: 'April'},
  {temp: (87+67)/2, month: 'May'},
  {temp: (92+72)/2, month: 'June'},
  {temp: (96+74)/2, month: 'July'},
  {temp: (97+75)/2, month: 'Auguest'},
  {temp: (91+69)/2, month: 'September'},
  {temp: (82+61)/2, month: 'October'},
  {temp: (71+51)/2, month: 'November'},
  {temp: (63+42)/2, month: 'December'}
];
  states.Utah = [
  {temp: (38+26)/2, month: 'January'},
  {temp: (44+31)/2, month: 'February'},
  {temp: (53+38)/2, month: 'March'},
  {temp: (61+43)/2, month: 'April'},
  {temp: (71+52)/2, month: 'May'},
  {temp: (82+61)/2, month: 'June'},
  {temp: (90+69)/2, month: 'July'},
  {temp: (89+67)/2, month: 'Auguest'},
  {temp: (78+58)/2, month: 'September'},
  {temp: (65+46)/2, month: 'October'},
  {temp: (50+36)/2, month: 'November'},
  {temp: (40+27)/2, month: 'December'}
];
  states.Vermont = [
  {temp: (27+10)/2, month: 'January'},
  {temp: (31+13)/2, month: 'February'},
  {temp: (40+22)/2, month: 'March'},
  {temp: (55+35)/2, month: 'April'},
  {temp: (67+45)/2, month: 'May'},
  {temp: (76+55)/2, month: 'June'},
  {temp: (81+60)/2, month: 'July'},
  {temp: (79+58)/2, month: 'Auguest'},
  {temp: (70+51)/2, month: 'September'},
  {temp: (57+39)/2, month: 'October'},
  {temp: (46+31)/2, month: 'November'},
  {temp: (33+19)/2, month: 'December'}
];
  states.Virginia = [
  {temp: (47+28)/2, month: 'January'},
  {temp: (51+31)/2, month: 'February'},
  {temp: (60+37)/2, month: 'March'},
  {temp: (70+34)/2, month: 'April'},
  {temp: (78+55)/2, month: 'May'},
  {temp: (86+65)/2, month: 'June'},
  {temp: (90+69)/2, month: 'July'},
  {temp: (88+51)/2, month: 'Auguest'},
  {temp: (81+67)/2, month: 'September'},
  {temp: (71+48)/2, month: 'October'},
  {temp: (61+39)/2, month: 'November'},
  {temp: (51+31)/2, month: 'December'}
];
  states.Washington = [
  {temp: (47+37)/2, month: 'January'},
  {temp: (50+37)/2, month: 'February'},
  {temp: (54+39)/2, month: 'March'},
  {temp: (58+42)/2, month: 'April'},
  {temp: (65+47)/2, month: 'May'},
  {temp: (70+52)/2, month: 'June'},
  {temp: (76+56)/2, month: 'July'},
  {temp: (76+56)/2, month: 'Auguest'},
  {temp: (71+52)/2, month: 'September'},
  {temp: (60+46)/2, month: 'October'},
  {temp: (51+40)/2, month: 'November'},
  {temp: (46+36)/2, month: 'December'}
];
  states.WV = [
  {temp: (42+26)/2, month: 'January'},
  {temp: (47+29)/2, month: 'February'},
  {temp: (56+35)/2, month: 'March'},
  {temp: (68+44)/2, month: 'April'},
  {temp: (75+53)/2, month: 'May'},
  {temp: (82+62)/2, month: 'June'},
  {temp: (85+66)/2, month: 'July'},
  {temp: (84+65)/2, month: 'Auguest'},
  {temp: (78+57)/2, month: 'September'},
  {temp: (68+45)/2, month: 'October'},
  {temp: (57+37)/2, month: 'November'},
  {temp: (46+29)/2, month: 'December'}
];
  states.Wisconsin = [
  {temp: (29+16)/2, month: 'January'},
  {temp: (33+19)/2, month: 'February'},
  {temp: (42+28)/2, month: 'March'},
  {temp: (54+37)/2, month: 'April'},
  {temp: (65+47)/2, month: 'May'},
  {temp: (75+57)/2, month: 'June'},
  {temp: (80+64)/2, month: 'July'},
  {temp: (78+63)/2, month: 'Auguest'},
  {temp: (71+55)/2, month: 'September'},
  {temp: (59+43)/2, month: 'October'},
  {temp: (46+32)/2, month: 'November'},
  {temp: (33+20)/2, month: 'December'}
];
  states.Wyoming = [
  {temp: (40+18)/2, month: 'January'},
  {temp: (40+19)/2, month: 'February'},
  {temp: (47+24)/2, month: 'March'},
  {temp: (55+31)/2, month: 'April'},
  {temp: (65+40)/2, month: 'May'},
  {temp: (75+49)/2, month: 'June'},
  {temp: (83+56)/2, month: 'July'},
  {temp: (81+54)/2, month: 'Auguest'},
  {temp: (72+45)/2, month: 'September'},
  {temp: (59+34)/2, month: 'October'},
  {temp: (47+24)/2, month: 'November'},
  {temp: (38+17)/2, month: 'December'}
];
  if(name == "District of Columbia"){
    name = "DC";
  }
  else if(name == "New Hampshire"){
    name = "NH";
  }
  else if(name == "New Jersey"){
    name = "NJ";
  }
  else if(name == "New Maxico"){
    name = "NM";
  }
  else if(name == "New York"){
    name = "NY";
  }
  else if(name == "North Carolina"){
    name = "NC";
  }
  else if(name == "North Dakota"){
    name = "ND";
  }
  else if(name == "Rhode Island"){
    name = "RI";
  }
  else if(name == "South Carolina"){
    name = "SC";
  }
  else if(name == "South Dakota"){
    name = "SD";
  }
  else if(name == "West Virginia"){
    name = "WV";
  }
  var temperatures = states[name];
   
    
var months = temperatures.map(function(t) {
  return t.month
});

var margin = {top: 50, right: 100, bottom: 50, left: 100};
// here, we want the full chart to be 700x200, so we determine
// the width and height by subtracting the margins from those values
var fullWidth = 900;
var fullHeight = 400;
// the width and height values will be used in the ranges of our scales
var width = fullWidth - margin.right - margin.left;
var height = fullHeight - margin.top - margin.bottom;

d3.select("#hist").select("svg").remove();

var svg = d3.select('#hist').append('svg')
  .attr('width', fullWidth)
  .attr('height', fullHeight)
  // this g is where the bar chart will be drawn
  .append('g')
    // translate it to leave room for the left and top margins
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   
svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .text(name + " Monthly Average Temperature: ");
// x value determined by month
var monthScale = d3.scaleBand()
  .domain(months)
  .range([0, width])
  .paddingInner(0.1);

// the width of the bars is determined by the scale
var bandwidth = monthScale.bandwidth();

// y value determined by temp
var maxTemp = d3.max(temperatures, function(d) { return d.temp; });
var tempScale = d3.scaleLinear()
  .domain([-30, maxTemp])
  .range([height, 0])
  .nice();

var xAxis = d3.axisBottom(monthScale);
var yAxis = d3.axisLeft(tempScale);

var tooltip = svg.append("g")
    .attr("class", "tooltip")
    .style("display", "none");
    
tooltip.append("rect")
    .attr("width", 100)
    .attr("height", 20)
    .attr("fill", "grey")
    .style("opacity", 0.5);

  tooltip.append("text")
    .attr("x", 50)
    .attr("dy", "1.2em")
    .style("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("font-weight", "bold");

      

// draw the axes
svg.append('g')
  .classed('x axis', true)
  .attr('transform', 'translate(0,' + height + ')')
  .call(xAxis);

var yAxisEle = svg.append('g')
  .classed('y axis', true)
  .call(yAxis);

// add a label to the yAxis
var yText = yAxisEle.append('text')
  .attr('transform', 'rotate(-90)translate(-' + height/2 + ',0)')
  .style('text-anchor', 'middle')
  .style('fill', 'black')
  .attr('dy', '-2.5em')
  .style('font-size', 14)
  .text('Fahrenheit');

var barHolder = svg.append('g')
  .classed('bar-holder', true);

// draw the bars
var bars = barHolder.selectAll('rect.bar')
    .data(temperatures)
  .enter().append('rect')
    .classed('bar', true)
    .attr('x', function(d, i) {
      // the x value is determined using the
      // month of the datum
      return monthScale(d.month)
    })
    .attr('width', bandwidth)
    .attr('y', function(d) {
      // the y position is determined by the datum's temp
      // this value is the top edge of the rectangle
      return tempScale(d.temp);
    })
    .attr('height', function(d) {
      // the bar's height should align it with the base of the chart (y=0)
      return height - tempScale(d.temp);
    })
    .on("mouseover", function() { tooltip.style("display", null); })
    .on("mouseout", function() { tooltip.style("display", "none"); })
    .on("mousemove", function(d) {
      var xPosition = d3.mouse(this)[0];
      var yPosition = d3.mouse(this)[1] -40;
      tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
      tooltip.select("text").text("Temperature: " + d.temp);
    });
    
var isCelsius;
function convert() {
  // convert temperatures between celsius and fahrenheit
  var converter = isCelsius ? toFahrenheit : toCelsius;
  yText.text(isCelsius ? 'Fahrenheit' : 'Celsius')
  isCelsius = !isCelsius;
  temperatures.forEach(function(t) {
    t.temp = converter(t.temp);
  });

  // redraw the bars
  bars
    .transition()
      .duration(2500)   
      .attr('y', function(d) {
        return tempScale(d.temp);
      })
      .attr('height', function(d) {
        return height - tempScale(d.temp);
      })
}

function toCelsius(f) {
  return ((f-32)*5/9).toFixed(2);
}

function toFahrenheit(c) {
  return c*9/5 + 32;
}

setInterval(convert, 5000);
}
function abbrState(input, to){
    
    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
        ['District of Columbia', 'DC'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
}
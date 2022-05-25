$(document).ready(function() {
    
    var props = [
      ["Hydrogen", "H", 1.008, 2, 1, -259.14, -252.87, 1, 1],
      ["Helium", "He", 4.003, 2, 1, -272.20, -268.928, 1, 18],
      ["Lithium", "Li", 6.94, 0, 0, 180.50, 1330, 2, 1],
      ["Beryllium", "Be", 9.012, 0, 0, 1287, 2469, 2, 2],
      ["Boron", "B", 10.81, 0, 2, 2076, 3927, 2, 13],
      ["Carbon", "C", 12.011, 0, 1, 3550, 4827, 2, 14],
      ["Nitrogen", "N", 14.007, 2, 1, -210, -195.795, 2, 15],
      ["Oxygen", "O", 15.999, 2, 1, -218.79, -90.188, 2, 16],
      ["Fluorine", "F", 18.998, 2, 1, -219.67, -188.11, 2, 17],
      ["Neon", "Ne", 20.18, 2, 1, -248.59, -246.046, 2, 18],
      ["Sodium", "Na", 22.99, 0, 0, 97.794, 882.940, 3, 1],
      ["Magnesium", "Mg", 24.305, 0, 0, 650, 1091, 3, 2],
      ["Aluminum", "Al", 26.982, 0, 0, 660.32, 2470, 3, 13],
      ["Silicon", "Si", 28.085, 0, 2, 1414, 3265, 3, 14],
      ["Phosphorus", "P", 30.974, 0, 1, 44.2, 280.5, 3, 15],
      ["Sulfur", "S", 32.06, 0, 1, 115.21, 444.6, 3, 16],
      ["Chlorine", "Cl", 35.45, 2, 1, -101.5, -34.04, 3, 17],
      ["Argon", "Ar", 39.948, 2, 1, -189.34, -185.848, 3, 18],
      ["Potassium", "K", 39.098, 0, 0, 63.5, 759, 4, 1],
      ["Calcium", "Ca", 40.078, 0, 0, 842, 1484, 4, 2],
      ["Scandium", "Sc", 44.956, 0, 0, 1541, 2836, 4, 3],
      ["Titanium", "Ti", 47.867, 0, 0, 1668, 3287, 4, 4],
      ["Vanadium", "V", 50.942, 0, 0, 1910, 3407, 4, 5],
      ["Chromium", "Cr", 51.996, 0, 0, 1907, 2671, 4, 6],
      ["Manganese", "Mn", 54.938, 0, 0, 1246, 2061, 4, 7],
      ["Iron", "Fe", 55.845, 0, 0, 1538, 2862, 4, 8],
      ["Cobalt", "Co", 58.933, 0, 0, 1495, 2927, 4, 9],
      ["Nickel", "Ni", 58.693, 0, 0, 1455, 2730, 4, 10],
      ["Copper", "Cu", 63.546, 0, 0, 1084.62, 2562, 4, 11],
      ["Zinc", "Zn", 65.38, 0, 0, 419.53, 907, 4, 12],
      ["Gallium", "Ga", 69.723, 0, 0, 29.7646, 2400, 4, 13],
      ["Germanium", "Ge", 72.63, 0, 2, 938.25, 2833, 4, 14],
      ["Arsenic", "As", 74.922, 0, 2, 816.8, 603, 4, 15],
      ["Selenium", "Se", 78.971, 0, 1, 221, 685, 4, 16],
      ["Bromine", "Br", 79.904, 1, 1, -7.2, 58.8, 4, 17],
      ["Krypton", "Kr", 83.798, 2, 1, -157.37, -153.415, 4, 18],
      ["Rubidium", "Rb", 85.469, 0, 0, 39.3, 688, 5, 1],
      ["Strontium", "Sr", 87.62, 0, 0, 777, 1377, 5, 2],
      ["Yttrium", "Y", 88.906, 0, 0, 1526, 2930, 5, 3],
      ["Zirconium", "Zr", 91.224, 0, 0, 1855, 4377, 5, 4],
      ["Niobium", "Nb", 92.906, 0, 0, 2477, 4744, 5, 5],
      ["Molybdenum", "Mo", 95.95, 0, 0, 2623, 4639, 5, 6],
      ["Technetium", "Tc", 98, 0, 0, 2157, 4265, 5, 7],
      ["Ruthenium", "Ru", 101.07, 0, 0, 2334, 4150, 5, 8],
      ["Rhodium", "Rh", 102.906, 0, 0, 1964, 3695, 5, 9],
      ["Palladium", "Pa", 106.42, 0, 0, 1554.9, 2963, 5, 10],
      ["Silver", "Ag", 107.868, 0, 0, 961.78, 2162, 5, 11],
      ["Cadmium", "Cd", 112.414, 0, 0, 321.07, 767, 5, 12],
      ["Indium", "In", 114.818, 0, 0, 156.5985, 2072, 5, 13],
      ["Tin", "Sn", 118.71, 0, 0, 231.93, 2602, 5, 14],
      ["Antimony", "Sb", 121.76, 0, 2, 630.63, 1635, 5, 15],
      ["Tellurium", "Te", 127.6, 0, 2, 449.51, 988, 5, 16],
      ["Iodine", "I", 126.904, 0, 1, 113.7, 184.3, 5, 17],
      ["Xenon", "Xe", 131.293, 2, 1, -111.75, -108.099, 5, 18],
      ["Cesium", "Cs", 132.905, 0, 0, 28.5, 671, 6, 1],
      ["Barium", "Ba", 137.327, 0, 0, 727, 1845, 6, 2],
      ["Lanthanum", "La", 138.905, 0, 0, 920, 3464, 6, "Lanthanides"],
      ["Cerium", "Ce", 140.116, 0, 0, 795, 3443, 6, "Lanthanides"],
      ["Praseodymium", "Pr", 140.908, 0, 0, 935, 3130, 6, "Lanthanides"],
      ["Neodymium", "Nd", 144.242, 0, 0, 1024, 3074, 6, "Lanthanides"],
      ["Promethium", "Pm", 145, 0, 0, 1042, 3000, 6, "Lanthanides"],
      ["Samarium", "Sm", 150.36, 0, 0, 1072, 1900, 6, "Lanthanides"],
      ["Europium", "Eu", 151.964, 0, 0, 826, 1529, 6, "Lanthanides"],
      ["Gadolinium", "Gd", 157.25, 0, 0, 1312, 3000, 6, "Lanthanides"],
      ["Terbium", "Tb", 158.925, 0, 0, 1356, 3123, 6, "Lanthanides"],
      ["Dysprosium", "Dy", 162.5, 0, 0, 1407, 2562, 6, "Lanthanides"],
      ["Holmium", "Ho", 164.93, 0, 0, 1461, 2600, 6, "Lanthanides"],
      ["Erbium", "Er", 167.259, 0, 0, 1529, 2868, 6, "Lanthanides"],
      ["Thulium", "Tm", 168.934, 0, 0, 1545, 1950, 6, "Lanthanides"],
      ["Ytterbium", "Yb", 173.045, 0, 0, 824, 1196, 6, "Lanthanides"],
      ["Lutetium", "Lu", 174.967, 0, 0, 1652, 3402, 6, "Lanthanides"],
      ["Hafnium", "Hf", 178.49, 0, 0, 2233, 4603, 6, 4],
      ["Tantalum", "Ta", 180.948, 0, 0, 3017, 5458, 6, 5],
      ["Tungsten", "W", 183.84, 0, 0, 3422, 5930, 6, 6],
      ["Rhenium", "Re", 186.207, 0, 0, 3186, 5630, 6, 7],
      ["Osmium", "Os", 190.23, 0, 0, 3033, 5012, 6, 8],
      ["Iridium", "Ir", 192.217, 0, 0, 2446, 4130, 6, 9],
      ["Platinum", "Pt", 195.084, 0, 0, 1768.3, 3825, 6, 10],
      ["Gold", "Au", 196.967, 0, 0, 1064.18, 2970, 6, 11],
      ["Mercury", "Hg", 200.592, 1, 0, -38.829, 356.73, 6, 12],
      ["Thallium", "Tl", 204.38, 0, 0, 304, 1473, 6, 13],
      ["Lead", "Pb", 207.2, 0, 0, 327.46, 1749, 6, 14],
      ["Bismuth", "Bi", 208.98, 0, 0, 271.5, 1564, 6, 15],
      ["Polonium", "Po", 209, 0, 2, 254, 962, 6, 16],
      ["Astatine", "At", 210, 0, 2, 302, 337, 6, 17],
      ["Radon", "Rn", 222, 2, 1, -71, -61.7, 6, 18],
      ["Francium", "Fr", 223, 0, 0, 30, 680, 7, 1],
      ["Radium", "Ra", 226, 0, 0, 700, 1737, 7, 2],
      ["Actinium", "Ac", 227, 0, 0, 1227, "3200±300", 7, "Actinides"],
      ["Thorium", "Th", 232.038, 0, 0, 1750, 4788, 7, "Actinides"],
      ["Protactinium", "Pa", 231.036, 0, 0, 1568, 4027, 7, "Actinides"],
      ["Uranium", "U", 238.029, 0, 0, 1132.2, 4131, 7, "Actinides"],
      ["Neptunium", "Np", 237, 0, 0, "639±3", 4174, 7, "Actinides"],
      ["Plutonium", "Pu", 244, 0, 0, 639.4, 3228, 7, "Actinides"],
      ["Americium", "Am", 243, 0, 0, 1176, 2607, 7, "Actinides"],
      ["Curium", "Cm", 247, 0, 0, 1340, 3110, 7, "Actinides"],
      ["Berkelium", "Bk", 247, 0, 0, 986, 2627, 7, "Actinides"],
      ["Californium", "Cf", 251, 0, 0, 900, 1470, 7, "Actinides"],
      ["Einsteinium", "Es", 252, 0, 0, 860, 996, 7, "Actinides"],
      ["Fermium", "Fm", 257, 0, 0, 1527, "Unknown", 7, "Actinides"],
      ["Mendelevium", "Md", 258, 0, 0, 827, "Unknown", 7, "Actinides"],
      ["Nobelium", "No", 259, 0, 0, 827, "Unknown", 7, "Actinides"],
      ["Lawrencium", "Lr", 266, 0, 0, 1627, "Unknown", 7, "Actinides"],
      ["Rutherfordium", "Rf", 267, 0, 0, 2100, 5500, 7, 4],
      ["Dubnium", "Db", 268, 0, 0, "Unknown", "Unknown", 7, 5],
      ["Seaborgium", "Sg", 269, 0, 0, "Unknown", "Unknown", 7, 6],
      ["Bohrium", "Bh", 270, 0, 0, "Unknown", "Unknown", 7, 7],
      ["Hassium", "Hs", 269, 0, 0, "Unknown", "Unknown", 7, 8],
      ["Meitnerium", "Mt", 278, 0, 0, "Unknown", "Unknown", 7, 9],
      ["Darmstadtium", "Ds", 281, 0, 0, "Unknown", "Unknown", 7, 10],
      ["Roentgeniut", "Rg", 282, 0, 0, "Unknown", "Unknown", 7, 11],
      ["Copernicium", "Cn", 285, 2, 0, "Unknown", "84(+112 or -108)", 7, 12],
      ["Nihonium", "Nh", 286, 0, 0, 430, 1130, 7, 13],
      ["Flerovium", "Fl", 289, 0, 0, 67, 147, 7, 14],
      ["Moscovium", "Mc", 289, 0, 0, 400, 1100, 7, 15],
      ["Livermorium", "Lv", 293, 0, 0, "364-507", "762-862", 7, 16],
      ["Tennessine", "Ts", 294, 0, 1, "350-550", 610, 7, 17],
      ["Oganesson", "Og", 294, 0, 1, "Unknown", "80±30", 7, 18],
    ];
  
    function getState(x) {
      if (x === 0) {
        return "Solid";
      } else if (x == 1) {
        return "Liquid";
      } else if (x == 2) {
        return "Gas";
      } else if (x == 3) {
        return "Unknown";
      }
    }
    function getType(x) {
      if (x === 0) {
        return "Metal";
      } else if (x == 1) {
        return "Nonmetal";
      } else if (x == 2) {
        return "Metalloid";
      } else if (x == 3) {
        return "Unknown";
      }
    }
    var x=0;
    function displayProp(num,str){
         // Update the properties column
      num -= 1;
      $(str+" #name").text(props[num][0]);
      console.log(props[num][0]);
      $(str+" #symbol").text(props[num][1]);
      $(str+" #number").text(num + 1);
      $(str+" #mass").text(props[num][2]);
      $(str+" #proton").text(num + 1);
      $(str+" #neutron").text(Math.round(props[num][2]) - (num + 1));
      $(str+" #electron").text(num + 1);
      $(str+" #state").text(getState(props[num][3]));
      $(str+" #type").text(getType(props[num][4]));
      if (props[num][5] == "Unknown") {
        $(str+" #melt").text("Unknown");
      } else {
        $(str+" #melt").text(props[num][5] + " °C");
      }
      if (props[num][6] == "Unknown"){
        $(str+" #boil").text("Unknown");
      } else {
        $(str+" #boil").text(props[num][6] + " °C");
      }
      $(str+" #period").text(props[num][7]);
      $(str+" #group").text(props[num][8]);
    }
    
    function displayProperties(num) {
        if($("#category").val()=="single"){
            $("#multi #right").css("visibility", "visible");
            displayProp(num,"#multi");
    }
    else{
        if(x==0){
            $("#multi #right").css("visibility", "visible");
            displayProp(num,"#multi");
            x+=1;
        }
        else{
        console.log("Prasanna");
        var para = document.createElement("div");
        para.id="multi"+x;
        msg="<div id='right'><h3>Properties of <span id='name'></span>:</h3><p>Symbol: <span id='symbol'></span><br>Atomic Number: <span id='number'></span><br>Atomic Mass: <span id='mass'></span><br>Number of Protons: <span id='proton'></span><br>Number of Neutrons: <span id='neutron'></span><br>Number of Electrons: <span id='electron'></span><br>Phase: <span id='state'></span><br>Type: <span id='type'></span><br>Melting Point: <span id='melt'></span><br>Boiling Point: <span id='boil'></span><br>Period in Table: <span id='period'></span><br>Group in Table: <span id='group'></span><br></div>";

        para.innerHTML=msg;
        document.body.appendChild(para);
        $( "#multi"+x+" #right").css("visibility", "visible");
        displayProp(num,"#multi"+x);
        x=x+1;}
    }
    }


    $(".element").click(function() {
      $(".element").removeClass("hoverhighlight");
      $(this).addClass("hoverhighlight");
      
     
      var id = Number($(this).attr('id'));
      displayProperties(id);
    });
    $("a").click(function() {
      $(".element").removeClass("hoverhighlight");
      var id = Number($(this).attr('class'));
      $("#" + id).addClass("hoverhighlight");
      $("#right").css("visibility", "visible"); 
      displayProperties(id);
    });
    $("#btn1").click(()=>{
        $("#multi #right").css("visibility", "hidden");
        for(var i=x-1;i>0;i--){
            $("#multi"+i).remove();
        }
        x=0;
    });
  
  });


export interface Variant {
[x: string]: any;
  model: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  mainImage?: string;       // main hero image for variant page
  frontBackImage?: string;  // performance section
  technicalImage?: string;  // technical panel
  fuel?: string;
  gear?: string;
  route?: string;
  
  technical?: {
    acceleration?: number; // 0-100 km/h
    powerPs?: number;
    powerKw?: number;
    topSpeed?: number;
    sections?: Array<{
      key: string;
      title: string;
      specs: Array<{ label: string; value: string | number }>;
    }>;
  };
}

export const VARIANTS: Variant[] = [
  {
    model: '911',
    name: '911 Carrera',
    price: '146,949,00',
    description: 'A timeless classic sports car.',
    imageUrl: 'assets/p911img/carrera.jpg',
    mainImage: 'assets/p911img/carrera-main.jpg',      // hero on variant page
    frontBackImage: 'assets/p911img/carrera-front.jpg', // performance section
    technicalImage: 'assets/p911img/911-stech.png',
    fuel: 'Petrol',
    gear: 'Automatic',
    route: '/models/p911/carrera',
    technical: {
      acceleration: 4.1, // 0-100 km/h
      powerPs: 394,
      powerKw: 290,
      topSpeed: 294,
      sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Configuration / number of cylinders', value: '6' },
            { label: 'Displacement', value: '2,981 cm³' },
            { label: 'Power (PS)', value: '394 PS' },
            { label: 'Maximum engine speed', value: '7,500 1/min' },
            { label: 'Max. torque (Nm)', value: '450 Nm' },
            { label: 'Max. output per liter (PS/l)', value: '131.0 PS/l' }
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '294 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '4.1 s' }
          ]
        },
        {
          key: 'consumption',
          title: 'Consumption/Emissions',
          specs: [
            { label: 'NOx emissions', value: '14.1 mg/km' }
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP',
          specs: [
            { label: 'Fuel consumption combined* (model range)', value: '10.4 – 9.9 l/100 km' },
            { label: 'Fuel consumption low (model range)', value: '18.2 – 18.0 l/100 km' },
            { label: 'Fuel consumption medium (model range)', value: '9.9 – 9.5 l/100 km' },
            { label: 'Fuel consumption high (model range)', value: '8.6 – 8.2 l/100 km' },
            { label: 'Fuel consumption extra-high (model range)', value: '9.2 – 8.5 l/100 km' },
            { label: 'CO2 emissions combined* (model range)', value: '236 – 226 g/km' }
          ]
        },
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of stationary vehicle', value: '93 dB(A)' },
            { label: 'Sound level of stationary vehicle (rpm)', value: '3,325 1/min' },
            { label: 'Sound level of passing vehicle', value: '71 dB(A)' }
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '4,542 mm' },
            { label: 'Width (mirrors folded)', value: '1,834 mm' },
            { label: 'Width (including mirrors)', value: '2,033 mm' },
            { label: 'Height', value: '1,302 mm' },
            { label: 'Wheelbase', value: '2,450 mm' },
            { label: 'Unladen weight (DIN)', value: '1520 kg'},
            { label: 'Maximum payload (8-speed Porsche Doppelkupplung (PDK))', value: '340 kg' },
            { label: 'Maximum payload (8-speed Porsche Doppelkupplung (PDK)) (Rear Seats)', value: '440 kg' },
            { label: 'Maximum permissible roof load (8-speed Porsche Doppelkupplung (PDK)) (Rear Seats)', value: '75 kg' }
          ]
        },
        {
          key: 'capacities',
          title: 'Capacities',
          specs: [
            { label: 'Luggage compartment volume (front)', value: '135 litres' },
            { label: 'Open luggage compartment volume (behind front seats)', value: '373 l' },
            { label: 'Open luggage compartment volume (behind front seats)', value: '261 l' }
          ]
        }
      ]
    }
  },
  {
    model: '911',
    name: '911 Cabriolet',
    price: '156,455,00',
    description: 'Open-top performance with luxury.',
    imageUrl: 'assets/p911img/cabriolet.jpg',
    mainImage: 'assets/p911img/carrera-cabrio-main.jpg',      // hero on variant page
    frontBackImage: 'assets/p911img/carrera-cabrio-front.jpg', // performance section
    technicalImage: 'assets/p911img/911-stech.png',
    fuel: 'Petrol',
    gear: 'Automatic',
    route: '/models/p911/cabriolet',
    technical: {
      acceleration: 4.3, // 0-100 km/h
      powerPs: 394,
      powerKw: 290,
      topSpeed: 291,
      sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Configuration / number of cylinders', value: '6' },
            { label: 'Displacement', value: '2,981 cm³' },
            { label: 'Power (PS)', value: '394 PS' },
            { label: 'Maximum engine speed', value: '7,500 1/min' },
            { label: 'Max. torque (Nm)', value: '450 Nm' },
            { label: 'Max. output per liter (PS/l)', value: '131.0 PS/l' }
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '291 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '4.3 s' }
          ]
        },
        {
          key: 'consumption',
          title: 'Consumption/Emissions',
          specs: [
            { label: 'NOx emissions', value: '14.1 mg/km' }
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP',
          specs: [
            { label: 'Fuel consumption combined* (model range)', value: '10.3 – 10.1 l/100 km' },
            { label: 'Fuel consumption low (model range)', value: '18.3 – 18.2 l/100 km' },
            { label: 'Fuel consumption medium (model range)', value: '10.0 – 9.8 l/100 km' },
            { label: 'Fuel consumption high (model range)', value: '8.6 – 8.4 l/100 km' },
            { label: 'Fuel consumption extra-high (model range)', value: '8.9 – 8.8 l/100 km' },
            { label: 'CO2 emissions combined* (model range)', value: '234 – 231 g/km' }
          ]
        },
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of stationary vehicle', value: '93 dB(A)' },
            { label: 'Sound level of stationary vehicle (rpm)', value: '3,325 1/min' },
            { label: 'Sound level of passing vehicle', value: '71 dB(A)' }
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '4,542 mm' },
            { label: 'Width (mirrors folded)', value: '1,834 mm' },
            { label: 'Width (including mirrors)', value: '2,033 mm' },
            { label: 'Height', value: '1,301 mm' },
            { label: 'Wheelbase', value: '2,450 mm' },
            { label: 'Unladen weight (DIN)', value: '1,600 kg' },
            { label: 'Unladen weight (EC) (8-speed Porsche Doppelkupplung (PDK)) (Rear Seats)', value: '1,675 kg' },
            
            { label: 'Maximum payload (8-speed Porsche Doppelkupplung (PDK)) (Rear Seats)', value: '415 kg' },
           
          ]
        },
        {
          key: 'capacities',
          title: 'Capacities',
          specs: [
            { label: 'Luggage compartment volume (front)', value: '135 litres' },
            { label: 'Open luggage compartment volume (behind front seats)', value: '163 l' },
            
          ]
        }
      ]
    }
  },
  {
    model: '911',
    name: '911 GT3',
    price: '220,622,00',
    description: 'Track-ready precision engineering.',
    imageUrl: 'assets/p911img/gt3.jpg',
    mainImage: 'assets/p911img/carrera-gt3-main.jpg',      // hero on variant page
    frontBackImage: 'assets/p911img/gt3-back.jpg', // performance section
    technicalImage: 'assets/p911img/911-stech.png',
    fuel: 'Petrol',
    gear: 'Manual',
    route: '/models/p911/gt3',
    technical: {
      acceleration: 3.4, // 0-100 km/h
      powerPs: 510,
      powerKw: 375,
      topSpeed: 311,
      sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Configuration / number of cylinders', value: '6' },
            { label: 'Displacement', value: '3,996 cm³' },
            { label: 'Power (PS)', value: '510 PS' },
            { label: 'Maximum engine speed', value: '9,000 1/min' },
            { label: 'Max. torque (Nm)', value: '450 Nm' },
            { label: 'Max. output per liter (PS/l)', value: '127.0 PS/l' } // 
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '311 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '3.4 s' },
            { label: 'Acceleration 0 - 160 km/h', value: '7.0 s' },
            { label: 'Acceleration 0 - 200 km/h', value: '10.8 s' },
          ]
        },
        {
          key: 'consumption',
          title: 'Consumption/Emissions',
          specs: [
            { label: 'NOx emissions', value: '12.7 mg/km' }
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP', //
          specs: [
            { label: 'Fuel consumption combined* (model range)', value: '13.8 l/100 km' },
            { label: 'Fuel consumption low (model range)', value: '22.4 l/100 km' },
            { label: 'Fuel consumption medium (model range)', value: '12.8 l/100 km' },
            { label: 'Fuel consumption high (model range)', value: '11.8 l/100 km' },
            { label: 'Fuel consumption extra-high (model range)', value: '12.7 l/100 km' },
            { label: 'CO2 emissions combined* (model range)', value: '312 g/km' }
          ]
        },
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of stationary vehicle', value: '96 dB(A)' },
            { label: 'Sound level of stationary vehicle (rpm)', value: '3,658 1/min' },
            { label: 'Sound level of passing vehicle', value: '74 dB(A)' }
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '4,570 mm' },
            { label: 'Width (mirrors folded)', value: '1,834 mm' },
            { label: 'Width (including mirrors)', value: '2,033 mm' },
            { label: 'Height', value: '1,279 mm' },
            { label: 'Wheelbase', value: '2,457 mm' },
            { label: 'Unladen weight (DIN)', value: '1,479 kg' },
            { label: 'Unladen weight (EC) (8-speed Porsche Doppelkupplung (PDK)) (Rear Seats)', value: '1,595 kg' },//
            { label: 'Permissible gross weight (PDK)', value: '1,782 kg' }, //
            { label: 'Maximum payload', value: '303 kg' }
            
          ]
        },
        {
          key: 'capacities',
          title: 'Capacities',
          specs: [
            { label: 'Luggage compartment volume (front)', value: '135 litres' },
            { label: 'Open luggage compartment volume (behind front seats)', value: '373 l' }
            
          ]
        }
      ]
    }
  },
  {
    model: '911',
    name: '911 GT3 RS',
    price: '263,826.00',
    description: 'Extreme performance and downforce.',
    imageUrl: 'assets/p911img/gt3rs.jpg',
    mainImage: 'assets/p911img/gt3rs-main.jpg',      // hero on variant page
    frontBackImage: 'assets/p911img/gt3rs-front.jpg', // performance section
    technicalImage: 'assets/p911img/911gt3rs-stech.png',
    fuel: 'Petrol',
    gear: 'Manual',
    route: '/models/p911/gt3rs',
    technical: {
      acceleration: 3.2, // 0-100 km/h
      powerPs: 525,
      powerKw: 386,
      topSpeed: 296,
      sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Configuration / number of cylinders', value: '6' },
            { label: 'Displacement', value: '3,996 cm³' },
            { label: 'Power (PS)', value: '525 PS' },
            { label: 'Maximum engine speed', value: '9,000 1/min' },
            { label: 'Max. torque (Nm)', value: '465 Nm' },
            { label: 'Max. output per liter (PS/l)', value: '131.0 PS/l' }
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '296 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '3.2 s' }
          ]
        },
        {
          key: 'consumption',
          title: 'Consumption/Emissions',
          specs: [
            { label: 'NOx emissions', value: '21.5 mg/km' }
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP', //
          specs: [
            { label: 'Fuel consumption combined* (model range)', value: '9.10 – 9.10 km/l' },
            { label: 'Fuel consumption low (model range)', value: '5.82 – 5.82 km/l' },
            { label: 'Fuel consumption medium (model range)', value: '9.69 – 9.69 km/l' },
            { label: 'Fuel consumption high (model range)', value: '10.54 – 10.54 km/l' },
            { label: 'Fuel consumption extra-high (model range)', value: '9.69 – 9.69 km/l' },
            { label: 'CO2 emissions combined* (model range)', value: '239 – 229 g/km' }
          ]
        },
       
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of stationary vehicle', value: '97 dB(A)' },
            { label: 'Sound level of stationary vehicle (rpm)', value: '3,658 1/min' },
            { label: 'Sound level of passing vehicle', value: '72 dB(A)' }
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '4,572 mm' },
            { label: 'Width (mirrors folded)', value: '1,900 mm' },
            { label: 'Width (including mirrors)', value: '2,027 mm' },
            { label: 'Height', value: '1,322 mm' },
            { label: 'Wheelbase', value: '2,457 mm' },
            { label: 'Unladen weight (DIN)', value: '1,450 kg' },
            { label: 'Unladen weight (EC)', value: '1,525 kg' },
            { label: 'Maximum payload', value: '345 kg' },
            
          ]
        }
     
      ]
    }
  },

  // 718
  {
    model: '718',
    name: '718 Cayman',
    price: '73,531.00',
    description: 'Mid-engine coupe designed for precision.',
    imageUrl: 'assets/p718img/cayman.jpg',
    mainImage: 'assets/p718img/cayman-main.jpg',      // hero on variant page
    frontBackImage: 'assets/p718img/cayman-front.jpg', // performance section
    technicalImage: 'assets/p718img/718-stech.png',
    fuel: 'Petrol',
    gear: 'Automatic',
    route: '/models/p718/cayman',
      technical: {
      acceleration: 4.7, // 0-100 km/h
      powerPs: 300,
      powerKw: 220,
      topSpeed: 275,
      sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Configuration / number of cylinders', value: '4' },
            { label: 'Displacement', value: '1,988 cm³' },
            { label: 'Power (PS)', value: '300 PS' },
            { label: 'Max. torque (Nm)', value: '380 Nm' },
            { label: 'Max. output per liter (PS/l)', value: '150.0 PS/l' }
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '275 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '4.9 s' }
          ]
        },
        {
          key: 'consumption',
          title: 'Consumption/Emissions',
          specs: [
            { label: 'NOx emissions', value: '27.0 mg/km' }
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP', 
          specs: [
            { label: 'Fuel consumption combined* (model range)', value: '13.05 – 13.48 km/l' },
            { label: 'CO2 emissions combined* (model range)', value: '208 – 201 g/km' }
          ]
        },
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of stationary vehicle', value: '89 dB(A)' },
            { label: 'Sound level of stationary vehicle (rpm)', value: '3,750 1/min' },
            { label: 'Sound level of passing vehicle', value: '69 dB(A)' }
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '4,379 mm' },
            { label: 'Width (mirrors folded)', value: '1,801 mm' },
            { label: 'Width (including mirrors)', value: '1,994 mm' },
            { label: 'Height', value: '1,295 mm' },
            { label: 'Wheelbase', value: '2,475 mm' },
            { label: 'Unladen weight (DIN)', value: '1,365 kg'},
            { label: 'Maximum payload', value: '320 kg' },
            
          ]
        },
        {
          key: 'capacities',
          title: 'Capacities',
          specs: [
            { label: 'Luggage compartment volume (front)', value: '150 litres' },
            { label: 'Open luggage compartment volume (behind front seats)', value: '184 l' },
            { label: 'Luggage compartment volume (with seats folded)', value: '272 l' }
          ]
        }
      ]
    }
  },
  {
    model: '718',
    name: 'Spyder RS',
    price: '170,260.00',
    description: 'Lightweight, purist performance.',
    imageUrl: 'assets/p718img/spyder-rs.jpg',
    mainImage: 'assets/p718img/spyder-rs-main.jpg',      // hero on variant page
    frontBackImage: 'assets/p718img/spyder-rs-front.jpg', // performance section
    technicalImage: 'assets/p718img/718-spyder-rs-stech.png',
    fuel: 'Petrol',
    gear: 'Manual',
    route: '/models/p718/spyder',
    technical: {
      acceleration: 3.1, // 0-100 km/h
      powerPs: 500,
      powerKw: 368,
      topSpeed: 307,
         sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Configuration / number of cylinders', value: '6' },
            { label: 'Displacement', value: '3,996 cm³' },
            { label: 'Power (PS)', value: '500 PS' },
            { label: 'Max. torque (Nm)', value: '450 Nm' },
            { label: 'Max. output per liter (PS/l)', value: '125.0 PS/l' }
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '307 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '3.1 s' }
          ]
        },
        {
          key: 'consumption',
          title: 'Consumption/Emissions',
          specs: [
            { label: 'NOx emissions', value: '14.5 mg/km' }
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP', 
          specs: [
            { label: 'Fuel consumption combined* (model range)', value: '9.23 – 9.23 km/l' },
            { label: 'CO2 emissions combined* (model range)', value: '294 – 294 g/km' }
          ]
        },
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of stationary vehicle', value: '96 dB(A)' },
            { label: 'Sound level of stationary vehicle (rpm)', value: '3,800 1/min' },
            { label: 'Sound level of passing vehicle', value: '72 dB(A)' }
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '4,418 mm' },
            { label: 'Width (mirrors folded)', value: '1,822 mm' },
            { label: 'Width (including mirrors)', value: '1,994 mm' },
            { label: 'Height', value: '1,252 mm' },
            { label: 'Wheelbase', value: '2,482 mm' },
            { label: 'Unladen weight (DIN)', value: '1,410 kg'},
            { label: 'Maximum payload', value: '345 kg' },
            
          ]
        },
        {
          key: 'capacities',
          title: 'Capacities',
          specs: [
            { label: 'Luggage compartment volume (front)', value: '125 litres' },
            { label: 'Luggage compartment volume, rear', value: '120 l' }
          ]
        }
      ]
    }
  },
  

  // Taycan
  {
    model: 'Taycan',
    name: 'Taycan',
    price: '107 371,00',
    description: 'Porsche’s flagship electric sedan — performance meets precision.',
    imageUrl: 'assets/taycan-img/taycan.jpg',
    mainImage: 'assets/taycan-img/taycan-main01.jpg',      // hero on variant page
    frontBackImage: 'assets/taycan-img/taycan-front.png', // performance section
    technicalImage: 'assets/taycan-img/taycan-stech.png',
    fuel: 'Electric',
    gear: 'Automatic',
    route: '/models/taycan/taycan',
      technical: {
      acceleration: 4.8, // 0-100 km/h
      powerPs: 435,
      powerKw: 320,
      topSpeed: 230,
         sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Maximum power (kW)', value: '320 kW' },
            { label: 'Maximum power (PS)', value: '435 PS' },
            { label: 'Overboost maximum power with Launch Control (kW)', value: '320 kW' },
            { label: 'Overboost maximum power with Launch Control (PS)', value: '435 PS' },
            { label: 'Maximum torque with Launch Control', value: '420 Nm' }
            
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '230 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '4.8 s' }
            
          ]
        },
        {
          key: 'range',
          title: 'Range',
          specs: [
            { label: 'Range combined (model range)', value: '599–679 km' },
            { label: 'Range City (model range)', value: '745– 821 km' },

          ]
        },
        
        {
          key: 'charge',
          title: 'Charging', 
          specs: [
            { label: 'Battery capacity (gross)', value: '105.0 kWh' },
            { label: 'Charging time (AC) at 11kW (0 - 100%)', value: '11.0 h' },
            { label: 'Charging time for Direct Current (DC) with 400 V infrastructure (10-80%)', value: '33 min' },
            { label: 'Charging time for direct current (DC) with maximum charging power (10 - 80%)', value: '18 min' },
            
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP', // DRUG REGION
          specs: [
            { label: 'Electrical consumption combined (model range)', value: '5.15 – 5.79 km/kWh' },
            { label: 'Electrical consumption City (model range)', value: '6.44 – 7.08 km/kWh' },
            { label: 'Electrical consumption low (model range)', value: '6.28 – 6.92 km/kWh' },
            { label: 'Electrical consumption medium (model range)', value: '6.44 – 7.24 km/kWh' },
            { label: 'Electrical consumption high (model range)', value: '6.28 – 7.08 km/kWh' },
            { label: 'CO2 emissions combined* (model range)', value: '0 – 0 g/km' }
          ]
        },
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of passing vehicle', value: '68 dB(A)' }
          
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '4,963 mm' },
            { label: 'Width (mirrors folded)', value: '1,950 mm' },
            { label: 'Width (including mirrors)', value: '2,144 mm' },
            { label: 'Height', value: '1,379 mm' },
            { label: 'Wheelbase', value: '2,900 mm' },
            { label: 'Unladen weight (DIN)', value: '2,170 kg'},
            { label: 'Maximum payload', value: '625 kg' },
            
          ]
        },
        {
          key: 'capacities',
          title: 'Capacities',
          specs: [
            { label: 'Luggage compartment volume (front)', value: '81 litres' },
            { label: 'Luggage compartment volume, rear', value: '407 l' }
          ]
        }
      ]
    }
  },
  {
    model: 'Taycan',
    name: 'Taycan Sport Turismo',
    price: '108 138,00',
    description: 'Sporty practicality with all-electric drive.',
    imageUrl: 'assets/taycan-img/sport-turismo.jpg',
    mainImage: 'assets/taycan-img/taycan-st-main01.jpg',      // hero on variant page
    frontBackImage: 'assets/taycan-img/taycan-front.png', // performance section
    technicalImage: 'assets/taycan-img/718-spyder-rs-stech.png',
    fuel: 'Electric',
    gear: 'Automatic',
    route: '/models/taycan/taycanst',
      technical: {
      acceleration: 4.8, // 0-100 km/h
      powerPs: 435,
      powerKw: 320,
      topSpeed: 230,
         sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Maximum power (kW)', value: '320 kW' },
            { label: 'Maximum power (PS)', value: '435 PS' },
            { label: 'Overboost maximum power with Launch Control (kW)', value: '320 kW' },
            { label: 'Overboost maximum power with Launch Control (PS)', value: '435 PS' },
            { label: 'Maximum torque with Launch Control', value: '420 Nm' }
            
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '220 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '5.7 s' }
            
          ]
        },
        {
          key: 'range',
          title: 'Range',
          specs: [
            { label: 'Range combined (model range)', value: '570 – 650 km' },
            { label: 'Range City (model range)', value: '729 – 808 km' },

          ]
        },
        {
          key: 'charge',
          title: 'Charging', 
          specs: [
            { label: 'Battery capacity (gross)', value: '105.0 kWh' },
            { label: 'Charging time (AC) at 11kW (0 - 100%)', value: '11.0 h' },
            { label: 'Charging time for Direct Current (DC) with 400 V infrastructure (10-80%)', value: '33 min' },
            { label: 'Charging time for direct current (DC) with maximum charging power (10 - 80%)', value: '18 min' },
            
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP', // DRUG REGION
          specs: [
            { label: 'Electrical consumption combined (model range)', value: '4.99 – 5.63 km/kWh' },
            { label: 'Electrical consumption City (model range)', value: '6.28 – 6.92 km/kWh' },
            { label: 'Electrical consumption low (model range)', value: '6.28 – 6.76 km/kWh' },
            { label: 'Electrical consumption medium (model range)', value: '6.28 – 7.08 km/kWh' },
            { label: 'Electrical consumption high (model range)', value: '5.95 – 6.76 km/kWh' },
            { label: 'CO2 emissions combined* (model range)', value: '0 – 0 g/km' }
          ]
        },
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of passing vehicle', value: '68 dB(A)' }
          
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '4,963 mm' },
            { label: 'Width (mirrors folded)', value: '1,950 mm' },
            { label: 'Width (including mirrors)', value: '2,144 mm' },
            { label: 'Height', value: '1,390 mm' },
            { label: 'Wheelbase', value: '2,900 mm' },
            { label: 'Unladen weight (DIN)', value: '2,195 kg'},
            { label: 'Maximum payload', value: '575 kg' },
            
          ]
        },
        {
          key: 'capacities',
          title: 'Capacities',
          specs: [
            { label: 'Luggage compartment volume (front)', value: '81 litres' },
            { label: 'Luggage compartment volume', value: '446 litres' },
            { label: 'Luggage compartment volume, (with seats folded)', value: '1,212 litres' }
          ]
        }
      ]
    }
  },
  

  // Panamera
  {
    model: 'Panamera',
    name: 'Panamera',
    price: '120,664.00',
    description: 'A luxury sports sedan that combines power and elegance.',
    imageUrl: 'assets/panamera-img/panamera.jpg',
    mainImage: 'assets/panamera-img/panamera-main.jpg',      // hero on variant page
    frontBackImage: 'assets/panamera-img/panamera-front.jpg', // performance section
    technicalImage: 'assets/panamera-img/panamera-stech.png',
    fuel: 'Petrol',
    gear: 'Automatic',
    route: '/models/panamera/panamera',
            technical: {
      acceleration: 5.1, // 0-100 km/h
      powerPs: 353,
      powerKw: 260,
      topSpeed: 271,
         sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Configuration / number of cylinders', value: '6' },
            { label: 'Displacement', value: '2,894 cm³' },
            { label: 'Power (PS)', value: '353 PS' },
            { label: 'Max. torque (Nm)', value: '500 Nm' },
            
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '271 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '5.1 s' },
            
          ]
        },
        {
          key: 'consumption',
          title: 'Consumption/Emissions',
          specs: [
            { label: 'NOx emissions', value: '15.4 mg/km' }
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP', 
          specs: [
            { label: 'Fuel consumption combined* (model range)', value: '11.56 – 12.41 km/l' },
            { label: 'Fuel consumption low (model range)', value: '7.52 – 7.86 km/l' },
            { label: 'Fuel consumption medium (model range)', value: '11.27 – 12.20 km/l' },
            { label: 'Fuel consumption high (model range)', value: '13.48 – 14.54 km/l' },
            { label: 'CO2 emissions combined* (model range)', value: '236 – 219 g/km' }
          ]
        },
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of stationary vehicle', value: '76 dB(A)' },
            { label: 'Sound level of stationary vehicle (rpm)', value: '2,850 1/min' },
            { label: 'Sound level of passing vehicle', value: '69 dB(A)' }
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '5,052 mm' },
            { label: 'Width (mirrors folded)', value: '1,983 mm' },
            { label: 'Width (including mirrors)', value: '2,165 mm' },
            { label: 'Height', value: '1,423 mm' },
            { label: 'Wheelbase', value: '2,950 mm' },
            { label: 'Unladen weight (DIN)', value: '1,885 kg'},
            { label: 'Maximum payload', value: '620 kg' },
            
          ]
        },
        {
          key: 'capacities',
          title: 'Capacities',
          specs: [
            { label: 'Luggage compartment volume', value: '494 litres' },
            { label: 'Luggage compartment volume, (with seats folded)', value: '1,328 litres' }
          ]
        }
      ]
    }
  },
  
  {
    model: 'Panamera',
    name: 'Panamera Turbo S E-Hybrid',
    price: '243,119.00',
    description: 'A luxury sports sedan that combines power and elegance.',
    imageUrl: 'assets/panamera-img/panamera-turbo-s-e-hybrid.png',
    mainImage: 'assets/panamera-img/turbo-s-e-hybrid-main.jpg',      // hero on variant page
    frontBackImage: 'assets/panamera-img/turbo-s-e-hybrid-front.jpg', // performance section
    technicalImage: 'assets/panamera-img/panamera-stech.png',
    fuel: 'Hybrid',
    gear: 'Automatic',
    route: '/models/panamera/turbohybrid',
    
            technical: {
      acceleration: 2.9, // 0-100 km/h
      powerPs: 782,
      powerKw: 575,
      topSpeed: 325,
         sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Configuration / number of cylinders', value: '8' },
            { label: 'Displacement', value: '3,996 cm³' },
            { label: 'Power combined (PS)', value: '782 PS' },
            { label: 'Power Electric Motor (PS)', value: '190 PS' },
            { label: 'Maximum engine speed', value: '9,000 1/min' },
            { label: 'Max. torque (Nm)', value: '800 Nm' }
            
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '325 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '2.9 s' }
            
          ]
        },
        {
          key: 'range',
          title: 'Range',
          specs: [
            { label: 'Range combined (model range)', value: '77–80 km' },
            { label: 'Range City (model range)', value: '79–84 km' },

          ]
        },
        {
          key: 'e-driving',
          title: 'Electric driving', 
          specs: [
            { label: 'Electric Range WLTP (EAER) - model range', value: '82–85 km' },
            { label: 'Electric Range WLTP City (EAER City) - model range', value: '82–89 km' },
            { label: 'Electric top speed', value: '87 mph → 140 km/h' },
            
          ]
        },
        {
          key: 'charge',
          title: 'Charging', 
          specs: [
            { label: 'Battery capacity (gross)', value: '25.9 kWh' },
            { label: 'Battery capacity (net useable)', value: '21.8 kWh' },
            { label: 'Charging time (AC) at 11kW (0 - 100%)', value: '2.7 h' },
            
          ]
        },
        {
          key: 'consumption',
          title: 'Consumption/Emissions',
          specs: [
            { label: 'NOx emissions', value: '2.5 mg/km' }
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP', 
          specs: [
            { label: 'Fuel consumption combined* (model range)', value: '11.05 – 11.56 km/l' },
            { label: 'Fuel consumption low (model range)', value: '6.42 – 6.54 km/l' },
            { label: 'Fuel consumption medium (model range)', value: '12.16 – 12.80 km/l' },
            { label: 'Fuel consumption high (model range)', value: '13.38 – 14.15 km/l' },
            { label: 'CO2 emissions combined* (model range)', value: '246 – 236 g/km' }
          ]
        },
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of stationary vehicle', value: '88 dB(A)' },
            { label: 'Sound level of stationary vehicle (rpm)', value: '3,750 1/min' },
            { label: 'Sound level of passing vehicle', value: '67 dB(A)' }
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '5,054 mm' },
            { label: 'Width (mirrors folded)', value: '1,983 mm' },
            { label: 'Width (including mirrors)', value: '2,165 mm' },
            { label: 'Height', value: '1,423 mm' },
            { label: 'Wheelbase', value: '2,950 mm' },
            { label: 'Unladen weight (DIN)', value: '2,365 kg'},
            { label: 'Maximum payload', value: '500 kg' },
            
          ]
        },
        {
          key: 'capacities',
          title: 'Capacities',
          specs: [
            { label: 'Luggage compartment volume', value: '421 litres' },
            { label: 'Luggage compartment volume, (with seats folded)', value: '1,255 litres' }
          ]
        }
      ]
    }
  },

  // Macan
  {
    model: 'Macan',
    name: 'Macan',
    price: '80,400.00',
    description: 'Sporty and versatile compact SUV.',
    imageUrl: 'assets/macan-img/macan.jpg',
    mainImage: 'assets/macan-img/macan-main.jpg',      // hero on variant page
    frontBackImage: 'assets/macan-img/macan-front.jpg', // performance section
    technicalImage: 'assets/macan-img/macan-stech.png',
    fuel: 'Petrol',
    gear: 'Automatic',
    
    route: '/models/macan/macan',
                technical: {
      acceleration: 6.2, // 0-100 km/h
      powerPs: 265,
      powerKw: 195,
      topSpeed: 232,
         sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Configuration / number of cylinders', value: '4' },
            { label: 'Displacement', value: '1,984 cm³' },
            { label: 'Power (PS)', value: '265 PS' },
            { label: 'Max. torque (Nm)', value: '400 Nm' },
            
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '232 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '6.2 s' },
            
          ]
        },
        {
          key: 'consumption',
          title: 'Consumption/Emissions',
          specs: [
            { label: 'NOx emissions', value: '14.9 mg/km' }
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP', 
          specs: [
            { label: 'Fuel consumption combined* (model range)', value: '11.39 – 11.99 km/l' },
            { label: 'Fuel consumption low (model range)', value: '8.93 – 9.18 km/l' },
            { label: 'Fuel consumption medium (model range)', value: '11.61 – 12.29 km/l' },
            { label: 'Fuel consumption high (model range)', value: '13.05 – 13.81 km/l' },
            { label: 'CO2 emissions combined* (model range)', value: '239 – 227 g/km' }
          ]
        },
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of stationary vehicle', value: '76 dB(A)' },
            { label: 'Sound level of stationary vehicle (rpm)', value: '3,750 1/min' },
            { label: 'Sound level of passing vehicle', value: '69 dB(A)' }
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '4,726 mm' },
            { label: 'Width (mirrors folded)', value: '1,922 mm' },
            { label: 'Width (including mirrors)', value: '2,097 mm' },
            { label: 'Height', value: '1,621 mm' },
            { label: 'Wheelbase', value: '2,807 mm' },
            { label: 'Unladen weight (DIN)', value: '1,845 kg'},
            { label: 'Maximum payload', value: '665 kg' },
            
          ]
        },
        {
          key: 'capacities',
          title: 'Capacities',
          specs: [
            { label: 'Luggage compartment volume', value: '488 litres' },
            { label: 'Luggage compartment volume, (with seats folded)', value: '1,503 litres' }
          ]
        }
      ]
    }
  },
  {
    model: 'Macan',
    name: 'Macan Electric',
    price: '85,385.00',
    description: 'Fully electric performance SUV.',
    imageUrl: 'assets/macan-img/macan-electric.jpg',
    mainImage: 'assets/macan-img/macan-electric-main.jpg',      // hero on variant page
    frontBackImage: 'assets/macan-img/macan-electric-front.jpg', // performance section
    technicalImage: 'assets/macan-img/electric-stech.png',
    fuel: 'Electric',
    gear: 'Automatic',
    route: '/models/macan/melectric',
                technical: {
      acceleration: 5.7, // 0-100 km/h
      powerPs: 360,
      powerKw: 265,
      topSpeed: 220,
         sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Maximum power (kW)', value: '250 kW' },
            { label: 'Maximum power (PS)', value: '340 PS' },
            { label: 'Overboost maximum power with Launch Control (kW)', value: '265 kW' },
            { label: 'Power Electric Motor (PS)', value: '190 PS' },
            { label: 'Overboost maximum power with Launch Control (PS)', value: '360 PS' },
            { label: 'Maximum torque with Launch Control', value: '563 Nm' }
            
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '220 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '5.7 s' }
            
          ]
        },
        {
          key: 'range',
          title: 'Range',
          specs: [
            { label: 'Range combined (model range)', value: '549–641 km' },
            { label: 'Range City (model range)', value: '724–837 km' },

          ]
        },
        {
          key: 'charge',
          title: 'Charging', 
          specs: [
            { label: 'Battery capacity (gross)', value: '100.0 kWh' },
            { label: 'Charging time (AC) at 11kW (0 - 100%)', value: '10.0 h' },
            { label: 'Charging time for direct current (DC) with 150kW (10 - 80%)', value: '33 min' },
            { label: 'Charging time for direct current (DC) with maximum charging power (10 - 80%)', value: '21 min' },
            
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP', 
          specs: [
            { label: 'Electrical consumption combined (model range)', value: '5.15 – 5.96 km/kWh' },
            { label: 'Electrical consumption City (model range)', value: '6.76 – 7.89 km/kWh' },
            { label: 'Electrical consumption low (model range)', value: '7.24 – 8.21 km/kWh' },
            { label: 'Electrical consumption medium (model range)', value: '6.60 – 7.56 km/kWh' },
            { label: 'Electrical consumption high (model range)', value: '5.63 – 6.60 km/kWh' },
            { label: 'CO2 emissions combined* (model range)', value: '0 – 0 g/km' }
          ]
        },
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of passing vehicle', value: '68 dB(A)' }
          
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '4,784 mm' },
            { label: 'Width (mirrors folded)', value: '1,954 mm' },
            { label: 'Width (including mirrors)', value: '2,152 mm' },
            { label: 'Height', value: '1,423 mm' },
            { label: 'Wheelbase', value: '2,893 mm' },
            { label: 'Unladen weight (DIN)', value: '2,220 kg'},
            { label: 'Maximum payload', value: '590 kg' },
            
          ]
        },
        {
          key: 'capacities',
          title: 'Capacities',
          specs: [
            { label: 'Luggage compartment volume (front)', value: '84 litres' },
            { label: 'Luggage compartment volume', value: '540 litres' },
            { label: 'Luggage compartment volume, (with seats folded)', value: '1,348 litres' }
          ]
        }
      ]
    }
  },

  // Cayenne
  {
    model: 'Cayenne',
    name: 'Cayenne',
    price: '105 326,00',
    description: 'Powerful, practical, and pure Porsche.',
    imageUrl: 'assets/cayenne-img/cayenne.jpg',
        mainImage: 'assets/cayenne-img/cayenne-main.jpg',      // hero on variant page
    frontBackImage: 'assets/cayenne-img/cayenne-front.png', // performance section
    technicalImage: 'assets/cayenne-img/cayenne-stech.png',
    fuel: 'Petrol',
    gear: 'Automatic',
    route: '/models/cayenne/cayenne',
      technical: {
      acceleration: 5.9, // 0-100 km/h
      powerPs: 353,
      powerKw: 260,
      topSpeed: 248,
         sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Configuration / number of cylinders', value: '6' },
            { label: 'Displacement', value: '2,995 cm³' },
            { label: 'Power (PS)', value: '353 PS' },
            { label: 'Max. torque (Nm)', value: '500 Nm' },
            { label: 'Max. output per liter (PS/l)', value: '118.0 PS/l' }
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '248 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '5.9 s' }
          ]
        },
        {
          key: 'consumption',
          title: 'Consumption/Emissions',
          specs: [
            { label: 'NOx emissions', value: '21.0 mg/km' }
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP', 
          specs: [
            { label: 'Fuel consumption combined* (model range)', value: '11,7 – 10,6 l/100 km' },
            { label: 'Fuel consumption low (model range)', value: '16.7 – 16.6 l/100 km' },
            { label: 'Fuel consumption medium (model range)', value: '11.7 – 10.7 l/100 km' },
            { label: 'Fuel consumption high (model range)', value: '9,9 – 9,0 l/100 km' },
            { label: 'Fuel consumption extra-high (model range)', value: '11,4 – 10,3 l/100 km' },
            { label: 'CO2 emissions combined* (model range)', value: '265 – 242  g/km' }
          ]
        },
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of stationary vehicle', value: '81 dB(A)' },
            { label: 'Sound level of stationary vehicle (rpm)', value: '3 750 1/min' },
            { label: 'Sound level of passing vehicle', value: '69 dB(A)' }
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '4,930 mm' },
            { label: 'Width (mirrors folded)', value: '2,194 mm' },
            { label: 'Width (including mirrors)', value: '1,994 mm' },
            { label: 'Height', value: '1,679 mm' },
            { label: 'Wheelbase', value: '2,895 mm' },
            { label: 'Unladen weight (DIN)', value: '2,085 kg'},
            { label: 'Maximum payload', value: '735 kg' },
            
          ]
        },
        {
          key: 'capacities',
          title: 'Capacities',
          specs: [
            { label: 'Luggage compartment volume, rear', value: '554  litres' },
            { label: 'Luggage compartment volume', value: '592 l' },
            { label: 'Luggage compartment volume (with seats folded)', value: '1,502 litres' },
          ]
        }
      ]
    }
  },
  {
    model: 'Cayenne',
    name: 'Cayenne Coupé',
    price: '109 314,00',
    description: 'A sleek, sporty take on the Cayenne.',
    imageUrl: 'assets/cayenne-img/cayenne-coupe.jpg',
        mainImage: 'assets/cayenne-img/cayenne-coupe-main.jpg',      // hero on variant page
    frontBackImage: 'assets/cayenne-img/cayenne-sport-front.png', // performance section
    technicalImage: 'assets/cayenne-img/cayenne-stech.png',
    fuel: 'Hybrid',
    gear: 'Automatic',
    route: '/models/cayenne/coupe',
      technical: {
      acceleration: 5.7, // 0-100 km/h
      powerPs: 353,
      powerKw: 260,
      topSpeed: 248,
         sections: [
        {
          key: 'powerUnit',
          title: 'Power unit',
          specs: [
            { label: 'Configuration / number of cylinders', value: '6' },
            { label: 'Displacement', value: '2,995 cm³' },
            { label: 'Power (PS)', value: '353 PS' },
            { label: 'Max. torque (Nm)', value: '500 Nm' },
            { label: 'Max. output per liter (PS/l)', value: '118.0 PS/l' }
          ]
        },
        {
          key: 'performance',
          title: 'Performance',
          specs: [
            { label: 'Top speed', value: '248 km/h' },
            { label: 'Acceleration 0-100 km/h', value: '5.7 s' }
          ]
        },
        {
          key: 'consumption',
          title: 'Consumption/Emissions',
          specs: [
            { label: 'NOx emissions', value: '21.0 mg/km' }
          ]
        },
        {
          key: 'wltp',
          title: 'Consumption/Emissions WLTP', 
          specs: [
            { label: 'Fuel consumption combined* (model range)', value: '11,6 – 10,7 l/100 km' },
            { label: 'Fuel consumption low (model range)', value: '16,6 – 15,6 l/100 km' },
            { label: 'Fuel consumption medium (model range)', value: '11,7 – 10,7 l/100 km' },
            { label: 'Fuel consumption high (model range)', value: '9,9 – 9,0 l/100 km' },
            { label: 'Fuel consumption extra-high (model range)', value: '11,3 – 10,2 l/100 km' },
            { label: 'CO2 emissions combined* (model range)', value: '265 – 242 g/km' }
          ]
        },
        {
          key: 'sound',
          title: 'Sound level (type approved based on UN-R 51)',
          specs: [
            { label: 'Sound level of stationary vehicle', value: '81 dB(A)' },
            { label: 'Sound level of stationary vehicle (rpm)', value: '3,750 1/min' },
            { label: 'Sound level of passing vehicle', value: '69 dB(A)' }
          ]
        },
        {
          key: 'body',
          title: 'Body',
          specs: [
            { label: 'Length', value: '4,930 mm' },
            { label: 'Width (mirrors folded)', value: '1,997 mm' },
            { label: 'Width (including mirrors)', value: '2,194 mm' },
            { label: 'Height', value: '1,659 mm' },
            { label: 'Wheelbase', value: '2,895 mm' },
            { label: 'Unladen weight (DIN)', value: '2,085 kg'},
            { label: 'Maximum payload', value: '735 kg' },
            
          ]
        },
        {
          key: 'capacities',
          title: 'Capacities',
          specs: [
            { label: 'Luggage compartment volume, rear', value: '554  litres' },
            { label: 'Luggage compartment volume', value: '592 litres' },
            { label: 'Luggage compartment volume (with seats folded)', value: '1,502 litres' }
          ]
        }
      ]
    }
  }
];



; (function () {
  var extensions = {
    'Bot Rush': {
      percent_vehicle: 0.00,
      percent_bot: 0.60,
      percent_air: 0.05,
      percent_naval: 0.35,
      percent_orbital: 0.00,
      metal_drain_check: 0.3,
      energy_drain_check: 0.3,
      metal_demand_check: 0.72,
      energy_demand_check: 0.4,
      neural_data_mod: 2.0,
      adv_eco_mod: 2,
      adv_eco_mod_alone: 0.85
    },
    'Advanced Rush': {
      percent_vehicle: 0.50,
      percent_bot: 0.25,
      percent_air: 0.2,
      percent_naval: 0.05,
      percent_orbital: 0.00,
      metal_drain_check: 0.3,
      energy_drain_check: 0.3,
      metal_demand_check: 0.72,
      energy_demand_check: 0.4,
      adv_eco_mod: 0.25,
      adv_eco_mod_alone: 0.1
    },
    'Turtle': {
      percent_vehicle: 0.20,
      percent_bot: 0.05,
      percent_air: 0.25,
      percent_naval: 0.25,
      percent_orbital: 0.25,
      metal_drain_check: 0.6,
      energy_drain_check: 1.5,
      metal_demand_check: 0.72,
      energy_demand_check: 1.0,
      neural_data_mod: 0.0,
      adv_eco_mod: 0.25,
      adv_eco_mod_alone: 0.1
    },
    'Brad Rush': {
      percent_vehicle: 0.05,
      percent_bot: 0.60,
      percent_air: 0.25,
      percent_naval: 0.05,
      percent_orbital: 0.05,
      metal_drain_check: 0.1,
      energy_drain_check: 0.1,
      metal_demand_check: 0.1,
      energy_demand_check: 0.1
    },
    'Wandering Hazard': {
      metal_drain_check: 10.0,
      energy_drain_check: 0.01,
      neural_data_mod: 1.0
    },
    'Extreme Low Metal Games': {
      metal_drain_check: 0.12
    },
    'Land/Naval': {
      percent_vehicle: 0.34,
      percent_bot: 0.15,
      percent_air: 0.01,
      percent_naval: 0.49,
      percent_orbital: 0.01
    },
    'Air': {
      percent_vehicle: 0.01,
      percent_bot: 0.01,
      percent_air: 0.96,
      percent_naval: 0.01,
      percent_orbital: 0.01
    },
    'Orbital': {
      percent_vehicle: 0.01,
      percent_bot: 0.01,
      percent_air: 0.01,
      percent_naval: 0.01,
      percent_orbital: 0.96
    },
    'Legonis Machina (land/air)': {
      percent_land: 0.55,
      percent_air: 0.35,
      percent_naval: 0.05,
      percent_orbital: 0.05,
      metal_drain_check: 0.75,
      energy_drain_check: 0.85,
      metal_demand_check: 0.75,
      energy_demand_check: 0.85,
      micro_type: 2,
      go_for_the_kill: true,
      neural_data_mod: 1
    },
    'Foundation (air/naval)': {
      percent_land: 0.05,
      percent_orbital: 0.05,
      percent_air: 0.55,
      percent_naval: 0.35,
      metal_drain_check: 0.75,
      energy_drain_check: 0.85,
      metal_demand_check: 0.75,
      energy_demand_check: 0.85
    },
    'Synchronous (balanced)': {
      percent_land: 0.3,
      percent_air: 0.3,
      percent_naval: 0.05,
      percent_orbital: 0.35,
      metal_drain_check: 0.75,
      energy_drain_check: 0.85,
      metal_demand_check: 0.75,
      energy_demand_check: 0.85
    },
    'Revenants (orbital)': {
      percent_land: 0.15,
      percent_air: 0.15,
      percent_naval: 0.1,
      percent_orbital: 0.6,
      metal_drain_check: 0.75,
      energy_drain_check: 0.85,
      metal_demand_check: 0.75,
      energy_demand_check: 0.85
    },
    /*
    'Low Metal Drain': {
      metal_drain_check: 0.01
    },
    'Low Energy Drain': {
      energy_drain_check: 0.01
    },
    'Low Metal Demand': {
      metal_demand_check: 0.01
    },
    'Low Energy Demand': {
      energy_demand_check: 0.01
    },
    'Low Drain': {
      metal_drain_check: 0.01,
      energy_drain_check: 0.01
    },
    'Low Demand': {
      metal_demand_check: 0.01,
      energy_demand_check: 0.01
    },
    'High Drain (Never Build Factories)': {
      metal_drain_check: 2.0,
      energy_drain_check: 2.0
    },
    'High Demand': {
      metal_demand_check: 2.00,
      energy_demand_check: 2.00
    },
    'Low Metal (Rush)': {
      metal_drain_check: 0.01,
      metal_demand_check: 0.01
    },
    'Low Energy (Rush)': {
      energy_drain_check: 0.01,
      energy_demand_check: 0.01
    },
    'High Metal (Rarely Build Factories)': {
      metal_drain_check: 2.0,
      metal_demand_check: 2.0
    },
    'High Energy (Poor Turtle)': {
      energy_drain_check: 2.0,
      energy_demand_check: 2.0
    },
    */
  }

  var baseline = model.aiPersonalities().Absurd || {
    percent_vehicle: 0.45,
    percent_bot: 0.25,
    percent_air: 0.2,
    percent_naval: 0.05,
    percent_orbital: 0.05,
    personality_tags:
      [
        "Vanilla",
        "PreventsWaste"
      ],
    metal_drain_check: 0.54,
    energy_drain_check: 0.65,
    metal_demand_check: 0.71,
    energy_demand_check: 0.8,
    micro_type: 2,
    go_for_the_kill: true,
    priority_scout_metal_spots: true,
    enable_commander_danger_responses: true,
    neural_data_mod: 1.0,
    adv_eco_mod: 1.3,
    adv_eco_mod_alone: 0.85,
    fabber_to_factory_ratio_basic: 1.0,
    fabber_to_factory_ratio_advanced: 1.0,
    fabber_alone_on_planet_mod: 2.0,
    basic_to_advanced_factory_ratio: 0,
    factory_alone_on_planet_mod: 0.5,
    min_basic_fabbers: 2,
    max_basic_fabbers: 6,
    min_advanced_fabbers: 3,
    max_advanced_fabbers: 20
  }
  baseline.personality_tags = [
    "Vanilla",
    "PreventsWaste"
  ]


  Object.keys(extensions).forEach(function (name) {
    extensions[name] = _.extend(JSON.parse(JSON.stringify(baseline)), extensions[name])
    // extensions[name].personality_tags = ["Vanilla", "PreventsWaste"]
    extensions[name].name = name
    extensions[name].display_name = name
  })

  model.aiPersonalities(_.extend(model.aiPersonalities(), extensions))
})()

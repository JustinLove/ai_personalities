# AI Personalities

Adds several new choices to the lobby AI settings (vanilla: Normal-Absurd)  Settings are based on Absurd where otherwise don't-care.

### Economic Variants

- Bot Rush
- Advanced Rush - Crossed with the bot rush eco to make the adv factory look more oafordable.  Also goes obital (sometimes at the same time), and then spends most of it's resources trying to build SXX.  Could probably do with more tuning.
- Turtle - Not a very good turtle, but it's really shy about attacking.
- Brad Rush - Build lots of factories and run them *hard*, bro.
- Wandering Hazard - Never build anything, except maybe some mex.
- Extreme Low Metal Games - For use with Minimal Mex, or Finite Metal with 5x

### Extreme Unit Preference

The AI will often build one of each factory no matter how low you set the preference.

- Land/Naval - Not much pointing separating them since it's context dependent.
- Air - Note: the AI sometimes never bothers to attack with it's bombers.
- Orbital - Note: the AI still needs to meet a number of conditions to build a launcher before this has any real effect.

### Galactic War Series

- Legonis Machina (land/air)
- Foundation (air/naval)
- Synchronous (balanced)
- Revenants (orbital)

## Personality Development

Trying out combinations can be pretty mesmerizing, but I really need to get on to other mods.  Comments and pull requests with new and improved personalities are very welcome.  I've really only tested on small random 2-player planets so far, often in 4-player FFA.

I highly recommend manually running your local server with --http and using the sim_faster call to accelerate the first few minutes.  Maybe more if you have a faster computer than I do ;^)

On unix-likes this is handy, and the windows equivalent should be easy:

    #!/bin/bash
    for i in {1..20}
    do
      curl http://localhost:8080/api/sim_faster
    done

## Parameters

### Unit Preference

The AI often builds one of each factory regardless of preference, and only when all it's rules for sensible economy management are met - event at 100% orbital, you can't get it to go orbital-first.

### Economy Management

There are a bunch of economic extremes commented out in the code; most are fairly uninteresting.

Sorian said:

> *_drain_check is used by CanAffordPotentialDrain, which checks to make sure the AI has enough economy to support a unit that uses economy before it starts building it. (ie it has enough income to support another factory or fabber)
> 
> *_demand_check is used by CanAffordBuildDemand to ensure the AI has the economy to support the construction of the build item either from storage or from having enough income per second. (ie it has enough income to support building a pelter without going to far negative)

From my observations, low drain helps the AI build factories, and high drain encourages it expand it's economy production.

Low demand will quickly tank the economy; high demand will maintain efficiency but leave factories idle and often waste resources.

Any one low value will be held in check by the other factors and not cause too much trouble.

Energy seems to have some other stopgaps that keep it from getting negative, but a low-energy AI will be in trouble if it gets to high-energy superweapons like nuke launchers and holtkins.

### Misc Factors

Haven't played with these much at all.  Low `neural_data_mod` is conservative, and high is aggressive.  `micro_type` has this in `media/ui/main/game/new_game/js/ai.js`

    micro_type 0:none | 1:platoon | 2:squad,

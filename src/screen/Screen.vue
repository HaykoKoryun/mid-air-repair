<template>
  <div id="screen">
    <Game/>
  </div>
</template>
<script>
const airconsole = new AirConsole();

import {Howl, Howler} from 'howler';

import Holding from './states/holding';
import Game from './states/game';

export default
{ name: 'screen',
  components: 
  { Holding
  , Game
  }
, created()
  { const instance = this;
    airconsole.onMessage = (from, data) =>
    { this.message = data
    }

    var sound = new Howl({
      src: ['/assets/bg.mp3'],
      autoplay: true,
      loop: true,
      volume: 0.5
    });
  }
, data: () => (
  { message: 'placeholder'
  })
}
</script>

<style>
#screen
{
  background-color: #fff;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div id="wrapper">
    <canvas
      id="canvas"
      ref="canvas"
    />
  </div>
</template>
<script>
import * as PIXI from 'pixi.js'
import planck from 'planck-js'

import wheelURL from './wheel.png';
import bodyURL from './body.png';

export default
{ name: 'game'
, mounted()
  { const instance = this;
    const app = new PIXI.Application(
    { view: instance.$refs.canvas
    });

    app.loader.add('body', bodyURL);
    app.loader.add('wheel', wheelURL);

    let body;
    let wheels =
    { front:
      { left: null
      , right: null
      }
    , back:
      { left: null
      , right: null
      }
    };

    app.loader.load((loader, resources) =>
    { body = new PIXI.Sprite(resources.body.texture);

      body.scale.x = 0.5;
      body.scale.y = 0.5;

      const fl = new PIXI.Sprite(resources.wheel.texture);
      const fr = new PIXI.Sprite(resources.wheel.texture);
      const bl = new PIXI.Sprite(resources.wheel.texture);
      const br = new PIXI.Sprite(resources.wheel.texture);

      const wheels = [fl, fr, bl, br];
      const positions = [
        { x: -270 
        , y: 200
        }
      , { x: -270 
        , y: 200
        }
      , { x: 250 
        , y: 200
        }
      , { x: 250 
        , y: 200
        }
      ];

      for(let i = 0; i < wheels.length; ++i)
      { const wheel = wheels[i];
        const position = positions[i];

        wheel.anchor.x = 0.5;
        wheel.anchor.y = 0.5;

        wheel.x = position.x;
        wheel.y = position.y;

        body.addChild(wheel);
      }

      body.x = app.renderer.width / 2;
      body.y = app.renderer.height / 2;
      body.anchor.x = 0.5;
      body.anchor.y = 0.5;

      app.stage.addChild(body);

      app.ticker.add(() => {
        wheels.forEach(wheel =>
        { wheel.rotation += 0.1;
        });
      });
});
  }
}
</script>
<style scoped>

</style>
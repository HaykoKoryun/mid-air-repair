<template>
  <div id="controller">
    <div @click="test">Send Message</div>
  </div>
</template>

<script>
const airconsole = new AirConsole();
airconsole.setOrientation(AirConsole.ORIENTATION_LANDSCAPE);

export default
{ name: 'controller'
, components:
  {
  }
, mounted()
  { const instance = this;

    airconsole.onMessage = (from, data) =>
    {
    };
  }
, methods:
  { test: () =>
    { airconsole.message(AirConsole.SCREEN, "How are you?");
    }
  }
}
</script>

<style>
</style>

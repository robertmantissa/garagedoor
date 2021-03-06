var rpio = require('rpio');
function open(door, callback)
{
    console.log("Open door " + door.doorNumber + " gpio " + door.openGpio);
    return toggleGpio(door.openGpio);
}

function close(door, callback)
{
    console.log("Close door " + door.doorNumber + " gpio " + door.closeGpio);
    return toggleGpio(door.closeGpio);
}

function stop(door, callback)
{
    console.log("Stop door " + door.doorNumber + " gpio " + door.stopGpio);
    return toggleGpio(door.stopGpio);
}

function isOpen(door, callback)
{
      console.log("Read door " + door.doorNumber + " gpio " + door.switchGpio);
      return readGpio(door.switchGpio);
}


function toggleGpio(gpio)
{
  /*
   * Set the initial state to low.  The state is set prior to the pin becoming
   * active, so is safe for devices which require a stable setup.
   */
    rpio.open(gpio, rpio.OUTPUT, rpio.LOW);
    rpio.write(gpio, rpio.LOW);
    rpio.msleep(500);
    rpio.write(gpio, rpio.HIGH);
    return true;
}

function readGpio(gpio)
{
    rpio.open(pin, rpio.INPUT);
    return rpio.read(pin)
}

exports.open = open;
exports.close = close;
exports.stop = stop;
exports.isOpen = isOpen;
const byrobot_base = require('./byrobot_base');


/***************************************************************************************
 *  BYROBOT Coding Drone
 ***************************************************************************************/

class byrobot_drone_8 extends byrobot_base
{
    /*
        생성자
    */
    constructor()
    {
        super();

        this.targetDevice     = 0x10;
        this.targetDeviceID   = '0F0701';
        this.arrayRequestData = [0x40, 0x44, 0x45]; // State, Motion, Range
    }
}

module.exports = new byrobot_drone_8();

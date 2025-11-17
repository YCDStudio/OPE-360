var APP_DATA = {
  "scenes": [
    {
      "id": "0-ope_360_01_v3",
      "name": "OPE_360_01_v3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4759680752699378,
          "pitch": -0.022483222420369486,
          "rotation": 0,
          "target": "2-ope_360_03_v3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ope_360_02_v3",
      "name": "OPE_360_02_v3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.019839686526197,
          "pitch": 0.041769206908570666,
          "rotation": 0,
          "target": "2-ope_360_03_v3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ope_360_03_v3",
      "name": "OPE_360_03_v3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9639211017669016,
          "pitch": 0.010864406128781923,
          "rotation": 0,
          "target": "1-ope_360_02_v3"
        },
        {
          "yaw": -1.5094394725864717,
          "pitch": 0.046415387805167185,
          "rotation": 0,
          "target": "0-ope_360_01_v3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "OPE-360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
